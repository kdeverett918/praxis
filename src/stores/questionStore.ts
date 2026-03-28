import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Question, QuestionOption } from '@/types/database'

interface QuestionState {
  // Current session
  questions: Question[]
  currentIndex: number
  answers: Record<string, string>
  flagged: Set<string>
  startTime: number | null
  mode: 'study' | 'exam' | 'quiz'

  // Actions
  setQuestions: (questions: Question[]) => void
  setMode: (mode: 'study' | 'exam' | 'quiz') => void
  answerQuestion: (questionId: string, optionId: string) => void
  toggleFlag: (questionId: string) => void
  goToQuestion: (index: number) => void
  nextQuestion: () => void
  prevQuestion: () => void
  startSession: () => void
  resetSession: () => void

  // Computed
  currentQuestion: () => Question | null
  isAnswered: (questionId: string) => boolean
  getSelectedAnswer: (questionId: string) => string | null
  score: () => { correct: number; total: number; percentage: number }
}

export const useQuestionStore = create<QuestionState>()((set, get) => ({
  questions: [],
  currentIndex: 0,
  answers: {},
  flagged: new Set<string>(),
  startTime: null,
  mode: 'study',

  setQuestions: (questions) => set({ questions, currentIndex: 0, answers: {}, flagged: new Set() }),
  setMode: (mode) => set({ mode }),

  answerQuestion: (questionId, optionId) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: optionId },
    })),

  toggleFlag: (questionId) =>
    set((state) => {
      const flagged = new Set(state.flagged)
      if (flagged.has(questionId)) flagged.delete(questionId)
      else flagged.add(questionId)
      return { flagged }
    }),

  goToQuestion: (index) => set({ currentIndex: index }),
  nextQuestion: () =>
    set((state) => ({
      currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1),
    })),
  prevQuestion: () =>
    set((state) => ({
      currentIndex: Math.max(state.currentIndex - 1, 0),
    })),

  startSession: () => set({ startTime: Date.now() }),
  resetSession: () =>
    set({
      questions: [],
      currentIndex: 0,
      answers: {},
      flagged: new Set(),
      startTime: null,
    }),

  currentQuestion: () => {
    const { questions, currentIndex } = get()
    return questions[currentIndex] ?? null
  },

  isAnswered: (questionId) => questionId in get().answers,
  getSelectedAnswer: (questionId) => get().answers[questionId] ?? null,

  score: () => {
    const { questions, answers } = get()
    let correct = 0
    const total = Object.keys(answers).length

    for (const q of questions) {
      const selected = answers[q.id]
      if (!selected) continue
      const correctOption = (q.options as QuestionOption[]).find((o) => o.isCorrect)
      if (correctOption && correctOption.id === selected) correct++
    }

    return {
      correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    }
  },
}))

interface UserState {
  isAuthenticated: boolean
  profile: {
    id: string
    displayName: string
    email: string
    subscriptionTier: string
    studyStreak: number
    totalQuestionsAnswered: number
  } | null

  setProfile: (profile: UserState['profile']) => void
  setAuthenticated: (value: boolean) => void
  logout: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      profile: null,

      setProfile: (profile) => set({ profile, isAuthenticated: !!profile }),
      setAuthenticated: (value) => set({ isAuthenticated: value }),
      logout: () => set({ isAuthenticated: false, profile: null }),
    }),
    {
      name: 'praxis-user',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        profile: state.profile,
      }),
    },
  ),
)
