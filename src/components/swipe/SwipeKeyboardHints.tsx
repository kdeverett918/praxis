interface SwipeKeyboardHintsProps {
  showFlag?: boolean
  showFlip?: boolean
  className?: string
}

export default function SwipeKeyboardHints({
  showFlag = true,
  showFlip = false,
  className = '',
}: SwipeKeyboardHintsProps) {
  return (
    <div
      className={`hidden items-center justify-center gap-6 font-body text-xs text-text-muted lg:flex ${className}`}
    >
      <span className="flex items-center gap-1.5">
        <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px]">
          &larr;
        </kbd>
        Skip
      </span>
      {showFlag && (
        <span className="flex items-center gap-1.5">
          <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px]">
            &uarr;
          </kbd>
          Flag
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px]">
          &rarr;
        </kbd>
        Next
      </span>
      {showFlip && (
        <span className="flex items-center gap-1.5">
          <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px]">
            Space
          </kbd>
          Flip
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px]">
          1-4
        </kbd>
        Answer
      </span>
    </div>
  )
}
