import { test, expect } from '@playwright/test'

test.describe('Analytics', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/analytics')
    await page.waitForLoadState('networkidle')
  })

  test('analytics page loads with heading', async ({ page }) => {
    await expect(page.getByText('Performance Analytics')).toBeVisible()
  })

  test('4 overview stat cards are visible', async ({ page }) => {
    await expect(page.getByText('Overall Accuracy')).toBeVisible()
    await expect(page.getByText('Questions Answered', { exact: true })).toBeVisible()
    await expect(page.getByText('Study Streak')).toBeVisible()
    await expect(page.getByText('Level / XP')).toBeVisible()

    await expect(page.getByText('--', { exact: true })).toBeVisible()
    await expect(page.getByText('0', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('0 days', { exact: true })).toBeVisible()
    await expect(page.getByText('Lv.1 (0 XP)', { exact: true })).toBeVisible()
  })

  test('Big Nine radar chart renders with SVG element', async ({ page }) => {
    await expect(page.getByText('Big Nine Radar')).toBeVisible()

    const svgElement = page.locator('.recharts-responsive-container svg')
    await expect(svgElement).toBeVisible()
    await expect(
      page.getByText('Answer more questions to turn this zero-state radar into a real performance map.'),
    ).toBeVisible()
  })

  test('progress bars are visible', async ({ page }) => {
    // The Big Nine Performance section has animated bar fills
    await expect(page.getByText('Big Nine Performance')).toBeVisible()

    const bars = page.locator('.analytics-bar-fill')
    const count = await bars.count()
    // Should have 9 bars (one per Big Nine area)
    expect(count).toBe(9)
  })

  test('category breakdown cards are visible', async ({ page }) => {
    await expect(
      page.getByText('I. Foundations & Professional Practice'),
    ).toBeVisible()
    await expect(
      page.getByText('II. Screening, Assessment, Eval & Dx'),
    ).toBeVisible()
    await expect(
      page.getByText('III. Treatment Planning & Implementation'),
    ).toBeVisible()

    const questionCounts = page.getByText('0 questions answered', { exact: true })
    const count = await questionCounts.count()
    expect(count).toBe(3)
  })
})
