import { useEffect, useState } from 'react'
import { getPublishedFlashcards, type HostedFlashcard } from '@/lib/hostedContent'

export function useFlashcardBank() {
  const [flashcards, setFlashcards] = useState<HostedFlashcard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isCancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const nextFlashcards = await getPublishedFlashcards()
        if (!isCancelled) {
          setFlashcards(nextFlashcards)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load flashcards')
          setFlashcards([])
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
  }, [])

  return { flashcards, loading, error }
}
