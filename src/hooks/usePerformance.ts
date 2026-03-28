import { useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import type { BigNineArea } from '@/types/question'

interface AttemptRow {
  is_correct: boolean
  questions: { content_category: string; big_nine: string[] } | null
}

interface ExamRow {
  id: string
  score: number | null
  total_questions: number
  completed_at: string | null
}

interface PerformanceData {
  totalAnswered: number
  accuracy: number
  categoryScores: Record<string, { correct: number; total: number; percentage: number }>
  bigNineScores: Partial<Record<BigNineArea, { correct: number; total: number; percentage: number }>>
  recentExams: Array<{ id: string; score: number; total: number; completedAt: string }>
  studyStreak: number
  questionsToday: number
}

export function usePerformance() {
  const { user, profile } = useAuth()
  const [data, setData] = useState<PerformanceData | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchPerformance = useCallback(async () => {
    if (!supabase || !user) return

    setLoading(true)

    // Fetch all attempts
    const { data: rawAttempts } = await supabase
      .from('question_attempts')
      .select('is_correct, questions!inner(content_category, big_nine)')
      .eq('user_id', user.id)

    const attempts = (rawAttempts ?? []) as unknown as AttemptRow[]

    // Fetch recent exams
    const { data: rawExams } = await supabase
      .from('exam_sessions')
      .select('id, score, total_questions, completed_at')
      .eq('user_id', user.id)
      .not('completed_at', 'is', null)
      .order('completed_at', { ascending: false })
      .limit(10)

    const exams = (rawExams ?? []) as unknown as ExamRow[]

    // Today's questions
    const today = new Date().toISOString().split('T')[0]
    const { count: todayCount } = await supabase
      .from('question_attempts')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .gte('created_at', `${today}T00:00:00`)

    const totalAnswered = attempts.length
    const totalCorrect = attempts.filter((a) => a.is_correct).length

    // Category scores
    const categoryScores: Record<string, { correct: number; total: number; percentage: number }> = {}
    for (const attempt of attempts) {
      if (!attempt.questions) continue
      const key = attempt.questions.content_category
      if (!categoryScores[key]) categoryScores[key] = { correct: 0, total: 0, percentage: 0 }
      categoryScores[key].total++
      if (attempt.is_correct) categoryScores[key].correct++
    }
    for (const s of Object.values(categoryScores)) {
      s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
    }

    // Big Nine scores
    const bigNineScores: Partial<Record<BigNineArea, { correct: number; total: number; percentage: number }>> = {}
    for (const attempt of attempts) {
      if (!attempt.questions?.big_nine) continue
      for (const area of attempt.questions.big_nine) {
        const key = area as BigNineArea
        if (!bigNineScores[key]) bigNineScores[key] = { correct: 0, total: 0, percentage: 0 }
        bigNineScores[key]!.total++
        if (attempt.is_correct) bigNineScores[key]!.correct++
      }
    }
    for (const s of Object.values(bigNineScores)) {
      if (s) s.percentage = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
    }

    setData({
      totalAnswered,
      accuracy: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      categoryScores,
      bigNineScores,
      recentExams: exams.map((e) => ({
        id: e.id,
        score: e.score ?? 0,
        total: e.total_questions,
        completedAt: e.completed_at!,
      })),
      studyStreak: profile?.study_streak ?? 0,
      questionsToday: todayCount ?? 0,
    })

    setLoading(false)
  }, [user, profile])

  return { data, loading, fetchPerformance }
}
