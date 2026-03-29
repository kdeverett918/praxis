import { test, expect } from '@playwright/test'

test.describe('Flashcards', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/flashcards')
    await page.waitForLoadState('networkidle')
  })

  test('flashcards page loads with deck selector', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Flashcards' })).toBeVisible()
    await expect(page.getByText('All Cards')).toBeVisible()
    await expect(page.getByText('Category I', { exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: /Start Deck/ })).toBeVisible()
  })

  test('starting a deck shows card front text', async ({ page }) => {
    await page.getByRole('button', { name: /Start Deck/ }).click()
    await page.waitForLoadState('networkidle')

    await expect(page.getByText('Tap to reveal answer')).toBeVisible()

    const frontFace = page.locator('.fc-flip-face').first()
    const frontText = await frontFace.locator('p').first().textContent()
    expect(frontText).toBeTruthy()
    expect(frontText!.length).toBeGreaterThan(0)
  })

  test('clicking card flips it (back content becomes visible)', async ({ page }) => {
    await page.getByRole('button', { name: /Start Deck/ }).click()
    await page.waitForLoadState('networkidle')

    const flipInner = page.locator('.fc-flip-inner')
    await expect(flipInner).toHaveAttribute('style', /rotateY\(0deg\)/)

    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()

    await expect(flipInner).toHaveAttribute('style', /rotateY\(180deg\)/)
  })

  test('rating buttons appear after flip', async ({ page }) => {
    await page.getByRole('button', { name: /Start Deck/ }).click()
    await page.waitForLoadState('networkidle')

    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()

    await expect(page.getByRole('button', { name: /Hard/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Medium/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Easy/ })).toBeVisible()
  })

  test('clicking a rating advances to next card', async ({ page }) => {
    await page.getByRole('button', { name: /Start Deck/ }).click()
    await page.waitForLoadState('networkidle')

    const frontFace = page.locator('.fc-flip-face').first()
    const initialText = await frontFace.locator('p').first().textContent()

    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()
    await page.getByRole('button', { name: /Easy/ }).click()

    await page.waitForTimeout(500)

    await expect(page.getByText('1 reviewed')).toBeVisible()

    const newText = await frontFace.locator('p').first().textContent()
    expect(newText).not.toEqual(initialText)
  })

  test('reset deck button works', async ({ page }) => {
    await page.getByRole('button', { name: /Start Deck/ }).click()
    await page.waitForLoadState('networkidle')

    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()
    await page.getByRole('button', { name: /Easy/ }).click()
    await page.waitForTimeout(500)

    await expect(page.getByText('1 reviewed')).toBeVisible()

    await page.getByText('Reset deck').click()

    // Should go back to deck selector
    await expect(page.getByRole('button', { name: /Start Deck/ })).toBeVisible()
  })
})
