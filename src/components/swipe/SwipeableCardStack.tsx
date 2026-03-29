import { useCallback, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
} from 'motion/react'
import { Check, SkipForward, Flag } from 'lucide-react'
import { useSwipeKeyboard } from '@/hooks/useSwipeKeyboard'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useSettingsStore } from '@/stores/settingsStore'
import { haptics } from '@/lib/haptics'

const SENSITIVITY_MAP = {
  low: { distance: 160, velocity: 700, maxRotation: 10 },
  medium: { distance: 120, velocity: 500, maxRotation: 12 },
  high: { distance: 80, velocity: 300, maxRotation: 15 },
}

interface SwipeableCardStackProps<T> {
  items: T[]
  currentIndex: number
  renderCard: (item: T, index: number) => React.ReactNode
  onSwipeRight?: (item: T, index: number) => void
  onSwipeLeft?: (item: T, index: number) => void
  onSwipeUp?: (item: T, index: number) => void
  onCardChange?: (newIndex: number) => void
  disabled?: boolean
  rightLabel?: string
  leftLabel?: string
  upLabel?: string
  className?: string
}

export default function SwipeableCardStack<T>({
  items,
  currentIndex,
  renderCard,
  onSwipeRight,
  onSwipeLeft,
  onSwipeUp,
  onCardChange,
  disabled = false,
  rightLabel = 'Next',
  leftLabel = 'Skip',
  upLabel = 'Flag',
  className = '',
}: SwipeableCardStackProps<T>) {
  const reducedMotion = useReducedMotion()
  const sensitivity = useSettingsStore((s) => s.swipeSensitivity)
  const hapticEnabled = useSettingsStore((s) => s.hapticFeedback)
  const config = SENSITIVITY_MAP[sensitivity]
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | 'up' | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const motionX = useMotionValue(0)
  const motionY = useMotionValue(0)

  const rotation = useTransform(
    motionX,
    [-200, 0, 200],
    [-config.maxRotation, 0, config.maxRotation],
  )

  const rightOpacity = useTransform(motionX, [0, config.distance], [0, 0.8])
  const leftOpacity = useTransform(motionX, [0, -config.distance], [0, 0.8])
  const upOpacity = useTransform(motionY, [0, -config.distance], [0, 0.8])

  // Behind cards peek up as you drag
  const behindScale = useTransform(
    motionX,
    [-config.distance, 0, config.distance],
    [1, 0.95, 1],
  )
  const behindY = useTransform(
    motionX,
    [-config.distance, 0, config.distance],
    [0, 8, 0],
  )

  const currentItem = items[currentIndex]
  const nextItem = currentIndex + 1 < items.length ? items[currentIndex + 1] : null
  const thirdItem = currentIndex + 2 < items.length ? items[currentIndex + 2] : null

  const handleSwipe = useCallback(
    (direction: 'left' | 'right' | 'up') => {
      if (disabled || !currentItem) return
      setExitDirection(direction)
      if (hapticEnabled) haptics.medium()

      // Delay the callback slightly to let exit animation start
      setTimeout(() => {
        switch (direction) {
          case 'right':
            onSwipeRight?.(currentItem, currentIndex)
            break
          case 'left':
            onSwipeLeft?.(currentItem, currentIndex)
            break
          case 'up':
            onSwipeUp?.(currentItem, currentIndex)
            break
        }
        onCardChange?.(currentIndex + 1)
        setExitDirection(null)
        motionX.set(0)
        motionY.set(0)
      }, reducedMotion ? 0 : 200)
    },
    [
      disabled,
      currentItem,
      currentIndex,
      hapticEnabled,
      reducedMotion,
      onSwipeRight,
      onSwipeLeft,
      onSwipeUp,
      onCardChange,
      motionX,
      motionY,
    ],
  )

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (disabled) return

      const { offset, velocity } = info
      const absX = Math.abs(offset.x)
      const absY = Math.abs(offset.y)

      if (absX > absY) {
        const triggered =
          absX > config.distance ||
          Math.abs(velocity.x) > config.velocity
        if (triggered) {
          handleSwipe(offset.x > 0 ? 'right' : 'left')
          return
        }
      } else {
        const triggered =
          absY > config.distance ||
          Math.abs(velocity.y) > config.velocity
        if (triggered && offset.y < 0) {
          handleSwipe('up')
          return
        }
      }

      // Snap back
      motionX.set(0)
      motionY.set(0)
    },
    [disabled, config, handleSwipe, motionX, motionY],
  )

  // Keyboard navigation
  useSwipeKeyboard({
    onRight: () => handleSwipe('right'),
    onLeft: () => handleSwipe('left'),
    onUp: () => handleSwipe('up'),
    enabled: !disabled && !!currentItem,
  })

  if (!currentItem) {
    return (
      <div className={`flex items-center justify-center py-20 ${className}`}>
        <p className="font-body text-text-muted">No more cards</p>
      </div>
    )
  }

  const exitVariants = {
    left: { x: '-150%', rotate: -30, opacity: 0 },
    right: { x: '150%', rotate: 30, opacity: 0 },
    up: { y: '-120%', scale: 0.9, opacity: 0 },
  }

  const animDuration = reducedMotion ? 0 : 0.25

  return (
    <div
      ref={containerRef}
      className={`swipe-card-stack relative ${className}`}
      role="region"
      aria-label="Swipeable card stack"
      aria-roledescription="swipeable card deck"
    >
      {/* Background cards */}
      <div className="pointer-events-none absolute inset-0">
        {thirdItem && (
          <motion.div
            className="absolute inset-0"
            style={{ scale: 0.9, y: 16, opacity: 0.3, zIndex: 0 }}
          >
            <div className="h-full rounded-2xl border border-border bg-surface opacity-60" />
          </motion.div>
        )}
        {nextItem && (
          <motion.div
            className="absolute inset-0"
            style={{ scale: behindScale, y: behindY, opacity: 0.6, zIndex: 1 }}
          >
            <div className="h-full rounded-2xl border border-border bg-surface opacity-80" />
          </motion.div>
        )}
      </div>

      {/* Active card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="swipe-card-active relative"
          style={{
            x: motionX,
            y: motionY,
            rotate: rotation,
            zIndex: 10,
            touchAction: 'pan-y',
          }}
          drag={!disabled}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.7}
          dragSnapToOrigin
          onDragEnd={handleDragEnd}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={
            exitDirection
              ? exitVariants[exitDirection]
              : { opacity: 0 }
          }
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: animDuration,
          }}
        >
          {/* Directional overlays */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-success/10"
            style={{ opacity: rightOpacity }}
          >
            <div className="flex items-center gap-2 rounded-full bg-success/20 px-4 py-2">
              <Check className="h-5 w-5 text-success" />
              <span className="font-body text-sm font-semibold text-success">{rightLabel}</span>
            </div>
          </motion.div>
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-secondary/10"
            style={{ opacity: leftOpacity }}
          >
            <div className="flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2">
              <SkipForward className="h-5 w-5 text-secondary" />
              <span className="font-body text-sm font-semibold text-secondary">{leftLabel}</span>
            </div>
          </motion.div>
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-info/10"
            style={{ opacity: upOpacity }}
          >
            <div className="flex items-center gap-2 rounded-full bg-info/20 px-4 py-2">
              <Flag className="h-5 w-5 text-info" />
              <span className="font-body text-sm font-semibold text-info">{upLabel}</span>
            </div>
          </motion.div>

          {/* Card content */}
          <div className="relative z-10">
            {renderCard(currentItem, currentIndex)}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Screen reader announcement */}
      <div aria-live="polite" className="sr-only">
        Card {currentIndex + 1} of {items.length}
      </div>
    </div>
  )
}
