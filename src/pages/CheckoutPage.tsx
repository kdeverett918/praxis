import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, BadgeCheck, LoaderCircle, ShieldCheck } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import { useAuth } from '@/hooks/useAuth'
import { createCheckoutSession, PRICING } from '@/lib/stripe'

export default function CheckoutPage() {
  const [searchParams] = useSearchParams()
  const { user, profile } = useAuth()
  const [email, setEmail] = useState(
    searchParams.get('email') ?? profile?.email ?? user?.email ?? '',
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const offer = PRICING.pro
  const focus = searchParams.get('focus')
  const source = searchParams.get('source') ?? 'site'

  const guaranteePoints = useMemo(
    () => [
      'One payment instead of another recurring study subscription.',
      'Six months of access so students can study on a realistic timeline.',
      'Original clinician-built content, not copied ETS material.',
    ],
    [],
  )

  async function handleCheckout() {
    if (!email) {
      setError('Enter the email you want attached to this purchase.')
      return
    }

    setLoading(true)
    setError(null)

    const checkout = await createCheckoutSession({
      email,
      tier: 'pro',
      userId: user?.id,
      successUrl: `${window.location.origin}/pro/success`,
      cancelUrl: window.location.href,
      metadata: {
        source,
        focus: focus ?? undefined,
      },
    })

    if (checkout.url) {
      window.location.assign(checkout.url)
      return
    }

    setError(checkout.error ?? 'Unable to start checkout right now.')
    setLoading(false)
  }

  return (
    <div className="bg-background text-text-primary min-h-screen px-6 pt-24 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <Badge variant="secondary" className="mb-6">
              <BadgeCheck className="h-3.5 w-3.5" />
              Secure Checkout
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] md:text-6xl">
              Turn your diagnostic result into a tighter study plan.
            </h1>
            <p className="font-body text-text-secondary mt-6 max-w-2xl text-lg leading-8">
              The Pass Pack is the direct-response core offer: one payment, six months of access,
              and the full practice environment in one place.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'What you get',
                  copy: 'Study mode, custom quizzes, flashcards, review content, and the 132-question exam simulation.',
                },
                {
                  title: 'Why it converts better',
                  copy: 'The market is finite and students hate surprise billing. One-time pricing is a stronger trust signal here.',
                },
                {
                  title: 'Who it is for',
                  copy: 'SLP graduate students within 2 to 12 weeks of test day, or retakers who need a cleaner plan fast.',
                },
                {
                  title: 'Primary promise',
                  copy: 'Stop piecing together multiple study tools and move through one guided prep flow instead.',
                },
              ].map((item) => (
                <Card key={item.title}>
                  <h2 className="font-display text-text-primary text-xl">{item.title}</h2>
                  <p className="font-body text-text-secondary mt-3 text-sm leading-7">
                    {item.copy}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="border-secondary/20 bg-secondary/6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/15 text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-text-primary text-2xl">
                    Low-friction purchase structure
                  </h2>
                  <ul className="font-body text-text-secondary mt-4 space-y-2 text-sm leading-7">
                    {guaranteePoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="relative overflow-hidden lg:sticky lg:top-24 lg:self-start">
            <div className="via-secondary/70 pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
            <p className="font-body text-text-muted text-xs tracking-[0.22em] uppercase">
              Order summary
            </p>
            <h2 className="font-display text-text-primary mt-3 text-3xl">{offer.name}</h2>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-text-primary text-5xl font-bold">{offer.priceDisplay}</span>
              <span className="font-body text-text-muted pb-1 text-sm">one-time</span>
            </div>
            <p className="font-body text-text-secondary mt-4 text-sm leading-7">
              {offer.description}
            </p>

            <div className="border-border bg-surface-elevated/60 mt-6 rounded-2xl border p-4">
              <label
                htmlFor="checkout-email"
                className="font-body text-text-secondary mb-2 block text-sm font-medium"
              >
                Purchase email
              </label>
              <input
                id="checkout-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@university.edu"
                className="border-border bg-background font-body text-text-primary placeholder:text-text-muted/60 focus:border-primary w-full rounded-xl border px-4 py-3 focus:outline-none"
              />
            </div>

            {focus && (
              <div className="border-warning/30 bg-warning-light font-body text-text-primary mt-4 rounded-2xl border px-4 py-3 text-sm">
                Funnel context: this visitor arrived from the diagnostic with a likely gap in{' '}
                <strong>{focus}</strong>.
              </div>
            )}

            {error && (
              <div className="border-error/30 bg-error-light font-body text-error mt-4 rounded-2xl border px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <ul className="font-body text-text-secondary mt-6 space-y-3 text-sm leading-7">
              {offer.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Redirecting to checkout
                  </>
                ) : (
                  <>
                    Secure the Pass Pack
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
              <Link to="/quiz/diagnostic/results" className="block">
                <Button variant="outline" size="lg" className="w-full">
                  Back to results
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
