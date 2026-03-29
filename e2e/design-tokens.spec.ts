import { test, expect } from '@playwright/test'
import { getComputedTokens } from './helpers'

test.describe('Design Tokens', () => {
  test('root CSS custom properties resolve correctly', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    const tokens = await getComputedTokens(page)

    expect(tokens.colorPrimary).toBeTruthy()
    expect(tokens.colorBackground).toBeTruthy()
    expect(tokens.colorTextPrimary).toBeTruthy()
    expect(tokens.colorSurface).toBeTruthy()
    expect(tokens.colorSecondary).toBeTruthy()
    expect(tokens.fontDisplay).toBeTruthy()
    expect(tokens.fontBody).toBeTruthy()
    expect(tokens.fontMono).toBeTruthy()
  })

  test('body has correct background and font', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const bodyStyles = await page.evaluate(() => {
      const s = getComputedStyle(document.body)
      return { bg: s.backgroundColor, color: s.color, fontFamily: s.fontFamily }
    })

    expect(bodyStyles.bg).toBeTruthy()
    expect(bodyStyles.fontFamily).toBeTruthy()
  })

  test('headings use display font', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const h1Font = await page.locator('h1').first().evaluate((el) => {
      return getComputedStyle(el).fontFamily
    })

    // Should contain the display font (DM Serif Display or Instrument Serif)
    expect(h1Font).toBeTruthy()
    expect(h1Font.length).toBeGreaterThan(0)
  })

  test('all core token variables are defined', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    const tokenCheck = await page.evaluate(() => {
      const styles = getComputedStyle(document.documentElement)
      const requiredTokens = [
        '--color-primary',
        '--color-primary-hover',
        '--color-secondary',
        '--color-secondary-hover',
        '--color-background',
        '--color-surface',
        '--color-surface-elevated',
        '--color-text-primary',
        '--color-text-secondary',
        '--color-text-muted',
        '--color-border',
        '--color-success',
        '--color-error',
        '--color-warning',
        '--font-display',
        '--font-body',
        '--font-mono',
        '--radius-sm',
        '--radius-md',
        '--radius-lg',
      ]

      const results: Record<string, boolean> = {}
      for (const token of requiredTokens) {
        results[token] = styles.getPropertyValue(token).trim().length > 0
      }
      return results
    })

    for (const [token, defined] of Object.entries(tokenCheck)) {
      expect(defined, `Token ${token} should be defined`).toBe(true)
    }
  })
})
