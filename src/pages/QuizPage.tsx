import { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Layers, Play, ArrowLeft, Trophy } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import QuestionCard from '@/components/question/QuestionCard'
import {
  PageEmptyState,
  PageErrorState,
  PageLoadingState,
} from '@/components/shared/PageStates'
import { useQuestionBank } from '@/hooks/useQuestionBank'
import { CONTENT_CATEGORY_LABELS, BIG_NINE_LABELS, DIFFICULTY_LABELS } from '@/types/question'
import type { ContentCategory, BigNineArea, Difficulty } from '@/types/question'
import { useSettingsStore } from '@/stores/settingsStore'
import { useGamificationStore } from '@/stores/gamificationStore'
import type { QuestionBankItem } from '@/lib/questionBank'
import { useAttempts } from '@/hooks/useAttempts'

function shuffle<T>(items: T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = next[i]
    next[i] = next[j]!
    next[j] = temp!
  }
  return next
}

export default function QuizPage() {
  const location = useLocation()
  const locationState = location.state as {
    preselectedCategory?: ContentCategory
    preselectedBigNine?: BigNineArea[]
    preselectedQuestionCount?: number
  } | null
  const { questions: questionBank, loading, error } = useQuestionBank()
  const { recordAttempt } = useAttempts()
  const defaultQuizLength = useSettingsStore((s) => s.defaultQuizLength)
  const addXP = useGamificationStore((s) => s.addXP)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)
  const addCorrectAnswer = useGamificationStore((s) => s.addCorrectAnswer)
  const updateStreak = useGamificationStore((s) => s.updateStreak)

  const [selectedCategories, setSelectedCategories] = useState<Set<ContentCategory>>(
    () => new Set(locationState?.preselectedCategory ? [locationState.preselectedCategory] : []),
  )
  const [selectedBigNine, setSelectedBigNine] = useState<Set<BigNineArea>>(
    () => new Set(locationState?.preselectedBigNine ?? []),
  )
  const [selectedDifficulty, setSelectedDifficulty] = useState<Set<Difficulty>>(new Set())
  const [questionCount, setQuestionCount] = useState(locationState?.preselectedQuestionCount ?? defaultQuizLength)

  const [quizStarted, setQuizStarted] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState<QuestionBankItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const toggleSet = <T,>(set: Set<T>, value: T): Set<T> => {
    const next = new Set(set)
    if (next.has(value)) next.delete(value)
    else next.add(value)
    return next
  }

  const matchingCount = useMemo(() => {
    let pool = questionBank
    if (selectedCategories.size > 0) pool = pool.filter((q) => selectedCategories.has(q.contentCategory))
    if (selectedBigNine.size > 0) pool = pool.filter((q) => q.bigNine.some((a) => selectedBigNine.has(a as BigNineArea)))
    if (selectedDifficulty.size > 0) pool = pool.filter((q) => selectedDifficulty.has(q.difficulty))
    return pool.length
  }, [questionBank, selectedCategories, selectedBigNine, selectedDifficulty])

  const handleStartQuiz = () => {
    let filtered = [...questionBank]

    if (selectedCategories.size > 0) {
      filtered = filtered.filter((q) => selectedCategories.has(q.contentCategory))
    }
    if (selectedBigNine.size > 0) {
      filtered = filtered.filter((q) =>
        q.bigNine.some((area) => selectedBigNine.has(area as BigNineArea)),
      )
    }
    if (selectedDifficulty.size > 0) {
      filtered = filtered.filter((q) => selectedDifficulty.has(q.difficulty))
    }

    const shuffled = shuffle(filtered)
    const selected = shuffled.slice(0, questionCount)

    if (selected.length === 0) return

    setQuizQuestions(selected)
    setCurrentIndex(0)
    setAnswers({})
    setQuizFinished(false)
    setQuizStarted(true)
    updateStreak()
  }

  const handleAnswer = (questionId: string, optionId: string) => {
    if (answers[questionId]) return
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))

    const question = quizQuestions.find((q) => q.id === questionId)
    if (!question) return

    const isCorrect = question.options.find((o) => o.id === optionId)?.isCorrect ?? false
    addXP(isCorrect ? 10 : 5)
    addQuestionsAnswered(1)
    if (isCorrect) addCorrectAnswer()
    void recordAttempt({
      questionId,
      selectedAnswer: optionId,
      isCorrect,
      mode: 'quiz',
    })
  }

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setQuizFinished(true)
    }
  }

  const handleBackToBuilder = () => {
    setQuizStarted(false)
    setQuizFinished(false)
    setQuizQuestions([])
    setCurrentIndex(0)
    setAnswers({})
  }

  const results = useMemo(() => {
    if (!quizFinished) return null
    let correct = 0
    for (const q of quizQuestions) {
      const ans = answers[q.id]
      if (ans) {
        const opt = q.options.find((o) => o.id === ans)
        if (opt?.isCorrect) correct++
      }
    }
    const total = quizQuestions.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    return { correct, total, percentage }
  }, [quizFinished, quizQuestions, answers])

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
        message="Your Supabase project does not have published quiz questions yet."
      />
    )
  }

  // Results screen
  if (quizFinished && results) {
    const grade =
      results.percentage >= 80 ? 'Excellent' : results.percentage >= 60 ? 'Good' : 'Keep Practicing'
    const gradeColor =
      results.percentage >= 80
        ? 'text-success'
        : results.percentage >= 60
          ? 'text-warning'
          : 'text-error'

    return (
      <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
        <Card variant="elevated" className="text-center">
          <Trophy className="mx-auto mb-4 h-16 w-16 text-secondary" />
          <h1 className="mb-2 font-display text-3xl text-text-primary">Quiz Complete!</h1>
          <p className={`mb-6 font-display text-xl ${gradeColor}`}>{grade}</p>

          <div className="mb-8 flex justify-center gap-6">
            <div>
              <p className="font-mono text-4xl font-bold text-text-primary">{results.correct}</p>
              <p className="font-body text-sm text-text-muted">Correct</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-mono text-4xl font-bold text-text-primary">{results.total}</p>
              <p className="font-body text-sm text-text-muted">Total</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-mono text-4xl font-bold text-text-primary">{results.percentage}%</p>
              <p className="font-body text-sm text-text-muted">Accuracy</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="md" onClick={handleBackToBuilder}>
              <ArrowLeft className="h-4 w-4" />
              New Quiz
            </Button>
            <Button variant="primary" size="md" onClick={handleStartQuiz}>
              <Play className="h-4 w-4" />
              Retry Same Filters
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  // Active quiz
  if (quizStarted && quizQuestions.length > 0) {
    const question = quizQuestions[currentIndex]
    if (!question) return null

    return (
      <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={handleBackToBuilder}
            className="flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Builder
          </button>
          <div className="flex-1" />
          <Badge variant="success">Custom Quiz</Badge>
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
          totalQuestions={quizQuestions.length}
          mode="study"
          selectedOptionId={answers[question.id] ?? null}
          onAnswer={(optionId) => handleAnswer(question.id, optionId)}
          onNext={handleNext}
          onPrev={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
        />
      </div>
    )
  }

  // Builder UI
  return (
    <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <Layers className="h-6 w-6 text-success" />
        <h1 className="font-display text-2xl text-text-primary">Custom Quiz Builder</h1>
      </div>

      {/* Category Filter */}
      <Card className="mb-6">
        <h2 className="mb-4 font-display text-lg text-text-primary">Content Categories</h2>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(CONTENT_CATEGORY_LABELS) as [ContentCategory, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategories(toggleSet(selectedCategories, key))}
              className={`rounded-xl border px-4 py-2 font-body text-sm transition-all ${
                selectedCategories.has(key)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-text-secondary hover:border-primary/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Big Nine Filter */}
      <Card className="mb-6">
        <h2 className="mb-4 font-display text-lg text-text-primary">Big Nine Areas</h2>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(BIG_NINE_LABELS) as [BigNineArea, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedBigNine(toggleSet(selectedBigNine, key))}
              className={`rounded-xl border px-4 py-2 font-body text-sm transition-all ${
                selectedBigNine.has(key)
                  ? 'border-secondary bg-secondary/10 text-secondary'
                  : 'border-border text-text-secondary hover:border-secondary/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Difficulty Filter */}
      <Card className="mb-6">
        <h2 className="mb-4 font-display text-lg text-text-primary">Difficulty</h2>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(DIFFICULTY_LABELS) as [Difficulty, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedDifficulty(toggleSet(selectedDifficulty, key))}
              className={`rounded-xl border px-4 py-2 font-body text-sm transition-all ${
                selectedDifficulty.has(key)
                  ? 'border-success bg-success/10 text-success'
                  : 'border-border text-text-secondary hover:border-success/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Question Count */}
      <Card className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-display text-lg text-text-primary">Number of Questions</h2>
          <span className="font-body text-xs text-text-muted">Saved default: {defaultQuizLength}</span>
        </div>
        <div className="flex items-center gap-4">
          {[10, 20, 30, 50].map((count) => (
            <button
              key={count}
              onClick={() => setQuestionCount(count)}
              className={`flex h-12 w-12 items-center justify-center rounded-xl border font-mono text-sm font-bold transition-all ${
                questionCount === count
                  ? 'border-primary bg-primary text-white'
                  : 'border-border text-text-secondary hover:border-primary/50'
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </Card>

      {/* Summary + Start */}
      <Card variant="elevated" className="text-center">
        <div className="mb-3 flex flex-wrap justify-center gap-2 sm:gap-3">
          <Badge variant="primary">{selectedCategories.size || 3} Categories</Badge>
          <Badge variant="secondary">{selectedBigNine.size || 9} Big Nine</Badge>
          <Badge variant="success">{questionCount} Questions</Badge>
        </div>
        <p className="mb-4 font-body text-xs text-text-muted">{matchingCount} questions match your filters</p>
        <Button variant="primary" size="lg" onClick={handleStartQuiz} disabled={matchingCount === 0}>
          <Play className="h-5 w-5" />
          Start Quiz
        </Button>
      </Card>
    </div>
  )
}
