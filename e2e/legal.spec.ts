import { test, expect } from '@playwright/test'

test.describe('Legal Pages', () => {
  test('terms page includes legal considerations and ETS disclaimer', async ({ page }) => {
    await page.goto('/terms')
    await page.waitForLoadState('networkidle')

    await expect(page.getByRole('heading', { name: 'Terms & Conditions' })).toBeVisible()
    await expect(page.getByRole('heading', { name: '17. Legal Considerations' })).toBeVisible()
    await expect(page.getByText('This product is not affiliated with, endorsed by, or sponsored by ETS.', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Question content must be 100% original. SLP Study Hub does not reproduce ETS questions.')).toBeVisible()
  })

  test('privacy page explains local browser storage', async ({ page }) => {
    await page.goto('/privacy')
    await page.waitForLoadState('networkidle')

    await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Browser Storage and Beta Data' })).toBeVisible()
    await expect(page.getByText('In beta or offline modes, SLP Study Hub may store settings, progress, and gamification data in your browser using local storage.')).toBeVisible()
  })

  test('settings page saves quiz defaults for the session', async ({ page }) => {
    await page.goto('/settings')
    await page.waitForLoadState('networkidle')

    await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible()

    await page.getByRole('button', { name: '30' }).click()
    await page.getByRole('button', { name: 'Save changes' }).click()
    await expect(page.getByText('Settings saved locally for this workspace.')).toBeVisible()

    await page.goto('/quiz')
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('Saved default: 30')).toBeVisible()
  })

  test('beta mode option can switch to account mode and back', async ({ page }) => {
    await page.goto('/settings')
    await page.waitForLoadState('networkidle')

    await page.getByText('Account mode', { exact: true }).click()
    await page.getByRole('button', { name: 'Save changes' }).click()

    await page.waitForURL(/\/login$/)
    await expect(page.getByRole('button', { name: 'Continue in Beta Mode' })).toBeVisible()

    await page.getByRole('button', { name: 'Continue in Beta Mode' }).click()
    await page.waitForURL(/\/dashboard$/)
    await expect(page.getByText('Beta Mode active')).toBeVisible()
  })
})
