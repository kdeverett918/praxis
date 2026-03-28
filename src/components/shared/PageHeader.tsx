import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface PageHeaderProps {
  icon: LucideIcon
  title: string
  subtitle?: string
  badge?: ReactNode
  actions?: ReactNode
}

export default function PageHeader({
  icon: Icon,
  title,
  subtitle,
  badge,
  actions,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="from-primary to-secondary flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-md">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-display text-text-primary text-2xl lg:text-3xl">{title}</h1>
            {badge}
          </div>
          {subtitle && <p className="text-text-secondary mt-1 text-sm">{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  )
}
