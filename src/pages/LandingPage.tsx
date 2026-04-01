import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BookOpen, Brain, Sparkles, Trophy,
  Layers, Zap, Check, ArrowRight, Shield, Beaker,
  ChevronDown, FileText,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/shared/Button'
import VideoSlider from '@/components/shared/VideoSlider'
import { useSettingsStore } from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'
import { trackEvent } from '@/lib/analytics'

const FEATURES = [
  { icon: Brain, title: 'Targeted Practice', desc: 'Study the Big Nine areas you keep missing instead of rereading everything from class.', tier: 1 },
  { icon: Sparkles, title: 'Detailed Explanations', desc: 'Every question is paired with clear reasoning so misses turn into usable study notes.', tier: 1 },
  { icon: BookOpen, title: 'Exam Simulation', desc: 'Use full 132-question practice exams when you need a realistic weekend rep.', tier: 2 },
  { icon: Trophy, title: 'Progress Tracking', desc: 'See which content categories need the next block of study before test day.', tier: 2 },
  { icon: Layers, title: 'Custom Quizzes', desc: 'Build 10-, 25-, or 50-question sets around the topics you need right now.', tier: 2 },
  { icon: Zap, title: 'Flashcard Review', desc: 'Quick-hit decks for milestones, cranial nerves, syndromes, and high-yield facts.', tier: 3 },
]

const STATS = [
  { value: 600, suffix: '+', label: 'Original Practice Questions' },
  { value: 132, suffix: '', label: 'Questions On The Real Exam' },
  { value: 150, suffix: 'm', label: 'Minutes For The Full Praxis' },
  { value: 162, suffix: '', label: 'ASHA Passing Score' },
]

const PRO_FEATURES = [
  'Unlimited questions',
  'Unlimited exam simulations',
  'Detailed answer explanations',
  'Full flashcard library',
  'Performance analytics',
  'Custom quiz builder',
  'All Big Nine areas',
  '6-month full access',
]

const GRAD_SCHOOL_REALITY = [
  {
    icon: Brain,
    title: 'Built for short study blocks',
    desc: 'Use 10-question sessions when you only have a few minutes before clinic, after class, or on the train home.',
  },
  {
    icon: Layers,
    title: 'Built for weak-area cleanup',
    desc: 'Stop guessing what to review. Start with the diagnostic, then spend time on the Big Nine areas where you are actually dropping points.',
  },
  {
    icon: Trophy,
    title: 'Built for weekend exam reps',
    desc: 'Save full-length practice exams for your longer blocks and use weekdays for focused, lower-friction review.',
  },
]

const FAQ_ITEMS = [
  { q: 'What exactly do I get for $49?', a: 'Full access for 6 months: unlimited questions, unlimited exam simulations, detailed answer explanations, the complete flashcard library, performance analytics, and the custom quiz builder.' },
  { q: 'Is this aligned with the actual Praxis 5331?', a: 'Yes. Questions are mapped to the official ETS content categories and Big Nine areas. The exam simulation follows the real 132-question, 150-minute format.' },
  { q: 'How is this different from a static question bank?', a: 'SLP Study Hub is built around grad-school study reality: short focused practice blocks, weak-area targeting, and explanations that help you turn misses into review notes.' },
  { q: 'Who wrote these questions?', a: 'All questions are written by a practicing medical SLP and reviewed against the official ETS blueprint. Every question is original and clinically accurate.' },
  { q: 'What if I already passed the Praxis?', a: 'The platform is also useful as a clinical refresher and study tool for CFY clinicians. But it\'s primarily designed for students preparing for their first attempt.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes — 30-day money-back guarantee. If SLP Study Hub doesn\'t help you study more effectively, email us for a full refund.' },
  { q: 'Can I try it before paying?', a: 'Absolutely. Start with the free diagnostic, then use the free tier for 25 questions per day. No credit card required.' },
  { q: 'How should I use this during grad school?', a: 'Most students do best with short weekday practice blocks and a longer weekend exam session. Use the diagnostic first, then focus on your weakest categories before taking a full-length simulation.' },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll<HTMLElement>('.scroll-reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = parseInt(el.dataset.delay ?? '0', 10)
            setTimeout(() => el.classList.add('revealed'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

function useCountUp(targetRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!targetRef.current) return
    const els = targetRef.current.querySelectorAll<HTMLElement>('.stat-number')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.target ?? '0', 10)
          const suffix = el.dataset.suffix ?? ''
          const duration = 1200
          const start = performance.now()

          function step(now: number) {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            el.textContent = Math.round(eased * target) + suffix
            if (t < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          observer.unobserve(el)
        })
      },
      { threshold: 0.5 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [targetRef])
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-body text-base font-semibold text-text-primary transition-colors hover:text-primary"
      >
        {q}
        <ChevronDown className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`faq-content ${open ? 'open' : ''}`}>
        <div>
          <p className="pb-5 font-body text-sm leading-relaxed text-text-secondary">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const navigate = useNavigate()
  const pageRef = useScrollReveal()
  const statsRef = useRef<HTMLDivElement>(null)
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const updateSettings = useSettingsStore((s) => s.updateSettings)
  const betaMode = resolveBetaMode(betaModeEnabled)

  useCountUp(statsRef)

  const handleContinueInBetaMode = useCallback(() => {
    updateSettings({ betaModeEnabled: true })
    navigate('/dashboard')
  }, [updateSettings, navigate])

  const tier1 = FEATURES.filter((f) => f.tier === 1)
  const tier2 = FEATURES.filter((f) => f.tier === 2)
  const tier3 = FEATURES.filter((f) => f.tier === 3)

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-28 pb-20 text-center md:pt-36 md:pb-24"
      >
        {/* Animated gradient mesh background */}
        <div className="hero-mesh" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="animated-gradient-border inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-text-secondary">
            <Shield className="h-3.5 w-3.5" />
            Built for SLP grad students, externs, and first-time test takers
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.1] tracking-[-0.03em] text-text-primary">
            Pass the Praxis without pausing <span className="text-gradient-hero">grad school.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            Study in clinic-friendly blocks, spot your weak Big Nine areas fast, and build exam-day confidence with 600+ original questions, full practice exams, and clear explanations.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link to="/diagnostic" className="w-full sm:w-auto" onClick={() => trackEvent('hero_cta_clicked', { cta: 'free_diagnostic' })}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Take Free Diagnostic
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/signup" className="w-full sm:w-auto" onClick={() => trackEvent('hero_cta_clicked', { cta: 'start_free' })}>
              <Button variant="outline" size="lg" className="w-full border-border text-text-secondary hover:bg-background-dark-elevated hover:text-text-primary sm:w-auto">
                Start Studying Free
              </Button>
            </Link>
          </div>

          {BETA_MODE_AVAILABLE && (
            <div
              data-testid="landing-beta-cta"
              className="mx-auto mt-6 flex max-w-2xl flex-col items-stretch gap-3 rounded-xl border border-border bg-surface p-4 text-left sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  <Beaker className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-text-primary">
                    {betaMode ? 'Beta Mode is active.' : 'Beta Mode available.'}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-text-muted">
                    Open the workspace directly — bypass login.
                  </p>
                </div>
              </div>
              <Button variant={betaMode ? 'outline' : 'secondary'} size="sm" onClick={handleContinueInBetaMode} className={betaMode ? 'border-border text-text-secondary' : ''}>
                {betaMode ? 'Open Beta Workspace' : 'Continue in Beta Mode'}
              </Button>
            </div>
          )}

          <p className="mt-6 font-body text-sm text-text-muted">
            No credit card required &middot; 8-minute diagnostic &middot; 25 free questions daily
          </p>
        </div>
      </section>

      {/* ===== STATS STRIP (light transition) ===== */}
      <section
        ref={statsRef}
        data-testid="landing-stats"
        className="border-y border-border bg-surface/50"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:py-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-testid="landing-stat-item"
              className="flex flex-col items-center text-center"
            >
              <span
                className="stat-number font-mono text-3xl font-bold text-primary md:text-4xl"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </span>
              <span className="mt-1 font-body text-sm text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES (asymmetric) ===== */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="scroll-reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary">
            Why SLP Study Hub
          </span>
          <h2 className="mt-4 text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.025em]">
            Built for how SLP grad students actually prepare
          </h2>
          <p className="mt-4 font-body text-lg text-text-secondary">
            Less aimless rereading. More targeted reps, explanation review, and exam-specific practice that fits around class and clinic.
          </p>
        </div>

        {/* Tier 1: Two hero features */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {tier1.map((feature, i) => (
            <div key={feature.title} className="scroll-reveal holographic-shimmer rounded-xl border border-border bg-surface p-8 shadow-card" data-testid="feature-card" data-delay={i * 80}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-body text-xl font-semibold text-text-primary">{feature.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Tier 2: Three medium features */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {tier2.map((feature, i) => (
            <div key={feature.title} className="scroll-reveal rounded-xl border border-border bg-surface p-6 shadow-card" data-testid="feature-card" data-delay={(i + 2) * 80}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-body text-base font-semibold text-text-primary">{feature.title}</h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Tier 3: Full-width accent */}
        {tier3.map((feature) => (
          <div key={feature.title} className="scroll-reveal mt-6 flex items-center gap-8 rounded-xl border border-border bg-surface-elevated p-8" data-testid="feature-card" data-delay={400}>
            <div className="hidden md:block">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-body text-lg font-semibold text-text-primary">{feature.title}</h3>
              <p className="mt-1.5 max-w-md font-body text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
            </div>
            {/* Stylized card stack */}
            <div className="relative ml-auto hidden h-40 w-56 md:block">
              <div className="absolute top-3 left-3 h-full w-full rounded-lg border border-border bg-surface opacity-40" />
              <div className="absolute top-1.5 left-1.5 h-full w-full rounded-lg border border-border bg-surface opacity-70" />
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg border border-border bg-surface p-4 shadow-sm">
                <FileText className="mb-2 h-8 w-8 text-primary/40" />
                <span className="font-body text-xs font-medium text-text-muted">Tap to reveal</span>
              </div>
            </div>
            {/* Mobile fallback */}
            <div className="md:hidden">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-body text-base font-semibold text-text-primary">{feature.title}</h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-text-secondary">{feature.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="border-y border-border bg-surface/30 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="scroll-reveal mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
              Built For Real Life
            </span>
            <h2 className="mt-4 text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.025em]">
              Better fit for clinic schedules and externship weeks
            </h2>
            <p className="mt-4 font-body text-lg text-text-secondary">
              You are probably fitting Praxis prep around placements, classes, paperwork, and exhaustion. The site should respect that instead of pretending you have endless uninterrupted study time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {GRAD_SCHOOL_REALITY.map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal rounded-2xl border border-border bg-surface p-6 shadow-card"
                data-delay={i * 80}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-body text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-y border-border bg-surface/30 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="scroll-reveal mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
              How It Works
            </span>
            <h2 className="mt-4 text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.025em]">
              From first question to exam-day confidence
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              { step: '01', title: 'Take a diagnostic quiz', desc: 'Answer questions across all three content categories and Big Nine areas. We\'ll map your strengths and weaknesses.', icon: BookOpen },
              { step: '02', title: 'Study your weak areas', desc: 'Build short targeted practice blocks around the Big Nine areas where you are missing points and review the explanations right away.', icon: Brain },
              { step: '03', title: 'Simulate the real exam', desc: 'Take full 132-question practice exams under timed conditions. Track your scores and watch them improve.', icon: Trophy },
            ].map((item, i) => (
              <div key={item.step} className="scroll-reveal flex flex-col text-center md:text-left" data-delay={i * 100}>
                <div className="mb-4 inline-flex items-center justify-center gap-3 md:justify-start">
                  <span className="font-mono text-4xl font-bold text-text-muted/40">{item.step}</span>
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-body text-xl font-semibold">{item.title}</h3>
                <p className="flex-1 font-body leading-relaxed text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING (single $49 offer) ===== */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="scroll-reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-light px-3 py-1 text-xs font-medium text-secondary">
            Pricing
          </span>
          <h2 className="mt-4 text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.025em]">
            Less than a textbook. More than a question bank.
          </h2>
        </div>

        {/* Comparison strip */}
        <div className="scroll-reveal mx-auto mt-10 max-w-2xl rounded-xl border border-secondary/20 bg-secondary-light p-5 text-center" data-delay={100}>
          <p className="font-body text-sm font-semibold text-secondary">Try the workflow before you pay</p>
          <p className="mt-1 font-body text-sm font-semibold text-text-primary">
            Start with the free diagnostic and 25 questions per day, then upgrade only when you want full access.
          </p>
        </div>

        {/* Main offer card */}
        <div className="scroll-reveal animated-gradient-border mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/40 bg-surface p-8 shadow-glow-primary md:p-10" data-testid="pricing-card" data-delay={200}>
          <h3 className="text-center text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.02em]">SLP Study Hub Pro</h3>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="font-body text-5xl font-bold text-text-primary">$49</span>
            <span className="font-body text-sm text-text-muted">one-time payment</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {PRO_FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="font-body text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>

          <Link to="/signup" className="mt-8 block" onClick={() => trackEvent('pricing_cta_clicked', { cta: 'pro_signup' })}>
            <Button variant="primary" size="lg" className="w-full">
              Get SLP Study Hub Pro
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>

          <div className="mt-4 flex items-center justify-center gap-2 text-center">
            <Shield className="h-4 w-4 text-success" />
            <span className="font-body text-xs text-text-muted">30-day money-back guarantee</span>
          </div>

          <p className="mt-4 text-center font-body text-xs text-text-muted">
            Or <Link to="/signup" className="text-primary underline hover:text-primary-hover">start free</Link> — 25 questions daily, no card required.
          </p>
        </div>

        <p className="mt-6 text-center font-body text-xs text-text-muted">
          SLP programs: <a href="mailto:kristine@slpstudyhub.com" className="text-primary underline hover:text-primary-hover">contact us</a> for bulk pricing.
        </p>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="border-y border-border bg-surface/30 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="scroll-reveal">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
              <Shield className="h-3.5 w-3.5" />
              Built by an SLP, for SLPs
            </span>
            <h2 className="mt-6 text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.025em]">
              Stronger than a generic question bank
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
              ASHA recommends most students take the Praxis during their final year of study. This platform is designed for that window: targeted practice, clinically relevant explanations, and realistic full-length simulations when you are ready to test yourself.
            </p>
            <p className="mt-6 font-body font-semibold text-text-primary">
              Every question is original, clinically accurate, and mapped to the official ETS blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FREE VIDEO RESOURCES (slider) ===== */}
      <VideoSlider />

      {/* ===== FAQ ===== */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <div className="scroll-reveal text-center">
          <h2 className="text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.025em]">
            Frequently asked questions
          </h2>
        </div>
        <div className="scroll-reveal mt-10" data-delay={100}>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA (dark bookend) ===== */}
      <section className="border-t border-border bg-surface/50 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="scroll-reveal text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.025em] text-text-primary">
            Start with the same step a smart grad student would take.
          </h2>
          <p className="scroll-reveal mt-4 font-body text-lg text-text-secondary" data-delay={80}>
            Take the free diagnostic, see where you stand, then turn the result into a focused study routine.
          </p>
          <div className="scroll-reveal mt-8" data-delay={160}>
            <Link to="/diagnostic" onClick={() => trackEvent('footer_cta_clicked', { cta: 'final_diagnostic' })}>
              <Button variant="primary" size="lg">
                Take Free Diagnostic
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-4 font-body text-sm text-text-muted">
              Want the full question bank instead? <Link to="/signup" className="text-text-secondary underline hover:text-text-primary">Start free</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
