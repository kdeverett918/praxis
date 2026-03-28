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
    await page.waitForLoadState('networkidle')

    // Timer should appear (formatted as H:MM:SS)
    await expect(page.getByText(/\d:\d{2}:\d{2}/)).toBeVisible()

    // Question navigator grid should be visible
    await expect(page.getByText('Question Navigator')).toBeVisible()

    // Should show "Question 1 of 132" in the badge
    await expect(page.getByText(/Question\s+1\s+of\s+132/)).toBeVisible()
  })

  test('question navigator grid is visible after starting', async ({ page }) => {
    await page.getByRole('button', { name: 'Begin Exam Simulation' }).click()
    await page.waitForLoadState('networkidle')

    // The grid should have 132 numbered buttons
    const navButtons = page.locator('.grid button')
    // Count should be at least 132 (the grid buttons)
    const count = await navButtons.count()
    expect(count).toBeGreaterThanOrEqual(132)

    // First button should show "1"
    await expect(navButtons.first()).toContainText('1')
  })
})
