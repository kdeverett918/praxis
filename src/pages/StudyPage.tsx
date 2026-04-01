import { useState, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { GraduationCap, Brain, BookOpen, ArrowRight, Target, Zap, RotateCcw } from 'lucide-react'
import QuestionCard from '@/components/question/QuestionCard'
import { SwipeableCardStack, SwipeKeyboardHints, SwipeHint } from '@/components/swipe'
import StoryProgressBar from '@/components/shared/StoryProgressBar'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import {
  PageEmptyState,
  PageErrorState,
  PageLoadingState,
} from '@/components/shared/PageStates'
import { useAttempts } from '@/hooks/useAttempts'
import { useQuestionBank } from '@/hooks/useQuestionBank'
import { useGamificationStore } from '@/stores/gamificationStore'
import { useSettingsStore } from '@/stores/settingsStore'
import type { ContentCategory, BigNineArea } from '@/types/question'
import { CONTENT_CATEGORY_LABELS, BIG_NINE_LABELS } from '@/types/question'

type Phase = 'setup' | 'active' | 'summary'
type StudyMode = 'smart' | 'free'

const SESSION_LENGTHS = [10, 25, 50] as const
const SESSION_LENGTH_DETAILS = {
  10: {
    label: 'Clinic-day sprint',
    desc: 'Best for a quick block before clinic, between classes, or on your commute home.',
  },
  25: {
    label: 'Daily core session',
    desc: 'A solid weekday block for targeted practice and explanation review.',
  },
  50: {
    label: 'Weekend reset',
    desc: 'Use this when you have time to settle in and cover a full mixed set.',
  },
} as const
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

type StudyLocationState = {
  preselectedCategory?: ContentCategory
  preselectedBigNine?: BigNineArea[]
  preselectedSessionLength?: number
  preselectedStudyMode?: StudyMode
} | null

export default function StudyPage() {
  const location = useLocation()
  const locationState = location.state as StudyLocationState
  const { questions: questionBank, loading, error } = useQuestionBank()
  const { recordAttempt } = useAttempts()
  const [phase, setPhase] = useState<Phase>('setup')
  const [studyMode, setStudyMode] = useState<StudyMode>(locationState?.preselectedStudyMode ?? 'smart')
  const [sessionLength, setSessionLength] = useState<number>(locationState?.preselectedSessionLength ?? 25)
  const [categoryFilters, setCategoryFilters] = useState<Set<ContentCategory>>(
    () => new Set(locationState?.preselectedCategory ? [locationState.preselectedCategory] : []),
  )
  const [bigNineFilters, setBigNineFilters] = useState<Set<BigNineArea>>(
    () => new Set(locationState?.preselectedBigNine ?? []),
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null)
  const [sessionElapsedMinutes, setSessionElapsedMinutes] = useState(0)
  const [sessionSeed, setSessionSeed] = useState(0)

  const addXP = useGamificationStore((s) => s.addXP)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)
  const addCorrectAnswer = useGamificationStore((s) => s.addCorrectAnswer)
  const updateStreak = useGamificationStore((s) => s.updateStreak)

  const sessionQuestions = useMemo(() => {
    let pool = [...questionBank]

    if (categoryFilters.size > 0) {
      pool = pool.filter((q) => categoryFilters.has(q.contentCategory))
    }
    if (bigNineFilters.size > 0) {
      pool = pool.filter((q) => q.bigNine.some((b) => bigNineFilters.has(b as BigNineArea)))
    }

    if (studyMode === 'free') {
      return pool.slice(0, sessionLength)
    }

    void sessionSeed
    return shuffleArray(pool).slice(0, sessionLength)
  }, [bigNineFilters, categoryFilters, questionBank, sessionLength, sessionSeed, studyMode])

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
    if (next.has(cat)) {
      next.delete(cat)
    } else {
      next.add(cat)
    }
    setCategoryFilters(next)
  }

  const toggleBigNine = (area: BigNineArea) => {
    const next = new Set(bigNineFilters)
    if (next.has(area)) {
      next.delete(area)
    } else {
      next.add(area)
    }
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
    void recordAttempt({
      questionId: question.id,
      selectedAnswer: optionId,
      isCorrect,
      mode: 'study',
    })
  }

  const startSession = () => {
    setCurrentIndex(0)
    setAnswers({})
    setSessionStartTime(Date.now())
    setSessionElapsedMinutes(0)
    setSessionSeed((seed) => seed + 1)
    setPhase('active')
  }

  const resetSession = () => {
    setPhase('setup')
    setCurrentIndex(0)
    setAnswers({})
    setSessionStartTime(null)
    setSessionElapsedMinutes(0)
    setCategoryFilters(new Set())
    setBigNineFilters(new Set())
  }

  const completeSession = useCallback(() => {
    setSessionElapsedMinutes(
      sessionStartTime ? Math.max(1, Math.round((Date.now() - sessionStartTime) / 60000)) : 0,
    )
    setPhase('summary')
  }, [sessionStartTime])

  // Count matching questions for the current filters
  const matchingCount = useMemo(() => {
    let pool = questionBank
    if (categoryFilters.size > 0) {
      pool = pool.filter((q) => categoryFilters.has(q.contentCategory))
    }
    if (bigNineFilters.size > 0) {
      pool = pool.filter((q) => q.bigNine.some((b) => bigNineFilters.has(b as BigNineArea)))
    }
    return pool.length
  }, [bigNineFilters, categoryFilters, questionBank])

  const swipeMode = useSettingsStore((s) => s.swipeMode)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
  const useSwipe = swipeMode === 'swipe' || (swipeMode === 'auto' && isMobile)

  const handleSwipeAdvance = useCallback(() => {
    if (currentIndex + 1 >= sessionQuestions.length) {
      completeSession()
      return
    }

    setCurrentIndex(currentIndex + 1)
  }, [completeSession, currentIndex, sessionQuestions.length])

  const answeredSet = useMemo(() => new Set(
    Object.keys(answers).map((qId) => sessionQuestions.findIndex((q) => q.id === qId)).filter((i) => i >= 0),
  ), [answers, sessionQuestions])

  const correctMap = useMemo(() => {
    const map = new Map<number, boolean>()
    Object.entries(answers).forEach(([qId, optId]) => {
      const idx = sessionQuestions.findIndex((q) => q.id === qId)
      if (idx >= 0) {
        const q = sessionQuestions[idx]
        map.set(idx, q?.options.find((o) => o.id === optId)?.isCorrect ?? false)
      }
    })
    return map
  }, [answers, sessionQuestions])

  if (loading) {
    return <PageLoadingState message="Loading your hosted question bank..." />
  }

  if (error) {
    return <PageErrorState title="Question Bank Unavailable" message={error} />
  }

  if (questionBank.length === 0) {
    return (
      <PageEmptyState
        title="No Questions Available"
        message="Your Supabase project does not have published study questions yet."
      />
    )
  }

  /* ===== PHASE 1: SESSION SETUP ===== */
  if (phase === 'setup') {
    return (
      <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
        <div className="mb-8 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h1 className="font-display text-2xl text-text-primary">Study Mode</h1>
          <Badge variant="primary">Untimed</Badge>
        </div>

        <p className="mb-8 font-body text-sm leading-relaxed text-text-secondary">
          Choose the study flow that fits your week. Smart Practice is best for short targeted reps. Free Study is best when you want to move through a category in order.
        </p>

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
            <p className="font-body text-sm text-text-secondary">Mixed questions for fast weak-area review when you want variety.</p>
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
            <p className="font-body text-sm text-text-secondary">Sequential order so you can work through content predictably.</p>
          </button>
        </div>

        <p className="mb-8 rounded-xl border border-border bg-surface px-4 py-3 font-body text-sm text-text-secondary">
          {studyMode === 'smart'
            ? 'Use Smart Practice when you only have a short block and want a mixed review set.'
            : 'Use Free Study when you want a steadier pass through the content without reshuffling.'}
        </p>

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

        {studyMode === 'smart' ? (
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
            <p className="mt-2 font-body text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">
                {SESSION_LENGTH_DETAILS[sessionLength as keyof typeof SESSION_LENGTH_DETAILS].label}:
              </span>{' '}
              {SESSION_LENGTH_DETAILS[sessionLength as keyof typeof SESSION_LENGTH_DETAILS].desc}
            </p>
          </Card>
        ) : (
          <Card className="mb-8">
            <h3 className="mb-4 font-body text-sm font-semibold text-text-primary">Study Flow</h3>
            <p className="font-body text-sm leading-relaxed text-text-secondary">
              You will move through <span className="font-semibold text-text-primary">{matchingCount}</span> matching questions in sequence.
              This is useful when you want a steadier review of one category or weak area without reshuffling.
            </p>
          </Card>
        )}

        <Button variant="primary" size="lg" className="w-full" onClick={startSession} disabled={matchingCount === 0}>
          {studyMode === 'smart' ? 'Start Session' : 'Browse Questions'}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  /* ===== PHASE 3: SESSION SUMMARY ===== */
  if (phase === 'summary') {
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
              <p className="font-mono text-3xl font-bold text-text-primary">{sessionElapsedMinutes}m</p>
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
    return null
  }

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h1 className="font-display text-xl text-text-primary">Study Mode</h1>
          <Badge variant="primary">Untimed</Badge>
          <Badge variant="default">{studyMode === 'smart' ? 'Smart Practice' : 'Free Study'}</Badge>
        </div>
        <div className="flex items-center gap-4 font-body text-sm text-text-muted">
          <span>Accuracy: <strong className="text-text-primary">{sessionAccuracy}%</strong></span>
          <span>{Object.keys(answers).length}/{sessionQuestions.length} answered</span>
        </div>
      </div>

      {/* Stories-style progress bar */}
      <StoryProgressBar
        total={sessionQuestions.length}
        currentIndex={currentIndex}
        answered={answeredSet}
        correctMap={correctMap}
        className="mb-6"
      />

      {useSwipe ? (
        <div className="relative">
          <SwipeableCardStack
            items={sessionQuestions}
            currentIndex={currentIndex}
            disabled={!answers[question.id]}
            onSwipeRight={handleSwipeAdvance}
            onSwipeLeft={handleSwipeAdvance}
            rightLabel="Next"
            leftLabel="Skip"
            onCardChange={(idx) => {
              if (idx >= sessionQuestions.length) {
                setPhase('summary')
              } else {
                setCurrentIndex(idx)
              }
            }}
            renderCard={(q, idx) => (
              <QuestionCard
                key={q.id}
                questionId={q.id}
                stem={q.stem}
                options={q.options}
                explanation={q.explanation}
                incorrectExplanations={q.incorrectExplanations}
                contentCategory={q.contentCategory}
                difficulty={q.difficulty}
                bigNine={q.bigNine}
                questionNumber={idx + 1}
                totalQuestions={sessionQuestions.length}
                mode="study"
                selectedOptionId={answers[q.id] ?? null}
                onAnswer={handleAnswer}
                onNext={handleSwipeAdvance}
                onPrev={() => setCurrentIndex(Math.max(idx - 1, 0))}
                hideNav
              />
            )}
          />
          <SwipeHint />
          <SwipeKeyboardHints className="mt-4" />
        </div>
      ) : (
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
              completeSession()
            } else {
              setCurrentIndex(currentIndex + 1)
            }
          }}
          onPrev={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
        />
      )}
    </div>
  )
}
