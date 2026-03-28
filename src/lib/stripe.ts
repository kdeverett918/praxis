import { resolveBetaMode } from '@/lib/beta'
import { useSettingsStore } from '@/stores/settingsStore'

const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined

export const PRICING = {
  pro: {
    name: 'Pro Access',
    price: 4900, // $49.00 in cents
    priceDisplay: '$49',
    description: 'One-time payment. Full access for 6 months.',
  },
} as const

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createCheckoutSession(_params: {
  userId: string
  email: string
  tier: keyof typeof PRICING
  successUrl: string
  cancelUrl: string
}): Promise<{ url: string | null; error: string | null }> {
  if (!STRIPE_KEY) {
    return { url: null, error: 'Stripe not configured' }
  }

  // In production, this would call a backend endpoint (Supabase Edge Function)
  // that creates the Stripe Checkout session server-side.
  //
  // For MVP, we'll use Stripe Payment Links or a simple edge function:
  //
  // const response = await fetch('/api/checkout', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(params),
  // })
  // const data = await response.json()
  // return { url: data.url, error: null }

  return { url: null, error: 'Checkout not yet configured — set up Stripe Edge Function' }
}

export function isProUser(subscriptionTier: string | undefined): boolean {
  return isBetaModeEnabled() || subscriptionTier === 'pro' || subscriptionTier === 'institutional'
}

function isBetaModeEnabled() {
  return resolveBetaMode(useSettingsStore.getState().betaModeEnabled)
}

export function canAccessFeature(
  feature: 'unlimited_questions' | 'ai_rationale' | 'exam_sim' | 'analytics' | 'flashcards',
  subscriptionTier: string,
  questionsToday: number = 0,
): boolean {
  if (isBetaModeEnabled()) return true
  if (subscriptionTier === 'pro' || subscriptionTier === 'institutional') return true

  switch (feature) {
    case 'unlimited_questions':
      return questionsToday < 25 // Free tier: 25/day
    case 'ai_rationale':
      return false // Pro only
    case 'exam_sim':
      return questionsToday === 0 // Free: 1 exam attempt (simplified check)
    case 'analytics':
      return true // Basic analytics for all
    case 'flashcards':
      return true // Flashcards for all
    default:
      return false
  }
}
