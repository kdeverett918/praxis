import { useCallback, useRef } from 'react'
import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated'
  hover?: boolean
  spotlight?: boolean
  children: ReactNode
}

const variantStyles = {
  default: 'bg-surface border border-border',
  glass: 'glass-card',
  elevated: 'bg-surface-elevated border border-border',
}

export default function Card({
  variant = 'default',
  hover = false,
  spotlight = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!spotlight || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    },
    [spotlight],
  )

  const handleMouseLeave = useCallback(() => {
    if (!spotlight || !ref.current) return
    ref.current.style.removeProperty('--mouse-x')
    ref.current.style.removeProperty('--mouse-y')
  }, [spotlight])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-highlight rounded-2xl p-6 ${variantStyles[variant]} ${spotlight ? 'spotlight-card' : ''} ${
        hover
          ? 'hover:border-primary/50 hover:shadow-primary/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
