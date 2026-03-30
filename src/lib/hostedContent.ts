import { supabase } from '@/lib/supabase'
import type {
  Flashcard as FlashcardRow,
  Question as QuestionRow,
  QuestionOption,
  StudyContent as StudyContentRow,
} from '@/types/database'
import type { ContentCategory, Difficulty } from '@/types/question'

export interface HostedQuestion {
  id: string
  sourceId: string
  stem: string
  options: QuestionOption[]
  explanation: string
  incorrectExplanations: Record<string, string>
  contentCategory: ContentCategory
  subcategory: string
  bigNine: string[]
  difficulty: Difficulty
  tags: string[]
  clinicalSetting: string | null
  referenceSources: string[]
  isFree: boolean
}

export interface HostedFlashcard {
  id: string
  sourceId: string
  front: string
  back: string
  contentCategory: ContentCategory
  category: string
  subcategory: string
  tags: string[]
}

export interface StudyKeyTerm {
  term: string
  definition: string
}

export interface HostedStudyTopic {
  id: string
  slug: string
  title: string
  contentCategory: ContentCategory
  subcategory: string
  bigNine: string[]
  contentMarkdown: string
  keyTerms: StudyKeyTerm[]
  sortOrder: number
}

function requireSupabase() {
  if (!supabase) {
    throw new Error('Supabase not configured')
  }
  return supabase
}

function mapQuestionRow(row: QuestionRow): HostedQuestion {
  return {
    id: row.id,
    sourceId: row.source_id ?? row.id,
    stem: row.stem,
    options: row.options,
    explanation: row.explanation,
    incorrectExplanations: row.incorrect_explanations ?? {},
    contentCategory: row.content_category,
    subcategory: row.subcategory,
    bigNine: row.big_nine ?? [],
    difficulty: row.difficulty,
    tags: row.tags ?? [],
    clinicalSetting: row.clinical_setting,
    referenceSources: row.reference_sources ?? [],
    isFree: row.is_free,
  }
}

function mapFlashcardRow(row: FlashcardRow): HostedFlashcard {
  return {
    id: row.id,
    sourceId: row.source_id ?? row.id,
    front: row.front,
    back: row.back,
    contentCategory: row.content_category,
    category: row.category,
    subcategory: row.subcategory ?? '',
    tags: row.tags ?? [],
  }
}

function mapStudyTopicRow(row: StudyContentRow): HostedStudyTopic {
  return {
    id: row.id,
    slug: row.slug ?? row.id,
    title: row.title,
    contentCategory: row.content_category,
    subcategory: row.subcategory,
    bigNine: row.big_nine ?? [],
    contentMarkdown: row.content_markdown,
    keyTerms: row.key_terms ?? [],
    sortOrder: row.sort_order,
  }
}

export async function getPublishedQuestionBank(options: {
  freeOnly?: boolean
  categories?: ContentCategory[]
} = {}): Promise<HostedQuestion[]> {
  const client = requireSupabase()
  let query = client
    .from('questions')
    .select('*')
    .eq('is_published', true)
    .order('source_id', { ascending: true, nullsFirst: false })

  if (options.freeOnly) {
    query = query.eq('is_free', true)
  }

  if (options.categories?.length) {
    query = query.in('content_category', options.categories)
  }

  const { data, error } = await query

  if (error) {
    throw new Error(error.message)
  }

  return (data ?? []).map(mapQuestionRow)
}

export async function getPublishedFlashcards(): Promise<HostedFlashcard[]> {
  const client = requireSupabase()
  const { data, error } = await client
    .from('flashcards')
    .select('*')
    .eq('is_published', true)
    .order('source_id', { ascending: true, nullsFirst: false })

  if (error) {
    throw new Error(error.message)
  }

  return (data ?? []).map(mapFlashcardRow)
}

export async function getPublishedStudyTopics(): Promise<HostedStudyTopic[]> {
  const client = requireSupabase()
  const { data, error } = await client
    .from('study_content')
    .select('*')
    .eq('is_published', true)
    .order('content_category', { ascending: true })
    .order('sort_order', { ascending: true })

  if (error) {
    throw new Error(error.message)
  }

  return (data ?? []).map(mapStudyTopicRow)
}
