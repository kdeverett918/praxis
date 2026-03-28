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
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-sm">
      {/* Subtle gradient mesh */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-amber-400 shadow-md">
              <Target className="h-5 w-5 text-white" />
              {/* Pulsing live indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
              </span>
            </div>
            <div>
              <p className="font-display text-lg text-text-primary">Daily Challenge</p>
              <p className="font-body text-xs text-text-muted">Resets at midnight</p>
            </div>
          </div>
          {dailyGoal.completed && (
            <span className="rounded-full bg-success/15 px-3 py-1 font-body text-xs font-semibold text-success">
              Completed!
            </span>
          )}
        </div>

        {/* Progress bars */}
        <div className="space-y-3">
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-body text-sm text-text-secondary">
                Questions ({dailyGoal.questionsCompleted}/{dailyGoal.questionsTarget})
              </span>
              <span className="font-mono text-xs font-bold text-text-muted">{questionsPercent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-hover transition-all duration-700"
                style={{ width: `${questionsPercent}%` }}
              />
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-body text-sm text-text-secondary">
                XP ({dailyGoal.xpEarned}/{dailyGoal.xpTarget})
              </span>
              <span className="font-mono text-xs font-bold text-text-muted">{xpPercent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary to-amber-400 transition-all duration-700"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Reward callout */}
        <div className="mt-4 flex items-center justify-between rounded-xl bg-secondary/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-secondary" />
            <span className="font-body text-sm text-text-secondary">
              Complete for <strong className="text-secondary">+50 bonus XP</strong>
            </span>
          </div>
          <Link
            to="/speed-round"
            className="flex items-center gap-1 font-body text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Play
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
