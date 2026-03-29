import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Particle {
  id: number
  x: number
  y: number
}

interface ConfettiBurstProps {
  particles: Particle[]
  colors?: string[]
}

const DEFAULT_COLORS = ['#f59e0b', '#7C3AED', '#22c55e', '#ef4444', '#a855f7', '#ec4899']

export type { Particle }

export default function ConfettiBurst({
  particles,
  colors = DEFAULT_COLORS,
}: ConfettiBurstProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || particles.length === 0) return

    const els = containerRef.current.querySelectorAll('.confetti-particle')
    els.forEach((el) => {
      gsap.fromTo(
        el,
        {
          scale: 0,
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
        },
        {
          scale: gsap.utils.random(0.5, 1.5),
          opacity: 0,
          x: gsap.utils.random(-120, 120),
          y: gsap.utils.random(-150, -30),
          rotation: gsap.utils.random(-360, 360),
          duration: gsap.utils.random(0.6, 1.2),
          ease: 'power2.out',
        },
      )
    })
  }, [particles])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9997] overflow-hidden"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle absolute h-3 w-3 rounded-sm"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: colors[p.id % colors.length],
          }}
        />
      ))}
    </div>
  )
}
