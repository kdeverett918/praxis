import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { BETA_MODE_AVAILABLE } from '@/lib/beta'

export const DEFAULT_DISPLAY_NAME = ''
export const DEFAULT_QUIZ_LENGTH = 20
export const DEFAULT_BETA_MODE_ENABLED = BETA_MODE_AVAILABLE

type SwipeMode = 'swipe' | 'classic' | 'auto'
type SwipeSensitivity = 'low' | 'medium' | 'high'

interface SettingsState {
  hasHydrated: boolean
  displayName: string
  defaultQuizLength: number
  examTimerWarnings: boolean
  betaModeEnabled: boolean
  swipeMode: SwipeMode
  swipeSensitivity: SwipeSensitivity
  hapticFeedback: boolean
  reducedMotion: boolean | undefined
  setHasHydrated: (hasHydrated: boolean) => void
  updateSettings: (updates: Partial<Pick<SettingsState, 'displayName' | 'defaultQuizLength' | 'examTimerWarnings' | 'betaModeEnabled' | 'swipeMode' | 'swipeSensitivity' | 'hapticFeedback' | 'reducedMotion'>>) => void
  resetSettings: () => void
}

const initialState = {
  displayName: DEFAULT_DISPLAY_NAME,
  defaultQuizLength: DEFAULT_QUIZ_LENGTH,
  examTimerWarnings: true,
  betaModeEnabled: DEFAULT_BETA_MODE_ENABLED,
  swipeMode: 'auto' as SwipeMode,
  swipeSensitivity: 'medium' as SwipeSensitivity,
  hapticFeedback: true,
  reducedMotion: undefined as boolean | undefined,
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
        swipeMode: state.swipeMode,
        swipeSensitivity: state.swipeSensitivity,
        hapticFeedback: state.hapticFeedback,
        reducedMotion: state.reducedMotion,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    },
  ),
)
