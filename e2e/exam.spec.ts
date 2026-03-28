import { test, expect } from '@playwright/test'

test.describe('Exam Simulation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/exam')
    await page.waitForLoadState('networkidle')
  })

  test('pre-exam screen shows with 3 stat cards', async ({ page }) => {
    // Page heading
    await expect(page.getByRole('heading', { name: 'Exam Simulation' })).toBeVisible()

    // 3 stat cards: 132 questions, 150 minutes, 162 passing
    await expect(page.getByText('132', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Questions', { exact: true }).first()).toBeVisible()

    await expect(page.getByText('150', { exact: true })).toBeVisible()
    await expect(page.getByText('Time Limit')).toBeVisible()

    await expect(page.getByText('162', { exact: true })).toBeVisible()
    await expect(page.getByText('Passing Score')).toBeVisible()
  })

  test('"Begin Exam Simulation" button is visible', async ({ page }) => {
    const beginButton = page.getByRole('button', { name: 'Begin Exam Simulation' })
    await expect(beginButton).toBeVisible()
  })

  test('clicking Begin starts the exam — timer and navigator appear', async ({ page }) => {
    // Click Begin
    await page.getByRole('button', { name: 'Begin Exam Simulation' }).click()

    // Timer should appear (formatted as H:MM:SS)
    await expect(page.getByText(/\d:\d{2}:\d{2}/)).toBeVisible({ timeout: 10000 })

    // Question navigator grid should be visible
    await expect(page.getByRole('heading', { name: 'Question Navigator' })).toBeVisible()

    // Live exam should render an actual question stem instead of placeholder text
    await expect(page.locator('.border-l-primary p').first()).toHaveText(/.+/)
    await expect(page.getByText('Flag questions to revisit before finishing the simulation.')).toBeVisible()
  })

  test('question navigator grid is visible after starting', async ({ page }) => {
    await page.getByRole('button', { name: 'Begin Exam Simulation' }).click()
    await page.waitForLoadState('networkidle')

    const navButtons = page.locator('button[aria-label^="Question "]')
    const count = await navButtons.count()
    expect(count).toBe(132)

    // First button should show "1"
    await expect(navButtons.first()).toContainText('1')
  })

  test('finishing the exam shows the results summary', async ({ page }) => {
    await page.getByRole('button', { name: 'Begin Exam Simulation' }).click()
    await page.getByRole('button', { name: 'Finish exam' }).click()

    await expect(page.getByRole('heading', { name: 'Exam complete' })).toBeVisible()
    await expect(page.getByText('Scaled score')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Retake exam' })).toBeVisible()
  })
})
