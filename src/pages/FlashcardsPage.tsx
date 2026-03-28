import { useState, useRef } from 'react'
import { RotateCcw, ThumbsUp, ThumbsDown, Minus, Brain } from 'lucide-react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import { category1Flashcards } from '@/data/flashcards-category-1'
import { category2Flashcards } from '@/data/flashcards-category-2'
import { category3Flashcards } from '@/data/flashcards-category-3'

const ALL_FLASHCARDS = [
  ...category1Flashcards,
  ...category2Flashcards,
  ...category3Flashcards,
]

type FlyDirection = 'left' | 'center' | 'right' | null

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)
  const [flyDirection, setFlyDirection] = useState<FlyDirection>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const card = ALL_FLASHCARDS[currentIndex]

  const handleRate = (rating: 'easy' | 'medium' | 'hard') => {
    const dirMap: Record<string, FlyDirection> = {
      hard: 'left',
      medium: 'center',
      easy: 'right',
    }
    setFlyDirection(dirMap[rating] ?? null)
    setReviewed((r) => r + 1)

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
        <Brain className="h-6 w-6 text-warning" />
        <h1 className="font-display text-2xl text-text-primary">Flashcards</h1>
        <Badge variant="warning">{reviewed} reviewed</Badge>
      </div>

      {/* Progress */}
      <div className="mb-6 h-1 overflow-hidden rounded-full bg-surface-elevated">
        <div
          className="h-full rounded-full bg-gradient-to-r from-warning to-secondary transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / ALL_FLASHCARDS.length) * 100}%` }}
        />
      </div>

      {/* Card stack + 3D flip */}
      <div
        className="fc-stack-wrapper relative"
        style={{ perspective: '1200px' }}
      >
        {/* Stack cards behind current */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Card
            variant="glass"
            className="min-h-[320px] translate-y-4 scale-[0.94] opacity-30"
          >
            <div />
          </Card>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <Card
            variant="glass"
            className="min-h-[320px] translate-y-2 scale-[0.97] opacity-50"
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
              <Card
                variant="glass"
                className="relative min-h-[320px]"
              >
                <Badge variant="default" className="mb-4">{card.category}</Badge>
                <div className="flex min-h-[240px] flex-col items-center justify-center text-center">
                  <p className="font-display text-2xl text-text-primary md:text-3xl">{card.front}</p>
                  <p className="mt-6 font-body text-sm text-text-muted">Tap to reveal answer</p>
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
                className="relative min-h-[320px] bg-surface-elevated"
              >
                <Badge variant="default" className="mb-4">{card.category}</Badge>
                <div className="flex min-h-[240px] flex-col justify-center">
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
        <div className="mt-6 flex justify-center gap-4">
          <Button variant="outline" size="md" onClick={() => handleRate('hard')}>
            <ThumbsDown className="h-4 w-4 text-error" />
            Hard
          </Button>
          <Button variant="outline" size="md" onClick={() => handleRate('medium')}>
            <Minus className="h-4 w-4 text-warning" />
            Medium
          </Button>
          <Button variant="outline" size="md" onClick={() => handleRate('easy')}>
            <ThumbsUp className="h-4 w-4 text-success" />
            Easy
          </Button>
        </div>
      )}

      {/* Reset */}
      <div className="mt-8 text-center">
        <button
          onClick={() => { setCurrentIndex(0); setIsFlipped(false); setReviewed(0); setFlyDirection(null) }}
          className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-secondary"
        >
          <RotateCcw className="h-4 w-4" />
          Reset deck
        </button>
      </div>
    </div>
  )
}
