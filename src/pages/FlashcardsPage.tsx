import { useState, useRef, useMemo } from 'react'
import { RotateCcw, ThumbsUp, ThumbsDown, Minus, Brain, ArrowRight, BookOpen } from 'lucide-react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import {
  PageEmptyState,
  PageErrorState,
  PageLoadingState,
} from '@/components/shared/PageStates'
import { useFlashcardBank } from '@/hooks/useFlashcardBank'
import { useGamificationStore } from '@/stores/gamificationStore'
import type { ContentCategory } from '@/types/question'

type FlyDirection = 'left' | 'center' | 'right' | null
type DeckChoice = 'all' | ContentCategory

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

export default function FlashcardsPage() {
  const { flashcards, loading, error } = useFlashcardBank()
  const [deckChoice, setDeckChoice] = useState<DeckChoice>('all')
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)
  const [flyDirection, setFlyDirection] = useState<FlyDirection>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const addXP = useGamificationStore((s) => s.addXP)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)
  const updateStreak = useGamificationStore((s) => s.updateStreak)

  const deckOptions = useMemo(() => ([
    {
      key: 'all' as const,
      label: 'All Cards',
      desc: 'Every flashcard across all categories',
      count: flashcards.length,
    },
    {
      key: 'I' as const,
      label: 'Category I',
      desc: 'Foundations & Professional Practice',
      count: flashcards.filter((card) => card.contentCategory === 'I').length,
    },
    {
      key: 'II' as const,
      label: 'Category II',
      desc: 'Screening, Assessment & Diagnosis',
      count: flashcards.filter((card) => card.contentCategory === 'II').length,
    },
    {
      key: 'III' as const,
      label: 'Category III',
      desc: 'Treatment Planning & Implementation',
      count: flashcards.filter((card) => card.contentCategory === 'III').length,
    },
  ]), [flashcards])

  const deck = useMemo(() => {
    const base = deckChoice === 'all'
      ? flashcards
      : flashcards.filter((card) => card.contentCategory === deckChoice)
    return shuffleArray(base)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckChoice, flashcards, started])

  const card = deck[currentIndex]

  const handleRate = (rating: 'easy' | 'medium' | 'hard') => {
    const dirMap: Record<string, FlyDirection> = { hard: 'left', medium: 'center', easy: 'right' }
    setFlyDirection(dirMap[rating] ?? null)
    setReviewed((r) => r + 1)

    addXP(5)
    addQuestionsAnswered(1)
    updateStreak()

    setTimeout(() => {
      setIsFlipped(false)
      setFlyDirection(null)
      setCurrentIndex((i) => (i + 1) % deck.length)
    }, 400)
  }

  const startDeck = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
    setReviewed(0)
    setFlyDirection(null)
    setStarted(true)
  }

  const resetDeck = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
    setReviewed(0)
    setFlyDirection(null)
    setStarted(false)
  }

  if (loading) {
    return <PageLoadingState message="Loading your hosted flashcard library..." />
  }

  if (error) {
    return <PageErrorState title="Flashcards Unavailable" message={error} />
  }

  if (flashcards.length === 0) {
    return (
      <PageEmptyState
        title="No Flashcards Available"
        message="Your Supabase project does not have published flashcards yet."
      />
    )
  }

  /* ===== DECK SELECTOR ===== */
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl pb-24 lg:pb-0">
        <div className="mb-8 flex items-center gap-3">
          <Brain className="h-6 w-6 text-warning" />
          <h1 className="font-display text-2xl text-text-primary">Flashcards</h1>
        </div>

        <p className="mb-6 font-body text-text-secondary">
          Choose a deck to study. Cards are shuffled each session.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {deckOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setDeckChoice(opt.key)}
              className={`rounded-xl border-2 p-5 text-left transition-all ${
                deckChoice === opt.key ? 'border-primary bg-primary-light' : 'border-border bg-surface hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-body text-base font-semibold text-text-primary">{opt.label}</span>
                <Badge variant="default">{opt.count}</Badge>
              </div>
              <p className="mt-1 font-body text-sm text-text-secondary">{opt.desc}</p>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="primary" size="lg" className="w-full" onClick={startDeck}>
            <BookOpen className="h-5 w-5" />
            Start Deck
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    )
  }

  /* ===== CARD REVIEW ===== */
  if (!card) return null

  const flyClass =
    flyDirection === 'left' ? 'fc-fly-left'
    : flyDirection === 'right' ? 'fc-fly-right'
    : flyDirection === 'center' ? 'fc-fly-up'
    : ''

  return (
    <div className="mx-auto max-w-2xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <Brain className="h-6 w-6 text-warning" />
        <h1 className="font-display text-2xl text-text-primary">Flashcards</h1>
        <Badge variant="warning">{reviewed} reviewed</Badge>
      </div>

      {/* Progress */}
      <div className="mb-6 h-1 overflow-hidden rounded-full bg-surface-elevated">
        <div
          className="h-full rounded-full bg-gradient-to-r from-warning to-secondary transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
        />
      </div>

      {/* Card stack + 3D flip */}
      <div className="fc-stack-wrapper relative" style={{ perspective: '1200px' }}>
        <div className="pointer-events-none absolute inset-0 z-0">
          <Card variant="elevated" className="min-h-[280px] translate-y-4 scale-[0.94] opacity-30 sm:min-h-[320px]">
            <div />
          </Card>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <Card variant="elevated" className="min-h-[280px] translate-y-2 scale-[0.97] opacity-50 sm:min-h-[320px]">
            <div />
          </Card>
        </div>

        <div
          ref={cardRef}
          onClick={() => !flyDirection && setIsFlipped(!isFlipped)}
          className={`fc-flip-container group relative z-[2] cursor-pointer ${flyClass}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === ' ' && !flyDirection && setIsFlipped(!isFlipped)}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="fc-flip-inner transition-transform duration-500"
            style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            <div className="fc-flip-face" style={{ backfaceVisibility: 'hidden' }}>
              <Card variant="elevated" className="relative min-h-[280px] sm:min-h-[320px]">
                <Badge variant="default" className="mb-4">{card.category}</Badge>
                <div className="flex min-h-[200px] flex-col items-center justify-center text-center sm:min-h-[240px]">
                  <p className="font-display text-xl text-text-primary sm:text-2xl md:text-3xl">{card.front}</p>
                  <p className="mt-6 font-body text-sm text-text-muted">Tap to reveal answer</p>
                </div>
              </Card>
            </div>

            <div className="fc-flip-face absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <Card variant="elevated" className="relative min-h-[280px] bg-surface-elevated sm:min-h-[320px]">
                <Badge variant="default" className="mb-4">{card.category}</Badge>
                <div className="flex min-h-[200px] flex-col justify-center sm:min-h-[240px]">
                  <p className="mb-2 font-body text-sm font-semibold text-secondary">{card.front}</p>
                  <p className="font-body leading-relaxed text-text-secondary">{card.back}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Rating buttons */}
      {isFlipped && !flyDirection && (
        <div className="mt-6 grid grid-cols-3 gap-3 sm:flex sm:justify-center sm:gap-4">
          <Button variant="outline" size="md" onClick={() => handleRate('hard')} className="w-full sm:w-auto">
            <ThumbsDown className="h-4 w-4 text-error" />
            Hard
          </Button>
          <Button variant="outline" size="md" onClick={() => handleRate('medium')} className="w-full sm:w-auto">
            <Minus className="h-4 w-4 text-warning" />
            Medium
          </Button>
          <Button variant="outline" size="md" onClick={() => handleRate('easy')} className="w-full sm:w-auto">
            <ThumbsUp className="h-4 w-4 text-success" />
            Easy
          </Button>
        </div>
      )}

      {/* Reset */}
      <div className="mt-8 text-center">
        <button
          onClick={resetDeck}
          className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-secondary"
        >
          <RotateCcw className="h-4 w-4" />
          Reset deck
        </button>
      </div>
    </div>
  )
}
