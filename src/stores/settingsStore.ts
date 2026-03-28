import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { BETA_MODE_AVAILABLE } from '@/lib/beta'

export const DEFAULT_DISPLAY_NAME = ''
export const DEFAULT_QUIZ_LENGTH = 20
export const DEFAULT_BETA_MODE_ENABLED = BETA_MODE_AVAILABLE

interface SettingsState {
  hasHydrated: boolean
  displayName: string
  defaultQuizLength: number
  examTimerWarnings: boolean
  betaModeEnabled: boolean
  setHasHydrated: (hasHydrated: boolean) => void
  updateSettings: (updates: Partial<Pick<SettingsState, 'displayName' | 'defaultQuizLength' | 'examTimerWarnings' | 'betaModeEnabled'>>) => void
  resetSettings: () => void
}

const initialState = {
  displayName: DEFAULT_DISPLAY_NAME,
  defaultQuizLength: DEFAULT_QUIZ_LENGTH,
  examTimerWarnings: true,
  betaModeEnabled: DEFAULT_BETA_MODE_ENABLED,
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      ...initialState,
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
      updateSettings: (updates) => set(updates),
      resetSettings: () => set({ ...initialState, hasHydrated: true }),
    }),
    {
      name: 'praxis-settings',
      partialize: (state) => ({
        displayName: state.displayName,
        defaultQuizLength: state.defaultQuizLength,
        examTimerWarnings: state.examTimerWarnings,
        betaModeEnabled: state.betaModeEnabled,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    },
  ),
)
