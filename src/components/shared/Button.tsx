import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow-primary' | 'glow-secondary' | 'gradient'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  children: ReactNode
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-secondary text-white shadow-sm hover:bg-secondary-hover hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]',
  secondary:
    'bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]',
  outline:
    'border border-border bg-transparent text-text-primary hover:bg-surface-elevated hover:border-text-muted',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-elevated',
  'glow-primary':
    'bg-primary text-white shadow-neon-primary hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]',
  'glow-secondary':
    'bg-secondary text-white shadow-neon-secondary hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]',
  gradient:
    'bg-gradient-to-r from-primary to-accent-pink text-white shadow-md hover:shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm rounded-full',
  md: 'px-6 py-2.5 text-sm rounded-full',
  lg: 'px-8 py-3.5 text-base rounded-full',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
