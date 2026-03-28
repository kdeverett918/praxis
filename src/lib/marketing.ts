const LEAD_CAPTURE_URL = import.meta.env.VITE_LEAD_CAPTURE_URL as string | undefined
const LOCAL_LEADS_KEY = 'praxis-marketing-leads'

export const HERO_OFFER = {
  name: 'Praxis Pass Pack',
  shortName: 'Pass Pack',
  price: '$49',
  priceCents: 4900,
  accessWindow: '6 months',
  diagnosticCta: 'Take the Free Diagnostic Quiz',
  checkoutPath: '/checkout?plan=pro',
  tagline: 'A focused Praxis 5331 study system built by a CCC-SLP.',
} as const

export const HERO_STATS = [
  { value: '450+', label: 'Original practice questions' },
  { value: '132', label: 'Questions in each exam sim' },
  { value: '6 months', label: 'One-time access window' },
  { value: '$49', label: 'One payment, no subscription' },
] as const

export const PROBLEM_CARDS = [
  {
    title: 'You do not need another giant binder.',
    body: 'Most students are balancing clinic, coursework, and placements. They need a clean practice loop, not a 400-page review book they never finish.',
  },
  {
    title: 'Generic question banks waste precious study time.',
    body: 'When every session feels random, it is hard to know whether you are fixing a weakness or just answering more questions.',
  },
  {
    title: 'Recurring subscriptions feel wrong for a short exam window.',
    body: 'Praxis prep is intense but finite. A one-time offer is easier to justify than another monthly charge during graduate school.',
  },
] as const

export const OFFER_STACK = [
  {
    title: '450+ original questions',
    body: 'Practice across the exact domains that create the most anxiety before exam day.',
  },
  {
    title: 'Full 132-question exam simulations',
    body: 'Rehearse pacing, flagging, and endurance before you sit for the real exam.',
  },
  {
    title: 'Custom quizzes and flashcards',
    body: 'Focus on weak spots instead of restarting the same giant study session every night.',
  },
  {
    title: 'Performance dashboard',
    body: 'See your pace, streak, and category performance in one place.',
  },
  {
    title: 'Built by a CCC-SLP who codes',
    body: 'Clinical credibility and product clarity matter more than generic test-prep packaging.',
  },
  {
    title: 'Free diagnostic before you buy',
    body: 'Students can see whether the Pass Pack is worth it before committing to the paid plan.',
  },
] as const

export const FUNNEL_STEPS = [
  {
    step: '01',
    title: 'Take the 12-question diagnostic',
    body: 'Get a fast read on how ready you are across the Praxis content map.',
  },
  {
    step: '02',
    title: 'Review your weak areas',
    body: 'See which content buckets need work before you spend another week studying blindly.',
  },
  {
    step: '03',
    title: 'Unlock the Pass Pack',
    body: 'Move into the full question bank, exam sims, flashcards, and dashboard with one payment.',
  },
] as const

export const PRICING_OPTIONS = [
  {
    name: 'Free Diagnostic',
    price: '$0',
    period: 'today',
    description: 'See your weak areas before you spend money on another study tool.',
    features: [
      '12-question readiness diagnostic',
      'Category-by-category score breakdown',
      'Clear recommendation on what to study next',
    ],
    cta: 'Start the Diagnostic',
    href: '/quiz/diagnostic',
    highlighted: false,
  },
  {
    name: HERO_OFFER.name,
    price: HERO_OFFER.price,
    period: 'one-time',
    description: 'The fastest credible path from "I should study" to focused, repeated practice.',
    features: [
      '450+ original practice questions',
      'Full 132-question exam simulations',
      'Custom quizzes and flashcards',
      'Performance dashboard',
      `${HERO_OFFER.accessWindow} of access`,
    ],
    cta: 'Unlock the Pass Pack',
    href: HERO_OFFER.checkoutPath,
    highlighted: true,
  },
  {
    name: 'Cohort Licenses',
    price: 'Custom',
    period: 'per program',
    description:
      'For faculty, cohort leads, and program directors who want a shared prep workflow.',
    features: [
      'Bulk student access',
      'Simple roll-out for one cohort',
      'Direct contact for implementation',
    ],
    cta: 'Request Cohort Pricing',
    href: 'mailto:hello@praxisprep.io?subject=PraxisPrep%20Cohort%20Pricing',
    highlighted: false,
  },
] as const

export const COMPARISON_ROWS = [
  {
    label: 'Free readiness check before buying',
    praxisPrep: 'Included',
    textbook: 'No',
    subscription: 'Sometimes',
  },
  {
    label: 'One-time pricing for a short study window',
    praxisPrep: 'Yes',
    textbook: 'One-time',
    subscription: 'Usually monthly or annual',
  },
  {
    label: 'Full-length 132-question exam rehearsal',
    praxisPrep: 'Yes',
    textbook: 'No',
    subscription: 'Often yes',
  },
  {
    label: 'Quick-switch practice by weakness',
    praxisPrep: 'Yes',
    textbook: 'No',
    subscription: 'Varies',
  },
  {
    label: 'Flashcards and question practice in one place',
    praxisPrep: 'Yes',
    textbook: 'No',
    subscription: 'Sometimes',
  },
] as const

export const FAQS = [
  {
    question: 'Is PraxisPrep affiliated with ETS?',
    answer:
      'No. PraxisPrep is an independent educational product. The practice questions and study content are original and are not endorsed by ETS.',
  },
  {
    question: 'Why is the Pass Pack one-time instead of monthly?',
    answer:
      'Most students study for a finite window. A one-time offer fits that buying behavior better than another subscription that lingers after the exam.',
  },
  {
    question: 'Can I try something before I pay?',
    answer:
      'Yes. The funnel is built around a free diagnostic so students can see whether the paid plan is actually justified for them.',
  },
  {
    question: 'What should I avoid claiming on this site until there is proof?',
    answer:
      'Avoid unsupported pass-rate claims, fake testimonials, and any promise that the AI tutor is fully live until the secure server-side flow is in production.',
  },
] as const

export interface LeadCapturePayload {
  email: string
  fullName?: string
  examDate?: string
  source: 'diagnostic_quiz' | 'checkout_interest' | 'waitlist'
  score?: number
  weakestFocus?: string
  metadata?: Record<string, unknown>
}

export interface LeadCaptureResult {
  ok: boolean
  delivery: 'webhook' | 'local'
  error: string | null
}

function readStoredLeads(): LeadCapturePayload[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = window.localStorage.getItem(LOCAL_LEADS_KEY)
    if (!stored) return []

    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? (parsed as LeadCapturePayload[]) : []
  } catch {
    return []
  }
}

function writeStoredLeads(leads: LeadCapturePayload[]) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(leads))
}

function storeLeadLocally(payload: LeadCapturePayload): LeadCaptureResult {
  const existing = readStoredLeads()
  writeStoredLeads([...existing, payload])
  return { ok: true, delivery: 'local', error: null }
}

export function getAttributionFromLocation() {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  const entries = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref']
    .map((key) => [key, params.get(key)] as const)
    .filter(([, value]) => Boolean(value))

  return Object.fromEntries(entries)
}

export async function captureLead(payload: LeadCapturePayload): Promise<LeadCaptureResult> {
  if (!LEAD_CAPTURE_URL) {
    return storeLeadLocally(payload)
  }

  try {
    const response = await fetch(LEAD_CAPTURE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        capturedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Lead capture failed with status ${response.status}`)
    }

    return {
      ok: true,
      delivery: 'webhook',
      error: null,
    }
  } catch (error) {
    const fallback = storeLeadLocally(payload)
    return {
      ...fallback,
      error: error instanceof Error ? error.message : 'Lead capture failed',
    }
  }
}

type AuthPathOptions = {
  email?: string
  next?: string
  plan?: string
  source?: string
  score?: string | number
}

function buildPath(basePath: string, options: AuthPathOptions = {}) {
  const params = new URLSearchParams()

  if (options.email) params.set('email', options.email)
  if (options.next) params.set('next', options.next)
  if (options.plan) params.set('plan', options.plan)
  if (options.source) params.set('source', options.source)
  if (options.score !== undefined) params.set('score', String(options.score))

  const query = params.toString()
  return query ? `${basePath}?${query}` : basePath
}

export function buildSignupPath(options: AuthPathOptions = {}) {
  return buildPath('/signup', options)
}

export function buildLoginPath(options: AuthPathOptions = {}) {
  return buildPath('/login', options)
}
