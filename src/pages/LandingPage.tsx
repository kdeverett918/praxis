import { BookOpen, Brain, Sparkles, Trophy } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-pill bg-surface px-4 py-2 text-sm text-text-secondary">
          <Sparkles className="h-4 w-4" />
          AI-Powered Praxis 5331 Prep
        </div>
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-text-primary md:text-7xl">
          The smartest way to pass the{' '}
          <span className="text-secondary">SLP Praxis</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
          Adaptive study engine, AI-powered rationales, and exam simulations — built by a
          CCC-SLP who codes. Study smarter, not harder.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:bg-secondary-hover">
            Start Studying Free
          </button>
          <button className="rounded-xl border border-border bg-surface px-8 py-4 text-lg font-semibold text-text-primary transition-all hover:bg-surface-elevated">
            See How It Works
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Everything you need to ace the Praxis
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Brain,
              title: 'Adaptive Engine',
              desc: 'Spaced repetition targets your weak areas automatically.',
            },
            {
              icon: Sparkles,
              title: 'AI Rationales',
              desc: 'Claude explains why each answer is right — and why yours was wrong.',
            },
            {
              icon: BookOpen,
              title: 'Exam Simulation',
              desc: '132 questions, 150 minutes. Realistic test conditions.',
            },
            {
              icon: Trophy,
              title: 'Track Progress',
              desc: 'Dashboard with Big Nine radar, streaks, and weak area cards.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <feature.icon className="mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 text-center text-sm text-text-muted">
        <p>
          PraxisPrep is not affiliated with, endorsed by, or sponsored by ETS.
        </p>
        <p className="mt-2">
          Built by Tech SLP Studio | Kristine, M.A., CCC-SLP
        </p>
      </footer>
    </div>
  )
}
