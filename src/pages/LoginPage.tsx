import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { BookOpen, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/dashboard'

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

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="mb-10 flex items-center justify-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-2xl text-text-primary">PraxisPrep</span>
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
              <Link to="/forgot-password" className="font-body text-sm text-primary hover:text-primary-hover">
                Forgot password?
              </Link>
            </div>

            <Button variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>
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
