import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const DEFAULT_DISPLAY_NAME = ''
export const DEFAULT_QUIZ_LENGTH = 20

interface SettingsState {
  displayName: string
  defaultQuizLength: number
  examTimerWarnings: boolean
  updateSettings: (updates: Partial<Pick<SettingsState, 'displayName' | 'defaultQuizLength' | 'examTimerWarnings'>>) => void
  resetSettings: () => void
}

const initialState = {
  displayName: DEFAULT_DISPLAY_NAME,
  defaultQuizLength: DEFAULT_QUIZ_LENGTH,
  examTimerWarnings: true,
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...initialState,
      updateSettings: (updates) => set((state) => ({ ...state, ...updates })),
      resetSettings: () => set(initialState),
    }),
    {
      name: 'praxis-settings',
      partialize: (state) => ({
        displayName: state.displayName,
        defaultQuizLength: state.defaultQuizLength,
        examTimerWarnings: state.examTimerWarnings,
      }),
    },
  ),
)
