import { test, expect } from '@playwright/test'
import type { Page } from '@playwright/test'
import { studyContentData } from '../src/data/study-content'

const CORE_ROUTES = [
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

async function assertMobileFriendly(page: Page, route: string) {
  await page.goto(route)
  await page.waitForLoadState('networkidle')

  await expect(page.locator('h1').first(), `${route} should show a primary heading on mobile`).toBeVisible()

  const layout = await page.evaluate(() => {
    const root = document.documentElement
    const body = document.body
    return {
      viewportWidth: window.innerWidth,
      scrollWidth: Math.max(root.scrollWidth, body.scrollWidth),
    }
  })

  expect(
    layout.scrollWidth,
    `${route} has horizontal overflow on mobile (${layout.scrollWidth}px > ${layout.viewportWidth}px)`,
  ).toBeLessThanOrEqual(layout.viewportWidth + 1)
}

test.describe('Mobile Route Audit', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('core routes render without horizontal overflow on mobile', async ({ page }) => {
    for (const route of CORE_ROUTES) {
      await test.step(route, async () => {
        await assertMobileFriendly(page, route)
      })
    }
  })

  test('review detail routes render without horizontal overflow on mobile', async ({ page }) => {
    for (const topic of studyContentData) {
      await test.step(topic.id, async () => {
        await assertMobileFriendly(page, `/review/${topic.id}`)
      })
    }
  })
})
