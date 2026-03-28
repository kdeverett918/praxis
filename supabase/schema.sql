-- PraxisPrep Database Schema
-- Run this in the Supabase SQL Editor to set up the database

-- ============================================
-- PROFILES (extends Supabase auth.users)
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  display_name TEXT,
  email TEXT,
  subscription_tier TEXT NOT NULL DEFAULT 'free' CHECK (subscription_tier IN ('free', 'starter', 'pro', 'pro_ai', 'institutional')),
  subscription_status TEXT NOT NULL DEFAULT 'active' CHECK (subscription_status IN ('active', 'cancelled', 'expired', 'trialing')),
  stripe_customer_id TEXT,
  study_streak INTEGER NOT NULL DEFAULT 0,
  last_study_date DATE,
  total_questions_answered INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- QUESTIONS
-- ============================================
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stem TEXT NOT NULL,
  options JSONB NOT NULL,
  explanation TEXT NOT NULL,
  incorrect_explanations JSONB,
  content_category TEXT NOT NULL CHECK (content_category IN ('I', 'II', 'III')),
  subcategory TEXT NOT NULL,
  big_nine TEXT[] NOT NULL DEFAULT '{}',
  difficulty TEXT NOT NULL CHECK (difficulty IN ('recall', 'application', 'analysis', 'clinical_reasoning')),
  tags TEXT[] DEFAULT '{}',
  clinical_setting TEXT,
  reference_sources TEXT[] DEFAULT '{}',
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_questions_category ON questions (content_category);
CREATE INDEX idx_questions_difficulty ON questions (difficulty);
CREATE INDEX idx_questions_published ON questions (is_published) WHERE is_published = true;
CREATE INDEX idx_questions_big_nine ON questions USING GIN (big_nine);

-- ============================================
-- QUESTION ATTEMPTS (powers spaced repetition + analytics)
-- ============================================
CREATE TABLE IF NOT EXISTS question_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent_seconds INTEGER,
  mode TEXT NOT NULL CHECK (mode IN ('study', 'exam', 'quiz', 'flashcard')),
  session_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_attempts_user ON question_attempts (user_id);
CREATE INDEX idx_attempts_question ON question_attempts (question_id);
CREATE INDEX idx_attempts_session ON question_attempts (session_id);
CREATE INDEX idx_attempts_user_created ON question_attempts (user_id, created_at DESC);

-- ============================================
-- EXAM SESSIONS
-- ============================================
CREATE TABLE IF NOT EXISTS exam_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  mode TEXT NOT NULL CHECK (mode IN ('exam_simulation', 'custom_quiz')),
  question_ids UUID[] NOT NULL DEFAULT '{}',
  answers JSONB DEFAULT '{}',
  score INTEGER,
  total_questions INTEGER NOT NULL,
  time_spent_seconds INTEGER,
  category_scores JSONB,
  big_nine_scores JSONB,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_sessions_user ON exam_sessions (user_id);
CREATE INDEX idx_sessions_completed ON exam_sessions (user_id, completed_at DESC);

-- ============================================
-- SPACED REPETITION STATE (SM-2)
-- ============================================
CREATE TABLE IF NOT EXISTS srs_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  ease_factor FLOAT NOT NULL DEFAULT 2.5,
  interval_days INTEGER NOT NULL DEFAULT 1,
  repetitions INTEGER NOT NULL DEFAULT 0,
  next_review_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_reviewed_at TIMESTAMPTZ,
  UNIQUE(user_id, question_id)
);

CREATE INDEX idx_srs_review ON srs_cards (user_id, next_review_at);

-- ============================================
-- FLASHCARDS
-- ============================================
CREATE TABLE IF NOT EXISTS flashcards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_flashcards_category ON flashcards (category);

-- ============================================
-- FLASHCARD PROGRESS
-- ============================================
CREATE TABLE IF NOT EXISTS flashcard_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  flashcard_id UUID NOT NULL REFERENCES flashcards(id) ON DELETE CASCADE,
  ease_factor FLOAT NOT NULL DEFAULT 2.5,
  interval_days INTEGER NOT NULL DEFAULT 1,
  repetitions INTEGER NOT NULL DEFAULT 0,
  next_review_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, flashcard_id)
);

-- ============================================
-- STUDY CONTENT (review outlines)
-- ============================================
CREATE TABLE IF NOT EXISTS study_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content_category TEXT NOT NULL CHECK (content_category IN ('I', 'II', 'III')),
  subcategory TEXT NOT NULL,
  big_nine TEXT[] DEFAULT '{}',
  content_markdown TEXT NOT NULL,
  key_terms JSONB,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- PAYMENTS (Stripe records)
-- ============================================
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  stripe_session_id TEXT UNIQUE NOT NULL,
  stripe_payment_intent TEXT,
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'usd',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  tier_purchased TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payments_user ON payments (user_id);

-- ============================================
-- DIAGNOSTIC LEADS
-- ============================================
CREATE TABLE IF NOT EXISTS diagnostic_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  exam_date DATE,
  source TEXT NOT NULL DEFAULT 'diagnostic_quiz',
  diagnostic_score INTEGER,
  readiness_band TEXT,
  weakest_area TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_diagnostic_leads_email ON diagnostic_leads (email);

-- ============================================
-- ROW-LEVEL SECURITY
-- ============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE srs_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE diagnostic_leads ENABLE ROW LEVEL SECURITY;

-- Users can read and update their own profile
CREATE POLICY "Users read own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Users own their attempt data
CREATE POLICY "Users read own attempts" ON question_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own attempts" ON question_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users own their exam sessions
CREATE POLICY "Users read own sessions" ON exam_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own sessions" ON exam_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own sessions" ON exam_sessions FOR UPDATE USING (auth.uid() = user_id);

-- Users own their SRS state
CREATE POLICY "Users manage own srs" ON srs_cards FOR ALL USING (auth.uid() = user_id);

-- Users own their flashcard progress
CREATE POLICY "Users manage own flashcard progress" ON flashcard_progress FOR ALL USING (auth.uid() = user_id);

-- Users read own payments
CREATE POLICY "Users read own payments" ON payments FOR SELECT USING (auth.uid() = user_id);

-- Diagnostic leads can be created before signup
CREATE POLICY "Public insert diagnostic leads"
  ON diagnostic_leads
  FOR INSERT
  WITH CHECK (true);

-- Questions, flashcards, and study content are readable by all authenticated users
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcards ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read questions" ON questions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated read flashcards" ON flashcards FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated read content" ON study_content FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Update study streak
CREATE OR REPLACE FUNCTION update_study_streak(p_user_id UUID)
RETURNS void AS $$
DECLARE
  last_date DATE;
  current_streak INTEGER;
BEGIN
  SELECT last_study_date, study_streak INTO last_date, current_streak
  FROM profiles WHERE id = p_user_id;

  IF last_date = CURRENT_DATE THEN
    RETURN; -- Already studied today
  ELSIF last_date = CURRENT_DATE - 1 THEN
    UPDATE profiles SET
      study_streak = current_streak + 1,
      last_study_date = CURRENT_DATE,
      updated_at = NOW()
    WHERE id = p_user_id;
  ELSE
    UPDATE profiles SET
      study_streak = 1,
      last_study_date = CURRENT_DATE,
      updated_at = NOW()
    WHERE id = p_user_id;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Increment total questions answered
CREATE OR REPLACE FUNCTION increment_questions_answered(p_user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE profiles SET
    total_questions_answered = total_questions_answered + 1,
    updated_at = NOW()
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
