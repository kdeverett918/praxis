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

    await expect(nav.getByText('Features', { exact: true })).toBeVisible()
    await expect(nav.getByText('Pricing', { exact: true })).toBeVisible()
    await expect(nav.getByText('About', { exact: true })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Log In' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Start Free' })).toBeVisible()
  })

  test('hero section has headline', async ({ page }) => {
    await expect(
      page.locator('h1').filter({ hasText: 'Pass the Praxis' }),
    ).toBeVisible()
  })

  test('stats bar shows 4 stat items', async ({ page }) => {
    const statsBar = page.getByTestId('landing-stats')
    const statItems = page.getByTestId('landing-stat-item')
    await expect(statItems).toHaveCount(4)

    await expect(statsBar.getByText('Practice Questions')).toBeVisible()
    await expect(statsBar.getByText('Questions Per Exam')).toBeVisible()
    await expect(statsBar.getByText('Big Nine Areas')).toBeVisible()
    await expect(statsBar.getByText('Content Categories')).toBeVisible()
  })

  test('features section has 6 feature cards', async ({ page }) => {
    const featureCards = page.getByTestId('feature-card')
    await expect(featureCards).toHaveCount(6)

    await expect(page.getByRole('heading', { name: 'Adaptive Engine' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'AI Rationales' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Exam Simulation' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Track Progress' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Custom Quizzes' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Flashcard System' })).toBeVisible()
  })

  test('pricing section has offer card', async ({ page }) => {
    const pricingCard = page.getByTestId('pricing-card')
    await expect(pricingCard).toHaveCount(1)

    const pricingSection = page.locator('#pricing')
    await expect(pricingSection.getByText('Praxis Pass Pack')).toBeVisible()
    await expect(pricingSection.getByText('$49', { exact: true })).toBeVisible()
  })

  test('FAQ section exists with questions', async ({ page }) => {
    await expect(page.getByText('Frequently asked questions')).toBeVisible()
    await expect(page.getByText('What exactly do I get for $49?')).toBeVisible()
  })

  test('footer has ETS disclaimer text', async ({ page }) => {
    await expect(
      page.getByText('This product is not affiliated with, endorsed by, or sponsored by ETS.'),
    ).toBeVisible()
  })

  test('"Start Studying Free" button links to /signup', async ({ page }) => {
    const ctaLink = page.locator('a[href="/signup"]').filter({
      has: page.locator('button', { hasText: 'Start Studying Free' }),
    })
    await expect(ctaLink.first()).toBeVisible()
    await expect(ctaLink.first()).toHaveAttribute('href', '/signup')
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

    const menuButton = page.getByLabel('Open menu')
    await expect(menuButton).toBeVisible()

    const desktopNav = page.getByTestId('desktop-nav')
    await expect(desktopNav).toBeHidden()

    await menuButton.click()

    const mobileMenu = page.getByTestId('mobile-nav-menu')
    await expect(mobileMenu.getByText('Features', { exact: true })).toBeVisible()
    await expect(mobileMenu.getByText('Pricing', { exact: true })).toBeVisible()
    await expect(mobileMenu.getByText('About', { exact: true })).toBeVisible()
  })
})
