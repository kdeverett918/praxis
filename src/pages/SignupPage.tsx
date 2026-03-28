import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { BookOpen, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useAuth } from '@/hooks/useAuth'
import { useSettingsStore } from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [searchParams] = useSearchParams()
  const [email, setEmail] = useState(() => searchParams.get('email') ?? '')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { signUp } = useAuth()
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const updateSettings = useSettingsStore((s) => s.updateSettings)
  const betaMode = resolveBetaMode(betaModeEnabled)
  const navigate = useNavigate()
  const source = searchParams.get('source')
  const score = searchParams.get('score')
  const plan = searchParams.get('plan')
  const nextPath = normalizeRedirectTarget(
    searchParams.get('redirect') ??
      searchParams.get('next') ??
      (plan === 'pro' ? '/pro?tier=pro' : '/dashboard'),
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error: authError } = await signUp(email, password, name)
    if (authError) {
      setError(authError)
      setLoading(false)
    } else {
      setSuccess(true)
      setTimeout(() => navigate(nextPath), 2000)
    }
  }

  function handleContinueInBetaMode() {
    updateSettings({ betaModeEnabled: true })
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-10 flex items-center justify-center gap-2.5">
          <div className="from-primary to-secondary flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-text-primary text-2xl">PraxisPrep</span>
        </Link>

        <div className="border-border bg-surface rounded-2xl border p-8">
          <h1 className="font-display text-text-primary text-3xl">Create your account</h1>
          <p className="font-body text-text-secondary mt-2 text-sm">
            {source === 'diagnostic'
              ? 'Save your diagnostic path, then keep going into the funnel.'
              : 'Start studying for the Praxis 5331 — free.'}
          </p>
          {(source === 'diagnostic' || score || plan) && (
            <div className="border-secondary/25 bg-secondary/6 font-body text-text-secondary mt-4 rounded-xl border p-3 text-sm">
              {score
                ? `Your last diagnostic score was ${score}%. Create the account with this same email so the study plan and upgrade path stay aligned.`
                : 'Your diagnostic flow started here. Create the account with this same email so your study plan and upgrade path stay aligned.'}
            </div>
          )}

          {error && (
            <div className="bg-error-light text-error mt-4 flex items-center gap-2 rounded-xl p-3 text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="bg-success-light text-success mt-4 flex items-center gap-2 rounded-xl p-3 text-sm">
              <CheckCircle className="h-4 w-4 shrink-0" />
              Account created! Check your email to confirm, then we'll redirect you.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="font-body text-text-secondary mb-2 block text-sm font-medium"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="text-text-muted absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="border-border bg-background font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-primary w-full rounded-xl border py-3 pr-4 pl-10 focus:ring-1 focus:outline-none"
                />
              </div>
            </div>

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
                  placeholder="Min 8 characters"
                  required
                  minLength={8}
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

            <Button variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>

            <p className="font-body text-text-muted text-center text-xs">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="text-primary hover:underline">
                Terms
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>

          {BETA_MODE_AVAILABLE && (
            <div className="border-secondary/20 bg-secondary/5 mt-5 rounded-2xl border p-4">
              <p className="font-body text-text-primary text-sm">
                {betaMode
                  ? 'Beta Mode is already active in this browser.'
                  : 'Want to explore the product first?'}
              </p>
              <p className="font-body text-text-secondary mt-1 text-xs leading-6">
                {betaMode
                  ? 'Open the beta workspace directly and bypass signup on protected pages.'
                  : 'Switch this browser into beta mode and use the full local workspace without creating an account yet.'}
              </p>
              <Button variant="ghost" size="sm" className="mt-3" onClick={handleContinueInBetaMode}>
                {betaMode ? 'Open Beta Workspace' : 'Continue in Beta Mode'}
              </Button>
            </div>
          )}
        </div>

        <p className="font-body text-text-secondary mt-6 text-center text-sm">
          Already have an account?{' '}
          <Link
            to={`/login${searchParams.toString() ? `?${searchParams.toString()}` : ''}`}
            className="text-secondary hover:text-secondary-hover font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

function normalizeRedirectTarget(value: string | null) {
  if (!value || !value.startsWith('/')) return '/dashboard'
  return value
}
