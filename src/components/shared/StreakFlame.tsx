import { Flame } from 'lucide-react'

interface StreakFlameProps {
  streak: number
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  className?: string
}

export default function StreakFlame({
  streak,
  size = 'md',
  showCount = true,
  className = '',
}: StreakFlameProps) {
  if (streak <= 0) return null

  const sizeStyles = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-7 w-7',
  }

  const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
  }

  // Intensity tiers based on streak length
  const flameClass =
    streak >= 14
      ? 'streak-flame-hot text-secondary'
      : streak >= 7
        ? 'streak-flame text-secondary'
        : streak >= 3
          ? 'streak-flame text-secondary/80'
          : 'text-secondary/60'

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <Flame className={`${sizeStyles[size]} ${flameClass}`} />
      {showCount && (
        <span
          className={`font-mono font-bold ${textSize[size]} ${
            streak >= 7 ? 'text-gradient-streak' : 'text-secondary'
          }`}
        >
          {streak}
        </span>
      )}
    </div>
  )
}
