import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { BookOpen, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useAuth } from '@/hooks/useAuth'
import { useSettingsStore } from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'
import { trackEvent } from '@/lib/analytics'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { signIn } = useAuth()
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const updateSettings = useSettingsStore((s) => s.updateSettings)
  const betaMode = resolveBetaMode(betaModeEnabled)
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/dashboard'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    trackEvent('login_started', { source: 'login_page' })
    const { error: authError } = await signIn(email, password)
    if (authError) {
      setError(authError)
      setLoading(false)
    } else {
      trackEvent('login_completed', { source: 'login_page' })
      navigate(from, { replace: true })
    }
  }

  function handleContinueInBetaMode() {
    updateSettings({ betaModeEnabled: true })
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="mb-10 flex items-center justify-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-2xl text-text-primary">SLP Study Hub</span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h1 className="font-display text-3xl text-text-primary">Welcome back</h1>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Log in to continue studying for the Praxis.
          </p>

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-error-light p-3 text-sm text-error">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-text-secondary">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  required
                  className="w-full rounded-xl border border-border bg-background py-3 pr-4 pl-10 font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block font-body text-sm font-medium text-text-secondary">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-border bg-background py-3 pr-12 pl-10 font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-text-muted hover:text-text-secondary"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-border bg-background text-primary focus:ring-primary" />
                <span className="font-body text-sm text-text-secondary">Remember me</span>
              </label>
              <a
                href="mailto:kristine@slpstudyhub.com?subject=Password%20reset%20help"
                className="font-body text-sm text-primary hover:text-primary-hover"
              >
                Need password help?
              </a>
            </div>

            <Button variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>

          {BETA_MODE_AVAILABLE && (
            <div className="mt-5 rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
              <p className="font-body text-sm text-text-primary">
                {betaMode ? 'Beta Mode is already active in this browser.' : 'Need the unlocked local workspace instead?'}
              </p>
              <p className="mt-1 font-body text-xs leading-6 text-text-secondary">
                {betaMode
                  ? 'Open the beta workspace directly and bypass login on protected pages.'
                  : 'Enable beta mode for this browser and continue without signing in.'}
              </p>
              <Button variant="ghost" size="sm" className="mt-3" onClick={handleContinueInBetaMode}>
                {betaMode ? 'Open Beta Workspace' : 'Continue in Beta Mode'}
              </Button>
            </div>
          )}
        </div>

        <p className="mt-6 text-center font-body text-sm text-text-secondary">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-secondary hover:text-secondary-hover">
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  )
}
