import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated'
  hover?: boolean
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
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 ${variantStyles[variant]} ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
