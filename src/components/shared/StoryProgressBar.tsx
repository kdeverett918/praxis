interface StoryProgressBarProps {
  total: number
  currentIndex: number
  answered?: Set<number>
  correctMap?: Map<number, boolean>
  flagged?: Set<number>
  onSegmentClick?: (index: number) => void
  clickable?: boolean
  className?: string
}

export default function StoryProgressBar({
  total,
  currentIndex,
  answered,
  correctMap,
  flagged,
  onSegmentClick,
  clickable = false,
  className = '',
}: StoryProgressBarProps) {
  // Group into clusters for large sets
  const showGrouped = total > 30
  const groupSize = showGrouped ? 5 : 1
  const segmentCount = showGrouped ? Math.ceil(total / groupSize) : total

  function getSegmentState(segmentIndex: number) {
    if (showGrouped) {
      const start = segmentIndex * groupSize
      const end = Math.min(start + groupSize, total)
      const isCurrent = currentIndex >= start && currentIndex < end
      const allAnswered =
        answered &&
        Array.from({ length: end - start }, (_, i) => start + i).every(
          (idx) => answered.has(idx),
        )

      if (isCurrent) return 'current'
      if (allAnswered) return 'completed'
      return 'remaining'
    }

    if (segmentIndex === currentIndex) return 'current'
    if (segmentIndex < currentIndex) {
      if (correctMap?.has(segmentIndex)) {
        return correctMap.get(segmentIndex) ? 'correct' : 'incorrect'
      }
      return 'completed'
    }
    return 'remaining'
  }

  const segmentStyles = {
    current: 'bg-primary/40',
    completed: 'bg-gradient-to-r from-primary to-secondary',
    correct: 'bg-success',
    incorrect: 'bg-error',
    remaining: 'bg-surface-elevated',
  }

  return (
    <div className={`flex gap-0.5 ${className}`} role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={total}>
      {Array.from({ length: segmentCount }, (_, i) => {
        const state = getSegmentState(i)
        const isFlagged = !showGrouped && flagged?.has(i)

        return (
          <button
            key={i}
            type="button"
            disabled={!clickable}
            onClick={() => {
              if (clickable && onSegmentClick) {
                onSegmentClick(showGrouped ? i * groupSize : i)
              }
            }}
            className={`relative h-1 flex-1 rounded-full transition-all duration-200 ${
              segmentStyles[state]
            } ${clickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'} ${
              state === 'current' ? 'story-segment-fill' : ''
            }`}
            aria-label={`Question ${showGrouped ? `${i * groupSize + 1}-${Math.min((i + 1) * groupSize, total)}` : i + 1}`}
          >
            {isFlagged && (
              <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-warning" />
            )}
          </button>
        )
      })}
    </div>
  )
}
