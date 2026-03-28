import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Flame,
  BookOpen,
  Clock,
  BarChart3,
  Brain,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Gamepad2,
  Stethoscope,
} from 'lucide-react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import XPBar from '@/components/dashboard/XPBar'
import DailyChallenge from '@/components/dashboard/DailyChallenge'
import { useGamificationStore } from '@/stores/gamificationStore'
import { gsap } from '@/lib/animations'

const QUICK_ACTIONS = [
  {
    to: '/study',
    icon: BookOpen,
    label: 'Study Mode',
    desc: 'Practice with rationales',
    color: 'text-primary',
    shortcut: 'S',
  },
  {
    to: '/exam',
    icon: Clock,
    label: 'Exam Sim',
    desc: '132 Qs, 150 min',
    color: 'text-secondary',
    shortcut: 'E',
  },
  {
    to: '/quiz',
    icon: Zap,
    label: 'Quick Quiz',
    desc: 'Custom quiz builder',
    color: 'text-success',
    shortcut: 'Q',
  },
  {
    to: '/flashcards',
    icon: Brain,
    label: 'Flashcards',
    desc: 'Spaced repetition',
    color: 'text-warning',
    shortcut: 'F',
  },
]

const MOTIVATIONAL_COPY = [
  'Every question you practice gets you closer to that CCC.',
  "Consistency beats cramming. You're proving it.",
  "The Praxis doesn't stand a chance against preparation like this.",
  'Small daily wins add up to exam-day confidence.',
  "You're not just studying -- you're building clinical reasoning.",
  "Future you will be grateful for today's session.",
  'Knowledge compounds. Every session makes the next one easier.',
]

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function getDailyMotivation(): string {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return MOTIVATIONAL_COPY[dayOfYear % MOTIVATIONAL_COPY.length] ?? MOTIVATIONAL_COPY[0]!
}

export default function DashboardPage() {
  const statsRef = useRef<HTMLDivElement>(null)

  const streak = useGamificationStore((s) => s.streak)
  const questionsToday = useGamificationStore((s) => s.dailyGoal.questionsCompleted)
  const totalAnswered = useGamificationStore((s) => s.totalQuestionsAnswered)
  const totalCorrect = useGamificationStore((s) => s.totalCorrectAnswers)
  const xp = useGamificationStore((s) => s.xp)
  const level = useGamificationStore((s) => s.level)
  const getLevelName = useGamificationStore((s) => s.getLevelName)

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  const STAT_CARDS = [
    {
      key: 'streak',
      icon: Flame,
      value: streak,
      suffix: '',
      label: 'Day Streak',
      accent: 'border-t-secondary',
      iconColor: 'text-secondary',
      iconBg: 'bg-secondary/10',
      gradientHover: 'from-secondary/5',
    },
    {
      key: 'today',
      icon: BookOpen,
      value: questionsToday,
      suffix: '',
      label: 'Questions Today',
      accent: 'border-t-primary',
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10',
      gradientHover: 'from-primary/5',
    },
    {
      key: 'accuracy',
      icon: TrendingUp,
      value: accuracy,
      suffix: '%',
      label: 'Accuracy',
      accent: 'border-t-success',
      iconColor: 'text-success',
      iconBg: 'bg-success/10',
      gradientHover: 'from-success/5',
    },
    {
      key: 'total',
      icon: Target,
      value: totalAnswered,
      suffix: '',
      label: 'Total Answered',
      accent: 'border-t-warning',
      iconColor: 'text-warning',
      iconBg: 'bg-warning/10',
      gradientHover: 'from-warning/5',
    },
  ] as const

  useEffect(() => {
    if (!statsRef.current) return

    const statEls = statsRef.current.querySelectorAll<HTMLElement>('.dash-stat-number')
    statEls.forEach((el) => {
      const target = parseInt(el.dataset.target ?? '0', 10)
      const suffix = el.dataset.suffix ?? ''
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.2,
        onUpdate() {
          el.textContent = Math.round(obj.val) + suffix
        },
      })
    })
  }, [streak, questionsToday, accuracy, totalAnswered])

  return (
    <div className="mx-auto max-w-6xl pb-24 lg:pb-0">
      {/* Hero area with gradient mesh */}
      <div className="border-border bg-surface/30 relative mb-10 overflow-hidden rounded-3xl border p-8 backdrop-blur-sm">
        {/* Gradient mesh background */}
        <div className="bg-primary/20 pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-[100px]" />
        <div className="bg-secondary/15 pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full blur-[80px]" />
        <div className="bg-primary/10 pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]" />

        <div className="relative z-10">
          <h1 className="font-display text-text-primary text-3xl md:text-4xl">{getGreeting()}!</h1>
          <p className="font-body text-text-secondary mt-2">{getDailyMotivation()}</p>
        </div>
      </div>

      {/* XP Bar + Daily Challenge */}
      <div className="mb-8 grid items-stretch gap-4 lg:grid-cols-2">
        <XPBar />
        <DailyChallenge />
      </div>

      {/* Stats Row */}
      <div ref={statsRef} className="mb-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map((stat) => (
          <Card
            key={stat.key}
            className={`group relative flex h-full items-center gap-4 overflow-hidden border-t-2 ${stat.accent}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${stat.gradientHover} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div
              className={`shimmer-card flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}
            >
              <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
            </div>
            <div>
              <p
                className="dash-stat-number text-text-primary font-mono text-2xl font-bold"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0
              </p>
              <p className="font-body text-text-muted text-sm">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="font-display text-text-primary mb-4 text-xl">Start Studying</h2>
      <div className="mb-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {QUICK_ACTIONS.map((action) => (
          <Link key={action.to} to={action.to} className="flex">
            <Card hover className="group flex h-full w-full items-center gap-4">
              <action.icon className={`h-8 w-8 shrink-0 ${action.color}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-body text-text-primary font-semibold">{action.label}</p>
                  <kbd className="border-border bg-background text-text-muted hidden shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] sm:inline-block">
                    {action.shortcut}
                  </kbd>
                </div>
                <p className="font-body text-text-muted text-xs">{action.desc}</p>
              </div>
              <ArrowRight className="text-text-muted h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Card>
          </Link>
        ))}
      </div>

      {/* Games Section */}
      <h2 className="font-display text-text-primary mb-4 text-xl">Games</h2>
      <div className="mb-10 grid items-stretch gap-4 sm:grid-cols-2">
        <Link to="/speed-round" className="flex">
          <Card
            hover
            className="group relative flex h-full w-full items-center gap-4 overflow-hidden"
          >
            <div className="from-secondary/5 to-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="from-secondary shadow-secondary/20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br to-amber-400 shadow-md">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-body text-text-primary font-semibold">Speed Round</p>
              <p className="font-body text-text-muted text-xs">
                60-second rapid-fire quiz with combo scoring
              </p>
            </div>
            <ArrowRight className="text-text-muted h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Card>
        </Link>
        <Link to="/clinical-scenario" className="flex">
          <Card
            hover
            className="group relative flex h-full w-full items-center gap-4 overflow-hidden"
          >
            <div className="from-primary/5 to-secondary/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="from-primary shadow-primary/20 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br to-indigo-400 shadow-md">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-body text-text-primary font-semibold">Clinical Scenarios</p>
              <p className="font-body text-text-muted text-xs">
                Branching case simulations with decision scoring
              </p>
            </div>
            <ArrowRight className="text-text-muted h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Card>
        </Link>
      </div>

      {/* Progress Summary + Level Info */}
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        {/* Progress Summary */}
        <Card className="flex h-full flex-col">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-text-primary text-xl">Your Progress</h3>
            <Link to="/analytics">
              <Badge variant="primary">
                <BarChart3 className="h-3 w-3" />
                View All
              </Badge>
            </Link>
          </div>
          <div className="space-y-4">
            {totalAnswered > 0 ? (
              <>
                <div className="bg-surface-elevated flex items-center justify-between rounded-xl p-4">
                  <span className="font-body text-text-primary text-sm font-medium">
                    Total Questions
                  </span>
                  <span className="text-text-primary font-mono text-sm font-bold">
                    {totalAnswered}
                  </span>
                </div>
                <div className="bg-surface-elevated flex items-center justify-between rounded-xl p-4">
                  <span className="font-body text-text-primary text-sm font-medium">
                    Correct Answers
                  </span>
                  <span className="text-success font-mono text-sm font-bold">{totalCorrect}</span>
                </div>
                <div className="bg-surface-elevated flex items-center justify-between rounded-xl p-4">
                  <span className="font-body text-text-primary text-sm font-medium">Accuracy</span>
                  <Badge
                    variant={accuracy >= 70 ? 'success' : accuracy >= 50 ? 'warning' : 'error'}
                  >
                    {accuracy}%
                  </Badge>
                </div>
                <div className="bg-surface-elevated flex items-center justify-between rounded-xl p-4">
                  <span className="font-body text-text-primary text-sm font-medium">Total XP</span>
                  <span className="text-secondary font-mono text-sm font-bold">{xp} XP</span>
                </div>
              </>
            ) : (
              <div className="bg-surface-elevated rounded-xl p-6 text-center">
                <p className="font-body text-text-muted text-sm">
                  Start studying to see your progress here!
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Level Info */}
        <Card className="flex h-full flex-col">
          <h3 className="font-display text-text-primary mb-6 text-xl">Level Progress</h3>
          <div className="flex-1 space-y-6">
            <div className="bg-surface-elevated flex items-center justify-between rounded-xl p-4">
              <span className="font-body text-text-primary text-sm font-medium">Current Level</span>
              <span className="text-primary font-mono text-sm font-bold">
                Lv. {level} - {getLevelName()}
              </span>
            </div>
            <div className="bg-surface-elevated flex items-center justify-between rounded-xl p-4">
              <span className="font-body text-text-primary text-sm font-medium">Study Streak</span>
              <div className="flex items-center gap-2">
                <Flame className="text-secondary h-4 w-4" />
                <span className="text-text-primary font-mono text-sm font-bold">{streak} days</span>
              </div>
            </div>
            <div className="bg-surface-elevated flex items-center justify-between rounded-xl p-4">
              <span className="font-body text-text-primary text-sm font-medium">
                Today&apos;s Questions
              </span>
              <span className="text-text-primary font-mono text-sm font-bold">
                {questionsToday}
              </span>
            </div>
          </div>
          <Link to="/analytics" className="mt-6 block">
            <Button variant="outline" size="sm" className="w-full">
              View Full Analytics
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
