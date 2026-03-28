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
    // Logo
    await expect(page.locator('nav').getByText('PraxisPrep')).toBeVisible()

    // Desktop nav links (Features, Pricing, About)
    const nav = page.locator('nav')
    await expect(nav.getByText('Features', { exact: true })).toBeVisible()
    await expect(nav.getByText('Pricing', { exact: true })).toBeVisible()
    await expect(nav.getByText('About', { exact: true })).toBeVisible()

    // Action buttons
    await expect(nav.getByText('Log In')).toBeVisible()
    await expect(nav.getByText('Start Free')).toBeVisible()
  })

  test('hero section has headline', async ({ page }) => {
    await expect(
      page.locator('h1').filter({ hasText: 'The smartest way to' }),
    ).toBeVisible()
    await expect(page.locator('h1').filter({ hasText: 'pass the Praxis' })).toBeVisible()
  })

  test('stats bar shows 4 stat items', async ({ page }) => {
    const statItems = page.locator('.stat-item')
    await expect(statItems).toHaveCount(4)

    // Check stat labels are present within the stats bar
    const statsBar = page.locator('.stat-item').first().locator('..')
    await expect(statsBar.getByText('Practice Questions')).toBeVisible()
    await expect(statsBar.getByText('Questions Per Exam')).toBeVisible()
    await expect(statsBar.getByText('Big Nine Areas')).toBeVisible()
    await expect(statsBar.getByText('Content Categories')).toBeVisible()
  })

  test('features section has 6 feature cards', async ({ page }) => {
    const featureCards = page.locator('.feature-card')
    await expect(featureCards).toHaveCount(6)

    // Verify some feature titles
    await expect(page.getByRole('heading', { name: 'Adaptive Engine' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'AI Rationales' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Exam Simulation' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Track Progress' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Custom Quizzes' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Flashcard System' })).toBeVisible()
  })

  test('pricing section has 3 pricing tiers', async ({ page }) => {
    const pricingCards = page.locator('.pricing-card')
    await expect(pricingCards).toHaveCount(3)

    // Check tier names within pricing cards
    const pricingSection = page.locator('#pricing')
    await expect(pricingSection.getByRole('heading', { name: 'Free' })).toBeVisible()
    await expect(pricingSection.getByRole('heading', { name: 'Pro' })).toBeVisible()
    await expect(pricingSection.getByRole('heading', { name: 'Institutional' })).toBeVisible()
  })

  test('footer has ETS disclaimer text', async ({ page }) => {
    await expect(
      page.getByText('PraxisPrep is not affiliated with, endorsed by, or sponsored by ETS'),
    ).toBeVisible()
  })

  test('"Start Studying Free" button links to /signup', async ({ page }) => {
    const ctaLink = page.locator('a[href="/signup"]').filter({
      has: page.locator('button', { hasText: 'Start Studying Free' }),
    })
    await expect(ctaLink.first()).toBeVisible()
    await expect(ctaLink.first()).toHaveAttribute('href', '/signup')
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
    await expect(mobileMenu.getByText('Features', { exact: true })).toBeVisible()
    await expect(mobileMenu.getByText('Pricing', { exact: true })).toBeVisible()
    await expect(mobileMenu.getByText('About', { exact: true })).toBeVisible()
  })
})
