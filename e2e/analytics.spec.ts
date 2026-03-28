import { test, expect } from '@playwright/test'

test.describe('Analytics', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/analytics')
    await page.waitForLoadState('networkidle')
  })

  test('analytics page loads with heading', async ({ page }) => {
    await expect(page.getByText('Performance Analytics')).toBeVisible()
  })

  test('4 overview stat cards are visible', async ({ page }) => {
    await expect(page.getByText('Overall Accuracy')).toBeVisible()
    await expect(page.getByText('Questions Answered', { exact: true })).toBeVisible()
    await expect(page.getByText('Avg Time / Question')).toBeVisible()
    await expect(page.getByText('Exams Completed')).toBeVisible()

    // Verify stat values are rendered
    await expect(page.getByText('72%', { exact: true })).toBeVisible()
    await expect(page.getByText('342', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('45s', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Exams Completed')).toBeVisible()
  })

  test('Big Nine radar chart renders with SVG element', async ({ page }) => {
    // The Recharts RadarChart renders as SVG inside a ResponsiveContainer
    await expect(page.getByText('Big Nine Radar')).toBeVisible()

    // Check for SVG element (Recharts renders the chart as SVG)
    const svgElement = page.locator('.recharts-responsive-container svg')
    await expect(svgElement).toBeVisible()

    // The radar polygon should be rendered
    const radarPolygon = page.locator('.recharts-radar .recharts-radar-polygon')
    await expect(radarPolygon).toBeVisible()
  })

  test('progress bars are visible', async ({ page }) => {
    // The Big Nine Performance section has animated bar fills
    await expect(page.getByText('Big Nine Performance')).toBeVisible()

    const bars = page.locator('.analytics-bar-fill')
    const count = await bars.count()
    // Should have 9 bars (one per Big Nine area)
    expect(count).toBe(9)
  })

  test('category breakdown cards are visible', async ({ page }) => {
    // 3 content category cards at the bottom
    await expect(
      page.getByText('I. Foundations & Professional Practice'),
    ).toBeVisible()
    await expect(
      page.getByText('II. Screening, Assessment, Eval & Dx'),
    ).toBeVisible()
    await expect(
      page.getByText('III. Treatment Planning & Implementation'),
    ).toBeVisible()

    // Each card shows "questions answered" text
    const questionCounts = page.getByText(/\d+ questions answered/)
    const count = await questionCounts.count()
    expect(count).toBe(3)
  })
})
