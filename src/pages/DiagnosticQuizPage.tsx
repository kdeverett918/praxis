import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardCheck, ArrowRight, Target, Brain, BookOpen,
  Check, Shield, AlertTriangle, ChevronRight,
} from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import {
  PageEmptyState,
  PageErrorState,
  PageLoadingState,
} from '@/components/shared/PageStates'
import { useQuestionBank } from '@/hooks/useQuestionBank'
import { buildDiagnosticQuestions } from '@/lib/questionBank'
import { useDiagnosticStore } from '@/stores/diagnosticStore'
import { BIG_NINE_LABELS } from '@/types/question'
import type { ContentCategory, BigNineArea } from '@/types/question'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

type Phase = 'intro' | 'quiz' | 'results'

const PRO_FEATURES = [
  'Unlimited questions',
  'Unlimited exam simulations',
  'AI-powered rationales',
  'Full flashcard library',
  'Performance analytics',
  'Custom quiz builder',
  'All Big Nine areas',
  '6-month full access',
]

export default function DiagnosticQuizPage() {
  const { questions: questionPool, loading, error } = useQuestionBank({ freeOnly: true })
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const setDiagnosticResult = useDiagnosticStore((s) => s.setResult)

  const questions = useMemo(() => buildDiagnosticQuestions(questionPool, 18), [questionPool])

  const computeResults = useCallback(() => {
    const categoryScores: Record<ContentCategory, { total: number; correct: number; accuracy: number }> = {
      I: { total: 0, correct: 0, accuracy: 0 },
      II: { total: 0, correct: 0, accuracy: 0 },
      III: { total: 0, correct: 0, accuracy: 0 },
    }
    const bigNineScores: Record<string, { total: number; correct: number; accuracy: number }> = {}
    let totalCorrect = 0

    for (const q of questions) {
      const answer = answers[q.id]
      const isCorrect = q.options.find((o) => o.id === answer)?.isCorrect ?? false
      if (isCorrect) totalCorrect++

      categoryScores[q.contentCategory].total++
      if (isCorrect) categoryScores[q.contentCategory].correct++

      for (const area of q.bigNine) {
        if (!bigNineScores[area]) bigNineScores[area] = { total: 0, correct: 0, accuracy: 0 }
        bigNineScores[area].total++
        if (isCorrect) bigNineScores[area].correct++
      }
    }

    // Calculate accuracies
    for (const cat of Object.keys(categoryScores) as ContentCategory[]) {
      const s = categoryScores[cat]
      s.accuracy = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
    }
    for (const area of Object.keys(bigNineScores)) {
      const s = bigNineScores[area]!
      s.accuracy = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
    }

    const weakAreas = Object.entries(bigNineScores)
      .filter(([, s]) => s.accuracy < 60)
      .sort((a, b) => a[1].accuracy - b[1].accuracy)
      .map(([area]) => area)

    const accuracy = Math.round((totalCorrect / questions.length) * 100)

    return {
      totalQuestions: questions.length,
      totalCorrect,
      accuracy,
      categoryScores,
      bigNineScores,
      weakAreas,
      completedAt: new Date().toISOString(),
    }
  }, [questions, answers])

  const handleAnswer = (optionId: string) => {
    const q = questions[currentIndex]
    if (!q) return
    setSelectedOption(optionId)
    setAnswers((prev) => ({ ...prev, [q.id]: optionId }))

    // Auto-advance after 600ms
    setTimeout(() => {
      setSelectedOption(null)
      if (currentIndex + 1 >= questions.length) {
        // Complete
        const r = computeResults()
        setDiagnosticResult(r)
        setPhase('results')
      } else {
        setCurrentIndex((i) => i + 1)
      }
    }, 600)
  }

  const result = phase === 'results' ? computeResults() : null
  const scaledScore = result ? Math.round((result.accuracy / 100) * 200) : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="px-6 pt-28 pb-20">
          <PageLoadingState message="Loading the hosted diagnostic assessment..." />
        </div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="px-6 pt-28 pb-20">
          <PageErrorState title="Diagnostic Unavailable" message={error} />
        </div>
        <Footer />
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="px-6 pt-28 pb-20">
          <PageEmptyState
            title="No Diagnostic Questions Available"
            message="Supabase does not currently expose a free diagnostic question set."
          />
        </div>
        <Footer />
      </div>
    )
  }

  /* ===== INTRO ===== */
  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 pt-28 pb-20">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light">
              <ClipboardCheck className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-text-primary">
              Let's find out where you stand
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-text-secondary">
              Answer 18 questions across all 3 content categories and 9 Big Nine areas. Takes about 8 minutes. No timer — focus on accuracy.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: '18', label: 'Questions', icon: Target },
              { value: '3', label: 'Categories', icon: BookOpen },
              { value: '9', label: 'Big Nine Areas', icon: Brain },
            ].map((item) => (
              <Card key={item.label} className="flex flex-col items-center text-center">
                <item.icon className="mb-2 h-6 w-6 text-primary" />
                <span className="font-mono text-2xl font-bold text-text-primary">{item.value}</span>
                <span className="font-body text-sm text-text-muted">{item.label}</span>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="primary" size="lg" onClick={() => setPhase('quiz')}>
              Begin Assessment
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="mt-4 font-body text-sm text-text-muted">
              No account required. Your results are saved locally.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  /* ===== QUIZ ===== */
  if (phase === 'quiz') {
    const question = questions[currentIndex]
    if (!question) return null

    const categoryProgress = Math.floor(currentIndex / 6) + 1

    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-6 pt-8 pb-20">
          {/* Progress header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="primary">Category {['I', 'II', 'III'][categoryProgress - 1]}</Badge>
              <span className="font-mono text-sm text-text-muted">{currentIndex + 1} / {questions.length}</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map((cat) => (
                <div
                  key={cat}
                  className={`h-2 w-8 rounded-full ${
                    cat < categoryProgress ? 'bg-primary' : cat === categoryProgress ? 'bg-primary/40' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8 h-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <Card className="mb-6">
            <p className="font-body text-base leading-relaxed text-text-primary sm:text-lg">{question.stem}</p>
          </Card>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === option.id
              return (
                <button
                  key={option.id}
                  onClick={() => !selectedOption && handleAnswer(option.id)}
                  disabled={!!selectedOption}
                  data-testid="diagnostic-option"
                  className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-primary bg-primary-light text-text-primary'
                      : 'border-border bg-surface text-text-secondary hover:border-primary/40 hover:bg-surface-elevated'
                  } ${selectedOption && !isSelected ? 'opacity-50' : ''}`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated font-mono text-sm font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-body text-sm leading-relaxed">{option.text}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  /* ===== RESULTS + OFFER ===== */
  if (!result) return null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        {/* Score reveal */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-text-primary">
            Your Diagnostic Results
          </h1>
          <div className="mt-6 inline-flex flex-col items-center">
            <span className={`font-mono text-6xl font-bold ${result.accuracy >= 70 ? 'text-success' : result.accuracy >= 50 ? 'text-warning' : 'text-error'}`}>
              {result.accuracy}%
            </span>
            <span className="mt-2 font-body text-sm text-text-muted">
              {result.totalCorrect} of {result.totalQuestions} correct
            </span>
          </div>

          <div className="mx-auto mt-4 max-w-lg rounded-xl border border-border bg-surface-elevated p-4">
            <p className="font-body text-sm text-text-secondary">
              {scaledScore >= 162 ? (
                <>Projected scaled score: <strong className="text-success">~{scaledScore}/200</strong> — you're on track to pass. Keep studying to strengthen weak areas.</>
              ) : (
                <>Projected scaled score: <strong className="text-error">~{scaledScore}/200</strong> — the passing score is 162. Focus on the areas below to close the gap.</>
              )}
            </p>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {(['I', 'II', 'III'] as ContentCategory[]).map((cat) => {
            const score = result.categoryScores[cat]
            return (
              <Card key={cat} className="text-center">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-text-muted">Category {cat}</p>
                <p className={`mt-2 font-mono text-3xl font-bold ${score.accuracy >= 70 ? 'text-success' : score.accuracy >= 50 ? 'text-warning' : 'text-error'}`}>
                  {score.accuracy}%
                </p>
                <p className="mt-1 font-body text-xs text-text-muted">{score.correct}/{score.total} correct</p>
              </Card>
            )
          })}
        </div>

        {/* Weakness callouts */}
        {result.weakAreas.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-4 font-body text-lg font-semibold text-text-primary">
              <AlertTriangle className="mr-2 inline h-5 w-5 text-warning" />
              Areas to Focus On
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {result.weakAreas.slice(0, 4).map((area) => {
                const score = result.bigNineScores[area]
                return (
                  <Card key={area} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-error-light">
                      <Target className="h-5 w-5 text-error" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-text-primary">{BIG_NINE_LABELS[area as BigNineArea] ?? area}</p>
                      <p className="font-body text-xs text-text-muted">{score?.accuracy ?? 0}% accuracy</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* The Offer */}
        <div className="rounded-2xl border border-primary/40 bg-surface p-8 text-center shadow-glow-primary md:p-10">
          <h2 className="font-display text-2xl text-text-primary md:text-3xl">
            You know where you're weak. Now fix it.
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-text-secondary">
            Get unlimited access to adaptive practice, AI rationales, and full exam simulations.
          </p>

          <div className="mt-6 flex items-baseline justify-center gap-1">
            <span className="font-body text-5xl font-bold text-text-primary">$49</span>
            <span className="font-body text-sm text-text-muted">one-time</span>
          </div>

          <div className="mx-auto mt-6 grid max-w-md gap-2 text-left sm:grid-cols-2">
            {PRO_FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="font-body text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>

          <Link to="/signup" className="mt-8 block">
            <Button variant="primary" size="lg" className="w-full max-w-md">
              Get Pro Access — $49
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>

          <div className="mt-3 flex items-center justify-center gap-2">
            <Shield className="h-4 w-4 text-success" />
            <span className="font-body text-xs text-text-muted">30-day money-back guarantee</span>
          </div>

          <div className="mt-6 border-t border-border pt-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-1 font-body text-sm text-primary hover:text-primary-hover"
            >
              Or continue with free tier (25 questions/day)
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
