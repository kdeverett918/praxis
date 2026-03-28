import type { ReactNode } from 'react'

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'

interface BadgeProps {
  variant?: BadgeVariant
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
}

export default function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
