import { test, expect } from '@playwright/test'

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')
  })

  test('greeting heading is visible', async ({ page }) => {
    await expect(
      page.locator('h1').filter({ hasText: /Good (morning|afternoon|evening)/ }),
    ).toBeVisible()
  })

  test('4 stat cards are rendered', async ({ page }) => {
    await expect(page.getByText('Day Streak')).toBeVisible()
    await expect(page.getByText('Questions Today')).toBeVisible()
    await expect(page.getByText('Accuracy', { exact: true })).toBeVisible()
    await expect(page.getByText('Total Answered')).toBeVisible()
  })

  test('quick action cards are visible', async ({ page }) => {
    const mainContent = page.locator('main')
    await expect(mainContent.getByRole('heading', { name: 'Start Studying' })).toBeVisible()

    const studyLink = mainContent.locator('a[href="/study"]')
    await expect(studyLink.first()).toBeVisible()

    const examLink = mainContent.locator('a[href="/exam"]')
    await expect(examLink.first()).toBeVisible()
  })

  test('games section is visible', async ({ page }) => {
    const mainContent = page.locator('main')
    await expect(mainContent.getByRole('heading', { name: 'Games' })).toBeVisible()

    const speedLink = mainContent.locator('a[href="/speed-round"]').first()
    await expect(speedLink).toBeVisible()

    const scenarioLink = mainContent.locator('a[href="/clinical-scenario"]').first()
    await expect(scenarioLink).toBeVisible()
  })

  test('progress and level sections are rendered', async ({ page }) => {
    await expect(page.getByText('Your Progress', { exact: true })).toBeVisible()
    await expect(page.getByText('Level Progress', { exact: true })).toBeVisible()
  })

  test('View Full Analytics link exists', async ({ page }) => {
    const mainContent = page.locator('main')
    const analyticsLink = mainContent.locator('a[href="/analytics"]')
    await expect(analyticsLink.first()).toBeVisible()
  })
})
