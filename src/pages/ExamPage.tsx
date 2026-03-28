import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Clock,
  AlertTriangle,
  Play,
  BarChart3,
  Flag,
  Trophy,
  RotateCcw,
  LockKeyhole,
  Sparkles,
} from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import QuestionCard from '@/components/question/QuestionCard'
import UpgradeModal from '@/components/shared/UpgradeModal'
import type { QuestionOption } from '@/types/database'
import { buildBalancedExamQuestions } from '@/lib/questionBank'
import { useSubscription } from '@/hooks/useSubscription'
import { useSettingsStore } from '@/stores/settingsStore'

type ExamPhase = 'ready' | 'active' | 'results'

function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export default function ExamPage() {
  const examTimerWarnings = useSettingsStore((s) => s.examTimerWarnings)
  const subscription = useSubscription()
  const totalQuestions = 132
  const [phase, setPhase] = useState<ExamPhase>('ready')
  const [questions, setQuestions] = useState(() => buildBalancedExamQuestions(totalQuestions))
  const [timeRemaining, setTimeRemaining] = useState(150 * 60)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [finishedDueToTime, setFinishedDueToTime] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const examRecordedRef = useRef(false)

  const tick = useCallback(() => {
    setTimeRemaining((remaining) => {
      if (remaining <= 1) {
        setFinishedDueToTime(true)
        setPhase('results')
        return 0
      }
      return remaining - 1
    })
  }, [])

  useEffect(() => {
    if (phase !== 'active') return
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [phase, tick])

  const current = questions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const correctCount = questions.reduce((count, question) => {
    const selected = answers[question.id]
    const correctOption = (question.options as QuestionOption[]).find((option) => option.isCorrect)
    return count + (selected && correctOption?.id === selected ? 1 : 0)
  }, 0)
  const scaledScore = Math.round((correctCount / questions.length) * 200)
  const passing = scaledScore >= 162
  const isLowTime = examTimerWarnings && timeRemaining < 600

  function startExam() {
    if (!subscription.canTakeExamSimulation) {
      setShowUpgradeModal(true)
      return
    }

    setQuestions(buildBalancedExamQuestions(totalQuestions))
    setTimeRemaining(150 * 60)
    setCurrentQuestion(0)
    setAnswers({})
    setFlagged(new Set())
    setFinishedDueToTime(false)
    examRecordedRef.current = false
    setPhase('active')
  }

  function finishExam(reason: 'complete' | 'time' = 'complete') {
    if (!subscription.hasPaidAccess && !examRecordedRef.current) {
      subscription.recordExamSimulation()
      examRecordedRef.current = true
    }
    setFinishedDueToTime(reason === 'time')
    setPhase('results')
  }

  function toggleFlag(questionId: string) {
    setFlagged((currentFlags) => {
      const next = new Set(currentFlags)
      if (next.has(questionId)) next.delete(questionId)
      else next.add(questionId)
      return next
    })
  }

  if (phase === 'ready') {
    if (!subscription.canTakeExamSimulation) {
      return (
        <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
          <Card variant="glass" spotlight className="border-secondary/25 relative overflow-hidden">
            <div className="from-secondary/10 to-primary/10 absolute inset-0 bg-gradient-to-br via-transparent" />
            <div className="relative">
              <div className="flex items-start gap-3">
                <div className="bg-secondary/15 text-secondary flex h-12 w-12 items-center justify-center rounded-2xl">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="warning">Free exam limit reached</Badge>
                  <h1 className="font-display text-text-primary mt-3 text-3xl">
                    You have used your free exam simulation
                  </h1>
                  <p className="font-body text-text-secondary mt-3 max-w-2xl text-sm leading-6">
                    The free tier includes one full exam simulation total. Upgrade to keep running
                    timed exams, review your weak areas, and build confidence before test day.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  'Unlimited exam simulations',
                  'Unlimited study questions',
                  'AI rationales for each missed item',
                ].map((item) => (
                  <div
                    key={item}
                    className="border-border bg-surface/70 font-body text-text-secondary rounded-2xl border p-4 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/pro" className="block">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Unlock Pro Access
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" onClick={() => setShowUpgradeModal(true)}>
                  See upgrade options
                </Button>
              </div>
            </div>
          </Card>

          <UpgradeModal
            open={showUpgradeModal || !subscription.canTakeExamSimulation}
            onClose={() => setShowUpgradeModal(false)}
            title="Full exam sims are part of Pro access"
            description="You have already used the free simulation. Upgrade once and keep drilling the full exam format whenever you need it."
            highlights={[
              'Unlimited 132-question simulations',
              'Targeted review of weak content areas',
              'Progress tracking across repeated attempts',
            ]}
            ctaLabel="Unlock Pro Access"
            ctaHref="/pro"
          />
        </div>
      )
    }

    return (
      <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
        <h1 className="font-display text-text-primary mb-2 text-3xl">Exam Simulation</h1>
        <p className="font-body text-text-secondary mb-10">
          Experience realistic test conditions. 132 questions. 150 minutes. Just like the real
          Praxis 5331.
        </p>

        <Card className="mb-8">
          <h2 className="font-display text-text-primary mb-4 text-xl">Before You Begin</h2>
          <ul className="font-body text-text-secondary space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Clock className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              You will have <strong className="text-text-primary">150 minutes</strong> to complete
              132 questions
            </li>
            <li className="flex items-start gap-3">
              <BarChart3 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              Questions are balanced across all three content categories
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="text-warning mt-0.5 h-4 w-4 shrink-0" />
              Flag questions you want to revisit before finishing the exam
            </li>
          </ul>
        </Card>

        <div className="grid items-stretch gap-6 sm:grid-cols-3">
          {[
            { label: 'Questions', value: '132', sub: 'selected-response' },
            { label: 'Time Limit', value: '150', sub: 'minutes' },
            { label: 'Passing Score', value: '162', sub: 'out of 200' },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="flex flex-col items-center justify-center text-center"
            >
              <p className="text-secondary font-mono text-3xl font-bold">{stat.value}</p>
              <p className="font-body text-text-primary mt-1 text-sm font-semibold">{stat.label}</p>
              <p className="font-body text-text-muted text-xs">{stat.sub}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="primary" size="lg" onClick={startExam}>
            <Play className="h-5 w-5" />
            Begin Exam Simulation
          </Button>
          {!subscription.hasPaidAccess && subscription.examSimulationsCompleted === 0 && (
            <p className="font-body text-text-muted mt-3 text-xs">
              This is your free full-length simulation. Use it to benchmark where you stand.
            </p>
          )}
        </div>

        <UpgradeModal
          open={showUpgradeModal || !subscription.canTakeExamSimulation}
          onClose={() => setShowUpgradeModal(false)}
          title="Full exam sims are part of Pro access"
          description="You have already used the free simulation. Upgrade once and keep drilling the full exam format whenever you need it."
          highlights={[
            'Unlimited 132-question simulations',
            'Targeted review of weak content areas',
            'Progress tracking across repeated attempts',
          ]}
          ctaLabel="Unlock Pro Access"
          ctaHref="/pro"
        />
      </div>
    )
  }

  if (phase === 'results') {
    return (
      <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
        <div className="border-border bg-surface/50 rounded-3xl border p-8 text-center backdrop-blur-sm">
          <div className="from-primary to-secondary shadow-primary/20 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br shadow-lg">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-text-primary mt-6 text-4xl md:text-5xl">
            Exam complete
          </h1>
          <p className="font-body text-text-secondary mt-3 text-base leading-7">
            {finishedDueToTime
              ? 'Time expired before you reached the end of the simulation.'
              : 'You reached the end of the exam simulation.'}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Card className="text-center">
              <p className="text-secondary font-mono text-3xl font-bold">{scaledScore}</p>
              <p className="font-body text-text-muted mt-1 text-sm">Scaled score</p>
            </Card>
            <Card className="text-center">
              <p className="text-primary font-mono text-3xl font-bold">{correctCount}</p>
              <p className="font-body text-text-muted mt-1 text-sm">Correct</p>
            </Card>
            <Card className="text-center">
              <p className="text-success font-mono text-3xl font-bold">{answeredCount}</p>
              <p className="font-body text-text-muted mt-1 text-sm">Answered</p>
            </Card>
            <Card className="text-center">
              <p className="text-warning font-mono text-3xl font-bold">{flagged.size}</p>
              <p className="font-body text-text-muted mt-1 text-sm">Flagged</p>
            </Card>
          </div>

          <div
            className={`font-body mt-6 rounded-2xl px-4 py-3 text-sm ${
              passing ? 'bg-success-light text-text-primary' : 'bg-warning-light text-text-primary'
            }`}
          >
            {passing
              ? 'Projected outcome: above the 162 passing benchmark.'
              : 'Projected outcome: below the 162 passing benchmark. Review weak areas and retake another simulation.'}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="primary" onClick={startExam}>
              <RotateCcw className="h-4 w-4" />
              Retake exam
            </Button>
            <Link to="/review">
              <Button variant="outline">Open review library</Button>
            </Link>
          </div>

          {!subscription.hasPaidAccess && (
            <div className="border-secondary/20 bg-secondary/5 mt-8 rounded-2xl border p-5 text-left">
              <p className="font-body text-text-primary text-sm font-semibold">
                Want another timed run?
              </p>
              <p className="font-body text-text-secondary mt-2 text-sm leading-6">
                Free access allows one exam simulation. Upgrade to keep taking full-length Praxis
                exams and practicing under test-day pressure.
              </p>
              <div className="mt-4">
                <Link to="/pro">
                  <Button variant="primary" size="md">
                    Unlock Pro Access
                    <Sparkles className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="border-border bg-surface mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Clock
            className={`h-5 w-5 shrink-0 ${isLowTime ? 'text-error animate-pulse' : 'text-primary'}`}
          />
          <span
            className={`font-mono text-lg font-bold sm:text-xl ${isLowTime ? 'text-error' : 'text-text-primary'}`}
          >
            {formatTime(timeRemaining)}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">
            Q {currentQuestion + 1}/{totalQuestions}
          </Badge>
          <Badge variant="primary">{answeredCount} answered</Badge>
          <Badge variant="secondary">{flagged.size} flagged</Badge>
        </div>
      </div>

      <Card className="mb-8">
        <h2 className="font-display text-text-primary mb-4 text-lg">Question Navigator</h2>
        <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-11 md:grid-cols-16 lg:grid-cols-22">
          {questions.map((question, index) => {
            const active = index === currentQuestion
            const answered = question.id in answers
            const isFlagged = flagged.has(question.id)
            const classes = active
              ? 'border-primary bg-primary text-white'
              : answered
                ? 'border-secondary/30 bg-secondary/10 text-secondary'
                : isFlagged
                  ? 'border-warning/40 bg-warning/10 text-warning'
                  : 'border-border bg-surface-elevated text-text-muted hover:bg-primary/20'

            return (
              <button
                key={question.id}
                onClick={() => setCurrentQuestion(index)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg border font-mono text-xs transition-colors ${classes}`}
                aria-label={`Question ${index + 1}`}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      </Card>

      {current && (
        <QuestionCard
          key={current.id}
          questionId={current.id}
          stem={current.stem}
          options={current.options}
          explanation={current.explanation}
          incorrectExplanations={current.incorrectExplanations}
          contentCategory={current.contentCategory}
          difficulty={current.difficulty}
          bigNine={current.bigNine}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          mode="exam"
          selectedOptionId={answers[current.id] ?? null}
          isFlagged={flagged.has(current.id)}
          onAnswer={(optionId) => {
            setAnswers((currentAnswers) => ({ ...currentAnswers, [current.id]: optionId }))
          }}
          onFlag={() => toggleFlag(current.id)}
          onPrev={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          onNext={() => {
            if (currentQuestion === questions.length - 1) finishExam('complete')
            else setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))
          }}
        />
      )}

      <div className="border-border bg-surface/40 mt-6 flex items-center justify-between rounded-2xl border px-4 py-4">
        <div className="font-body text-text-secondary flex items-center gap-2 text-sm">
          <Flag className="text-warning h-4 w-4" />
          Flag questions to revisit before finishing the simulation.
        </div>
        <Button variant="outline" size="sm" onClick={() => finishExam('complete')}>
          Finish exam
        </Button>
      </div>
    </div>
  )
}
