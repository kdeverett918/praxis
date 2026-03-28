import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: number | null
  condition: AchievementCondition
}

interface AchievementCondition {
  type: 'xp' | 'streak' | 'questions' | 'speed_round' | 'scenario' | 'level'
  threshold: number
}

export const LEVEL_NAMES = [
  'Student Observer',
  'Student Clinician',
  'Clinical Fellow',
  'Licensed SLP',
  'Praxis Scholar',
  'Praxis Master',
] as const

export type LevelName = (typeof LEVEL_NAMES)[number]

function xpForLevel(level: number): number {
  return level * 200 + (level - 1) * 50
}

function getLevelFromXP(xp: number): number {
  let level = 1
  let totalNeeded = 0
  for (let i = 1; i <= LEVEL_NAMES.length; i++) {
    totalNeeded += xpForLevel(i)
    if (xp < totalNeeded) return level
    level = Math.min(i + 1, LEVEL_NAMES.length)
  }
  return level
}

function getXPInCurrentLevel(xp: number): { current: number; needed: number } {
  let accumulated = 0
  let level = 1
  for (let i = 1; i <= LEVEL_NAMES.length; i++) {
    const needed = xpForLevel(i)
    if (xp < accumulated + needed) {
      return { current: xp - accumulated, needed }
    }
    accumulated += needed
    level = i + 1
  }
  // Max level
  const needed = xpForLevel(level)
  return { current: needed, needed }
}

const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Earn your first 10 XP',
    icon: 'footprints',
    unlockedAt: null,
    condition: { type: 'xp', threshold: 10 },
  },
  {
    id: 'centurion',
    name: 'Centurion',
    description: 'Earn 100 XP total',
    icon: 'medal',
    unlockedAt: null,
    condition: { type: 'xp', threshold: 100 },
  },
  {
    id: 'xp_master',
    name: 'XP Master',
    description: 'Earn 500 XP total',
    icon: 'crown',
    unlockedAt: null,
    condition: { type: 'xp', threshold: 500 },
  },
  {
    id: 'streak_3',
    name: 'Consistency',
    description: 'Maintain a 3-day study streak',
    icon: 'flame',
    unlockedAt: null,
    condition: { type: 'streak', threshold: 3 },
  },
  {
    id: 'streak_7',
    name: 'Weekly Warrior',
    description: 'Maintain a 7-day study streak',
    icon: 'fire',
    unlockedAt: null,
    condition: { type: 'streak', threshold: 7 },
  },
  {
    id: 'streak_30',
    name: 'Monthly Master',
    description: 'Maintain a 30-day study streak',
    icon: 'calendar',
    unlockedAt: null,
    condition: { type: 'streak', threshold: 30 },
  },
  {
    id: 'speed_first',
    name: 'Speed Demon',
    description: 'Complete your first Speed Round',
    icon: 'zap',
    unlockedAt: null,
    condition: { type: 'speed_round', threshold: 1 },
  },
  {
    id: 'speed_10',
    name: 'Rapid Fire',
    description: 'Complete 10 Speed Rounds',
    icon: 'bolt',
    unlockedAt: null,
    condition: { type: 'speed_round', threshold: 10 },
  },
  {
    id: 'scenario_first',
    name: 'Clinical Thinker',
    description: 'Complete your first Clinical Scenario',
    icon: 'stethoscope',
    unlockedAt: null,
    condition: { type: 'scenario', threshold: 1 },
  },
  {
    id: 'scenario_all',
    name: 'Case Master',
    description: 'Complete all 3 Clinical Scenarios',
    icon: 'trophy',
    unlockedAt: null,
    condition: { type: 'scenario', threshold: 3 },
  },
  {
    id: 'questions_50',
    name: 'Half Century',
    description: 'Answer 50 questions total',
    icon: 'target',
    unlockedAt: null,
    condition: { type: 'questions', threshold: 50 },
  },
  {
    id: 'level_clinician',
    name: 'Student Clinician',
    description: 'Reach Level 2: Student Clinician',
    icon: 'graduation',
    unlockedAt: null,
    condition: { type: 'level', threshold: 2 },
  },
  {
    id: 'level_fellow',
    name: 'Clinical Fellow',
    description: 'Reach Level 3: Clinical Fellow',
    icon: 'award',
    unlockedAt: null,
    condition: { type: 'level', threshold: 3 },
  },
]

interface DailyGoal {
  date: string
  questionsTarget: number
  questionsCompleted: number
  xpTarget: number
  xpEarned: number
  completed: boolean
}

interface GamificationState {
  xp: number
  level: number
  achievements: Achievement[]
  streak: number
  lastStudyDate: string | null
  speedRoundsCompleted: number
  scenariosCompleted: number
  totalQuestionsAnswered: number
  dailyGoal: DailyGoal
  pendingAchievements: Achievement[]

  // Actions
  addXP: (amount: number) => void
  checkAchievements: () => void
  updateStreak: () => void
  completeSpeedRound: () => void
  completeScenario: () => void
  addQuestionsAnswered: (count: number) => void
  resetDailyGoal: () => void
  dismissAchievement: (id: string) => void
  getXPProgress: () => { current: number; needed: number }
  getLevelName: () => LevelName
}

function todayString(): string {
  return new Date().toISOString().split('T')[0]!
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      achievements: [...DEFAULT_ACHIEVEMENTS],
      streak: 0,
      lastStudyDate: null,
      speedRoundsCompleted: 0,
      scenariosCompleted: 0,
      totalQuestionsAnswered: 0,
      dailyGoal: {
        date: todayString(),
        questionsTarget: 20,
        questionsCompleted: 0,
        xpTarget: 100,
        xpEarned: 0,
        completed: false,
      },
      pendingAchievements: [],

      addXP: (amount) => {
        set((state) => {
          const newXP = state.xp + amount
          const newLevel = getLevelFromXP(newXP)
          const today = todayString()
          const dailyGoal =
            state.dailyGoal.date === today
              ? {
                  ...state.dailyGoal,
                  xpEarned: state.dailyGoal.xpEarned + amount,
                  completed:
                    state.dailyGoal.xpEarned + amount >= state.dailyGoal.xpTarget &&
                    state.dailyGoal.questionsCompleted >= state.dailyGoal.questionsTarget,
                }
              : {
                  date: today,
                  questionsTarget: 20,
                  questionsCompleted: 0,
                  xpTarget: 100,
                  xpEarned: amount,
                  completed: false,
                }

          return { xp: newXP, level: newLevel, dailyGoal }
        })
        get().checkAchievements()
      },

      checkAchievements: () => {
        set((state) => {
          const newlyUnlocked: Achievement[] = []
          const updatedAchievements = state.achievements.map((a) => {
            if (a.unlockedAt) return a

            let earned = false
            switch (a.condition.type) {
              case 'xp':
                earned = state.xp >= a.condition.threshold
                break
              case 'streak':
                earned = state.streak >= a.condition.threshold
                break
              case 'speed_round':
                earned = state.speedRoundsCompleted >= a.condition.threshold
                break
              case 'scenario':
                earned = state.scenariosCompleted >= a.condition.threshold
                break
              case 'questions':
                earned = state.totalQuestionsAnswered >= a.condition.threshold
                break
              case 'level':
                earned = state.level >= a.condition.threshold
                break
            }

            if (earned) {
              const unlocked = { ...a, unlockedAt: Date.now() }
              newlyUnlocked.push(unlocked)
              return unlocked
            }
            return a
          })

          return {
            achievements: updatedAchievements,
            pendingAchievements: [...state.pendingAchievements, ...newlyUnlocked],
          }
        })
      },

      updateStreak: () => {
        set((state) => {
          const today = todayString()
          if (state.lastStudyDate === today) return state

          const yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          const yesterdayStr = yesterday.toISOString().split('T')[0]

          const newStreak = state.lastStudyDate === yesterdayStr ? state.streak + 1 : 1

          return { streak: newStreak, lastStudyDate: today }
        })
        get().checkAchievements()
      },

      completeSpeedRound: () => {
        set((state) => ({
          speedRoundsCompleted: state.speedRoundsCompleted + 1,
        }))
        get().checkAchievements()
      },

      completeScenario: () => {
        set((state) => ({
          scenariosCompleted: state.scenariosCompleted + 1,
        }))
        get().checkAchievements()
      },

      addQuestionsAnswered: (count) => {
        set((state) => {
          const today = todayString()
          const dailyGoal =
            state.dailyGoal.date === today
              ? {
                  ...state.dailyGoal,
                  questionsCompleted: state.dailyGoal.questionsCompleted + count,
                  completed:
                    state.dailyGoal.questionsCompleted + count >= state.dailyGoal.questionsTarget &&
                    state.dailyGoal.xpEarned >= state.dailyGoal.xpTarget,
                }
              : {
                  date: today,
                  questionsTarget: 20,
                  questionsCompleted: count,
                  xpTarget: 100,
                  xpEarned: 0,
                  completed: false,
                }

          return {
            totalQuestionsAnswered: state.totalQuestionsAnswered + count,
            dailyGoal,
          }
        })
        get().checkAchievements()
      },

      resetDailyGoal: () => {
        set({
          dailyGoal: {
            date: todayString(),
            questionsTarget: 20,
            questionsCompleted: 0,
            xpTarget: 100,
            xpEarned: 0,
            completed: false,
          },
        })
      },

      dismissAchievement: (id) => {
        set((state) => ({
          pendingAchievements: state.pendingAchievements.filter((a) => a.id !== id),
        }))
      },

      getXPProgress: () => {
        return getXPInCurrentLevel(get().xp)
      },

      getLevelName: () => {
        const level = get().level
        return LEVEL_NAMES[Math.min(level - 1, LEVEL_NAMES.length - 1)]!
      },
    }),
    {
      name: 'praxis-gamification',
      partialize: (state) => ({
        xp: state.xp,
        level: state.level,
        achievements: state.achievements,
        streak: state.streak,
        lastStudyDate: state.lastStudyDate,
        speedRoundsCompleted: state.speedRoundsCompleted,
        scenariosCompleted: state.scenariosCompleted,
        totalQuestionsAnswered: state.totalQuestionsAnswered,
        dailyGoal: state.dailyGoal,
      }),
    },
  ),
)
