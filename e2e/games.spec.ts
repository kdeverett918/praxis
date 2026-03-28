import { test, expect } from '@playwright/test'

test.describe('Games — Speed Round', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/speed-round')
    await page.waitForLoadState('networkidle')
  })

  test('speed round page loads with heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Speed Round' }),
    ).toBeVisible()
  })

  test('"Start Round" button is visible', async ({ page }) => {
    const startButton = page.getByRole('button', { name: 'Start Round' })
    await expect(startButton).toBeVisible()
  })
})

test.describe('Games — Clinical Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/clinical-scenario')
    await page.waitForLoadState('networkidle')
  })

  test('clinical scenarios page loads with 3 scenario cards', async ({ page }) => {
    // The scenario selection view shows cards with h3 titles
    const scenarioCards = page.locator('.cursor-pointer').filter({
      has: page.locator('h3'),
    })
    await expect(scenarioCards).toHaveCount(3)
  })

  test('each scenario card shows title and decision count', async ({ page }) => {
    // Verify scenario titles are present
    await expect(page.getByText('Acute Care Dysphagia')).toBeVisible()
    await expect(page.getByText('Pediatric Language')).toBeVisible()
    await expect(page.getByText('School-Age Fluency')).toBeVisible()

    // Each card shows "N decisions" text
    const decisionTexts = page.getByText(/\d+ decisions/)
    const count = await decisionTexts.count()
    expect(count).toBe(3)
  })
})
