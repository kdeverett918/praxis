import { test, expect } from '@playwright/test'

test.describe('Flashcards', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/flashcards')
    await page.waitForLoadState('networkidle')
  })

  test('flashcards page loads with heading', async ({ page }) => {
    await expect(page.getByText('Flashcards', { exact: true }).first()).toBeVisible()
  })

  test('card front text is visible', async ({ page }) => {
    // The front of the card has a "Tap to reveal answer" hint
    await expect(page.getByText('Tap to reveal answer')).toBeVisible()

    // The front text should be present in the first fc-flip-face
    const frontFace = page.locator('.fc-flip-face').first()
    const frontText = await frontFace.locator('p').first().textContent()
    expect(frontText).toBeTruthy()
    expect(frontText!.length).toBeGreaterThan(0)
  })

  test('clicking card flips it (back content becomes visible)', async ({ page }) => {
    // Before flipping, check the flip-inner has rotateY(0deg) in its style
    const flipInner = page.locator('.fc-flip-inner')
    await expect(flipInner).toHaveAttribute('style', /rotateY\(0deg\)/)

    // Click the card to flip
    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()

    // After flipping, transform should change to rotateY(180deg)
    await expect(flipInner).toHaveAttribute('style', /rotateY\(180deg\)/)
  })

  test('rating buttons appear after flip', async ({ page }) => {
    // Flip the card
    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()

    // Rating buttons should be visible
    await expect(page.getByRole('button', { name: /Hard/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Medium/ })).toBeVisible()
    await expect(page.getByRole('button', { name: /Easy/ })).toBeVisible()
  })

  test('clicking a rating advances to next card', async ({ page }) => {
    // Get initial front text
    const frontFace = page.locator('.fc-flip-face').first()
    const initialText = await frontFace.locator('p').first().textContent()

    // Flip and rate
    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()
    await page.getByRole('button', { name: /Easy/ }).click()

    // Wait for the card transition (400ms animation)
    await page.waitForTimeout(500)

    // The reviewed count badge should show "1 reviewed"
    await expect(page.getByText('1 reviewed')).toBeVisible()

    // Front text should change (new card)
    const newText = await frontFace.locator('p').first().textContent()
    expect(newText).not.toEqual(initialText)
  })

  test('reset deck button works', async ({ page }) => {
    // Flip and rate a card to advance
    const flipContainer = page.locator('.fc-flip-container')
    await flipContainer.click()
    await page.getByRole('button', { name: /Easy/ }).click()
    await page.waitForTimeout(500)

    // Badge should show "1 reviewed"
    await expect(page.getByText('1 reviewed')).toBeVisible()

    // Click reset
    await page.getByText('Reset deck').click()

    // Badge should reset to "0 reviewed"
    await expect(page.getByText('0 reviewed')).toBeVisible()
  })
})
