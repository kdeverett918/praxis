import { useEffect, useState } from 'react'
import { getPublishedStudyTopics, type HostedStudyTopic } from '@/lib/hostedContent'

export function useStudyContentLibrary() {
  const [topics, setTopics] = useState<HostedStudyTopic[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isCancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const nextTopics = await getPublishedStudyTopics()
        if (!isCancelled) {
          setTopics(nextTopics)
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load review topics')
          setTopics([])
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

  return { topics, loading, error }
}
