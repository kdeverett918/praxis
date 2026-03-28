import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Sparkles } from 'lucide-react'
import { useGamificationStore } from '@/stores/gamificationStore'

export default function XPBar() {
  const xp = useGamificationStore((s) => s.xp)
  const level = useGamificationStore((s) => s.level)
  const getLevelName = useGamificationStore((s) => s.getLevelName)
  const getXPProgress = useGamificationStore((s) => s.getXPProgress)

  const barRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const progress = getXPProgress()
  const percentage = Math.min((progress.current / progress.needed) * 100, 100)

  useEffect(() => {
    if (barRef.current) {
      gsap.fromTo(
        barRef.current,
        { width: '0%' },
        { width: `${percentage}%`, duration: 1.2, ease: 'power3.out' },
      )
    }
    if (glowRef.current) {
      gsap.fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.8 },
      )
    }
  }, [percentage])

  return (
    <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-display text-lg text-text-primary">Level {level}</p>
            <p className="font-body text-xs text-text-secondary">{getLevelName()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm font-bold text-secondary">{xp} XP</p>
          <p className="font-body text-xs text-text-muted">
            {progress.current}/{progress.needed} to next
          </p>
        </div>
      </div>

      <div className="relative h-3 overflow-hidden rounded-full bg-surface-elevated">
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-amber-400"
          style={{ width: 0 }}
        />
        <div
          ref={glowRef}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-amber-400 opacity-0 blur-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
