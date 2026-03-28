import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, LockKeyhole, Sparkles, X } from 'lucide-react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'

interface UpgradeModalProps {
  open: boolean
  onClose: () => void
  title: string
  description: string
  highlights: string[]
  ctaLabel: string
  ctaHref: string
}

export default function UpgradeModal({
  open,
  onClose,
  title,
  description,
  highlights,
  ctaLabel,
  ctaHref,
}: UpgradeModalProps) {
  if (!open) return null

  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center px-4 py-6 backdrop-blur-md">
      <Card
        variant="glass"
        spotlight
        className="border-secondary/25 relative w-full max-w-lg overflow-hidden shadow-2xl shadow-black/40"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close upgrade modal"
          className="border-border bg-background/80 text-text-muted hover:text-text-primary absolute top-4 right-4 rounded-full border p-2 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="from-secondary/25 to-primary/15 text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <Badge variant="secondary" className="mb-3">
              <LockKeyhole className="h-3.5 w-3.5" />
              Upgrade required
            </Badge>
            <h2 className="font-display text-text-primary text-2xl">{title}</h2>
            <p className="font-body text-text-secondary mt-3 text-sm leading-6">{description}</p>
          </div>
        </div>

        <div className="border-border bg-surface/60 mt-6 rounded-2xl border p-4">
          <p className="font-body text-text-primary text-sm font-semibold">What unlocks with Pro</p>
          <ul className="mt-4 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="font-body text-text-secondary flex items-start gap-3 text-sm"
              >
                <CheckCircle2 className="text-success mt-0.5 h-4 w-4 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link to={ctaHref} className="block">
            <Button variant="primary" size="lg" className="w-full">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full" onClick={onClose}>
            Keep browsing
          </Button>
        </div>

        <p className="font-body text-text-muted mt-4 text-xs leading-5">
          Free access stays available for everyday practice. Upgrade when you need unlimited study
          sessions, deeper feedback, and full exam simulations.
        </p>
      </Card>
    </div>
  )
}
