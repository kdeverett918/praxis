import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Beaker, BookOpen, Menu, X } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useSettingsStore } from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const updateSettings = useSettingsStore((s) => s.updateSettings)
  const betaMode = resolveBetaMode(betaModeEnabled)
  const isLanding = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleContinueInBetaMode() {
    updateSettings({ betaModeEnabled: true })
    setMobileOpen(false)
    navigate('/dashboard')
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/80 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl text-text-primary">PraxisPrep</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {isLanding && (
            <>
              <a href="#features" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                Features
              </a>
              <a href="#pricing" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                Pricing
              </a>
              <a href="#about" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                About
              </a>
            </>
          )}
          {BETA_MODE_AVAILABLE && (
            <Button variant={betaMode ? 'outline' : 'secondary'} size="sm" onClick={handleContinueInBetaMode}>
              <Beaker className="h-4 w-4" />
              {betaMode ? 'Open Beta' : 'Beta Mode'}
            </Button>
          )}
          <Link to="/login">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" size="sm">Start Free</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {isLanding && (
              <>
                <a href="#features" className="text-text-secondary" onClick={() => setMobileOpen(false)}>Features</a>
                <a href="#pricing" className="text-text-secondary" onClick={() => setMobileOpen(false)}>Pricing</a>
                <a href="#about" className="text-text-secondary" onClick={() => setMobileOpen(false)}>About</a>
              </>
            )}
            {BETA_MODE_AVAILABLE && (
              <Button variant={betaMode ? 'outline' : 'secondary'} size="md" className="w-full" onClick={handleContinueInBetaMode}>
                <Beaker className="h-4 w-4" />
                {betaMode ? 'Open Beta Workspace' : 'Continue in Beta Mode'}
              </Button>
            )}
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="md" className="w-full">Log In</Button>
            </Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="md" className="w-full">Start Free</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
