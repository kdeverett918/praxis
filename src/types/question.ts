export type ContentCategory = 'I' | 'II' | 'III'
export type Difficulty = 'recall' | 'application' | 'analysis' | 'clinical_reasoning'
export type StudyMode = 'study' | 'exam' | 'quiz' | 'flashcard'

export type BigNineArea =
  | 'speech_sound'
  | 'fluency'
  | 'voice_resonance'
  | 'receptive_expressive'
  | 'social_communication'
  | 'cognitive_communication'
  | 'aac'
  | 'hearing'
  | 'feeding_swallowing'

export const BIG_NINE_LABELS: Record<BigNineArea, string> = {
  speech_sound: 'Speech Sound Production',
  fluency: 'Fluency',
  voice_resonance: 'Voice, Resonance & Motor Speech',
  receptive_expressive: 'Receptive & Expressive Language',
  social_communication: 'Social Communication / Pragmatics',
  cognitive_communication: 'Cognitive Communication',
  aac: 'AAC',
  hearing: 'Hearing',
  feeding_swallowing: 'Feeding & Swallowing',
}

export const CONTENT_CATEGORY_LABELS: Record<ContentCategory, string> = {
  I: 'Foundations & Professional Practice',
  II: 'Screening, Assessment, Eval & Dx',
  III: 'Treatment Planning & Implementation',
}

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  recall: 'Recall',
  application: 'Application',
  analysis: 'Analysis',
  clinical_reasoning: 'Clinical Reasoning',
}
