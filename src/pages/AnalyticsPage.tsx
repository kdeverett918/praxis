import { useEffect, useRef } from 'react'
import { BarChart3, TrendingUp, Target, Flame } from 'lucide-react'
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
} from 'recharts'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import { BIG_NINE_LABELS } from '@/types/question'
import type { BigNineArea } from '@/types/question'
import { useGamificationStore } from '@/stores/gamificationStore'
import { gsap } from '@/lib/animations'

const BIG_NINE_KEYS: BigNineArea[] = [
  'speech_sound',
  'fluency',
  'voice_resonance',
  'receptive_expressive',
  'social_communication',
  'cognitive_communication',
  'aac',
  'hearing',
  'feeding_swallowing',
]

export default function AnalyticsPage() {
  const barsRef = useRef<HTMLDivElement>(null)

  const totalAnswered = useGamificationStore((s) => s.totalQuestionsAnswered)
  const totalCorrect = useGamificationStore((s) => s.totalCorrectAnswers)
  const xp = useGamificationStore((s) => s.xp)
  const level = useGamificationStore((s) => s.level)
  const streak = useGamificationStore((s) => s.streak)
  const getLevelName = useGamificationStore((s) => s.getLevelName)

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0
  const hasData = totalAnswered > 0

  // Placeholder Big Nine data: show 0 for all areas until real per-area tracking is added
  const bigNineScores: Record<BigNineArea, number> = {} as Record<BigNineArea, number>
  for (const key of BIG_NINE_KEYS) {
    bigNineScores[key] = 0
  }

  const radarData = BIG_NINE_KEYS.map((area) => ({
    area: BIG_NINE_LABELS[area].replace(/ & /g, ' &\n').replace(/ \/ /g, ' /\n'),
    score: bigNineScores[area],
    fullMark: 100,
  }))

  const sortedAreas = BIG_NINE_KEYS.map((area) => [area, bigNineScores[area]] as [BigNineArea, number]).sort(
    (a, b) => a[1] - b[1],
  )

  useEffect(() => {
    if (!barsRef.current) return

    const bars = barsRef.current.querySelectorAll<HTMLElement>('.analytics-bar-fill')
    bars.forEach((bar, i) => {
      const targetWidth = bar.dataset.width ?? '0'
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: targetWidth + '%',
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.1,
        },
      )
    })
  }, [])

  return (
    <div className="mx-auto max-w-6xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <BarChart3 className="h-6 w-6 text-primary" />
        <h1 className="font-display text-2xl text-text-primary">Performance Analytics</h1>
      </div>

      {/* Overview Stats */}
      <div className="mb-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Target, label: 'Overall Accuracy', value: hasData ? `${accuracy}%` : '--', color: 'text-success' },
          { icon: TrendingUp, label: 'Questions Answered', value: `${totalAnswered}`, color: 'text-primary' },
          { icon: Flame, label: 'Study Streak', value: `${streak} days`, color: 'text-secondary' },
          { icon: BarChart3, label: 'Level / XP', value: `Lv.${level} (${xp} XP)`, color: 'text-warning' },
        ].map((stat) => (
          <Card key={stat.label} className="flex h-full items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="font-body text-xs text-text-muted">{stat.label}</p>
              {stat.label === 'Level / XP' && (
                <p className="font-body text-xs text-warning">{getLevelName()}</p>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Radar Chart + Big Nine Breakdown */}
      <div className="mb-8 grid items-stretch gap-8 lg:grid-cols-2">
        {/* Radar Chart */}
        <Card className="flex h-full min-w-0 flex-col overflow-hidden">
          <h2 className="mb-4 font-display text-xl text-text-primary">Big Nine Radar</h2>
          {hasData ? (
            <div className="min-h-0 flex-1">
              <ResponsiveContainer width="100%" height={320}>
                <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="54%">
                <PolarGrid stroke="rgba(99, 102, 241, 0.15)" />
                <PolarAngleAxis
                  dataKey="area"
                  tick={{ fill: '#a5b4fc', fontSize: 9 }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex min-h-[320px] flex-1 items-center justify-center">
              <p className="font-body text-sm text-text-muted">
                Answer more questions to see your Big Nine breakdown
              </p>
            </div>
          )}
        </Card>

        {/* Big Nine bar breakdown */}
        <Card className="flex h-full min-w-0 flex-col">
          <h2 className="mb-6 font-display text-xl text-text-primary">Big Nine Performance</h2>
          {hasData ? (
            <div ref={barsRef} className="space-y-4">
              {sortedAreas.map(([area, score]) => {
                const barColor = score >= 75 ? 'bg-success' : score >= 60 ? 'bg-warning' : 'bg-error'
                const glowColor =
                  score >= 75
                    ? 'shadow-success/30'
                    : score >= 60
                      ? 'shadow-warning/30'
                      : 'shadow-error/30'
                const label = BIG_NINE_LABELS[area]
                return (
                  <div key={area}>
                    <div className="mb-1.5 flex items-center justify-between gap-2">
                      <span className="min-w-0 truncate font-body text-sm text-text-secondary">{label}</span>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="font-mono text-sm font-bold text-text-primary">{score}%</span>
                        {score < 65 && score > 0 && <Badge variant="error">Focus</Badge>}
                        {score >= 80 && <Badge variant="success">Strong</Badge>}
                      </div>
                    </div>
                    <div className="relative h-3 overflow-hidden rounded-full bg-surface-elevated">
                      <div
                        className={`analytics-bar-fill h-full rounded-full ${barColor}`}
                        data-width={score}
                        style={{ width: '0%' }}
                      />
                      {/* Glow effect beneath bar */}
                      <div
                        className={`pointer-events-none absolute top-0 h-3 rounded-full ${barColor} opacity-40 blur-[4px] shadow-md ${glowColor}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="font-body text-sm text-text-muted">
                Answer more questions to see your Big Nine breakdown
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* Category Breakdown */}
      <div className="grid items-stretch gap-8 lg:grid-cols-3">
        {[
          { cat: 'I. Foundations & Professional Practice', color: 'from-primary to-indigo-400' },
          { cat: 'II. Screening, Assessment, Eval & Dx', color: 'from-secondary to-amber-400' },
          { cat: 'III. Treatment Planning & Implementation', color: 'from-success to-emerald-400' },
        ].map((item) => (
          <Card key={item.cat} className="flex h-full flex-col items-center justify-center text-center">
            <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}>
              <span className="font-mono text-2xl font-bold text-white">--</span>
            </div>
            <h3 className="font-body text-sm font-semibold text-text-primary">{item.cat}</h3>
            <p className="mt-1 font-body text-xs text-text-muted">
              {hasData ? 'Per-category tracking coming soon' : 'Start studying to track category scores'}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}
