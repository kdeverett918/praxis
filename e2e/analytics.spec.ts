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
    await expect(page.getByText('Questions Answered')).toBeVisible()
    await expect(page.getByText('Study Streak')).toBeVisible()
    await expect(page.getByText('Level / XP')).toBeVisible()
  })

  test('Big Nine radar section is visible', async ({ page }) => {
    await expect(page.getByText('Big Nine Radar')).toBeVisible()
    // With no study data, shows the placeholder message
    await expect(
      page.getByText('Answer more questions to see your Big Nine breakdown').first(),
    ).toBeVisible()
  })

  test('Big Nine Performance section is visible', async ({ page }) => {
    await expect(page.getByText('Big Nine Performance')).toBeVisible()
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
  })
})
