import { test, expect } from "@playwright/test"
import { CORE_ROUTES } from "./helpers"

test.describe("Dark Theme Enforcement", () => {
  test("no element on any core route has a white background", async ({
    page,
  }) => {
    for (const route of CORE_ROUTES) {
      await page.goto(route, { waitUntil: "networkidle" })

      const whites = await page.evaluate(() => {
        const all = document.querySelectorAll("*")
        const whites: string[] = []
        all.forEach((el) => {
          const bg = getComputedStyle(el).backgroundColor
          if (bg === "rgb(255, 255, 255)") {
            whites.push(
              el.tagName +
                "." +
                el.className.split(" ").slice(0, 3).join("."),
            )
          }
        })
        return whites
      })

      expect(
        whites.length,
        `Found ${whites.length} white-background elements on ${route}: ${whites.join(", ")}`,
      ).toBe(0)
    }
  })

  test("study page unselected buttons are not white", async ({ page }) => {
    await page.goto("/study", { waitUntil: "networkidle" })

    const freeStudyText = page.getByText("Free Study")
    const button = freeStudyText.locator("xpath=ancestor::button")

    const bg = await button.evaluate((el) => {
      return getComputedStyle(el).backgroundColor
    })

    expect(
      bg,
      "Free Study button should not have a white background",
    ).not.toBe("rgb(255, 255, 255)")
  })

  test("background is dark across all pages", async ({ page }) => {
    for (const route of CORE_ROUTES) {
      await page.goto(route, { waitUntil: "networkidle" })

      const bg = await page.evaluate(() => {
        return getComputedStyle(document.body).backgroundColor
      })

      const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
      expect(match, `Body background on ${route} is not an rgb color: ${bg}`).not.toBeNull()

      const [, r, g, b] = match!.map(Number)
      expect(
        r,
        `Body background red channel on ${route} is ${r}, expected < 50`,
      ).toBeLessThan(50)
      expect(
        g,
        `Body background green channel on ${route} is ${g}, expected < 50`,
      ).toBeLessThan(50)
      expect(
        b,
        `Body background blue channel on ${route} is ${b}, expected < 50`,
      ).toBeLessThan(50)
    }
  })
})
