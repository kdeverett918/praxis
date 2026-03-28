import { useState, useEffect, useCallback } from 'react'
import { Clock, AlertTriangle, Play, BarChart3 } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'

function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export default function ExamPage() {
  const [started, setStarted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(150 * 60) // 150 minutes
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const totalQuestions = 132

  const tick = useCallback(() => {
    setTimeRemaining((t) => {
      if (t <= 0) return 0
      return t - 1
    })
  }, [])

  useEffect(() => {
    if (!started) return
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [started, tick])

  const isLow = timeRemaining < 600 // under 10 min

  if (!started) {
    return (
      <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
        <h1 className="mb-2 font-display text-3xl text-text-primary">Exam Simulation</h1>
        <p className="mb-10 font-body text-text-secondary">
          Experience realistic test conditions. 132 questions. 150 minutes. Just like the real Praxis 5331.
        </p>

        <Card className="mb-8">
          <h2 className="mb-4 font-display text-xl text-text-primary">Before You Begin</h2>
          <ul className="space-y-3 font-body text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              You will have <strong className="text-text-primary">150 minutes</strong> to complete 132 questions
            </li>
            <li className="flex items-start gap-3">
              <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Questions are drawn from all three content categories and Big Nine areas
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              There is no penalty for guessing — answer every question
            </li>
          </ul>
        </Card>

        <div className="grid items-stretch gap-6 sm:grid-cols-3">
          {[
            { label: 'Questions', value: '132', sub: 'selected-response' },
            { label: 'Time Limit', value: '150', sub: 'minutes' },
            { label: 'Passing Score', value: '162', sub: 'out of 200' },
          ].map((stat) => (
            <Card key={stat.label} className="flex flex-col items-center justify-center text-center">
              <p className="font-mono text-3xl font-bold text-secondary">{stat.value}</p>
              <p className="mt-1 font-body text-sm font-semibold text-text-primary">{stat.label}</p>
              <p className="font-body text-xs text-text-muted">{stat.sub}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="primary" size="lg" onClick={() => setStarted(true)}>
            <Play className="h-5 w-5" />
            Begin Exam Simulation
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      {/* Timer bar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Clock className={`h-5 w-5 shrink-0 ${isLow ? 'animate-pulse text-error' : 'text-primary'}`} />
          <span className={`font-mono text-lg font-bold sm:text-xl ${isLow ? 'text-error' : 'text-text-primary'}`}>
            {formatTime(timeRemaining)}
          </span>
        </div>
        <Badge variant="default">
          Q {currentQuestion + 1}/{totalQuestions}
        </Badge>
      </div>

      {/* Question navigation grid */}
      <Card className="mb-8">
        <h3 className="mb-4 font-body text-sm font-semibold text-text-muted">Question Navigator</h3>
        <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-11 md:grid-cols-16 lg:grid-cols-22">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuestion(i)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs transition-colors ${
                i === currentQuestion
                  ? 'bg-primary text-white'
                  : 'bg-surface-elevated text-text-muted hover:bg-primary/20'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </Card>

      {/* Placeholder question */}
      <Card className="text-center">
        <p className="font-body text-text-secondary">
          Question {currentQuestion + 1} content will load from the question bank.
        </p>
        <p className="mt-2 font-body text-sm text-text-muted">
          Connect Supabase to load real questions.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setCurrentQuestion(Math.min(totalQuestions - 1, currentQuestion + 1))}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  )
}
