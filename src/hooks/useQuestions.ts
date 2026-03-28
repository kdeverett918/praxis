import { useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import type { Question } from '@/types/database'
import type { ContentCategory, BigNineArea, Difficulty } from '@/types/question'

interface QuestionFilters {
  categories?: ContentCategory[]
  bigNine?: BigNineArea[]
  difficulties?: Difficulty[]
  limit?: number
}

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchQuestions = useCallback(async (filters: QuestionFilters = {}) => {
    if (!supabase) {
      setError('Supabase not configured')
      return
    }

    setLoading(true)
    setError(null)

    let query = supabase
      .from('questions')
      .select('*')
      .eq('is_published', true)

    if (filters.categories?.length) {
      query = query.in('content_category', filters.categories)
    }

    if (filters.difficulties?.length) {
      query = query.in('difficulty', filters.difficulties)
    }

    if (filters.bigNine?.length) {
      query = query.overlaps('big_nine', filters.bigNine)
    }

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    // Randomize order
    query = query.order('created_at', { ascending: false })

    const { data, error: fetchError } = await query

    if (fetchError) {
      setError(fetchError.message)
    } else {
      setQuestions((data ?? []) as Question[])
    }

    setLoading(false)
  }, [])

  const fetchExamQuestions = useCallback(async () => {
    // Fetch 132 questions distributed across categories (44 each)
    if (!supabase) return

    setLoading(true)
    const allQuestions: Question[] = []

    for (const category of ['I', 'II', 'III'] as const) {
      const { data } = await supabase
        .from('questions')
        .select('*')
        .eq('is_published', true)
        .eq('content_category', category)
        .limit(44)

      if (data) allQuestions.push(...(data as Question[]))
    }

    // Shuffle
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j]!, allQuestions[i]!]
    }

    setQuestions(allQuestions)
    setLoading(false)
  }, [])

  return { questions, loading, error, fetchQuestions, fetchExamQuestions }
}
