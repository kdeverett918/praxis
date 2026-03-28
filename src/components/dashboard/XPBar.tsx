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
      gsap.fromTo(glowRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.8 })
    }
  }, [percentage])

  return (
    <div className="border-border bg-surface/50 flex h-full flex-col rounded-2xl border p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="from-primary to-secondary flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-md">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-display text-text-primary text-lg">Level {level}</p>
            <p className="font-body text-text-secondary text-xs">{getLevelName()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-secondary font-mono text-sm font-bold">{xp} XP</p>
          <p className="font-body text-text-muted text-xs">
            {progress.current}/{progress.needed} to next
          </p>
        </div>
      </div>

      <div className="bg-surface-elevated relative mt-auto h-3 overflow-hidden rounded-full">
        <div
          ref={barRef}
          className="from-primary via-secondary absolute inset-y-0 left-0 rounded-full bg-gradient-to-r to-amber-400"
          style={{ width: 0 }}
        />
        <div
          ref={glowRef}
          className="from-primary via-secondary absolute inset-y-0 left-0 rounded-full bg-gradient-to-r to-amber-400 opacity-0 blur-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
