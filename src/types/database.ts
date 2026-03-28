// Auto-generated types — regenerate after schema changes:
//   supabase gen types typescript --project-id [ref] > src/types/database.ts

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          display_name: string | null
          email: string | null
          subscription_tier: string
          subscription_status: string
          stripe_customer_id: string | null
          study_streak: number
          total_questions_answered: number
          created_at: string
        }
        Insert: {
          id: string
          display_name?: string | null
          email?: string | null
          subscription_tier?: string
          subscription_status?: string
          stripe_customer_id?: string | null
          study_streak?: number
          total_questions_answered?: number
        }
        Update: {
          display_name?: string | null
          email?: string | null
          subscription_tier?: string
          subscription_status?: string
          stripe_customer_id?: string | null
          study_streak?: number
          total_questions_answered?: number
        }
      }
      questions: {
        Row: {
          id: string
          stem: string
          options: QuestionOption[]
          explanation: string
          incorrect_explanations: Record<string, string> | null
          content_category: 'I' | 'II' | 'III'
          subcategory: string
          big_nine: string[]
          difficulty: 'recall' | 'application' | 'analysis' | 'clinical_reasoning'
          tags: string[] | null
          clinical_setting: string | null
          reference_sources: string[] | null
          is_published: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['questions']['Row'], 'id' | 'created_at' | 'is_published'> & {
          id?: string
          is_published?: boolean
        }
        Update: Partial<Database['public']['Tables']['questions']['Insert']>
      }
      question_attempts: {
        Row: {
          id: string
          user_id: string
          question_id: string
          selected_answer: string
          is_correct: boolean
          time_spent_seconds: number | null
          mode: 'study' | 'exam' | 'quiz' | 'flashcard'
          session_id: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['question_attempts']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['question_attempts']['Insert']>
      }
      exam_sessions: {
        Row: {
          id: string
          user_id: string
          mode: 'exam_simulation' | 'custom_quiz'
          question_ids: string[]
          answers: Record<string, string> | null
          score: number | null
          total_questions: number
          time_spent_seconds: number | null
          category_scores: Record<string, { correct: number; total: number }> | null
          big_nine_scores: Record<string, { correct: number; total: number }> | null
          completed_at: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['exam_sessions']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['exam_sessions']['Insert']>
      }
      srs_cards: {
        Row: {
          id: string
          user_id: string
          question_id: string
          ease_factor: number
          interval_days: number
          repetitions: number
          next_review_at: string
          last_reviewed_at: string | null
        }
        Insert: Omit<Database['public']['Tables']['srs_cards']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['srs_cards']['Insert']>
      }
      flashcards: {
        Row: {
          id: string
          front: string
          back: string
          category: string
          subcategory: string | null
          tags: string[] | null
          is_published: boolean
        }
        Insert: Omit<Database['public']['Tables']['flashcards']['Row'], 'id' | 'is_published'> & {
          id?: string
          is_published?: boolean
        }
        Update: Partial<Database['public']['Tables']['flashcards']['Insert']>
      }
      study_content: {
        Row: {
          id: string
          title: string
          content_category: string
          subcategory: string
          big_nine: string[] | null
          content_markdown: string
          key_terms: Array<{ term: string; definition: string }> | null
          sort_order: number
          is_published: boolean
        }
        Insert: Omit<Database['public']['Tables']['study_content']['Row'], 'id' | 'is_published' | 'sort_order'> & {
          id?: string
          is_published?: boolean
          sort_order?: number
        }
        Update: Partial<Database['public']['Tables']['study_content']['Insert']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}

export interface QuestionOption {
  id: string
  text: string
  isCorrect: boolean
}

export type Question = Database['public']['Tables']['questions']['Row']
export type Profile = Database['public']['Tables']['profiles']['Row']
export type QuestionAttempt = Database['public']['Tables']['question_attempts']['Row']
export type ExamSession = Database['public']['Tables']['exam_sessions']['Row']
export type SRSCard = Database['public']['Tables']['srs_cards']['Row']
export type Flashcard = Database['public']['Tables']['flashcards']['Row']
export type StudyContent = Database['public']['Tables']['study_content']['Row']
