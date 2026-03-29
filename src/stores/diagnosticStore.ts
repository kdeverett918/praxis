import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ContentCategory } from '@/types/question'

interface DiagnosticResult {
  totalQuestions: number
  totalCorrect: number
  accuracy: number
  categoryScores: Record<ContentCategory, { total: number; correct: number; accuracy: number }>
  bigNineScores: Record<string, { total: number; correct: number; accuracy: number }>
  weakAreas: string[]
  completedAt: string
}

interface DiagnosticState {
  hasCompleted: boolean
  result: DiagnosticResult | null
  setResult: (result: DiagnosticResult) => void
  reset: () => void
}

export const useDiagnosticStore = create<DiagnosticState>()(
  persist(
    (set) => ({
      hasCompleted: false,
      result: null,
      setResult: (result) => set({ hasCompleted: true, result }),
      reset: () => set({ hasCompleted: false, result: null }),
    }),
    { name: 'praxis-diagnostic' },
  ),
)
