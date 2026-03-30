import { category1Questions } from '@/data/questions-category-1'
import type { QuestionData } from '@/data/questions-category-1'
import { category1PoolB } from '@/data/questions-category-1-pool-b'
import { category1PoolC } from '@/data/questions-category-1-pool-c'
import { category1PoolD } from '@/data/questions-category-1-pool-d'
import { category2Questions } from '@/data/questions-category-2'
import { category2PoolB } from '@/data/questions-category-2-pool-b'
import { category2PoolC } from '@/data/questions-category-2-pool-c'
import { category2PoolD } from '@/data/questions-category-2-pool-d'
import { category3Questions } from '@/data/questions-category-3'
import { category3PoolB } from '@/data/questions-category-3-pool-b'
import { category3PoolC } from '@/data/questions-category-3-pool-c'
import { category3PoolD } from '@/data/questions-category-3-pool-d'

export type QuestionBankItem = QuestionData

const allCategory1: QuestionBankItem[] = [
  ...category1Questions,
  ...category1PoolB,
  ...category1PoolC,
  ...category1PoolD,
]

const allCategory2: QuestionBankItem[] = [
  ...category2Questions,
  ...category2PoolB,
  ...category2PoolC,
  ...category2PoolD,
]

const allCategory3: QuestionBankItem[] = [
  ...category3Questions,
  ...category3PoolB,
  ...category3PoolC,
  ...category3PoolD,
]

export const ALL_QUESTIONS: QuestionBankItem[] = [
  ...allCategory1,
  ...allCategory2,
  ...allCategory3,
]

const QUESTIONS_BY_CATEGORY = {
  I: allCategory1,
  II: allCategory2,
  III: allCategory3,
} as const

function shuffle<T>(items: T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = next[i]
    next[i] = next[j]!
    next[j] = temp!
  }
  return next
}

/**
 * Build a diagnostic quiz: 6 per category (18 total), covering as many Big Nine areas as possible.
 */
export function buildDiagnosticQuestions(total = 18): QuestionBankItem[] {
  const perCategory = Math.floor(total / 3)
  const categories = Object.entries(QUESTIONS_BY_CATEGORY) as Array<
    [keyof typeof QUESTIONS_BY_CATEGORY, QuestionBankItem[]]
  >

  const selected = categories.flatMap(([, questions]) => {
    const shuffled = shuffle(questions)
    // Try to cover unique Big Nine areas first
    const picked: QuestionBankItem[] = []
    const seenAreas = new Set<string>()

    for (const q of shuffled) {
      if (picked.length >= perCategory) break
      const hasNewArea = q.bigNine.some((a) => !seenAreas.has(a))
      if (hasNewArea || picked.length < perCategory) {
        picked.push(q)
        q.bigNine.forEach((a) => seenAreas.add(a))
      }
    }
    return picked
  })

  return shuffle(selected).slice(0, total)
}

export function buildBalancedExamQuestions(total = 132): QuestionBankItem[] {
  const basePerCategory = Math.floor(total / 3)
  const remainder = total % 3
  const categories = Object.entries(QUESTIONS_BY_CATEGORY) as Array<
    [keyof typeof QUESTIONS_BY_CATEGORY, QuestionBankItem[]]
  >

  const selected = categories.flatMap(([, questions], index) => {
    const target = basePerCategory + (index < remainder ? 1 : 0)
    return shuffle(questions).slice(0, target)
  })

  return shuffle(selected).slice(0, total)
}
