import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'neon' | 'gradient' | 'interactive'
  hover?: boolean
  spotlight?: boolean
  children: ReactNode
}

const variantStyles = {
  default: 'bg-surface border border-border shadow-card',
  elevated: 'bg-surface-elevated border border-border shadow-md',
  glass: 'bg-surface-glass backdrop-blur-xl border border-white/[0.06] shadow-lg',
  neon: 'bg-surface border border-primary/30 shadow-glow-primary',
  gradient: 'bg-gradient-to-br from-surface to-surface-elevated border border-border/50 shadow-md',
  interactive: 'bg-surface border border-border shadow-card cursor-pointer',
}

export default function Card({
  variant = 'default',
  hover = false,
  spotlight = false,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 ${variantStyles[variant]} ${
        spotlight
          ? "relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_65%)] before:content-['']"
          : ''
      } ${
        hover
          ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
