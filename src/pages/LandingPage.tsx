import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BookOpen, Brain, Sparkles, Trophy,
  Layers, Zap, Check, ArrowRight, Shield, Beaker,
  ChevronDown, FileText, Video,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/shared/Button'
import { useSettingsStore } from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'

const FEATURES = [
  { icon: Brain, title: 'Adaptive Engine', desc: 'Spaced repetition targets your weak areas automatically. The more you study, the smarter it gets.', tier: 1 },
  { icon: Sparkles, title: 'AI Rationales', desc: 'Get Claude-powered explanations for every question — why the right answer works and why yours didn\'t.', tier: 1 },
  { icon: BookOpen, title: 'Exam Simulation', desc: '132 questions, 150-minute timer. Realistic test conditions.', tier: 2 },
  { icon: Trophy, title: 'Track Progress', desc: 'Big Nine radar chart, study streaks, and weak area recommendations.', tier: 2 },
  { icon: Layers, title: 'Custom Quizzes', desc: 'Build quizzes by category, difficulty, or Big Nine area.', tier: 2 },
  { icon: Zap, title: 'Flashcard System', desc: 'Key terms, syndromes, cranial nerves, and milestones with spaced repetition.', tier: 3 },
]

const STATS = [
  { value: 660, suffix: '+', label: 'Practice Questions' },
  { value: 5, suffix: '', label: 'Full Practice Exams' },
  { value: 9, suffix: '', label: 'Big Nine Areas' },
  { value: 3, suffix: '', label: 'Content Categories' },
]

const PRO_FEATURES = [
  'Unlimited questions',
  'Unlimited exam simulations',
  'AI-powered rationales',
  'Full flashcard library',
  'Performance analytics',
  'Custom quiz builder',
  'All Big Nine areas',
  '6-month full access',
]

const FAQ_ITEMS = [
  { q: 'What exactly do I get for $49?', a: 'Full access for 6 months: unlimited questions, unlimited exam simulations, AI-powered rationales for every question, the complete flashcard library, performance analytics, and the custom quiz builder. No restrictions.' },
  { q: 'Is this aligned with the actual Praxis 5331?', a: 'Yes. Every question is mapped to the official ETS content categories and Big Nine areas. The exam simulation mirrors the real test format: 132 questions, 150 minutes, scaled scoring.' },
  { q: 'How is this different from TherapEd or ETS practice tests?', a: 'SLP Study Hub is adaptive — it learns your weak areas and prioritizes them. You also get AI explanations for every question, not just an answer key. And it costs a fraction of what competitors charge.' },
  { q: 'Who wrote these questions?', a: 'All questions are written by a practicing medical SLP and reviewed against the official ETS blueprint. Every question is original and clinically accurate.' },
  { q: 'What if I already passed the Praxis?', a: 'The platform is also useful as a clinical refresher and study tool for CFY clinicians. But it\'s primarily designed for students preparing for their first attempt.' },
  { q: 'Is there a money-back guarantee?', a: 'Yes — 30-day money-back guarantee. If SLP Study Hub doesn\'t help you study more effectively, email us for a full refund.' },
  { q: 'Can I try it before paying?', a: 'Absolutely. The free tier gives you 25 questions per day, basic dashboard access, and the study content library. No credit card required.' },
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
            Built by a CCC-SLP, not a publisher
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.1] tracking-[-0.03em] text-text-primary">
            Pass the Praxis on your <span className="text-gradient-hero">first try.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            AI-powered adaptive study with 660+ original questions, 5 full practice exams, and instant rationales — built by an SLP, for SLPs.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start Studying Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="#features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full border-border text-text-secondary hover:bg-background-dark-elevated hover:text-text-primary sm:w-auto">
                See What's Inside
              </Button>
            </a>
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
            No credit card required &middot; 25 free questions daily
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
            Built different from your textbook's question bank
          </h2>
          <p className="mt-4 font-body text-lg text-text-secondary">
            Every feature is designed around how SLPs actually prepare — not how publishers think you should.
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
              { step: '02', title: 'Study your weak areas', desc: 'Our adaptive engine serves you questions where you need the most practice. AI rationales explain the clinical reasoning.', icon: Brain },
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
          <p className="font-body text-sm font-semibold text-secondary">Stop overpaying for Praxis prep</p>
          <p className="mt-1 font-body text-xs text-text-secondary">
            <span className="line-through">TherapEd $149/yr</span> &middot; <span className="line-through">ETS Materials $99</span> &middot; <span className="line-through">Pocket Prep $79/yr</span>
          </p>
          <p className="mt-1 font-body text-sm font-semibold text-text-primary">
            SLP Study Hub: $49 once. Full access. Done.
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

          <Link to="/signup" className="mt-8 block">
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
              Study smarter, not harder
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
              This platform uses <strong className="text-text-primary">spaced repetition</strong> to target your weak areas, <strong className="text-text-primary">AI-powered rationales</strong> to explain clinical reasoning, and <strong className="text-text-primary">realistic exam simulations</strong> so you know exactly what to expect on test day.
            </p>
            <p className="mt-6 font-body font-semibold text-text-primary">
              Every question is original, clinically accurate, and mapped to the official ETS blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VIDEOS CTA ===== */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="scroll-reveal mx-auto max-w-2xl">
          <Link
            to="/videos"
            className="group flex items-center gap-6 rounded-2xl border border-accent-pink/20 bg-accent-pink-light p-6 transition-all hover:border-accent-pink/40 hover:shadow-glow-pink md:p-8"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-pink/20 transition-transform group-hover:scale-110">
              <Video className="h-7 w-7 text-accent-pink" />
            </div>
            <div className="flex-1">
              <h3 className="font-body text-lg font-semibold text-text-primary">Watch SLP students study smarter</h3>
              <p className="mt-1 font-body text-sm text-text-secondary">
                Curated study tips, clinical reviews, and motivation from top SLP creators.
              </p>
            </div>
            <ArrowRight className="hidden h-5 w-5 shrink-0 text-accent-pink transition-transform group-hover:translate-x-1 md:block" />
          </Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
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
            Your Praxis date isn't waiting.
          </h2>
          <p className="scroll-reveal mt-4 font-body text-lg text-text-secondary" data-delay={80}>
            Start studying now and feel ready on test day.
          </p>
          <div className="scroll-reveal mt-8" data-delay={160}>
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Start Studying Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-4 font-body text-sm text-text-muted">
              Already have an account? <Link to="/login" className="text-text-secondary underline hover:text-text-primary">Log in</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
