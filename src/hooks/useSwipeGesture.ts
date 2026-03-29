import { useMotionValue, useTransform, type PanInfo } from 'motion/react'
import { useCallback, useState } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'

export type SwipeDirection = 'left' | 'right' | 'up' | 'down'

interface SwipeConfig {
  distanceThreshold: number
  velocityThreshold: number
  maxRotation: number
}

const SENSITIVITY_MAP = {
  low: { distanceThreshold: 160, velocityThreshold: 700, maxRotation: 10 },
  medium: { distanceThreshold: 120, velocityThreshold: 500, maxRotation: 12 },
  high: { distanceThreshold: 80, velocityThreshold: 300, maxRotation: 15 },
} satisfies Record<string, SwipeConfig>

function getSwipeDirection(
  info: PanInfo,
  config: SwipeConfig,
): SwipeDirection | null {
  const { offset, velocity } = info
  const absX = Math.abs(offset.x)
  const absY = Math.abs(offset.y)

  if (absX > absY) {
    const triggered =
      absX > config.distanceThreshold ||
      Math.abs(velocity.x) > config.velocityThreshold
    if (!triggered) return null
    return offset.x > 0 ? 'right' : 'left'
  } else {
    const triggered =
      absY > config.distanceThreshold ||
      Math.abs(velocity.y) > config.velocityThreshold
    if (!triggered) return null
    return offset.y < 0 ? 'up' : 'down'
  }
}

interface UseSwipeGestureOptions {
  onSwipeRight?: () => void
  onSwipeLeft?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  disabled?: boolean
}

export function useSwipeGesture({
  onSwipeRight,
  onSwipeLeft,
  onSwipeUp,
  onSwipeDown,
  disabled = false,
}: UseSwipeGestureOptions) {
  const sensitivity = useSettingsStore((s) => s.swipeSensitivity)
  const config = SENSITIVITY_MAP[sensitivity]
  const [isActive, setIsActive] = useState(false)

  const motionX = useMotionValue(0)
  const motionY = useMotionValue(0)

  const rotation = useTransform(
    motionX,
    [-200, 0, 200],
    [-config.maxRotation, 0, config.maxRotation],
  )

  const rightOverlayOpacity = useTransform(
    motionX,
    [0, config.distanceThreshold],
    [0, 1],
  )

  const leftOverlayOpacity = useTransform(
    motionX,
    [0, -config.distanceThreshold],
    [0, 1],
  )

  const upOverlayOpacity = useTransform(
    motionY,
    [0, -config.distanceThreshold],
    [0, 1],
  )

  const onDragStart = useCallback(() => {
    setIsActive(true)
  }, [])

  const onDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsActive(false)

      if (disabled) return

      const direction = getSwipeDirection(info, config)
      if (!direction) return

      switch (direction) {
        case 'right':
          onSwipeRight?.()
          break
        case 'left':
          onSwipeLeft?.()
          break
        case 'up':
          onSwipeUp?.()
          break
        case 'down':
          onSwipeDown?.()
          break
      }
    },
    [config, disabled, onSwipeRight, onSwipeLeft, onSwipeUp, onSwipeDown],
  )

  return {
    motionX,
    motionY,
    rotation,
    rightOverlayOpacity,
    leftOverlayOpacity,
    upOverlayOpacity,
    isActive,
    onDragStart,
    onDragEnd,
    config,
  }
}
