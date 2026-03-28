import { useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/useAuth'
import { calculateSRS } from '@/lib/srs'
import type { StudyMode } from '@/types/question'

export function useAttempts() {
  const { user } = useAuth()

  const recordAttempt = useCallback(
    async (params: {
      questionId: string
      selectedAnswer: string
      isCorrect: boolean
      timeSpentSeconds?: number
      mode: StudyMode
      sessionId?: string
    }) => {
      if (!supabase || !user) return

      // Record the attempt
      await supabase.from('question_attempts').insert({
        user_id: user.id,
        question_id: params.questionId,
        selected_answer: params.selectedAnswer,
        is_correct: params.isCorrect,
        time_spent_seconds: params.timeSpentSeconds ?? null,
        mode: params.mode,
        session_id: params.sessionId ?? null,
      } as never)

      // Update SRS state
      const { data: existing } = await supabase
        .from('srs_cards')
        .select('ease_factor, interval_days, repetitions')
        .eq('user_id', user.id)
        .eq('question_id', params.questionId)
        .single()

      const quality = params.isCorrect ? 4 : 1
      const ef = (existing as { ease_factor: number } | null)?.ease_factor ?? 2.5
      const interval = (existing as { interval_days: number } | null)?.interval_days ?? 1
      const reps = (existing as { repetitions: number } | null)?.repetitions ?? 0
      const updated = calculateSRS(params.isCorrect, quality, ef, interval, reps)

      await supabase.from('srs_cards').upsert(
        {
          user_id: user.id,
          question_id: params.questionId,
          ease_factor: updated.easeFactor,
          interval_days: updated.interval,
          repetitions: updated.repetitions,
          next_review_at: updated.nextReview.toISOString(),
          last_reviewed_at: new Date().toISOString(),
        } as never,
        { onConflict: 'user_id,question_id' },
      )

      // Update profile stats via RPC
      await supabase.rpc('increment_questions_answered' as never, { p_user_id: user.id } as never)
      await supabase.rpc('update_study_streak' as never, { p_user_id: user.id } as never)
    },
    [user],
  )

  return { recordAttempt }
}
