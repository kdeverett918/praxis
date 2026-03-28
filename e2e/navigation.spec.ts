import { test, expect } from '@playwright/test'

test.describe('App Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')
  })

  test('beta banner shows "Beta Mode" text', async ({ page }) => {
    await expect(page.getByText('Beta Mode')).toBeVisible()
  })

  test('sidebar has all nav items', async ({ page }) => {
    const sidebarNav = page.locator('aside nav')

    await expect(sidebarNav.getByText('Dashboard')).toBeVisible()
    await expect(sidebarNav.getByText('Study')).toBeVisible()
    await expect(sidebarNav.getByText('Exam Sim')).toBeVisible()
    await expect(sidebarNav.getByText('Quiz')).toBeVisible()
    await expect(sidebarNav.getByText('Flashcards')).toBeVisible()
    await expect(sidebarNav.getByText('Analytics')).toBeVisible()
    await expect(sidebarNav.getByText('Review')).toBeVisible()
    // "Games" appears both as a section label and nav link
    await expect(sidebarNav.getByRole('link', { name: 'Games' })).toBeVisible()
  })

  test('clicking each nav item navigates to correct URL', async ({ page }) => {
    const sidebar = page.locator('aside')

    const navTargets = [
      { label: 'Study', url: '/study' },
      { label: 'Exam Sim', url: '/exam' },
      { label: 'Quiz', url: '/quiz' },
      { label: 'Flashcards', url: '/flashcards' },
      { label: 'Analytics', url: '/analytics' },
      { label: 'Review', url: '/review' },
      { label: 'Dashboard', url: '/dashboard' },
    ]

    for (const { label, url } of navTargets) {
      await sidebar.getByText(label, { exact: true }).click()
      await page.waitForLoadState('networkidle')
      await expect(page).toHaveURL(new RegExp(`${url}$`))
    }
  })

  test('clicking Games nav item navigates to speed-round', async ({ page }) => {
    const sidebarNav = page.locator('aside nav')
    await sidebarNav.getByRole('link', { name: 'Games' }).click()
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL(/\/speed-round$/)
  })

  test('active nav item is highlighted', async ({ page }) => {
    // On /dashboard, the Dashboard nav link should have active styling (bg-primary/10)
    const dashboardLink = page.locator('aside nav a[href="/dashboard"]')
    await expect(dashboardLink).toHaveClass(/bg-primary/)

    // Navigate to study
    await page.locator('aside').getByText('Study', { exact: true }).click()
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
})
