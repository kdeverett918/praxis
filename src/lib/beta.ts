export const BETA_MODE_AVAILABLE = import.meta.env.DEV && import.meta.env.VITE_BETA_MODE === 'true'

export function resolveBetaMode(betaModeEnabled: boolean) {
  return BETA_MODE_AVAILABLE && betaModeEnabled
}
