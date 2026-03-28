import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/PraxisPrep/)
  })

  test('navbar has logo, nav links, and action buttons', async ({ page }) => {
    const nav = page.locator('nav').first()
    const isMobile = (page.viewportSize()?.width ?? 1280) < 768

    await expect(nav.getByRole('link', { name: 'PraxisPrep' })).toBeVisible()

    if (isMobile) {
      await expect(page.getByLabel('Open menu')).toBeVisible()
      return
    }

    await expect(nav.getByText('Product', { exact: true })).toBeVisible()
    await expect(nav.getByText('Offer', { exact: true })).toBeVisible()
    await expect(nav.getByText('Founder', { exact: true })).toBeVisible()
    await expect(nav.getByText('FAQ', { exact: true })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Log In' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Take Free Diagnostic' })).toBeVisible()
  })

  test('hero section has headline', async ({ page }) => {
    await expect(
      page.locator('h1').filter({ hasText: 'Pass the Praxis without' }),
    ).toBeVisible()
    await expect(page.locator('h1').filter({ hasText: 'five different study tools' })).toBeVisible()
  })

  test('stats bar shows 4 stat items', async ({ page }) => {
    const statsBar = page.getByTestId('landing-stats')
    const statItems = page.getByTestId('landing-stat-item')
    await expect(statItems).toHaveCount(4)

    await expect(statsBar.getByText('Original Questions')).toBeVisible()
    await expect(statsBar.getByText('Questions Per Exam')).toBeVisible()
    await expect(statsBar.getByText('Months of Access')).toBeVisible()
    await expect(statsBar.getByText('Hero Offer Price')).toBeVisible()
  })

  test('features section has 6 feature cards', async ({ page }) => {
    const featureCards = page.locator('.feature-card')
    await expect(featureCards).toHaveCount(6)

    // Verify some feature titles
    await expect(page.getByRole('heading', { name: 'Diagnostic-First Flow' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Higher-Support Path' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Exam Simulation' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Track Progress' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Custom Quizzes' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Flashcard System' })).toBeVisible()
  })

  test('pricing section has 3 pricing tiers', async ({ page }) => {
    const pricingCards = page.locator('.pricing-card')
    await expect(pricingCards).toHaveCount(3)

    const pricingSection = page.locator('#pricing')
    await expect(pricingSection.getByRole('heading', { name: 'Free Diagnostic' })).toBeVisible()
    await expect(pricingSection.getByRole('heading', { name: 'Praxis Pass Pack' })).toBeVisible()
    await expect(pricingSection.getByRole('heading', { name: 'Program Licensing' })).toBeVisible()
  })

  test('footer has ETS disclaimer text', async ({ page }) => {
    await expect(
      page.getByText('This product is not affiliated with, endorsed by, or sponsored by ETS.'),
    ).toBeVisible()
  })

  test('"Take the Free Diagnostic Quiz" button links to /quiz/diagnostic', async ({ page }) => {
    const ctaLink = page.locator('a[href="/quiz/diagnostic"]').filter({
      has: page.locator('button', { hasText: 'Take the Free Diagnostic Quiz' }),
    })
    await expect(ctaLink.first()).toBeVisible()
    await expect(ctaLink.first()).toHaveAttribute('href', '/quiz/diagnostic')
  })

  test('beta mode CTA is visible and opens the app without login', async ({ page }) => {
    const betaCta = page.getByTestId('landing-beta-cta')
    await expect(betaCta).toBeVisible()

    await betaCta.getByRole('button').click()
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveURL(/\/dashboard$/)
    await expect(page.getByText('Beta Mode active')).toBeVisible()
  })
})

test.describe('Landing Page — Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('hamburger menu appears and desktop nav links are hidden', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Hamburger button should be visible
    const menuButton = page.getByLabel('Open menu')
    await expect(menuButton).toBeVisible()

    // Desktop Log In button should not be visible at mobile width
    // (it is inside the hidden desktop nav container)
    const desktopLogIn = page.locator('nav >> .hidden >> text=Log In')
    await expect(desktopLogIn).toBeHidden()

    // Click hamburger to open mobile menu
    await menuButton.click()

    // Mobile menu links should now be visible in the mobile dropdown
    // The mobile menu is inside a div with md:hidden class
    const mobileMenu = page.locator('nav .border-t')
    await expect(mobileMenu.getByText('Product', { exact: true })).toBeVisible()
    await expect(mobileMenu.getByText('Offer', { exact: true })).toBeVisible()
    await expect(mobileMenu.getByText('Founder', { exact: true })).toBeVisible()
  })
})
