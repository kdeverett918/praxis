import { Beaker } from 'lucide-react'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'
import { useSettingsStore } from '@/stores/settingsStore'

export default function BetaBanner() {
  const settingsHydrated = useSettingsStore((s) => s.hasHydrated)
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const betaMode = resolveBetaMode(betaModeEnabled)

  if (!BETA_MODE_AVAILABLE || !settingsHydrated || !betaMode) return null

  return (
    <div className="from-secondary/20 to-primary/20 font-body text-secondary flex items-center justify-center gap-2 bg-gradient-to-r px-4 py-2 text-center text-xs font-medium">
      <Beaker className="h-3.5 w-3.5" />
      Beta Mode active — all features unlocked locally. Switch modes anytime in Settings.
    </div>
  )
}
