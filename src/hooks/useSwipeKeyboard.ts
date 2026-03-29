import { useEffect } from 'react'

interface UseSwipeKeyboardOptions {
  onRight?: () => void
  onLeft?: () => void
  onUp?: () => void
  onDown?: () => void
  onFlip?: () => void
  onFlag?: () => void
  onEscape?: () => void
  onSelectOption?: (index: number) => void
  enabled?: boolean
}

export function useSwipeKeyboard({
  onRight,
  onLeft,
  onUp,
  onDown,
  onFlip,
  onFlag,
  onEscape,
  onSelectOption,
  enabled = true,
}: UseSwipeKeyboardOptions) {
  useEffect(() => {
    if (!enabled) return

    function handleKeyDown(e: KeyboardEvent) {
      // Don't capture keys when inside form elements
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      switch (e.key) {
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault()
          onRight?.()
          break
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault()
          onLeft?.()
          break
        case 'ArrowUp':
          e.preventDefault()
          onUp?.()
          break
        case 'ArrowDown':
          e.preventDefault()
          onDown?.()
          break
        case ' ':
          e.preventDefault()
          onFlip?.()
          break
        case 'f':
        case 'F':
          e.preventDefault()
          onFlag?.()
          break
        case 'Escape':
          onEscape?.()
          break
        case '1':
        case '2':
        case '3':
        case '4':
          onSelectOption?.(parseInt(e.key) - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enabled, onRight, onLeft, onUp, onDown, onFlip, onFlag, onEscape, onSelectOption])
}
