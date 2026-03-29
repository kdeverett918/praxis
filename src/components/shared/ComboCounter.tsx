import { useEffect, useRef } from 'react'
import { comboIncrement } from '@/lib/microInteractions'

interface ComboCounterProps {
  combo: number
  className?: string
}

export default function ComboCounter({ combo, className = '' }: ComboCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prevCombo = useRef(combo)

  useEffect(() => {
    if (combo > prevCombo.current && ref.current) {
      comboIncrement(ref.current)
    }
    prevCombo.current = combo
  }, [combo])

  if (combo < 2) return null

  // Color progression based on combo level
  const colorClass =
    combo >= 5
      ? 'text-gradient-celebration'
      : combo >= 3
        ? 'text-accent-pink'
        : 'text-secondary'

  const glowClass = combo >= 5 ? 'combo-glow' : ''

  return (
    <div
      ref={ref}
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 ${glowClass} ${className}`}
    >
      <span className={`font-mono text-lg font-bold ${colorClass}`}>
        {combo}x
      </span>
    </div>
  )
}
