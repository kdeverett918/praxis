import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { Trophy, Zap, Flame, Target, GraduationCap, Award, Crown, Medal, Star } from 'lucide-react'
import { useGamificationStore } from '@/stores/gamificationStore'
import type { Achievement } from '@/stores/gamificationStore'

const ICON_MAP: Record<string, typeof Trophy> = {
  footprints: Star,
  medal: Medal,
  crown: Crown,
  flame: Flame,
  fire: Flame,
  calendar: Target,
  zap: Zap,
  bolt: Zap,
  stethoscope: GraduationCap,
  trophy: Trophy,
  target: Target,
  graduation: GraduationCap,
  award: Award,
}

function AchievementCard({ achievement, onDismiss }: { achievement: Achievement; onDismiss: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const IconComponent = ICON_MAP[achievement.icon] ?? Trophy

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const tl = gsap.timeline()
    tl.fromTo(
      el,
      { x: 400, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
    )

    // Shimmer across the card
    tl.fromTo(
      el.querySelector('.achievement-shimmer'),
      { x: '-100%' },
      { x: '200%', duration: 0.8, ease: 'power2.inOut' },
      0.3,
    )

    // Auto dismiss after 4s
    const timeout = setTimeout(() => {
      gsap.to(el, {
        x: 400,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: onDismiss,
      })
    }, 4000)

    return () => {
      clearTimeout(timeout)
      tl.kill()
    }
  }, [onDismiss])

  return (
    <div
      ref={cardRef}
      className="relative mb-3 flex items-center gap-4 overflow-hidden rounded-2xl border border-secondary/30 bg-surface/95 p-4 shadow-lg shadow-secondary/10 backdrop-blur-xl"
      style={{ minWidth: 320 }}
    >
      {/* Shimmer overlay */}
      <div className="achievement-shimmer pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />

      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-amber-400 shadow-md shadow-secondary/30">
        <IconComponent className="h-6 w-6 text-white" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="font-body text-xs font-semibold uppercase tracking-wider text-secondary">
          Achievement Unlocked!
        </p>
        <p className="mt-0.5 font-display text-lg text-text-primary">{achievement.name}</p>
        <p className="font-body text-xs text-text-secondary">{achievement.description}</p>
      </div>
    </div>
  )
}

export default function AchievementToast() {
  const pendingAchievements = useGamificationStore((s) => s.pendingAchievements)
  const dismissAchievement = useGamificationStore((s) => s.dismissAchievement)

  const handleDismiss = useCallback(
    (id: string) => {
      dismissAchievement(id)
    },
    [dismissAchievement],
  )

  if (pendingAchievements.length === 0) return null

  return (
    <div className="fixed top-6 right-6 z-[9998] flex flex-col items-end">
      {pendingAchievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          onDismiss={() => handleDismiss(achievement.id)}
        />
      ))}
    </div>
  )
}
