import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'
import { useSettingsStore } from '@/stores/settingsStore'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()
  const settingsHydrated = useSettingsStore((s) => s.hasHydrated)
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const betaMode = resolveBetaMode(betaModeEnabled)

  if ((BETA_MODE_AVAILABLE && !settingsHydrated) || (!betaMode && loading)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  if (betaMode) return <>{children}</>

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
