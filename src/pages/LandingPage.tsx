import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen, Brain, Sparkles, Trophy, BarChart3,
  Layers, Zap, Check, ArrowRight, Star, Shield,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import { gsap, ScrollTrigger } from '@/lib/animations'

/* ===== Dashboard Mockup Component ===== */
function DashboardMockup() {
  return (
    <div
      className="relative z-10 mx-auto mt-12 w-full max-w-4xl px-2 sm:mt-16 sm:px-0"
      style={{ perspective: '1200px' }}
    >
      <div
        className="rounded-2xl border border-border bg-surface/70 p-4 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-6"
        style={{ transform: 'rotateX(8deg)' }}
      >
        <div className="mb-4 grid grid-cols-3 gap-3">
          {[
            { color: 'bg-success/40', val: '72%', label: 'Accuracy' },
            { color: 'bg-secondary/40', val: '342', label: 'Questions' },
            { color: 'bg-primary/40', val: '7', label: 'Day Streak' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface-elevated/50 p-4">
              <div className={`mb-1 h-2 w-8 rounded-full ${s.color}`} />
              <div className="font-mono text-xl font-bold text-text-primary">{s.val}</div>
              <div className="font-body text-[10px] text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-background/60 p-5">
          <div className="mb-3 flex gap-2">
            <div className="h-5 w-16 rounded-full bg-primary/20" />
            <div className="h-5 w-12 rounded-full bg-surface-elevated/60" />
          </div>
          <div className="mb-4 space-y-2">
            <div className="h-3 w-full rounded bg-text-muted/10" />
            <div className="h-3 w-4/5 rounded bg-text-muted/10" />
          </div>
          <div className="space-y-2">
            {['A', 'B', 'C', 'D'].map((l) => (
              <div key={l} className="flex items-center gap-3 rounded-lg border border-border/50 bg-surface/30 p-2.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-background text-[10px] font-bold text-text-muted">{l}</div>
                <div className="h-2.5 flex-1 rounded bg-text-muted/8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  { icon: Brain, title: 'Adaptive Engine', desc: 'Spaced repetition targets your weak areas automatically. The more you study, the smarter it gets.' },
  { icon: Sparkles, title: 'AI Rationales', desc: 'Get Claude-powered explanations for every question — why the right answer works and why yours didn\'t.' },
  { icon: BookOpen, title: 'Exam Simulation', desc: '132 questions, 150-minute timer. Experience realistic test conditions before the real thing.' },
  { icon: Trophy, title: 'Track Progress', desc: 'Dashboard with Big Nine radar chart, study streaks, and personalized weak area recommendations.' },
  { icon: Layers, title: 'Custom Quizzes', desc: 'Build quizzes by category, difficulty, or Big Nine area. Study exactly what you need.' },
  { icon: Zap, title: 'Flashcard System', desc: 'Key terms, syndromes, cranial nerves, and milestones — all with spaced repetition built in.' },
]

const PRICING = [
  { name: 'Free', price: '$0', period: 'forever', desc: 'Get started and see what PraxisPrep can do.', features: ['25 questions per day', '1 practice exam', 'Basic dashboard', 'Study content access'], cta: 'Start Free', highlighted: false },
  { name: 'Pro', price: '$49', period: 'one-time', desc: 'Everything you need to pass the Praxis.', features: ['Unlimited questions', 'Unlimited exam simulations', 'AI-powered rationales', 'Full flashcard library', 'Performance analytics', 'Custom quiz builder', 'Priority support'], cta: 'Get Pro Access', highlighted: true },
  { name: 'Institutional', price: 'Custom', period: 'per program', desc: 'For SLP programs and universities.', features: ['Everything in Pro', 'Bulk student accounts', 'Aggregate performance analytics', 'Program admin dashboard', 'Custom content integration'], cta: 'Contact Us', highlighted: false },
]

const STATS = [
  { value: 450, suffix: '+', label: 'Practice Questions' },
  { value: 132, suffix: '', label: 'Questions Per Exam' },
  { value: 9, suffix: '', label: 'Big Nine Areas' },
  { value: 3, suffix: '', label: 'Content Categories' },
]

export default function LandingPage() {
  const statsRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pageRef.current) return

    // Animate sections on scroll — fade up from visible (not from opacity:0)
    const sections = pageRef.current.querySelectorAll<HTMLElement>('.landing-animate')
    sections.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
      )
    })

    // Stagger feature cards
    gsap.fromTo('.feature-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.feature-card', start: 'top 88%', toggleActions: 'play none none none' } }
    )

    // Stagger pricing cards
    gsap.fromTo('.pricing-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.pricing-card', start: 'top 88%', toggleActions: 'play none none none' } }
    )

    // Stat counter animation
    if (statsRef.current) {
      statsRef.current.querySelectorAll<HTMLElement>('.stat-number').forEach((el) => {
        const target = parseInt(el.dataset.target ?? '0', 10)
        const suffix = el.dataset.suffix ?? ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target, duration: 1.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          onUpdate() { el.textContent = Math.round(obj.val) + suffix },
        })
      })
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        <div className="mesh-orb pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" style={{ animationDelay: '0s' }} />
        <div className="mesh-orb pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" style={{ animationDelay: '-5s' }} />
        <div className="mesh-orb pointer-events-none absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-secondary/8 blur-[100px]" style={{ animationDelay: '-10s' }} />

        <div className="relative z-10">
          <Badge variant="secondary" className="mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Praxis 5331 Prep
          </Badge>

          <h1 className="mx-auto max-w-5xl font-bold leading-[1.08] tracking-[-0.035em] text-[clamp(2.25rem,6vw,5.5rem)]">
            The smartest way to{' '}
            <span className="bg-gradient-to-r from-secondary to-amber-400 bg-clip-text text-transparent">
              pass the Praxis
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            Adaptive study engine with AI-powered rationales and realistic exam simulations.
            Built by a medical SLP who codes — not a textbook publisher.
          </p>

          <div className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start Studying Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="#features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </a>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            No credit card required &middot; 25 free questions daily
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          data-testid="landing-stats"
          className="relative z-10 mt-16 w-full max-w-4xl rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="grid grid-cols-2 items-stretch gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                data-testid="landing-stat-item"
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="stat-number font-display text-3xl font-bold text-secondary md:text-4xl" data-target={stat.value} data-suffix={stat.suffix}>
                  0{stat.suffix}
                </div>
                <div className="mt-1 font-body text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="landing-animate text-center">
          <Badge variant="primary" className="mb-6">
            <Zap className="h-3.5 w-3.5" />
            Features
          </Badge>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
            Everything you need to ace the Praxis
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-text-secondary">
            Designed by a CCC-SLP who knows exactly what the exam tests — and what trips students up.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {FEATURES.map((feature, idx) => {
            const isWide = idx < 2
            return (
              <div key={feature.title} className={`flex ${isWide ? 'lg:col-span-3' : 'sm:col-span-1 lg:col-span-3'}`}>
                <Card hover spotlight className={`feature-card flex h-full w-full flex-col hover-glow ${isWide ? 'lg:py-10' : ''}`}>
                  <div className={`mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-secondary/15 to-secondary/5 ${isWide ? 'h-14 w-14' : 'h-12 w-12'}`}>
                    <feature.icon className={`text-secondary ${isWide ? 'h-7 w-7' : 'h-6 w-6'}`} />
                  </div>
                  <h3 className={`mb-2 font-display ${isWide ? 'text-2xl' : 'text-xl'}`}>{feature.title}</h3>
                  <p className="flex-1 font-body text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-y border-border bg-surface/20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="landing-animate text-center">
            <Badge variant="default" className="mb-6">
              <BarChart3 className="h-3.5 w-3.5" />
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold md:text-5xl">Study smarter in three steps</h2>
          </div>

          <div className="mt-16 grid items-stretch gap-12 md:grid-cols-3">
            {[
              { step: '01', title: 'Take a diagnostic quiz', desc: 'Answer questions across all three content categories and Big Nine areas. We\'ll map your strengths and weaknesses.', icon: BookOpen },
              { step: '02', title: 'Study your weak areas', desc: 'Our adaptive engine serves you questions where you need the most practice. AI rationales explain the clinical reasoning.', icon: Brain },
              { step: '03', title: 'Simulate the real exam', desc: 'Take full 132-question practice exams under timed conditions. Track your scores and watch them improve.', icon: Trophy },
            ].map((item) => (
              <div key={item.step} className="landing-animate flex flex-col text-center md:text-left">
                <div className="mb-4 inline-flex items-center justify-center gap-3 md:justify-start">
                  <span className="font-mono text-4xl font-bold text-secondary/30">{item.step}</span>
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-2xl">{item.title}</h3>
                <p className="flex-1 font-body leading-relaxed text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="landing-animate text-center">
          <Badge variant="secondary" className="mb-6">
            <Star className="h-3.5 w-3.5" />
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold md:text-5xl">Less than a textbook. More than a question bank.</h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-text-secondary">
            One payment. Full access. No recurring fees eating into your grad student budget.
          </p>
        </div>

        <div className="landing-animate mx-auto mt-10 max-w-xl rounded-2xl border border-secondary/30 bg-secondary/5 p-5 text-center backdrop-blur-sm">
          <p className="font-body text-sm font-semibold text-secondary">Save up to 60% vs. competitors</p>
          <p className="mt-1 font-body text-xs text-text-secondary">
            Most Praxis prep subscriptions charge $99&ndash;$149/year. PraxisPrep is a one-time $49 payment with more features.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-3">
          {PRICING.map((plan) => (
            <div key={plan.name} className="flex">
              <Card
                variant={plan.highlighted ? 'glass' : 'default'}
                hover
                spotlight
                className={`pricing-card relative flex h-full w-full flex-col ${
                  plan.highlighted ? 'animated-gradient-border pro-pricing-card md:scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <Badge variant="secondary" className="absolute -top-3 right-6">Most Popular</Badge>
                )}
                <h3 className="font-display text-2xl">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-text-primary">{plan.price}</span>
                  <span className="font-body text-sm text-text-muted">/{plan.period}</span>
                </div>
                <p className="mt-3 font-body text-sm text-text-secondary">{plan.desc}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="font-body text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/signup" className="mt-8 block">
                  <Button variant={plan.highlighted ? 'primary' : 'outline'} size="lg" className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="border-t border-border bg-surface/20 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="landing-animate">
            <Badge variant="primary" className="mb-6">
              <Shield className="h-3.5 w-3.5" />
              Built by a Clinician
            </Badge>
            <h2 className="text-3xl font-bold md:text-5xl">Why this is different</h2>
          </div>

          <Card spotlight className="landing-animate mt-12 text-left">
            <p className="font-body text-lg leading-relaxed text-text-secondary">
              I'm Kristine — a medical SLP with a CCC and a full-stack developer. I built PraxisPrep
              because every study resource I found was either an overpriced textbook, a static PDF, or
              a quiz app that couldn't explain <em>why</em> an answer was right.
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-text-secondary">
              This platform uses <strong className="text-text-primary">spaced repetition</strong> to target your
              weak areas, <strong className="text-text-primary">AI-powered rationales</strong> to explain clinical
              reasoning, and <strong className="text-text-primary">realistic exam simulations</strong> so you know
              exactly what to expect. Every question is original, clinically accurate, and mapped to the
              official ETS blueprint.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 font-display text-xl text-secondary">K</div>
              <div>
                <p className="font-body font-semibold text-text-primary">Kristine Everett</p>
                <p className="font-body text-sm text-text-muted">M.A., CCC-SLP &middot; Tech SLP Studio</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="landing-animate text-3xl font-bold md:text-5xl">Ready to study smarter?</h2>
          <p className="landing-animate mx-auto mt-6 max-w-xl font-body text-lg text-text-secondary">
            Join hundreds of SLP grad students who are using PraxisPrep to pass the Praxis with confidence.
          </p>
          <div className="landing-animate mt-10">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Start Studying Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
