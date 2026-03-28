import { category1Questions } from '@/data/questions-category-1'
import type { QuestionData } from '@/data/questions-category-1'
import { category2Questions } from '@/data/questions-category-2'
import { category3Questions } from '@/data/questions-category-3'

export type QuestionBankItem = QuestionData

export const ALL_QUESTIONS: QuestionBankItem[] = [
  ...category1Questions,
  ...category2Questions,
  ...category3Questions,
]

const QUESTIONS_BY_CATEGORY = {
  I: category1Questions,
  II: category2Questions,
  III: category3Questions,
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
