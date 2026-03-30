import type { HostedQuestion } from '@/lib/hostedContent'

export type QuestionBankItem = HostedQuestion

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

function splitQuestionsByCategory(questions: QuestionBankItem[]) {
  return {
    I: questions.filter((question) => question.contentCategory === 'I'),
    II: questions.filter((question) => question.contentCategory === 'II'),
    III: questions.filter((question) => question.contentCategory === 'III'),
  } as const
}

export function buildDiagnosticQuestions(
  questions: QuestionBankItem[],
  total = 18,
): QuestionBankItem[] {
  if (questions.length === 0) return []

  const perCategory = Math.max(1, Math.floor(total / 3))
  const categories = Object.entries(splitQuestionsByCategory(questions)) as Array<
    ['I' | 'II' | 'III', QuestionBankItem[]]
  >

  const selected = categories.flatMap(([, categoryQuestions]) => {
    const shuffled = shuffle(categoryQuestions)
    const picked: QuestionBankItem[] = []
    const seenAreas = new Set<string>()

    for (const question of shuffled) {
      if (picked.length >= perCategory) break
      const introducesNewArea = question.bigNine.some((area) => !seenAreas.has(area))
      if (introducesNewArea || picked.length < perCategory) {
        picked.push(question)
        question.bigNine.forEach((area) => seenAreas.add(area))
      }
    }

    return picked
  })

  return shuffle(selected).slice(0, total)
}

export function buildBalancedExamQuestions(
  questions: QuestionBankItem[],
  total = 132,
): QuestionBankItem[] {
  if (questions.length === 0) return []

  const basePerCategory = Math.floor(total / 3)
  const remainder = total % 3
  const categories = Object.entries(splitQuestionsByCategory(questions)) as Array<
    ['I' | 'II' | 'III', QuestionBankItem[]]
  >

  const selected = categories.flatMap(([, categoryQuestions], index) => {
    const target = basePerCategory + (index < remainder ? 1 : 0)
    return shuffle(categoryQuestions).slice(0, target)
  })

  return shuffle(selected).slice(0, total)
}
