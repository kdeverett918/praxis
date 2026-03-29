import { test, expect } from '@playwright/test'
import { VIEWPORTS } from './helpers'

test.describe('Font Visibility', () => {
  test('landing page headline uses Fraunces display font', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const h1Font = await page.locator('h1').first().evaluate((el) => {
      return getComputedStyle(el).fontFamily
    })
    expect(h1Font).toContain('Fraunces')
  })

  test('body text uses Outfit font', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const bodyFont = await page.evaluate(() => getComputedStyle(document.body).fontFamily)
    expect(bodyFont).toContain('Outfit')
  })

  test('stat numbers use JetBrains Mono', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    const monoEl = page.locator('.font-mono').first()
    await expect(monoEl).toBeVisible()
    const monoFont = await monoEl.evaluate((el) => getComputedStyle(el).fontFamily)
    expect(monoFont).toContain('JetBrains Mono')
  })

  test('all text is visible on landing page (no invisible elements)', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Hero headline is visible
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    const h1Color = await h1.evaluate((el) => getComputedStyle(el).color)
    // Should NOT be transparent or zero-opacity
    expect(h1Color).not.toBe('rgba(0, 0, 0, 0)')
    expect(h1Color).not.toBe('transparent')

    // Subheadline text is visible
    const sub = page.getByText('AI-powered adaptive study')
    await expect(sub).toBeVisible()

    // CTA button text is visible
    await expect(page.getByRole('button', { name: /Start Studying Free/ }).first()).toBeVisible()

    // Nav text is visible
    await expect(page.getByText('Features', { exact: true }).first()).toBeVisible()
  })

  test('all text is visible on dashboard', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForLoadState('networkidle')

    // Greeting heading
    await expect(page.locator('h1').first()).toBeVisible()

    // Stat labels
    await expect(page.getByText('Day Streak')).toBeVisible()
    await expect(page.getByText('Questions Today')).toBeVisible()

    // Navigation text
    await expect(page.getByText('Dashboard').first()).toBeVisible()
  })

  test('text has sufficient contrast on dark background', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const contrast = await page.evaluate(() => {
      const h1 = document.querySelector('h1')
      if (!h1) return null
      const h1Style = getComputedStyle(h1)
      const bodyStyle = getComputedStyle(document.body)
      return {
        textColor: h1Style.color,
        bgColor: bodyStyle.backgroundColor,
      }
    })
    expect(contrast).not.toBeNull()
    // Text should be light, background should be dark — they should differ
    expect(contrast!.textColor).not.toBe(contrast!.bgColor)
  })

  test('fonts load correctly on mobile', async ({ browser }) => {
    const context = await browser.newContext({ viewport: VIEWPORTS.mobile })
    const page = await context.newPage()
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const h1Font = await page.locator('h1').first().evaluate((el) => {
      return getComputedStyle(el).fontFamily
    })
    expect(h1Font).toContain('Fraunces')

    const bodyFont = await page.evaluate(() => getComputedStyle(document.body).fontFamily)
    expect(bodyFont).toContain('Outfit')

    await context.close()
  })
})
