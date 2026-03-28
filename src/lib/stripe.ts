import { resolveBetaMode } from '@/lib/beta'
import { useSettingsStore } from '@/stores/settingsStore'

const STRIPE_CHECKOUT_ENDPOINT = import.meta.env.VITE_STRIPE_CHECKOUT_ENDPOINT as string | undefined
const PAYMENT_LINKS = {
  pro: import.meta.env.VITE_STRIPE_PAYMENT_LINK_PRO as string | undefined,
  pro_ai: import.meta.env.VITE_STRIPE_PAYMENT_LINK_PRO_AI as string | undefined,
} as const

export const PRICING = {
  pro: {
    name: 'Praxis Pass Pack',
    price: 4900,
    priceDisplay: '$49',
    description: 'One-time payment. Full access for 6 months.',
    badge: 'Best first purchase',
    features: [
      'Unlimited practice questions for 6 months',
      'Full 132-question exam simulations',
      'Full flashcard library',
      'Progress dashboard and weak-area focus',
    ],
  },
  pro_ai: {
    name: 'Praxis Pass Pack + AI Coach',
    price: 6900,
    priceDisplay: '$69',
    description: 'Everything in Pro, plus AI-guided rationales for tougher misses.',
    badge: 'Highest support',
    features: [
      'Everything in Praxis Pass Pack',
      'AI-powered deep dives on missed questions',
      'Higher-touch review workflow for harder clinical items',
      'Best fit for anxious or retaking students',
    ],
  },
} as const

export type PricingTier = keyof typeof PRICING

function isBetaModeEnabled() {
  return resolveBetaMode(useSettingsStore.getState().betaModeEnabled)
}

export function isPaidUser(subscriptionTier: string | undefined): boolean {
  return (
    isBetaModeEnabled() ||
    subscriptionTier === 'pro' ||
    subscriptionTier === 'pro_ai' ||
    subscriptionTier === 'institutional'
  )
}

export function buildCheckoutLink(tier: PricingTier, email?: string) {
  const paymentLink = PAYMENT_LINKS[tier]
  if (!paymentLink) return null

  if (!email) return paymentLink

  try {
    const url = new URL(paymentLink)
    url.searchParams.set('prefilled_email', email)
    return url.toString()
  } catch {
    return paymentLink
  }
}

export async function createCheckoutSession(params: {
  userId?: string
  email?: string
  tier: PricingTier
  successUrl?: string
  cancelUrl?: string
  metadata?: Record<string, string | undefined>
}): Promise<{ url: string | null; error: string | null }> {
  if (STRIPE_CHECKOUT_ENDPOINT) {
    try {
      const response = await fetch(STRIPE_CHECKOUT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })

      const data = (await response.json()) as { url?: string; error?: string }
      if (!response.ok || !data.url) {
        return {
          url: null,
          error: data.error ?? `Checkout request failed (${response.status})`,
        }
      }

      return { url: data.url, error: null }
    } catch (error) {
      return {
        url: null,
        error: error instanceof Error ? error.message : 'Unable to reach checkout',
      }
    }
  }

  const url = buildCheckoutLink(params.tier, params.email)
  if (!url) {
    return {
      url: null,
      error:
        'Checkout is not configured yet. Add VITE_STRIPE_CHECKOUT_ENDPOINT or Stripe payment links to go live.',
    }
  }

  return { url, error: null }
}

export function canAccessFeature(
  feature: 'unlimited_questions' | 'ai_rationale' | 'exam_sim' | 'analytics' | 'flashcards',
  subscriptionTier: string,
  questionsToday: number = 0,
  examAttempts: number = 0,
): boolean {
  if (isBetaModeEnabled() || subscriptionTier === 'institutional' || subscriptionTier === 'pro_ai')
    return true
  if (subscriptionTier === 'pro' && feature !== 'ai_rationale') return true

  switch (feature) {
    case 'unlimited_questions':
      return questionsToday < 25
    case 'ai_rationale':
      return false
    case 'exam_sim':
      return examAttempts < 1
    case 'analytics':
      return true
    case 'flashcards':
      return true
    default:
      return false
  }
}
