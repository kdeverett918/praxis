import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, RotateCcw, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import { readDiagnosticSession } from '@/lib/diagnostic'
import { HERO_OFFER, buildLoginPath, buildSignupPath } from '@/lib/marketing'
import { useAuth } from '@/hooks/useAuth'

function ScoreBar({
  label,
  percentage,
  detail,
}: {
  label: string
  percentage: number
  detail: string
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="font-body text-text-primary text-sm font-semibold">{label}</p>
        <p className="text-secondary font-mono text-sm">{detail}</p>
      </div>
      <div className="bg-surface-elevated h-3 overflow-hidden rounded-full">
        <div
          className="from-primary to-secondary h-full rounded-full bg-gradient-to-r"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default function DiagnosticResultsPage() {
  const { user } = useAuth()
  const session = readDiagnosticSession()

  if (!session) {
    return (
      <div className="bg-background text-text-primary min-h-screen">
        <Navbar />
        <main className="mx-auto flex max-w-4xl px-6 pt-32 pb-20">
          <Card className="w-full text-center">
            <Badge variant="warning" className="mb-4">
              <BarChart3 className="h-3.5 w-3.5" />
              No saved diagnostic
            </Badge>
            <h1 className="text-3xl font-bold">Take the diagnostic first.</h1>
            <p className="font-body text-text-secondary mx-auto mt-4 max-w-2xl text-base leading-7">
              Your results are generated after the quiz is complete. Start there, then come back for
              your score breakdown and next-step recommendation.
            </p>
            <div className="mt-8">
              <Link to="/quiz/diagnostic">
                <Button variant="primary" size="lg">
                  Start the diagnostic
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  const result = session.result
  const weakestFocuses = result.focusAreas.slice(0, 3).map((item) => item.label)
  const strongestCategories = [...result.categoryScores]
    .sort((left, right) => right.percentage - left.percentage)
    .slice(0, 2)
    .map((item) => item.label)
  const checkoutPath = HERO_OFFER.checkoutPath
  const primaryPath = user
    ? checkoutPath
    : buildSignupPath({
        next: checkoutPath,
        plan: 'pro',
        source: 'diagnostic',
        score: result.score,
      })
  const freePath = buildSignupPath({
    source: 'diagnostic',
    score: result.score,
  })
  const loginPath = buildLoginPath({
    next: checkoutPath,
    source: 'diagnostic',
    score: result.score,
  })

  return (
    <div className="bg-background text-text-primary min-h-screen">
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-28 pb-20">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card variant="glass" className="overflow-hidden">
            <Badge variant="secondary" className="mb-5">
              <ShieldCheck className="h-3.5 w-3.5" />
              Diagnostic complete
            </Badge>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-body text-text-muted text-sm tracking-[0.24em] uppercase">
                  Readiness score
                </p>
                <h1 className="text-secondary mt-3 text-5xl font-bold md:text-6xl">
                  {result.score}%
                </h1>
                <p className="font-body text-text-secondary mt-4 text-base leading-7">
                  {result.readiness.summary} You answered {result.correct} of {result.total}{' '}
                  correctly.
                </p>
              </div>

              <div className="border-border/70 bg-surface/70 rounded-3xl border px-5 py-4">
                <p className="font-body text-text-muted text-xs tracking-[0.22em] uppercase">
                  Recommended move
                </p>
                <p className="font-body text-text-primary mt-2 max-w-xs text-sm leading-7">
                  {result.readiness.cta}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="border-border/70 bg-surface/60 rounded-2xl border p-5">
                <p className="font-body text-text-primary text-sm font-semibold">
                  Lowest-focus areas
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {weakestFocuses.map((focus) => (
                    <Badge key={focus} variant="warning">
                      {focus}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="border-border/70 bg-surface/60 rounded-2xl border p-5">
                <p className="font-body text-text-primary text-sm font-semibold">
                  Best current areas
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {strongestCategories.map((focus) => (
                    <Badge key={focus} variant="success">
                      {focus}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={primaryPath}>
                <Button variant="primary" size="lg">
                  Unlock the {HERO_OFFER.shortName}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to={freePath}>
                <Button variant="outline" size="lg">
                  Save this with a free account
                </Button>
              </Link>
              {!user && (
                <Link to={loginPath}>
                  <Button variant="ghost" size="lg">
                    Already have an account?
                  </Button>
                </Link>
              )}
            </div>
          </Card>

          <Card className="h-fit">
            <p className="font-body text-text-muted text-sm tracking-[0.24em] uppercase">
              Why the {HERO_OFFER.shortName} exists
            </p>
            <h2 className="mt-3 text-2xl font-bold">Turn this score into a focused study plan.</h2>
            <ul className="font-body text-text-secondary mt-6 space-y-3 text-sm leading-7">
              <li>Practice the exact content categories where your score dropped first.</li>
              <li>Move into full exam simulations once your weakest areas stabilize.</li>
              <li>Use one product instead of mixing scattered free resources and random notes.</li>
            </ul>

            <div className="border-secondary/30 bg-secondary/8 mt-6 rounded-2xl border p-5">
              <p className="font-body text-secondary text-sm font-semibold">
                One-time price: {HERO_OFFER.price}
              </p>
              <p className="font-body text-text-secondary mt-2 text-sm leading-7">
                {HERO_OFFER.accessWindow} of access to the paid study workflow. No subscription. No
                need to wonder whether you should keep paying after exam day.
              </p>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold">Category breakdown</h2>
            <div className="mt-6 space-y-5">
              {result.categoryScores.map((item) => (
                <ScoreBar
                  key={item.label}
                  label={item.label}
                  percentage={item.percentage}
                  detail={`${item.correct}/${item.total}`}
                />
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">Focus breakdown</h2>
              <Link to="/quiz/diagnostic">
                <Button variant="ghost" size="sm">
                  <RotateCcw className="h-4 w-4" />
                  Retake
                </Button>
              </Link>
            </div>
            <div className="mt-6 space-y-5">
              {result.focusAreas.slice(0, 5).map((item) => (
                <ScoreBar
                  key={item.label}
                  label={item.label}
                  percentage={item.percentage}
                  detail={`${item.misses}/${item.total} misses`}
                />
              ))}
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
