import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Clock, AlertTriangle, Play, BarChart3, Flag, Trophy, RotateCcw,
} from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import {
  PageEmptyState,
  PageErrorState,
  PageLoadingState,
} from '@/components/shared/PageStates'
import QuestionCard from '@/components/question/QuestionCard'
import type { QuestionOption } from '@/types/database'
import { buildBalancedExamQuestions, type QuestionBankItem } from '@/lib/questionBank'
import { useQuestionBank } from '@/hooks/useQuestionBank'
import { useSettingsStore } from '@/stores/settingsStore'
import { trackEvent } from '@/lib/analytics'
import { CONTENT_CATEGORY_LABELS } from '@/types/question'
import type { ContentCategory } from '@/types/question'

type ExamPhase = 'ready' | 'active' | 'results'

function formatTime(seconds: number) {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export default function ExamPage() {
  const { questions: questionBank, loading, error } = useQuestionBank()
  const examTimerWarnings = useSettingsStore((s) => s.examTimerWarnings)
  const [examType, setExamType] = useState<'full' | 'half'>('full')
  const totalQuestions = examType === 'full' ? 132 : 66
  const totalTime = examType === 'full' ? 150 * 60 : 75 * 60
  const [phase, setPhase] = useState<ExamPhase>('ready')
  const [questions, setQuestions] = useState<QuestionBankItem[]>([])
  const [timeRemaining, setTimeRemaining] = useState(totalTime)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [finishedDueToTime, setFinishedDueToTime] = useState(false)

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
  const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0
  const unansweredCount = Math.max(questions.length - answeredCount, 0)
  const timeUsedSeconds = Math.max(totalTime - timeRemaining, 0)
  const isLowTime = examTimerWarnings && timeRemaining < 600
  const categoryResults = (['I', 'II', 'III'] as ContentCategory[]).map((category) => {
    const categoryQuestions = questions.filter((question) => question.contentCategory === category)
    const categoryCorrect = categoryQuestions.reduce((count, question) => {
      const selected = answers[question.id]
      const correctOption = (question.options as QuestionOption[]).find((option) => option.isCorrect)
      return count + (selected && correctOption?.id === selected ? 1 : 0)
    }, 0)

    return {
      category,
      total: categoryQuestions.length,
      correct: categoryCorrect,
      accuracy: categoryQuestions.length > 0
        ? Math.round((categoryCorrect / categoryQuestions.length) * 100)
        : 0,
    }
  })

  const readiness = accuracy >= 80
    ? {
        label: 'Strong practice performance',
        tone: 'bg-success-light text-text-primary',
        desc: 'You are holding up well in a full simulation. Keep practicing pacing and clean up the weakest category below.',
      }
    : accuracy >= 65
      ? {
          label: 'Targeted cleanup needed',
          tone: 'bg-warning-light text-text-primary',
          desc: 'You are close enough to benefit from focused category review before the next full simulation.',
        }
      : {
          label: 'Foundation rebuild recommended',
          tone: 'bg-error-light text-text-primary',
          desc: 'Use shorter targeted sets and the review library before leaning on another full simulation for feedback.',
        }

  function startExam() {
    const qCount = examType === 'full' ? 132 : 66
    setQuestions(buildBalancedExamQuestions(questionBank, qCount))
    setTimeRemaining(examType === 'full' ? 150 * 60 : 75 * 60)
    setCurrentQuestion(0)
    setAnswers({})
    setFlagged(new Set())
    setFinishedDueToTime(false)
    trackEvent('exam_started', {
      exam_type: examType,
      total_questions: qCount,
    })
    setPhase('active')
  }

  function finishExam(reason: 'complete' | 'time' = 'complete') {
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

  useEffect(() => {
    if (phase !== 'results' || questions.length === 0) return

    trackEvent('exam_completed', {
      exam_type: examType,
      accuracy,
      answered_count: answeredCount,
      flagged_count: flagged.size,
      completion_reason: finishedDueToTime ? 'time' : answeredCount >= questions.length ? 'complete' : 'manual',
    })
  }, [accuracy, answeredCount, examType, finishedDueToTime, flagged.size, phase, questions.length])

  if (loading) {
    return <PageLoadingState message="Loading your hosted exam bank..." />
  }

  if (error) {
    return <PageErrorState title="Exam Bank Unavailable" message={error} />
  }

  if (questionBank.length === 0) {
    return (
      <PageEmptyState
        title="No Questions Available"
        message="Your Supabase project does not have published exam questions yet."
      />
    )
  }

  if (phase === 'ready') {
    return (
      <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
        <h1 className="mb-2 font-display text-3xl text-text-primary">Exam Simulation</h1>
        <p className="mb-10 font-body text-text-secondary">
          Experience realistic test conditions. Use this for pacing, endurance, and category-level feedback before test day.
        </p>

        {/* Exam type selector */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => setExamType('full')}
            className={`rounded-xl border-2 p-5 text-left transition-all ${
              examType === 'full' ? 'border-primary bg-primary-light' : 'border-border bg-surface hover:border-primary/30'
            }`}
          >
            <p className="font-body text-base font-semibold text-text-primary">Full Exam</p>
            <p className="mt-1 font-body text-sm text-text-secondary">132 questions &middot; 150 minutes</p>
          </button>
          <button
            onClick={() => setExamType('half')}
            className={`rounded-xl border-2 p-5 text-left transition-all ${
              examType === 'half' ? 'border-primary bg-primary-light' : 'border-border bg-surface hover:border-primary/30'
            }`}
          >
            <p className="font-body text-base font-semibold text-text-primary">Half Exam</p>
            <p className="mt-1 font-body text-sm text-text-secondary">66 questions &middot; 75 minutes</p>
          </button>
        </div>

        <Card className="mb-8">
          <h2 className="mb-4 font-body text-lg font-semibold text-text-primary">Before You Begin</h2>
          <ul className="space-y-3 font-body text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              You will have <strong className="text-text-primary">150 minutes</strong> to complete 132 questions
            </li>
            <li className="flex items-start gap-3">
              <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Questions are balanced across all three content categories
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              Flag questions you want to revisit before finishing the exam
            </li>
            <li className="flex items-start gap-3">
              <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              Results use practice accuracy and category breakdowns, not an official ETS scaled score
            </li>
          </ul>
        </Card>

        <div className="grid items-stretch gap-6 sm:grid-cols-3">
          {[
            { label: 'Questions', value: examType === 'full' ? '132' : '66', sub: 'selected-response' },
            { label: 'Time Limit', value: examType === 'full' ? '150' : '75', sub: 'minutes' },
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
          <Button variant="primary" size="lg" onClick={startExam}>
            <Play className="h-5 w-5" />
            Begin Exam Simulation
          </Button>
        </div>
      </div>
    )
  }

  if (phase === 'results') {
    return (
      <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
        <div className="rounded-3xl border border-border bg-surface/50 p-8 text-center backdrop-blur-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="mt-6 font-display text-4xl text-text-primary md:text-5xl">Exam complete</h1>
          <p className="mt-3 font-body text-base leading-7 text-text-secondary">
            {finishedDueToTime
              ? 'Time expired before you reached the end of the simulation.'
              : 'You reached the end of the exam simulation.'}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Card className="text-center">
              <p className="font-mono text-3xl font-bold text-secondary">{accuracy}%</p>
              <p className="mt-1 font-body text-sm text-text-muted">Practice Accuracy</p>
            </Card>
            <Card className="text-center">
              <p className="font-mono text-3xl font-bold text-primary">{correctCount}</p>
              <p className="mt-1 font-body text-sm text-text-muted">Correct</p>
            </Card>
            <Card className="text-center">
              <p className="font-mono text-3xl font-bold text-success">{unansweredCount}</p>
              <p className="mt-1 font-body text-sm text-text-muted">Unanswered</p>
            </Card>
            <Card className="text-center">
              <p className="font-mono text-3xl font-bold text-warning">{Math.round(timeUsedSeconds / 60)}m</p>
              <p className="mt-1 font-body text-sm text-text-muted">Time Used</p>
            </Card>
          </div>

          <div className={`mt-6 rounded-2xl px-4 py-4 font-body text-sm ${readiness.tone}`}>
            <p className="font-semibold text-text-primary">{readiness.label}</p>
            <p className="mt-1 leading-relaxed text-text-secondary">{readiness.desc}</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {categoryResults.map((result) => (
              <Card key={result.category} className="text-center">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {CONTENT_CATEGORY_LABELS[result.category]}
                </p>
                <p className="mt-2 font-mono text-3xl font-bold text-text-primary">{result.accuracy}%</p>
                <p className="mt-1 font-body text-sm text-text-muted">
                  {result.correct}/{result.total} correct
                </p>
              </Card>
            ))}
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
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Clock className={`h-5 w-5 shrink-0 ${isLowTime ? 'animate-pulse text-error' : 'text-primary'}`} />
          <span className={`font-mono text-lg font-bold sm:text-xl ${isLowTime ? 'text-error' : 'text-text-primary'}`}>
            {formatTime(timeRemaining)}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Q {currentQuestion + 1}/{totalQuestions}</Badge>
          <Badge variant="primary">{answeredCount} answered</Badge>
          <Badge variant="secondary">{flagged.size} flagged</Badge>
        </div>
      </div>

      <Card className="mb-8">
        <h2 className="mb-4 font-display text-lg text-text-primary">Question Navigator</h2>
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

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-surface/40 px-4 py-4">
        <div className="flex items-center gap-2 font-body text-sm text-text-secondary">
          <Flag className="h-4 w-4 text-warning" />
          Flag questions to revisit before finishing the simulation.
        </div>
        <Button variant="outline" size="sm" onClick={() => finishExam('complete')}>
          Finish exam
        </Button>
      </div>
    </div>
  )
}
