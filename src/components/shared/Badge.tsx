import type { ReactNode } from 'react'

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'cyan' | 'pink'

interface BadgeProps {
  variant?: BadgeVariant
  animated?: boolean
  children: ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface text-text-secondary border border-border',
  primary: 'bg-primary-light text-primary',
  secondary: 'bg-secondary-light text-secondary',
  success: 'bg-success-light text-success',
  error: 'bg-error-light text-error',
  warning: 'bg-warning-light text-warning',
  cyan: 'bg-accent-cyan-light text-accent-cyan',
  pink: 'bg-accent-pink-light text-accent-pink',
}

export default function Badge({ variant = 'default', animated = false, children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${animated ? 'badge-pulse' : ''} ${className}`}
    >
      {children}
    </span>
  )
}
