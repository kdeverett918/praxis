import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-secondary text-white hover:bg-secondary-hover shadow-md hover:shadow-glow-secondary',
  secondary:
    'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-glow-primary',
  outline:
    'border border-border bg-transparent text-text-primary hover:bg-surface hover:border-primary/50',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
