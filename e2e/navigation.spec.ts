import { test, expect } from '@playwright/test'

function isDesktopViewport(width: number | undefined) {
  return (width ?? 0) >= 1024
}

test.describe('App Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')
  })

  test('beta banner shows "Beta Mode" text', async ({ page }) => {
    await expect(page.getByText('Beta Mode')).toBeVisible()
  })

  test('sidebar has all nav items', async ({ page }) => {
    test.skip(!isDesktopViewport(page.viewportSize()?.width), 'Desktop sidebar only')
    const sidebarNav = page.locator('aside nav')

    await expect(sidebarNav.getByRole('link', { name: 'Dashboard' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Study' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Exam Sim' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Quiz' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Flashcards' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Analytics' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Review' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Speed Round' })).toBeVisible()
    await expect(sidebarNav.getByRole('link', { name: 'Clinical Scenarios' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible()
  })

  test('clicking each nav item navigates to correct URL', async ({ page }) => {
    test.skip(!isDesktopViewport(page.viewportSize()?.width), 'Desktop sidebar only')
    const sidebarNav = page.locator('aside nav')

    const navTargets = [
      { label: 'Study', url: '/study' },
      { label: 'Exam Sim', url: '/exam' },
      { label: 'Quiz', url: '/quiz' },
      { label: 'Flashcards', url: '/flashcards' },
      { label: 'Analytics', url: '/analytics' },
      { label: 'Review', url: '/review' },
      { label: 'Dashboard', url: '/dashboard' },
      { label: 'Speed Round', url: '/speed-round' },
      { label: 'Clinical Scenarios', url: '/clinical-scenario' },
    ]

    for (const { label, url } of navTargets) {
      await sidebarNav.getByRole('link', { name: label }).click()
      await page.waitForLoadState('networkidle')
      await expect(page).toHaveURL(new RegExp(`${url}$`))
    }
  })

  test('settings link navigates to settings page', async ({ page }) => {
    test.skip(!isDesktopViewport(page.viewportSize()?.width), 'Desktop sidebar only')
    await page.getByRole('link', { name: 'Settings' }).click()
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL(/\/settings$/)
  })

  test('active nav item is highlighted', async ({ page }) => {
    test.skip(!isDesktopViewport(page.viewportSize()?.width), 'Desktop sidebar only')
    // On /dashboard, the Dashboard nav link should have active styling (bg-primary/10)
    const dashboardLink = page.locator('aside nav a[href="/dashboard"]')
    await expect(dashboardLink).toHaveClass(/bg-primary/)

    // Navigate to study
    await page.locator('aside nav').getByRole('link', { name: 'Study' }).click()
    await page.waitForLoadState('networkidle')

    const studyLink = page.locator('aside nav a[href="/study"]')
    await expect(studyLink).toHaveClass(/bg-primary/)
  })
})

test.describe('App Navigation — Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('bottom nav shows 5 items', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    // Mobile bottom nav is the <nav> at the bottom (not the sidebar)
    const bottomNav = page.locator('nav.fixed.bottom-0')
    await expect(bottomNav).toBeVisible()

    // Should have exactly 5 links (Dashboard, Study, Exam Sim, Quiz, Flashcards)
    const navLinks = bottomNav.locator('a')
    await expect(navLinks).toHaveCount(5)

    await expect(bottomNav.getByText('Dashboard')).toBeVisible()
    await expect(bottomNav.getByText('Study')).toBeVisible()
    await expect(bottomNav.getByText('Exam Sim')).toBeVisible()
    await expect(bottomNav.getByText('Quiz')).toBeVisible()
    await expect(bottomNav.getByText('Flashcards')).toBeVisible()
  })

  test('mobile menu exposes full route access including settings', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    await page.getByLabel('Open app menu').click()

    await expect(page.getByRole('link', { name: 'Analytics', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Review', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Speed Round', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Clinical Scenarios', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Settings', exact: true })).toBeVisible()
  })
})
