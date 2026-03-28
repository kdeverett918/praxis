import { test, expect } from '@playwright/test'

test.describe('Study Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/study')
    await page.waitForLoadState('networkidle')
  })

  test('study page loads with "Study Mode" heading', async ({ page }) => {
    await expect(page.getByText('Study Mode')).toBeVisible()
  })

  test('first question displays with stem text', async ({ page }) => {
    // The question stem is inside a bordered card with the question text
    const stemCard = page.locator('.border-l-primary')
    await expect(stemCard).toBeVisible()

    // Stem should contain actual text (not be empty)
    const stemText = await stemCard.locator('p').first().textContent()
    expect(stemText).toBeTruthy()
    expect(stemText!.length).toBeGreaterThan(10)
  })

  test('4 answer options are visible', async ({ page }) => {
    // Options are buttons inside a space-y-3 container
    // Each option starts with a letter (A, B, C, D)
    const options = page.locator('.space-y-3 > button')
    await expect(options).toHaveCount(4)

    // Verify option letters
    await expect(options.nth(0)).toContainText('A')
    await expect(options.nth(1)).toContainText('B')
    await expect(options.nth(2)).toContainText('C')
    await expect(options.nth(3)).toContainText('D')
  })

  test('clicking an option selects it and shows explanation', async ({ page }) => {
    const options = page.locator('.space-y-3 > button')

    // Click first option
    await options.nth(0).click()

    // In study mode, explanation panel should appear after selecting
    const explanation = page.getByText('Explanation')
    await expect(explanation).toBeVisible({ timeout: 3000 })
  })

  test('after selecting, explanation panel appears with text', async ({ page }) => {
    const options = page.locator('.space-y-3 > button')
    await options.nth(0).click()

    // Explanation section should have content
    const explanationPanel = page.locator('.border-success\\/30')
    await expect(explanationPanel).toBeVisible({ timeout: 3000 })

    const explanationText = await explanationPanel.locator('p').first().textContent()
    expect(explanationText).toBeTruthy()
  })

  test('Next and Previous buttons work', async ({ page }) => {
    // Should show "1 / " at the beginning
    await expect(page.getByText(/^1 \//)).toBeVisible()

    // Click Next
    await page.getByRole('button', { name: 'Next' }).click()
    await page.waitForLoadState('networkidle')

    // Should now show "2 / "
    await expect(page.getByText(/^2 \//)).toBeVisible()

    // Click Previous
    await page.getByRole('button', { name: 'Previous' }).click()
    await page.waitForLoadState('networkidle')

    // Should be back to "1 / "
    await expect(page.getByText(/^1 \//)).toBeVisible()
  })

  test('progress bar updates when navigating', async ({ page }) => {
    const progressBar = page.locator('.bg-gradient-to-r.from-primary.to-secondary').first()
    const initialWidth = await progressBar.getAttribute('style')

    // Navigate to next question
    await page.getByRole('button', { name: 'Next' }).click()
    await page.waitForLoadState('networkidle')

    const newWidth = await progressBar.getAttribute('style')
    // Width should have changed (progressed forward)
    expect(newWidth).not.toEqual(initialWidth)
  })
})
