import { test, expect } from '@playwright/test'
import { VIEWPORTS } from './helpers'

test.describe('Responsive Design — Landing Page', () => {
  test('renders correctly at mobile viewport (375x667)', async ({ browser }) => {
    const context = await browser.newContext({ viewport: VIEWPORTS.mobile })
    const page = await context.newPage()
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.locator('h1').filter({ hasText: 'Pass the Praxis' })).toBeVisible()

    await expect(page.getByLabel('Open menu')).toBeVisible()

    const desktopNav = page.getByTestId('desktop-nav')
    await expect(desktopNav).toBeHidden()

    const statsBar = page.getByTestId('landing-stats')
    await expect(statsBar.getByText('Practice Questions')).toBeVisible()

    await context.close()
  })

  test('renders correctly at tablet viewport (768x1024)', async ({ browser }) => {
    const context = await browser.newContext({ viewport: VIEWPORTS.tablet })
    const page = await context.newPage()
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.locator('h1').filter({ hasText: 'Pass the Praxis' })).toBeVisible()

    const desktopNav = page.getByTestId('desktop-nav')
    await expect(desktopNav).toBeVisible()

    await expect(page.getByRole('heading', { name: 'Adaptive Engine' })).toBeVisible()

    await context.close()
  })

  test('renders correctly at desktop viewport (1440x900)', async ({ browser }) => {
    const context = await browser.newContext({ viewport: VIEWPORTS.largeDesktop })
    const page = await context.newPage()
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.locator('h1').filter({ hasText: 'Pass the Praxis' })).toBeVisible()

    const nav = page.locator('nav')
    await expect(nav.getByText('Features', { exact: true })).toBeVisible()
    await expect(nav.getByText('Pricing', { exact: true })).toBeVisible()
    await expect(nav.getByText('About', { exact: true })).toBeVisible()

    const pricingCards = page.getByTestId('pricing-card')
    await expect(pricingCards).toHaveCount(1)

    await context.close()
  })
})

test.describe('Responsive Design — Dashboard', () => {
  test('mobile: bottom nav visible, sidebar hidden', async ({ browser }) => {
    const context = await browser.newContext({ viewport: VIEWPORTS.mobile })
    const page = await context.newPage()
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    const sidebar = page.getByTestId('desktop-sidebar')
    await expect(sidebar).toBeHidden()

    const bottomNav = page.getByTestId('bottom-nav')
    await expect(bottomNav).toBeVisible()

    await context.close()
  })

  test('desktop: sidebar visible, bottom nav hidden', async ({ browser }) => {
    const context = await browser.newContext({ viewport: VIEWPORTS.largeDesktop })
    const page = await context.newPage()
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    const sidebar = page.getByTestId('desktop-sidebar')
    await expect(sidebar).toBeVisible()

    const bottomNav = page.getByTestId('bottom-nav')
    await expect(bottomNav).toBeHidden()

    await context.close()
  })
})

test.describe('Responsive Design — Study Page', () => {
  test('question card is readable at mobile width', async ({ browser }) => {
    const context = await browser.newContext({ viewport: VIEWPORTS.mobile })
    const page = await context.newPage()
    await page.goto('/study')
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Study Mode')).toBeVisible()

    // Start a session first
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    const stemCard = page.getByTestId('question-stem')
    await expect(stemCard).toBeVisible()
    const box = await stemCard.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.width).toBeLessThanOrEqual(375)

    const options = page.getByTestId('answer-option')
    await expect(options).toHaveCount(4)

    await context.close()
  })
})
