import { Check, Minus } from 'lucide-react'
import Card from '@/components/shared/Card'

const ROWS = [
  {
    label: 'Current posted price',
    values: ['TherapyEd $95', 'TrueLearn $109+', 'PraxisPrep $49'],
  },
  {
    label: 'Access model',
    values: ['Book + portal', 'Time-limited subscription', 'One payment, 6 months'],
  },
  {
    label: 'Full-length exam simulation',
    values: [true, true, true],
  },
  {
    label: 'Free diagnostic entry point',
    values: [false, 'Trial / promo', true],
  },
  {
    label: 'Focused one-time self-serve offer',
    values: [false, false, true],
  },
  {
    label: 'Mobile-first study experience',
    values: ['Limited', true, true],
  },
  {
    label: 'Founder-built niche positioning',
    values: [false, false, true],
  },
]

function renderValue(value: boolean | string) {
  if (typeof value === 'string') {
    return <span className="font-body text-text-secondary text-sm">{value}</span>
  }

  return value ? (
    <Check className="text-success mx-auto h-4 w-4" aria-label="Included" />
  ) : (
    <Minus className="text-text-muted mx-auto h-4 w-4" aria-label="Not included" />
  )
}

export default function ComparisonTable() {
  return (
    <Card className="overflow-hidden px-0 py-0">
      <div className="border-border bg-surface-elevated/70 grid grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] border-b">
        <div className="font-body text-text-muted px-4 py-4 text-xs font-semibold tracking-[0.2em] uppercase sm:px-6">
          Compare options
        </div>
        <div className="font-body text-text-secondary px-3 py-4 text-center text-sm font-semibold sm:px-6">
          TherapyEd
        </div>
        <div className="font-body text-text-secondary px-3 py-4 text-center text-sm font-semibold sm:px-6">
          TrueLearn
        </div>
        <div className="bg-secondary/8 font-body text-secondary px-3 py-4 text-center text-sm font-semibold sm:px-6">
          PraxisPrep
        </div>
      </div>

      <div className="divide-border divide-y">
        {ROWS.map((row) => (
          <div key={row.label} className="grid grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
            <div className="font-body text-text-primary px-4 py-4 text-sm sm:px-6">{row.label}</div>
            {row.values.map((value, index) => (
              <div
                key={`${row.label}-${index}`}
                className={`px-3 py-4 text-center sm:px-6 ${index === 2 ? 'bg-secondary/6' : ''}`}
              >
                {renderValue(value)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-border bg-background/40 font-body text-text-muted border-t px-4 py-3 text-xs sm:px-6">
        Competitor pricing and offer structure checked in March 2026 from public product pages.
      </div>
    </Card>
  )
}
