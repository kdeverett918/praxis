import { Link } from 'react-router-dom'
import { Target, ArrowRight, Zap } from 'lucide-react'
import { useGamificationStore } from '@/stores/gamificationStore'

export default function DailyChallenge() {
  const dailyGoal = useGamificationStore((s) => s.dailyGoal)

  const questionsPercent = Math.min(
    Math.round((dailyGoal.questionsCompleted / dailyGoal.questionsTarget) * 100),
    100,
  )
  const xpPercent = Math.min(Math.round((dailyGoal.xpEarned / dailyGoal.xpTarget) * 100), 100)

  return (
    <div className="border-border bg-surface/50 relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 backdrop-blur-sm">
      {/* Subtle gradient mesh */}
      <div className="bg-secondary/10 pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl" />
      <div className="bg-primary/10 pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full blur-3xl" />

      <div className="relative flex flex-1 flex-col">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="from-secondary relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br to-amber-400 shadow-md">
              <Target className="h-5 w-5 text-white" />
              {/* Pulsing live indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-success relative inline-flex h-3 w-3 rounded-full" />
              </span>
            </div>
            <div>
              <p className="font-display text-text-primary text-lg">Daily Challenge</p>
              <p className="font-body text-text-muted text-xs">Resets at midnight</p>
            </div>
          </div>
          {dailyGoal.completed && (
            <span className="bg-success/15 font-body text-success rounded-full px-3 py-1 text-xs font-semibold">
              Completed!
            </span>
          )}
        </div>

        {/* Progress bars */}
        <div className="space-y-3">
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-body text-text-secondary text-sm">
                Questions ({dailyGoal.questionsCompleted}/{dailyGoal.questionsTarget})
              </span>
              <span className="text-text-muted font-mono text-xs font-bold">
                {questionsPercent}%
              </span>
            </div>
            <div className="bg-surface-elevated h-2 overflow-hidden rounded-full">
              <div
                className="from-primary to-primary-hover h-full rounded-full bg-gradient-to-r transition-all duration-700"
                style={{ width: `${questionsPercent}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-body text-text-secondary text-sm">
                XP ({dailyGoal.xpEarned}/{dailyGoal.xpTarget})
              </span>
              <span className="text-text-muted font-mono text-xs font-bold">{xpPercent}%</span>
            </div>
            <div className="bg-surface-elevated h-2 overflow-hidden rounded-full">
              <div
                className="from-secondary h-full rounded-full bg-gradient-to-r to-amber-400 transition-all duration-700"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Reward callout */}
        <div className="bg-secondary/5 mt-auto flex items-center justify-between rounded-xl px-4 py-3">
          <div className="flex items-center gap-2">
            <Zap className="text-secondary h-4 w-4" />
            <span className="font-body text-text-secondary text-sm">
              Complete for <strong className="text-secondary">+50 bonus XP</strong>
            </span>
          </div>
          <Link
            to="/speed-round"
            className="font-body text-primary hover:text-primary-hover flex items-center gap-1 text-sm font-semibold transition-colors"
          >
            Play
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
