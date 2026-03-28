import { test, expect } from '@playwright/test'

test.describe('Responsive Design — Landing Page', () => {
  test('renders correctly at mobile viewport (375x667)', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
    })
    const page = await context.newPage()
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Hero headline should be visible
    await expect(page.locator('h1').filter({ hasText: 'pass the Praxis' })).toBeVisible()

    // Hamburger menu should be visible instead of desktop nav
    await expect(page.getByLabel('Open menu')).toBeVisible()

    // Desktop nav links should be hidden
    const desktopNav = page.locator('nav .hidden.md\\:flex')
    await expect(desktopNav).toBeHidden()

    // Stats bar should still be visible
    const statsBar = page.getByTestId('landing-stats')
    await expect(statsBar.getByText('Practice Questions')).toBeVisible()

    await context.close()
  })

  test('renders correctly at tablet viewport (768x1024)', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 768, height: 1024 },
    })
    const page = await context.newPage()
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Hero headline should be visible
    await expect(page.locator('h1').filter({ hasText: 'pass the Praxis' })).toBeVisible()

    // At 768px (md breakpoint), desktop nav should be visible
    const desktopNav = page.locator('nav .hidden.md\\:flex')
    await expect(desktopNav).toBeVisible()

    // Features section should be visible
    await expect(page.getByRole('heading', { name: 'Adaptive Engine' })).toBeVisible()

    await context.close()
  })

  test('renders correctly at desktop viewport (1440x900)', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    })
    const page = await context.newPage()
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Hero headline should be visible
    await expect(page.locator('h1').filter({ hasText: 'pass the Praxis' })).toBeVisible()

    // Desktop nav should be fully visible
    const nav = page.locator('nav')
    await expect(nav.getByText('Features', { exact: true })).toBeVisible()
    await expect(nav.getByText('Pricing', { exact: true })).toBeVisible()
    await expect(nav.getByText('About', { exact: true })).toBeVisible()

    // All pricing cards should be visible
    const pricingCards = page.locator('.pricing-card')
    await expect(pricingCards).toHaveCount(3)

    await context.close()
  })
})

test.describe('Responsive Design — Dashboard', () => {
  test('mobile: bottom nav visible, sidebar hidden', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
    })
    const page = await context.newPage()
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    // Sidebar should be hidden on mobile (has `hidden lg:block`)
    const sidebar = page.locator('aside')
    await expect(sidebar).toBeHidden()

    // Bottom nav should be visible (has `lg:hidden`)
    const bottomNav = page.locator('nav.fixed.bottom-0')
    await expect(bottomNav).toBeVisible()

    await context.close()
  })

  test('desktop: sidebar visible, bottom nav hidden', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    })
    const page = await context.newPage()
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    // Sidebar should be visible on desktop
    const sidebar = page.locator('aside')
    await expect(sidebar).toBeVisible()

    // Bottom nav should be hidden on desktop
    const bottomNav = page.locator('nav.fixed.bottom-0')
    await expect(bottomNav).toBeHidden()

    await context.close()
  })
})

test.describe('Responsive Design — Study Page', () => {
  test('question card is readable at mobile width', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
    })
    const page = await context.newPage()
    await page.goto('/study')
    await page.waitForLoadState('networkidle')

    // Study Mode heading should be visible
    await expect(page.getByText('Study Mode')).toBeVisible()

    // Question stem should be visible and not overflow
    const stemCard = page.locator('.border-l-primary')
    await expect(stemCard).toBeVisible()
    const box = await stemCard.boundingBox()
    expect(box).not.toBeNull()
    // Card should fit within the viewport width
    expect(box!.width).toBeLessThanOrEqual(375)

    // All 4 options should be visible
    const options = page.locator('.space-y-3 > button')
    await expect(options).toHaveCount(4)

    await context.close()
  })
})
