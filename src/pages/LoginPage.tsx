import { useState } from 'react'
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { BookOpen, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useAuth } from '@/hooks/useAuth'
import { useSettingsStore } from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'

export default function LoginPage() {
  const [searchParams] = useSearchParams()
  const [email, setEmail] = useState(() => searchParams.get('email') ?? '')
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
  const source = searchParams.get('source')
  const score = searchParams.get('score')
  const from =
    searchParams.get('next') ??
    (location.state as { from?: { pathname: string } })?.from?.pathname ??
    '/dashboard'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error: authError } = await signIn(email, password)
    if (authError) {
      setError(authError)
      setLoading(false)
    } else {
      navigate(from, { replace: true })
    }
  }

  function handleContinueInBetaMode() {
    updateSettings({ betaModeEnabled: true })
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="mb-10 flex items-center justify-center gap-2.5">
          <div className="from-primary to-secondary flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-text-primary text-2xl">PraxisPrep</span>
        </Link>

        {/* Card */}
        <div className="border-border bg-surface rounded-2xl border p-8">
          <h1 className="font-display text-text-primary text-3xl">Welcome back</h1>
          <p className="font-body text-text-secondary mt-2 text-sm">
            Log in to continue studying for the Praxis.
          </p>
          {(source === 'diagnostic' || score) && (
            <div className="border-secondary/25 bg-secondary/6 font-body text-text-secondary mt-4 rounded-xl border p-3 text-sm">
              {score
                ? `You are returning from the diagnostic flow with a ${score}% score. Log in to continue into the Pass Pack checkout or free study path.`
                : 'You are returning from the diagnostic flow. Log in to continue without losing your next step.'}
            </div>
          )}

          {error && (
            <div className="bg-error-light text-error mt-4 flex items-center gap-2 rounded-xl p-3 text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="font-body text-text-secondary mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="text-text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  required
                  className="border-border bg-background font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-primary w-full rounded-xl border py-3 pr-4 pl-10 focus:ring-1 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="font-body text-text-secondary mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="text-text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="border-border bg-background font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-primary w-full rounded-xl border py-3 pr-12 pl-10 focus:ring-1 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-text-muted hover:text-text-secondary absolute top-1/2 right-3 -translate-y-1/2"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="border-border bg-background text-primary focus:ring-primary rounded"
                />
                <span className="font-body text-text-secondary text-sm">Remember me</span>
              </label>
              <a
                href="mailto:hello@praxisprep.io?subject=PraxisPrep%20Password%20Reset"
                className="font-body text-primary hover:text-primary-hover text-sm"
              >
                Forgot password?
              </a>
            </div>

            <Button variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>

          {BETA_MODE_AVAILABLE && (
            <div className="border-secondary/20 bg-secondary/5 mt-5 rounded-2xl border p-4">
              <p className="font-body text-text-primary text-sm">
                {betaMode
                  ? 'Beta Mode is already active in this browser.'
                  : 'Need the unlocked local workspace instead?'}
              </p>
              <p className="font-body text-text-secondary mt-1 text-xs leading-6">
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

        <p className="font-body text-text-secondary mt-6 text-center text-sm">
          Don't have an account?{' '}
          <Link
            to={`/signup${searchParams.toString() ? `?${searchParams.toString()}` : ''}`}
            className="text-secondary hover:text-secondary-hover font-medium"
          >
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  )
}
