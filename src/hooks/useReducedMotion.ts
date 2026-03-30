import { useState, useEffect } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'

export function useReducedMotion(): boolean {
  const [osPreference, setOsPreference] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const settingsOverride = useSettingsStore((s) => s.reducedMotion)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handler = (e: MediaQueryListEvent) => setOsPreference(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Settings override wins if explicitly set, otherwise follow OS
  if (settingsOverride !== undefined) return settingsOverride
  return osPreference
}
