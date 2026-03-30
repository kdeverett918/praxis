import { useEffect, useState } from 'react'
import { getPublishedQuestionBank, type HostedQuestion } from '@/lib/hostedContent'
import type { ContentCategory } from '@/types/question'

interface UseQuestionBankOptions {
  freeOnly?: boolean
  categories?: ContentCategory[]
}

const EMPTY_CATEGORIES: ContentCategory[] = []

export function useQuestionBank(options: UseQuestionBankOptions = {}) {
  const [questions, setQuestions] = useState<HostedQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const freeOnly = options.freeOnly ?? false
  const categoriesKey = (options.categories ?? EMPTY_CATEGORIES).join('|')

  useEffect(() => {
    let isCancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const queryCategories = categoriesKey === ''
          ? EMPTY_CATEGORIES
          : (categoriesKey.split('|') as ContentCategory[])
        const nextQuestions = await getPublishedQuestionBank({
          freeOnly,
          categories: queryCategories,
        })
        if (!isCancelled) {
          setQuestions(nextQuestions)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load questions')
          setQuestions([])
        }
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    void load()

    return () => {
      isCancelled = true
    }
  }, [categoriesKey, freeOnly])

  return { questions, loading, error }
}
