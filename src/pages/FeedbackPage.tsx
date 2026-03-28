import { useState, type ReactNode } from 'react'
import { MessageSquareHeart, Star, Send, CheckCircle, Sparkles, ChevronDown } from 'lucide-react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'

function CollapsibleCard({
  title,
  subtitle,
  count,
  defaultOpen = true,
  children,
}: {
  title: string
  subtitle: string
  count: number
  defaultOpen?: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <Card>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <div>
          <h2 className="font-display text-text-primary text-lg">{title}</h2>
          <p className="font-body text-text-muted mt-1 text-sm">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          {count > 0 && <Badge variant="secondary">{count} selected</Badge>}
          <ChevronDown
            className={`text-text-muted h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      {open && <div className="mt-5">{children}</div>}
    </Card>
  )
}

const RATING_LABELS = [
  'Not helpful',
  'Slightly helpful',
  'Somewhat helpful',
  'Very helpful',
  'Extremely helpful',
]

const FEATURE_OPTIONS = [
  'Study Mode (Practice Questions)',
  'Exam Simulation',
  'Flashcards',
  'Speed Round Game',
  'Clinical Scenarios',
  'Study Review Content',
  'AI Rationales',
  'Quiz Builder',
  'Analytics / Progress Tracking',
  'Daily Challenges & XP',
]

const IMPROVEMENT_OPTIONS = [
  'More questions needed',
  'Better explanations',
  'More clinical scenarios',
  'Improved mobile experience',
  'More flashcard content',
  'Study schedule / planner',
  'Audio / pronunciation guides',
  'Community / study groups',
  'More visual aids / diagrams',
  'Practice with real exam timing',
]

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(null)
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [helpfulFeatures, setHelpfulFeatures] = useState<Set<string>>(new Set())
  const [improvements, setImprovements] = useState<Set<string>>(new Set())
  const [praxisScore, setPraxisScore] = useState('')
  const [praxisStatus, setPraxisStatus] = useState<'not_taken' | 'passed' | 'not_passed' | 'skip'>(
    'skip',
  )
  const [openFeedback, setOpenFeedback] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const toggleSet = (set: Set<string>, value: string) => {
    const next = new Set(set)
    if (next.has(value)) next.delete(value)
    else next.add(value)
    return next
  }

  const handleSubmit = async () => {
    setSubmitting(true)

    // Store feedback locally (will be sent to Supabase when connected)
    const feedback = {
      rating,
      helpfulFeatures: Array.from(helpfulFeatures),
      improvements: Array.from(improvements),
      praxisStatus,
      praxisScore: praxisScore || null,
      openFeedback: openFeedback || null,
      email: email || null,
      submittedAt: new Date().toISOString(),
    }

    // Save to localStorage for now
    const existing = JSON.parse(localStorage.getItem('praxis-feedback') || '[]')
    existing.push(feedback)
    localStorage.setItem('praxis-feedback', JSON.stringify(existing))

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800))

    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl pb-24 lg:pb-0">
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="from-success shadow-success/20 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br to-emerald-400 shadow-lg">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-text-primary text-3xl">Thank you!</h1>
          <p className="font-body text-text-secondary mt-4 max-w-md">
            Your feedback helps make PraxisPrep better for every SLP student. We read every
            response.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => (window.location.href = '/dashboard')}
            >
              Back to Dashboard
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setSubmitted(false)
                setRating(null)
                setHelpfulFeatures(new Set())
                setImprovements(new Set())
                setPraxisScore('')
                setOpenFeedback('')
              }}
            >
              Submit Another
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const activeRating = hoverRating ?? rating

  return (
    <div className="mx-auto max-w-2xl pb-24 lg:pb-0">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/20">
            <MessageSquareHeart className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="font-display text-text-primary text-2xl md:text-3xl">Beta Feedback</h1>
            <p className="font-body text-text-muted text-sm">
              Help us build the best Praxis prep tool
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* 1. Overall Rating */}
        <Card spotlight className="border-pink-500/20">
          <h2 className="font-display text-text-primary mb-2 text-lg">
            How helpful has PraxisPrep been for your study prep?
          </h2>
          <p className="font-body text-text-muted mb-5 text-sm">Rate your overall experience</p>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(null)}
                className="group transition-transform hover:scale-110"
                aria-label={`Rate ${star} out of 5`}
              >
                <Star
                  className={`h-8 w-8 transition-colors sm:h-10 sm:w-10 ${
                    activeRating && star <= activeRating
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-border hover:text-amber-400/50'
                  }`}
                />
              </button>
            ))}
          </div>
          {activeRating && (
            <p className="font-body text-secondary mt-3 text-sm">
              {RATING_LABELS[activeRating - 1]}
            </p>
          )}
        </Card>

        {/* 2. Most Helpful Features */}
        <CollapsibleCard
          title="Which features were most helpful?"
          subtitle="Select all that apply"
          count={helpfulFeatures.size}
          defaultOpen
        >
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {FEATURE_OPTIONS.map((feature) => (
              <button
                key={feature}
                onClick={() => setHelpfulFeatures(toggleSet(helpfulFeatures, feature))}
                className={`font-body rounded-xl border px-3 py-2 text-xs transition-all sm:px-4 sm:py-2.5 sm:text-sm ${
                  helpfulFeatures.has(feature)
                    ? 'border-secondary bg-secondary/10 text-secondary shadow-secondary/10 shadow-sm'
                    : 'border-border text-text-secondary hover:border-secondary/30 hover:bg-surface-elevated'
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </CollapsibleCard>

        {/* 3. What Could Be Improved */}
        <CollapsibleCard
          title="What would you most like to see improved?"
          subtitle="Select all that apply"
          count={improvements.size}
          defaultOpen
        >
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {IMPROVEMENT_OPTIONS.map((item) => (
              <button
                key={item}
                onClick={() => setImprovements(toggleSet(improvements, item))}
                className={`font-body rounded-xl border px-3 py-2 text-xs transition-all sm:px-4 sm:py-2.5 sm:text-sm ${
                  improvements.has(item)
                    ? 'border-primary bg-primary/10 text-primary shadow-primary/10 shadow-sm'
                    : 'border-border text-text-secondary hover:border-primary/30 hover:bg-surface-elevated'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </CollapsibleCard>

        {/* 4. Praxis Score (Optional) */}
        <Card className="border-amber-500/10">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="font-display text-text-primary text-lg">Praxis Exam Status</h2>
            <Badge variant="default">Optional</Badge>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              { value: 'not_taken' as const, label: "Haven't taken it yet" },
              { value: 'passed' as const, label: 'Passed!' },
              { value: 'not_passed' as const, label: "Didn't pass yet" },
              { value: 'skip' as const, label: 'Prefer not to say' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setPraxisStatus(option.value)}
                className={`font-body rounded-xl border px-4 py-2.5 text-sm transition-all ${
                  praxisStatus === option.value
                    ? option.value === 'passed'
                      ? 'border-success bg-success/10 text-success'
                      : 'border-secondary bg-secondary/10 text-secondary'
                    : 'border-border text-text-secondary hover:border-border-focus'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {(praxisStatus === 'passed' || praxisStatus === 'not_passed') && (
            <div>
              <label
                htmlFor="praxis-score"
                className="font-body text-text-secondary mb-2 block text-sm font-medium"
              >
                Your score (100-200 scale)
              </label>
              <input
                id="praxis-score"
                type="number"
                min={100}
                max={200}
                placeholder="e.g. 168"
                value={praxisScore}
                onChange={(e) => setPraxisScore(e.target.value)}
                className="border-border bg-background text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-primary w-full max-w-[200px] rounded-xl border px-4 py-2.5 font-mono focus:ring-1 focus:outline-none"
              />
              <p className="font-body text-text-muted mt-2 text-xs">
                Passing score is 162. Your score helps us measure our impact.
              </p>
            </div>
          )}
        </Card>

        {/* 5. Open Feedback */}
        <Card>
          <h2 className="font-display text-text-primary mb-2 text-lg">
            Anything else you'd like to share?
          </h2>
          <p className="font-body text-text-muted mb-4 text-sm">
            Tell us what you loved, what frustrated you, or what you wish existed
          </p>
          <textarea
            value={openFeedback}
            onChange={(e) => setOpenFeedback(e.target.value)}
            placeholder="Your feedback helps us build better tools for SLP students..."
            rows={4}
            className="border-border bg-background font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-primary w-full resize-none rounded-xl border px-4 py-3 text-sm focus:ring-1 focus:outline-none"
          />
        </Card>

        {/* 6. Email (Optional) */}
        <Card className="border-primary/10">
          <div className="mb-4 flex items-center gap-3">
            <Sparkles className="text-secondary h-5 w-5" />
            <h2 className="font-display text-text-primary text-lg">Stay in the loop</h2>
            <Badge variant="default">Optional</Badge>
          </div>
          <p className="font-body text-text-muted mb-4 text-sm">
            Get notified about new features, more questions, and launch updates.
          </p>
          <input
            type="email"
            placeholder="you@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-border bg-background font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-primary w-full max-w-md rounded-xl border px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
          />
        </Card>

        {/* Submit */}
        <div className="border-border bg-surface/50 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center">
          <p className="font-body text-text-muted text-sm">
            {rating ? `You rated PraxisPrep ${rating}/5` : 'Select a rating above to submit'}
            {helpfulFeatures.size > 0 ? ` · ${helpfulFeatures.size} helpful features` : ''}
            {improvements.size > 0 ? ` · ${improvements.size} improvement ideas` : ''}
          </p>
          <Button
            variant="primary"
            size="lg"
            loading={submitting}
            disabled={!rating}
            onClick={handleSubmit}
          >
            <Send className="h-5 w-5" />
            Submit Feedback
          </Button>
        </div>
      </div>
    </div>
  )
}
