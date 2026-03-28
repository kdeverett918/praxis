import { useState, useRef } from 'react'
import { RotateCcw, ThumbsUp, ThumbsDown, Minus, Brain } from 'lucide-react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import { category1Flashcards } from '@/data/flashcards-category-1'
import { category2Flashcards } from '@/data/flashcards-category-2'
import { category3Flashcards } from '@/data/flashcards-category-3'
import { useGamificationStore } from '@/stores/gamificationStore'

const ALL_FLASHCARDS = [...category1Flashcards, ...category2Flashcards, ...category3Flashcards]

type FlyDirection = 'left' | 'center' | 'right' | null

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)
  const [flyDirection, setFlyDirection] = useState<FlyDirection>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const addXP = useGamificationStore((s) => s.addXP)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)
  const updateStreak = useGamificationStore((s) => s.updateStreak)

  const card = ALL_FLASHCARDS[currentIndex]

  const handleRate = (rating: 'easy' | 'medium' | 'hard') => {
    const dirMap: Record<string, FlyDirection> = {
      hard: 'left',
      medium: 'center',
      easy: 'right',
    }
    setFlyDirection(dirMap[rating] ?? null)
    setReviewed((r) => r + 1)

    addXP(5)
    addQuestionsAnswered(1)
    updateStreak()

    setTimeout(() => {
      setIsFlipped(false)
      setFlyDirection(null)
      setCurrentIndex((i) => (i + 1) % ALL_FLASHCARDS.length)
    }, 400)
  }

  if (!card) return null

  const flyClass =
    flyDirection === 'left'
      ? 'fc-fly-left'
      : flyDirection === 'right'
        ? 'fc-fly-right'
        : flyDirection === 'center'
          ? 'fc-fly-up'
          : ''

  return (
    <div className="mx-auto max-w-2xl pb-24 lg:pb-0">
      <div className="mb-8 flex items-center gap-3">
        <Brain className="text-warning h-6 w-6" />
        <h1 className="font-display text-text-primary text-2xl">Flashcards</h1>
        <Badge variant="warning">{reviewed} reviewed</Badge>
      </div>

      {/* Progress */}
      <div className="bg-surface-elevated mb-6 h-1 overflow-hidden rounded-full">
        <div
          className="from-warning to-secondary h-full rounded-full bg-gradient-to-r transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / ALL_FLASHCARDS.length) * 100}%` }}
        />
      </div>

      {/* Card stack + 3D flip */}
      <div className="fc-stack-wrapper relative" style={{ perspective: '1200px' }}>
        {/* Stack cards behind current */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Card
            variant="glass"
            className="min-h-[280px] translate-y-4 scale-[0.94] opacity-30 sm:min-h-[320px]"
          >
            <div />
          </Card>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <Card
            variant="glass"
            className="min-h-[280px] translate-y-2 scale-[0.97] opacity-50 sm:min-h-[320px]"
          >
            <div />
          </Card>
        </div>

        {/* Active card with 3D flip */}
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
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front face */}
            <div className="fc-flip-face" style={{ backfaceVisibility: 'hidden' }}>
              <Card variant="glass" className="relative min-h-[280px] sm:min-h-[320px]">
                <Badge variant="default" className="mb-4">
                  {card.category}
                </Badge>
                <div className="flex min-h-[200px] flex-col items-center justify-center text-center sm:min-h-[240px]">
                  <p className="font-display text-text-primary text-xl sm:text-2xl md:text-3xl">
                    {card.front}
                  </p>
                  <p className="font-body text-text-muted mt-6 text-sm">Tap to reveal answer</p>
                </div>
              </Card>
            </div>

            {/* Back face */}
            <div
              className="fc-flip-face absolute inset-0"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <Card
                variant="glass"
                className="bg-surface-elevated relative min-h-[280px] sm:min-h-[320px]"
              >
                <Badge variant="default" className="mb-4">
                  {card.category}
                </Badge>
                <div className="flex min-h-[200px] flex-col justify-center sm:min-h-[240px]">
                  <p className="font-body text-secondary mb-2 text-sm font-semibold">
                    {card.front}
                  </p>
                  <p className="font-body text-text-secondary leading-relaxed">{card.back}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Rating buttons */}
      {isFlipped && !flyDirection && (
        <div className="mt-6 grid grid-cols-3 gap-3 sm:flex sm:justify-center sm:gap-4">
          <Button
            variant="outline"
            size="md"
            onClick={() => handleRate('hard')}
            className="w-full sm:w-auto"
          >
            <ThumbsDown className="text-error h-4 w-4" />
            Hard
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => handleRate('medium')}
            className="w-full sm:w-auto"
          >
            <Minus className="text-warning h-4 w-4" />
            Medium
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => handleRate('easy')}
            className="w-full sm:w-auto"
          >
            <ThumbsUp className="text-success h-4 w-4" />
            Easy
          </Button>
        </div>
      )}

      {/* Reset */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setCurrentIndex(0)
            setIsFlipped(false)
            setReviewed(0)
            setFlyDirection(null)
          }}
          className="font-body text-text-muted hover:text-text-secondary inline-flex items-center gap-2 text-sm"
        >
          <RotateCcw className="h-4 w-4" />
          Reset deck
        </button>
      </div>
    </div>
  )
}
