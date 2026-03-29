import type { Page } from '@playwright/test'

export const CORE_ROUTES = [
  '/',
  '/login',
  '/signup',
  '/terms',
  '/privacy',
  '/dashboard',
  '/study',
  '/exam',
  '/quiz',
  '/flashcards',
  '/analytics',
  '/review',
  '/speed-round',
  '/clinical-scenario',
  '/feedback',
  '/settings',
]

export const VIEWPORTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
  largeDesktop: { width: 1440, height: 900 },
} as const

export async function assertNoHorizontalOverflow(page: Page) {
  const layout = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    scrollWidth: Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
    ),
  }))
  return layout.scrollWidth <= layout.viewportWidth + 1
}

export async function getComputedTokens(page: Page) {
  return page.evaluate(() => {
    const s = getComputedStyle(document.documentElement)
    const get = (name: string) => s.getPropertyValue(name).trim()
    return {
      colorPrimary: get('--color-primary'),
      colorBackground: get('--color-background'),
      colorTextPrimary: get('--color-text-primary'),
      colorSurface: get('--color-surface'),
      colorSecondary: get('--color-secondary'),
      fontDisplay: get('--font-display'),
      fontBody: get('--font-body'),
      fontMono: get('--font-mono'),
    }
  })
}
