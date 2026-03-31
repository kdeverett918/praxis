type AnalyticsWindow = Window &
  typeof globalThis & {
    dataLayer?: unknown[][]
    gtag?: (...args: unknown[]) => void
  }

const GA_SCRIPT_ID = 'google-analytics'
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

let hasConfiguredAnalytics = false

function getAnalyticsWindow(): AnalyticsWindow | null {
  if (typeof window === 'undefined') return null
  return window as AnalyticsWindow
}

function installGtagStub(analyticsWindow: AnalyticsWindow) {
  analyticsWindow.dataLayer ??= []
  analyticsWindow.gtag ??= (...args: unknown[]) => {
    analyticsWindow.dataLayer?.push(args)
  }
}

function injectAnalyticsScript(id: string) {
  if (document.getElementById(GA_SCRIPT_ID)) return

  const script = document.createElement('script')
  script.id = GA_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.append(script)
}

export function initializeAnalytics() {
  if (!measurementId) return false

  const analyticsWindow = getAnalyticsWindow()
  if (!analyticsWindow) return false

  installGtagStub(analyticsWindow)
  injectAnalyticsScript(measurementId)

  if (hasConfiguredAnalytics) return true

  analyticsWindow.gtag?.('js', new Date())
  analyticsWindow.gtag?.('config', measurementId, {
    send_page_view: false,
  })

  hasConfiguredAnalytics = true
  return true
}

export function trackPageView(path: string) {
  if (!initializeAnalytics()) return

  const analyticsWindow = getAnalyticsWindow()
  if (!analyticsWindow) return

  analyticsWindow.gtag?.('event', 'page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  })
}
