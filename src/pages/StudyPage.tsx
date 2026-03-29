import { useState, useMemo } from 'react'
import { GraduationCap, Brain, BookOpen, ArrowRight, Target, Zap, RotateCcw } from 'lucide-react'
import QuestionCard from '@/components/question/QuestionCard'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import { ALL_QUESTIONS } from '@/lib/questionBank'
import { useGamificationStore } from '@/stores/gamificationStore'
import type { ContentCategory, BigNineArea } from '@/types/question'
import { CONTENT_CATEGORY_LABELS, BIG_NINE_LABELS } from '@/types/question'

type Phase = 'setup' | 'active' | 'summary'
type StudyMode = 'smart' | 'free'

const SESSION_LENGTHS = [10, 25, 50] as const
const CATEGORY_KEYS: ContentCategory[] = ['I', 'II', 'III']
const BIG_NINE_KEYS: BigNineArea[] = [
  'speech_sound', 'fluency', 'voice_resonance', 'receptive_expressive',
  'social_communication', 'cognitive_communication', 'aac', 'hearing', 'feeding_swallowing',
]

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

export default function StudyPage() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [studyMode, setStudyMode] = useState<StudyMode>('smart')
  const [sessionLength, setSessionLength] = useState<number>(25)
  const [categoryFilters, setCategoryFilters] = useState<Set<ContentCategory>>(new Set())
  const [bigNineFilters, setBigNineFilters] = useState<Set<BigNineArea>>(new Set())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [sessionStartTime] = useState(Date.now())

  const addXP = useGamificationStore((s) => s.addXP)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)
  const addCorrectAnswer = useGamificationStore((s) => s.addCorrectAnswer)
  const updateStreak = useGamificationStore((s) => s.updateStreak)

  const sessionQuestions = useMemo(() => {
    let pool = [...ALL_QUESTIONS]

    if (categoryFilters.size > 0) {
      pool = pool.filter((q) => categoryFilters.has(q.contentCategory))
    }
    if (bigNineFilters.size > 0) {
      pool = pool.filter((q) => q.bigNine.some((b) => bigNineFilters.has(b as BigNineArea)))
    }

    const shuffled = shuffleArray(pool)
    return shuffled.slice(0, sessionLength)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]) // Recalculate when phase changes (i.e., when session starts)

  const question = sessionQuestions[currentIndex]
  const totalCorrect = Object.entries(answers).filter(([qId, optId]) => {
    const q = sessionQuestions.find((sq) => sq.id === qId)
    return q?.options.find((o) => o.id === optId)?.isCorrect
  }).length
  const sessionAccuracy = Object.keys(answers).length > 0
    ? Math.round((totalCorrect / Object.keys(answers).length) * 100)
    : 0

  const toggleCategory = (cat: ContentCategory) => {
    const next = new Set(categoryFilters)
    next.has(cat) ? next.delete(cat) : next.add(cat)
    setCategoryFilters(next)
  }

  const toggleBigNine = (area: BigNineArea) => {
    const next = new Set(bigNineFilters)
    next.has(area) ? next.delete(area) : next.add(area)
    setBigNineFilters(next)
  }

  const handleAnswer = (optionId: string) => {
    if (!question || answers[question.id]) return
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }))

    const isCorrect = question.options.find((o) => o.id === optionId)?.isCorrect ?? false
    addXP(isCorrect ? 10 : 5)
    addQuestionsAnswered(1)
    if (isCorrect) addCorrectAnswer()
    updateStreak()
  }

  const startSession = () => {
    setCurrentIndex(0)
    setAnswers({})
    setPhase('active')
  }

  const resetSession = () => {
    setPhase('setup')
    setCurrentIndex(0)
    setAnswers({})
    setCategoryFilters(new Set())
    setBigNineFilters(new Set())
  }

  // Count matching questions for the current filters
  const matchingCount = useMemo(() => {
    let pool = ALL_QUESTIONS
    if (categoryFilters.size > 0) {
      pool = pool.filter((q) => categoryFilters.has(q.contentCategory))
    }
    if (bigNineFilters.size > 0) {
      pool = pool.filter((q) => q.bigNine.some((b) => bigNineFilters.has(b as BigNineArea)))
    }
    return pool.length
  }, [categoryFilters, bigNineFilters])

  /* ===== PHASE 1: SESSION SETUP ===== */
  if (phase === 'setup') {
    return (
      <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
        <div className="mb-8 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h1 className="font-display text-2xl text-text-primary">Study Mode</h1>
          <Badge variant="primary">Untimed</Badge>
        </div>

        {/* Mode Selection */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => setStudyMode('smart')}
            className={`rounded-xl border-2 p-5 text-left transition-all ${
              studyMode === 'smart' ? 'border-primary bg-primary-light' : 'border-border bg-surface hover:border-primary/30'
            }`}
          >
            <div className="mb-2 flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-body text-base font-semibold text-text-primary">Smart Practice</span>
            </div>
            <p className="font-body text-sm text-text-secondary">Randomized questions. Filters optional.</p>
          </button>
          <button
            onClick={() => setStudyMode('free')}
            className={`rounded-xl border-2 p-5 text-left transition-all ${
              studyMode === 'free' ? 'border-primary bg-primary-light' : 'border-border bg-surface hover:border-primary/30'
            }`}
          >
            <div className="mb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-body text-base font-semibold text-text-primary">Free Study</span>
            </div>
            <p className="font-body text-sm text-text-secondary">Sequential order. Browse all questions.</p>
          </button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <h3 className="mb-4 font-body text-sm font-semibold text-text-primary">Content Categories</h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_KEYS.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
                  categoryFilters.has(cat)
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-surface text-text-secondary hover:border-primary/40'
                }`}
              >
                {CONTENT_CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </Card>

        <Card className="mb-6">
          <h3 className="mb-4 font-body text-sm font-semibold text-text-primary">Big Nine Areas</h3>
          <div className="flex flex-wrap gap-2">
            {BIG_NINE_KEYS.map((area) => (
              <button
                key={area}
                onClick={() => toggleBigNine(area)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                  bigNineFilters.has(area)
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-surface text-text-secondary hover:border-primary/40'
                }`}
              >
                {BIG_NINE_LABELS[area]}
              </button>
            ))}
          </div>
        </Card>

        {/* Session Length */}
        <Card className="mb-8">
          <h3 className="mb-4 font-body text-sm font-semibold text-text-primary">Session Length</h3>
          <div className="flex flex-wrap gap-2">
            {SESSION_LENGTHS.map((len) => (
              <button
                key={len}
                onClick={() => setSessionLength(len)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all ${
                  sessionLength === len
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-surface text-text-secondary hover:border-primary/40'
                }`}
              >
                {len} Questions
              </button>
            ))}
          </div>
          <p className="mt-3 font-body text-xs text-text-muted">
            {matchingCount} questions match your filters
          </p>
        </Card>

        <Button variant="primary" size="lg" className="w-full" onClick={startSession} disabled={matchingCount === 0}>
          Start Session
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  /* ===== PHASE 3: SESSION SUMMARY ===== */
  if (phase === 'summary') {
    const elapsed = Math.round((Date.now() - sessionStartTime) / 60000)
    return (
      <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
        <Card className="text-center">
          <Target className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="mb-2 font-display text-3xl text-text-primary">Session Complete</h1>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <p className="font-mono text-3xl font-bold text-text-primary">{Object.keys(answers).length}</p>
              <p className="mt-1 font-body text-sm text-text-muted">Answered</p>
            </div>
            <div>
              <p className={`font-mono text-3xl font-bold ${sessionAccuracy >= 70 ? 'text-success' : sessionAccuracy >= 50 ? 'text-warning' : 'text-error'}`}>
                {sessionAccuracy}%
              </p>
              <p className="mt-1 font-body text-sm text-text-muted">Accuracy</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold text-text-primary">{elapsed}m</p>
              <p className="mt-1 font-body text-sm text-text-muted">Time</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="primary" onClick={startSession}>
              <Zap className="h-4 w-4" />
              Continue Studying
            </Button>
            <Button variant="outline" onClick={resetSession}>
              <RotateCcw className="h-4 w-4" />
              New Session
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  /* ===== PHASE 2: ACTIVE STUDY ===== */
  if (!question) {
    setPhase('summary')
    return null
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h1 className="font-display text-xl text-text-primary">Study Mode</h1>
          <Badge variant="primary">Untimed</Badge>
        </div>
        <div className="flex items-center gap-4 font-body text-sm text-text-muted">
          <span>Accuracy: <strong className="text-text-primary">{sessionAccuracy}%</strong></span>
          <span>{Object.keys(answers).length}/{sessionQuestions.length} answered</span>
        </div>
      </div>

      <QuestionCard
        key={question.id}
        questionId={question.id}
        stem={question.stem}
        options={question.options}
        explanation={question.explanation}
        incorrectExplanations={question.incorrectExplanations}
        contentCategory={question.contentCategory}
        difficulty={question.difficulty}
        bigNine={question.bigNine}
        questionNumber={currentIndex + 1}
        totalQuestions={sessionQuestions.length}
        mode="study"
        selectedOptionId={answers[question.id] ?? null}
        onAnswer={handleAnswer}
        onNext={() => {
          if (currentIndex + 1 >= sessionQuestions.length) {
            setPhase('summary')
          } else {
            setCurrentIndex(currentIndex + 1)
          }
        }}
        onPrev={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
        onRequestAIRationale={() => {/* Claude API call */}}
      />
    </div>
  )
}
