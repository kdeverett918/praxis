import { useEffect, useRef } from 'react'
import { BarChart3, TrendingUp, Target, Clock } from 'lucide-react'
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
} from 'recharts'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import { BIG_NINE_LABELS } from '@/types/question'
import type { BigNineArea } from '@/types/question'
import { gsap } from '@/lib/animations'

const MOCK_BIG_NINE_SCORES: Record<BigNineArea, number> = {
  speech_sound: 82,
  fluency: 58,
  voice_resonance: 85,
  receptive_expressive: 74,
  social_communication: 68,
  cognitive_communication: 55,
  aac: 60,
  hearing: 71,
  feeding_swallowing: 88,
}

const radarData = (Object.entries(MOCK_BIG_NINE_SCORES) as [BigNineArea, number][]).map(
  ([area, score]) => ({
    area: BIG_NINE_LABELS[area].replace(/ & /g, ' &\n').replace(/ \/ /g, ' /\n'),
    score,
    fullMark: 100,
  }),
)

export default function AnalyticsPage() {
  const barsRef = useRef<HTMLDivElement>(null)

  const sortedAreas = (Object.entries(MOCK_BIG_NINE_SCORES) as [BigNineArea, number][]).sort(
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
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Target, label: 'Overall Accuracy', value: '72%', trend: '+4%', color: 'text-success' },
          { icon: TrendingUp, label: 'Questions Answered', value: '342', trend: '+28 this week', color: 'text-primary' },
          { icon: Clock, label: 'Avg Time / Question', value: '45s', trend: '-3s', color: 'text-secondary' },
          { icon: BarChart3, label: 'Exams Completed', value: '3', trend: 'Best: 168', color: 'text-warning' },
        ].map((stat) => (
          <Card key={stat.label} className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="font-body text-xs text-text-muted">{stat.label}</p>
              <p className={`font-body text-xs ${stat.color}`}>{stat.trend}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Radar Chart + Big Nine Breakdown */}
      <div className="mb-8 grid gap-8 lg:grid-cols-2">
        {/* Radar Chart */}
        <Card>
          <h2 className="mb-4 font-display text-xl text-text-primary">Big Nine Radar</h2>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="rgba(99, 102, 241, 0.15)" />
              <PolarAngleAxis
                dataKey="area"
                tick={{ fill: '#a5b4fc', fontSize: 10 }}
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
        </Card>

        {/* Big Nine bar breakdown */}
        <Card>
          <h2 className="mb-6 font-display text-xl text-text-primary">Big Nine Performance</h2>
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
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="font-body text-sm text-text-secondary">{label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-text-primary">{score}%</span>
                      {score < 65 && <Badge variant="error">Focus</Badge>}
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
        </Card>
      </div>

      {/* Category Breakdown */}
      <div className="grid gap-8 lg:grid-cols-3">
        {[
          { cat: 'I. Foundations & Professional Practice', score: 78, questions: 112, color: 'from-primary to-indigo-400' },
          { cat: 'II. Screening, Assessment, Eval & Dx', score: 65, questions: 98, color: 'from-secondary to-amber-400' },
          { cat: 'III. Treatment Planning & Implementation', score: 71, questions: 132, color: 'from-success to-emerald-400' },
        ].map((item) => (
          <Card key={item.cat} className="text-center">
            <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}>
              <span className="font-mono text-2xl font-bold text-white">{item.score}%</span>
            </div>
            <h3 className="font-body text-sm font-semibold text-text-primary">{item.cat}</h3>
            <p className="mt-1 font-body text-xs text-text-muted">{item.questions} questions answered</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
