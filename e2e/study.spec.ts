import { test, expect } from '@playwright/test'

test.describe('Study Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/study')
    await page.waitForLoadState('networkidle')
  })

  test('study page loads with setup phase', async ({ page }) => {
    await expect(page.getByText('Study Mode')).toBeVisible()
    await expect(page.getByText('Smart Practice')).toBeVisible()
    await expect(page.getByText('Free Study')).toBeVisible()
    await expect(page.getByRole('button', { name: /Start Session/ })).toBeVisible()
  })

  test('session setup shows filter options', async ({ page }) => {
    await expect(page.getByText('Content Categories')).toBeVisible()
    await expect(page.getByText('Big Nine Areas')).toBeVisible()
    await expect(page.getByText('Session Length')).toBeVisible()
    await expect(page.getByText(/questions match your filters/)).toBeVisible()
  })

  test('starting a session shows questions', async ({ page }) => {
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    // Should now be in active study phase
    const stemCard = page.getByTestId('question-stem')
    await expect(stemCard).toBeVisible()

    const stemText = await stemCard.locator('p').first().textContent()
    expect(stemText).toBeTruthy()
    expect(stemText!.length).toBeGreaterThan(10)
  })

  test('4 answer options are visible after starting', async ({ page }) => {
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    const options = page.getByTestId('answer-option')
    await expect(options).toHaveCount(4)

    await expect(options.nth(0)).toContainText('A')
    await expect(options.nth(1)).toContainText('B')
    await expect(options.nth(2)).toContainText('C')
    await expect(options.nth(3)).toContainText('D')
  })

  test('clicking an option selects it and shows explanation', async ({ page }) => {
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    const options = page.getByTestId('answer-option')
    await options.nth(0).click()

    const explanation = page.getByText('Explanation')
    await expect(explanation).toBeVisible({ timeout: 3000 })
  })

  test('after selecting, explanation panel appears with text', async ({ page }) => {
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    const options = page.getByTestId('answer-option')
    await options.nth(0).click()

    const explanationPanel = page.getByTestId('explanation-panel')
    await expect(explanationPanel).toBeVisible({ timeout: 3000 })

    const explanationText = await explanationPanel.locator('p').first().textContent()
    expect(explanationText).toBeTruthy()
  })

  test('Next and Previous buttons work', async ({ page }) => {
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    await expect(page.getByText(/^1 \//)).toBeVisible()

    await page.getByRole('button', { name: 'Next' }).click()
    await page.waitForLoadState('networkidle')

    await expect(page.getByText(/^2 \//)).toBeVisible()

    await page.getByRole('button', { name: 'Previous' }).click()
    await page.waitForLoadState('networkidle')

    await expect(page.getByText(/^1 \//)).toBeVisible()
  })

  test('progress bar updates when navigating', async ({ page }) => {
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    const progressFill = page.getByTestId('question-progress-fill')
    const initialWidth = await progressFill.getAttribute('style')

    await page.getByRole('button', { name: 'Next' }).click()
    await page.waitForLoadState('networkidle')

    const newWidth = await progressFill.getAttribute('style')
    expect(newWidth).not.toEqual(initialWidth)
  })

  test('session accuracy is displayed during study', async ({ page }) => {
    await page.getByRole('button', { name: /Start Session/ }).click()
    await page.waitForLoadState('networkidle')

    await expect(page.getByText(/Accuracy:/)).toBeVisible()
    await expect(page.getByText(/answered/)).toBeVisible()
  })
})
