import { ALL_QUESTIONS } from '@/lib/questionBank'
import type { QuestionBankItem } from '@/lib/questionBank'
import { CONTENT_CATEGORY_LABELS } from '@/types/question'
import type { ContentCategory } from '@/types/question'

const DIAGNOSTIC_SESSION_KEY = 'praxis-diagnostic-session'
const DIAGNOSTIC_CATEGORIES: ContentCategory[] = ['I', 'II', 'III']

export interface DiagnosticCategoryScore {
  key: ContentCategory
  label: string
  correct: number
  total: number
  percentage: number
}

export interface DiagnosticFocusArea {
  label: string
  misses: number
  total: number
  percentage: number
}

export interface DiagnosticReadiness {
  label: 'On Track' | 'Needs Structure' | 'High Risk'
  summary: string
  cta: string
  recommendedTier: 'pro'
}

export interface DiagnosticResult {
  completedAt: string
  score: number
  correct: number
  total: number
  categoryScores: DiagnosticCategoryScore[]
  focusAreas: DiagnosticFocusArea[]
  readiness: DiagnosticReadiness
}

function shuffle<T>(items: T[]) {
  const next = [...items]
  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const current = next[index]
    next[index] = next[randomIndex]!
    next[randomIndex] = current!
  }
  return next
}

function formatFocusLabel(label: string) {
  return label
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function buildDiagnosticQuestions(total = 12): QuestionBankItem[] {
  const basePerCategory = Math.floor(total / DIAGNOSTIC_CATEGORIES.length)
  const remainder = total % DIAGNOSTIC_CATEGORIES.length

  const selected = DIAGNOSTIC_CATEGORIES.flatMap((category, index) => {
    const count = basePerCategory + (index < remainder ? 1 : 0)
    const pool = ALL_QUESTIONS.filter((question) => question.contentCategory === category)
    return shuffle(pool).slice(0, count)
  })

  return shuffle(selected).slice(0, total)
}

export function scoreDiagnosticQuiz(
  questions: QuestionBankItem[],
  answers: Record<string, string>,
): DiagnosticResult {
  let correct = 0
  const categoryScores: DiagnosticCategoryScore[] = DIAGNOSTIC_CATEGORIES.map((key) => ({
    key,
    label: CONTENT_CATEGORY_LABELS[key],
    correct: 0,
    total: 0,
    percentage: 0,
  }))
  const focusMap = new Map<string, { misses: number; total: number }>()

  for (const question of questions) {
    const selected = answers[question.id]
    const isCorrect = question.options.find((option) => option.id === selected)?.isCorrect ?? false

    if (isCorrect) {
      correct += 1
    }

    const categoryScore = categoryScores.find(
      (category) => category.key === question.contentCategory,
    )
    if (categoryScore) {
      categoryScore.total += 1
      if (isCorrect) {
        categoryScore.correct += 1
      }
    }

    for (const focus of question.bigNine) {
      const key = formatFocusLabel(focus)
      const current = focusMap.get(key) ?? { misses: 0, total: 0 }
      current.total += 1
      if (!isCorrect) {
        current.misses += 1
      }
      focusMap.set(key, current)
    }
  }

  for (const categoryScore of categoryScores) {
    categoryScore.percentage =
      categoryScore.total > 0 ? Math.round((categoryScore.correct / categoryScore.total) * 100) : 0
  }

  const totalQuestions = questions.length
  const score = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
  const focusAreas = Array.from(focusMap.entries())
    .map(([label, value]) => ({
      label,
      misses: value.misses,
      total: value.total,
      percentage: value.total > 0 ? Math.round((value.misses / value.total) * 100) : 0,
    }))
    .filter((area) => area.misses > 0)
    .sort((left, right) => {
      if (right.misses !== left.misses) return right.misses - left.misses
      return right.percentage - left.percentage
    })
    .slice(0, 3)

  const readiness =
    score >= 75
      ? {
          label: 'On Track' as const,
          summary:
            'You are within striking distance of a passing outcome, but you still need focused repetition before test day.',
          cta: 'Use the Pass Pack to turn solid readiness into dependable exam-day confidence.',
          recommendedTier: 'pro' as const,
        }
      : score >= 60
        ? {
            label: 'Needs Structure' as const,
            summary:
              'You know enough to improve quickly, but your misses are spread across multiple domains. A structured system matters here.',
            cta: 'Follow a tighter plan, drill the weak categories first, and build timing confidence with full-length sims.',
            recommendedTier: 'pro' as const,
          }
        : {
            label: 'High Risk' as const,
            summary:
              'Right now, you are taking too much risk into the real exam. You need guided repetition, not more scattered studying.',
            cta: 'The fastest path is a contained study system with repeated question exposure and exam simulation.',
            recommendedTier: 'pro' as const,
          }

  return {
    completedAt: new Date().toISOString(),
    score,
    correct,
    total: totalQuestions,
    categoryScores,
    focusAreas,
    readiness,
  }
}

export function saveDiagnosticSession(payload: {
  questions: QuestionBankItem[]
  answers: Record<string, string>
  result: DiagnosticResult
}) {
  if (typeof window === 'undefined') return
  window.sessionStorage.setItem(DIAGNOSTIC_SESSION_KEY, JSON.stringify(payload))
}

export function readDiagnosticSession(): {
  questions: QuestionBankItem[]
  answers: Record<string, string>
  result: DiagnosticResult
} | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.sessionStorage.getItem(DIAGNOSTIC_SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw) as {
      questions: QuestionBankItem[]
      answers: Record<string, string>
      result: DiagnosticResult
    }
  } catch {
    return null
  }
}

export function clearDiagnosticSession() {
  if (typeof window === 'undefined') return
  window.sessionStorage.removeItem(DIAGNOSTIC_SESSION_KEY)
}
