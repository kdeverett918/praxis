import { useState, useCallback } from 'react'

interface AIRationaleResult {
  rationale: string
  loading: boolean
  error: string | null
}

export function useAIRationale(): AIRationaleResult & {
  generateRationale: (params: {
    stem: string
    options: Array<{ id: string; text: string; isCorrect: boolean }>
    selectedAnswer: string
    correctAnswer: string
  }) => Promise<void>
} {
  const [rationale, setRationale] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateRationale = useCallback(
    async (params: {
      stem: string
      options: Array<{ id: string; text: string; isCorrect: boolean }>
      selectedAnswer: string
      correctAnswer: string
    }) => {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined
      if (!apiKey) {
        setError('AI rationale not configured')
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 800,
            system: `You are an expert SLP Praxis 5331 tutor. A student just answered a practice question. Explain the clinical reasoning clearly and encouragingly.

Format your response as:
1. **Why the correct answer works** (2-3 sentences with clinical reasoning)
2. **Why the student's answer doesn't work** (1-2 sentences — skip if they got it right)
3. **Clinical memory tip** (1 sentence — a mnemonic or association to help remember)
4. **Related topic to review** (1 sentence suggesting what to study next)

Keep total response under 200 words. Use clinical terminology but explain it clearly.`,
            messages: [
              {
                role: 'user',
                content: `Question: ${params.stem}\n\nOptions:\n${params.options.map((o) => `${o.id.toUpperCase()}. ${o.text}`).join('\n')}\n\nCorrect answer: ${params.correctAnswer}\nStudent selected: ${params.selectedAnswer}`,
              },
            ],
          }),
        })

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        const text = data.content?.[0]?.text ?? 'Unable to generate rationale.'
        setRationale(text)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to generate rationale')
      } finally {
        setLoading(false)
      }
    },
    [],
  )

  return { rationale, loading, error, generateRationale }
}
