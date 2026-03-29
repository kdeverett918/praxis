import { test, expect } from '@playwright/test'

test.describe('Diagnostic Quiz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/diagnostic')
    await page.waitForLoadState('networkidle')
  })

  test('diagnostic intro page loads', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /find out where you stand/ })).toBeVisible()
    await expect(page.getByText('Answer 18 questions')).toBeVisible()
    await expect(page.getByText('Takes about 8 minutes')).toBeVisible()
    await expect(page.getByRole('button', { name: /Begin Assessment/ })).toBeVisible()
  })

  test('starting assessment shows first question', async ({ page }) => {
    await page.getByRole('button', { name: /Begin Assessment/ }).click()

    const options = page.getByTestId('diagnostic-option')
    await expect(options).toHaveCount(4, { timeout: 5000 })

    await expect(page.getByText('1 / 18')).toBeVisible()
  })

  test('answering a question auto-advances to next', async ({ page }) => {
    await page.getByRole('button', { name: /Begin Assessment/ }).click()
    await expect(page.getByText('1 / 18')).toBeVisible({ timeout: 5000 })

    const options = page.getByTestId('diagnostic-option')
    await options.nth(0).click()

    await page.waitForTimeout(800)

    await expect(page.getByText('2 / 18')).toBeVisible()
  })

  test('completing all 18 questions shows results', async ({ page }) => {
    test.setTimeout(30000)
    await page.getByRole('button', { name: /Begin Assessment/ }).click()
    await expect(page.getByTestId('diagnostic-option').first()).toBeVisible({ timeout: 5000 })

    for (let i = 0; i < 18; i++) {
      const options = page.getByTestId('diagnostic-option')
      await expect(options.first()).toBeVisible({ timeout: 3000 })
      await options.nth(0).click()
      await page.waitForTimeout(700)
    }

    await expect(page.getByText('Your Diagnostic Results')).toBeVisible({ timeout: 10000 })
    await expect(page.getByText(/of 18 correct/)).toBeVisible()
  })

  test('results page shows offer section', async ({ page }) => {
    test.setTimeout(30000)
    await page.getByRole('button', { name: /Begin Assessment/ }).click()
    await expect(page.getByTestId('diagnostic-option').first()).toBeVisible({ timeout: 5000 })

    for (let i = 0; i < 18; i++) {
      const options = page.getByTestId('diagnostic-option')
      await expect(options.first()).toBeVisible({ timeout: 3000 })
      await options.nth(0).click()
      await page.waitForTimeout(700)
    }

    await expect(page.getByText('$49', { exact: true })).toBeVisible({ timeout: 10000 })
    await expect(page.getByText(/Get Pro Access/)).toBeVisible()
    await expect(page.getByText(/money-back guarantee/)).toBeVisible()
  })
})
