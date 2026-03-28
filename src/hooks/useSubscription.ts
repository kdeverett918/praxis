import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { resolveBetaMode } from '@/lib/beta'
import { useSettingsStore } from '@/stores/settingsStore'

export type SubscriptionTier = 'free' | 'starter' | 'pro' | 'institutional' | 'pro_ai' | string

interface SubscriptionCounters {
  studyDate: string
  studyQuestionsToday: number
  examSimulationsCompleted: number
}

interface SubscriptionState {
  subscriptionTier: SubscriptionTier
  hasPaidAccess: boolean
  betaModeEnabled: boolean
  studyQuestionsToday: number
  remainingStudyQuestions: number
  examSimulationsCompleted: number
  canStudy: boolean
  canTakeExamSimulation: boolean
  recordStudyQuestion: () => void
  recordExamSimulation: () => void
  resetTodayStudyCount: () => void
}

const STUDY_LIMIT = 25
const EXAM_LIMIT = 1
const PAID_TIERS = new Set(['pro', 'institutional', 'pro_ai'])

function todayString() {
  return new Date().toISOString().split('T')[0] ?? ''
}

function storageKey(userId: string) {
  return `praxis-subscription:${userId}`
}

function defaultCounters(): SubscriptionCounters {
  return {
    studyDate: todayString(),
    studyQuestionsToday: 0,
    examSimulationsCompleted: 0,
  }
}

function readCounters(userId: string): SubscriptionCounters {
  if (typeof window === 'undefined') return defaultCounters()

  try {
    const raw = window.localStorage.getItem(storageKey(userId))
    if (!raw) return defaultCounters()

    const parsed = JSON.parse(raw) as Partial<SubscriptionCounters>
    const studyDate = typeof parsed.studyDate === 'string' ? parsed.studyDate : todayString()
    const studyQuestionsToday =
      typeof parsed.studyQuestionsToday === 'number' ? parsed.studyQuestionsToday : 0
    const examSimulationsCompleted =
      typeof parsed.examSimulationsCompleted === 'number' ? parsed.examSimulationsCompleted : 0

    return studyDate === todayString()
      ? { studyDate, studyQuestionsToday, examSimulationsCompleted }
      : { studyDate: todayString(), studyQuestionsToday: 0, examSimulationsCompleted }
  } catch {
    return defaultCounters()
  }
}

function writeCounters(userId: string, counters: SubscriptionCounters) {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(storageKey(userId), JSON.stringify(counters))
}

export function useSubscription(): SubscriptionState {
  const { user, profile } = useAuth()
  const betaModeEnabled = useSettingsStore((state) => state.betaModeEnabled)
  const betaMode = resolveBetaMode(betaModeEnabled)
  const userId = user?.id ?? 'anonymous'
  const subscriptionTier = profile?.subscription_tier ?? 'free'
  const hasPaidAccess = betaMode || PAID_TIERS.has(subscriptionTier)
  const [counters, setCounters] = useState<SubscriptionCounters>(() => readCounters(userId))

  useEffect(() => {
    setCounters(readCounters(userId))
  }, [userId])

  useEffect(() => {
    writeCounters(userId, counters)
  }, [counters, userId])

  const studyQuestionsToday = hasPaidAccess ? 0 : counters.studyQuestionsToday
  const examSimulationsCompleted = hasPaidAccess ? 0 : counters.examSimulationsCompleted

  const remainingStudyQuestions = useMemo(() => {
    if (hasPaidAccess) return Number.POSITIVE_INFINITY
    return Math.max(0, STUDY_LIMIT - studyQuestionsToday)
  }, [hasPaidAccess, studyQuestionsToday])

  const canStudy = hasPaidAccess || studyQuestionsToday < STUDY_LIMIT
  const canTakeExamSimulation = hasPaidAccess || examSimulationsCompleted < EXAM_LIMIT

  const recordStudyQuestion = () => {
    if (hasPaidAccess) return

    setCounters((current) => {
      const currentDate = todayString()
      const nextCount = current.studyDate === currentDate ? current.studyQuestionsToday + 1 : 1

      return {
        studyDate: currentDate,
        studyQuestionsToday: nextCount,
        examSimulationsCompleted: current.examSimulationsCompleted,
      }
    })
  }

  const recordExamSimulation = () => {
    if (hasPaidAccess) return

    setCounters((current) => ({
      studyDate: current.studyDate === todayString() ? current.studyDate : todayString(),
      studyQuestionsToday: current.studyDate === todayString() ? current.studyQuestionsToday : 0,
      examSimulationsCompleted: current.examSimulationsCompleted + 1,
    }))
  }

  const resetTodayStudyCount = () => {
    if (hasPaidAccess) return

    setCounters((current) => ({
      studyDate: todayString(),
      studyQuestionsToday: 0,
      examSimulationsCompleted: current.examSimulationsCompleted,
    }))
  }

  return {
    subscriptionTier,
    hasPaidAccess,
    betaModeEnabled: betaMode,
    studyQuestionsToday,
    remainingStudyQuestions,
    examSimulationsCompleted,
    canStudy,
    canTakeExamSimulation,
    recordStudyQuestion,
    recordExamSimulation,
    resetTodayStudyCount,
  }
}
