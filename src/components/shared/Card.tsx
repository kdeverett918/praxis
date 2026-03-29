import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated'
  hover?: boolean
  spotlight?: boolean
  children: ReactNode
}

const variantStyles = {
  default: 'bg-surface border border-border shadow-card',
  elevated: 'bg-surface-elevated border border-border shadow-md',
}

export default function Card({
  variant = 'default',
  hover = false,
  spotlight: _spotlight = false,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 ${variantStyles[variant]} ${
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
