import { Link } from 'react-router-dom'
import {
  Flame, BookOpen, Clock, BarChart3, Brain, ArrowRight,
  TrendingUp, Target, Zap, Gamepad2, Stethoscope,
} from 'lucide-react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import XPBar from '@/components/dashboard/XPBar'
import DailyChallenge from '@/components/dashboard/DailyChallenge'

const MOCK_STATS = {
  streak: 7,
  questionsToday: 18,
  totalAnswered: 342,
  accuracy: 72,
  weakAreas: ['Fluency', 'AAC', 'Cognitive Communication'],
  strongAreas: ['Feeding & Swallowing', 'Voice & Resonance'],
}

const QUICK_ACTIONS = [
  { to: '/study', icon: BookOpen, label: 'Study Mode', desc: 'Practice with rationales', color: 'text-primary' },
  { to: '/exam', icon: Clock, label: 'Exam Sim', desc: '132 Qs, 150 min', color: 'text-secondary' },
  { to: '/quiz', icon: Zap, label: 'Quick Quiz', desc: 'Custom quiz builder', color: 'text-success' },
  { to: '/flashcards', icon: Brain, label: 'Flashcards', desc: 'Spaced repetition', color: 'text-warning' },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl pb-24 lg:pb-0">
      {/* Hero area with gradient mesh */}
      <div className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-surface/30 p-8 backdrop-blur-sm">
        {/* Gradient mesh background */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-secondary/15 blur-[80px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[60px]" />

        <div className="relative z-10">
          <h1 className="font-display text-3xl text-text-primary md:text-4xl">Welcome back!</h1>
          <p className="mt-2 font-body text-text-secondary">
            Keep up the momentum. You're making progress every day.
          </p>
        </div>
      </div>

      {/* XP Bar + Daily Challenge */}
      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        <XPBar />
        <DailyChallenge />
      </div>

      {/* Stats Row */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="group relative flex items-center gap-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="shimmer-card flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
            <Flame className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <p className="font-mono text-2xl font-bold text-text-primary">{MOCK_STATS.streak}</p>
            <p className="font-body text-sm text-text-muted">Day Streak</p>
          </div>
        </Card>

        <Card className="group relative flex items-center gap-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="shimmer-card flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-mono text-2xl font-bold text-text-primary">{MOCK_STATS.questionsToday}</p>
            <p className="font-body text-sm text-text-muted">Questions Today</p>
          </div>
        </Card>

        <Card className="group relative flex items-center gap-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-success/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="shimmer-card flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
            <TrendingUp className="h-6 w-6 text-success" />
          </div>
          <div>
            <p className="font-mono text-2xl font-bold text-text-primary">{MOCK_STATS.accuracy}%</p>
            <p className="font-body text-sm text-text-muted">Accuracy</p>
          </div>
        </Card>

        <Card className="group relative flex items-center gap-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-warning/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="shimmer-card flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10">
            <Target className="h-6 w-6 text-warning" />
          </div>
          <div>
            <p className="font-mono text-2xl font-bold text-text-primary">{MOCK_STATS.totalAnswered}</p>
            <p className="font-body text-sm text-text-muted">Total Answered</p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <h2 className="mb-4 font-display text-xl text-text-primary">Start Studying</h2>
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {QUICK_ACTIONS.map((action) => (
          <Link key={action.to} to={action.to}>
            <Card hover className="group flex items-center gap-4">
              <action.icon className={`h-8 w-8 ${action.color}`} />
              <div className="flex-1">
                <p className="font-body font-semibold text-text-primary">{action.label}</p>
                <p className="font-body text-xs text-text-muted">{action.desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1" />
            </Card>
          </Link>
        ))}
      </div>

      {/* Games Section */}
      <h2 className="mb-4 font-display text-xl text-text-primary">Games</h2>
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <Link to="/speed-round">
          <Card hover className="group relative flex items-center gap-4 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-amber-400 shadow-md shadow-secondary/20">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-body font-semibold text-text-primary">Speed Round</p>
              <p className="font-body text-xs text-text-muted">60-second rapid-fire quiz with combo scoring</p>
            </div>
            <ArrowRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1" />
          </Card>
        </Link>
        <Link to="/clinical-scenario">
          <Card hover className="group relative flex items-center gap-4 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-400 shadow-md shadow-primary/20">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-body font-semibold text-text-primary">Clinical Scenarios</p>
              <p className="font-body text-xs text-text-muted">Branching case simulations with decision scoring</p>
            </div>
            <ArrowRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1" />
          </Card>
        </Link>
      </div>

      {/* Weak Areas + Category Scores */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Weak Areas */}
        <Card>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-xl text-text-primary">Focus Areas</h3>
            <Link to="/analytics">
              <Badge variant="primary">
                <BarChart3 className="h-3 w-3" />
                View All
              </Badge>
            </Link>
          </div>
          <div className="space-y-4">
            {MOCK_STATS.weakAreas.map((area) => (
              <div key={area} className="flex items-center justify-between rounded-xl bg-error-light p-4">
                <span className="font-body text-sm font-medium text-text-primary">{area}</span>
                <Badge variant="error">Needs Work</Badge>
              </div>
            ))}
            {MOCK_STATS.strongAreas.map((area) => (
              <div key={area} className="flex items-center justify-between rounded-xl bg-success-light p-4">
                <span className="font-body text-sm font-medium text-text-primary">{area}</span>
                <Badge variant="success">Strong</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <h3 className="mb-6 font-display text-xl text-text-primary">Category Scores</h3>
          <div className="space-y-6">
            {[
              { cat: 'I. Foundations & Professional Practice', score: 78, color: 'bg-primary' },
              { cat: 'II. Screening, Assessment, Eval & Dx', score: 65, color: 'bg-secondary' },
              { cat: 'III. Treatment Planning & Implementation', score: 71, color: 'bg-success' },
            ].map((item) => (
              <div key={item.cat}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-body text-sm text-text-secondary">{item.cat}</span>
                  <span className="font-mono text-sm font-bold text-text-primary">{item.score}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-surface-elevated">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-700`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
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
