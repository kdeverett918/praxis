import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpen, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useAuth } from '@/hooks/useAuth'
import { useSettingsStore } from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'
import { trackEvent } from '@/lib/analytics'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    trackEvent('signup_started', { source: 'signup_page' })
    const { error: authError } = await signUp(email, password, name)
    if (authError) {
      setError(authError)
      setLoading(false)
    } else {
      trackEvent('signup_completed', { source: 'signup_page' })
      setSuccess(true)
      setTimeout(() => navigate('/dashboard'), 2000)
    }
  }

  function handleContinueInBetaMode() {
    updateSettings({ betaModeEnabled: true })
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-10 flex items-center justify-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-2xl text-text-primary">SLP Study Hub</span>
        </Link>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <h1 className="font-display text-3xl text-text-primary">Create your account</h1>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Start studying for the Praxis 5331 — free.
          </p>

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-error-light p-3 text-sm text-error">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-success-light p-3 text-sm text-success">
              <CheckCircle className="h-4 w-4 shrink-0" />
              Account created! Check your email to confirm, then we'll redirect you.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-body text-sm font-medium text-text-secondary">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-border bg-background py-3 pr-4 pl-10 font-body text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

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
                  placeholder="Min 8 characters"
                  required
                  minLength={8}
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

            <Button variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>

            <p className="text-center font-body text-xs text-text-muted">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="text-primary hover:underline">Terms</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </form>

          {BETA_MODE_AVAILABLE && (
            <div className="mt-5 rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
              <p className="font-body text-sm text-text-primary">
                {betaMode ? 'Beta Mode is already active in this browser.' : 'Want to explore the product first?'}
              </p>
              <p className="mt-1 font-body text-xs leading-6 text-text-secondary">
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

        <p className="mt-6 text-center font-body text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-secondary hover:text-secondary-hover">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
