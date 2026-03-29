import { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import {
  BookOpen, LayoutDashboard, GraduationCap, Clock, Layers, BarChart3, FileText,
  Settings, LogOut, Gamepad2, Menu, X, Stethoscope,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useGamificationStore, LEVEL_NAMES } from '@/stores/gamificationStore'
import { useSettingsStore } from '@/stores/settingsStore'
import BetaBanner from '@/components/layout/BetaBanner'
import { resolveBetaMode } from '@/lib/beta'

const LEARN_ITEMS = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/study', icon: GraduationCap, label: 'Study' },
  { to: '/flashcards', icon: FileText, label: 'Flashcards' },
  { to: '/review', icon: BookOpen, label: 'Review' },
] as const

const TEST_ITEMS = [
  { to: '/quiz', icon: Layers, label: 'Quick Quiz' },
  { to: '/exam', icon: Clock, label: 'Exam Sim' },
] as const

const PLAY_ITEMS = [
  { to: '/speed-round', icon: Gamepad2, label: 'Speed Round' },
  { to: '/clinical-scenario', icon: Stethoscope, label: 'Clinical Scenarios' },
] as const

// Bottom nav: first 5 most-used items
const BOTTOM_NAV_ITEMS = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/study', icon: GraduationCap, label: 'Study' },
  { to: '/exam', icon: Clock, label: 'Exam Sim' },
  { to: '/quiz', icon: Layers, label: 'Quiz' },
  { to: '/flashcards', icon: FileText, label: 'Flashcards' },
] as const

function NavLink({
  to,
  icon: Icon,
  label,
  active,
  accent = false,
  onNavigate,
}: {
  to: string
  icon: typeof LayoutDashboard
  label: string
  active: boolean
  accent?: boolean
  onNavigate?: () => void
}) {
  const activeBg = accent ? 'bg-secondary/8' : 'bg-primary/8'
  const activeText = accent ? 'text-secondary' : 'text-primary'

  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm transition-all duration-200 ${
        active
          ? `${activeBg} font-medium ${activeText}`
          : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
      }`}
    >
      <Icon className="h-[18px] w-[18px]" />
      {label}
    </Link>
  )
}

function NavSection({ label }: { label: string }) {
  return (
    <div className="px-3 pt-5 pb-1.5">
      <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-text-muted">{label}</span>
    </div>
  )
}

export default function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const level = useGamificationStore((s) => s.level)
  const levelName = LEVEL_NAMES[Math.min(level - 1, LEVEL_NAMES.length - 1)]
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const betaMode = resolveBetaMode(betaModeEnabled)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + '/')

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside data-testid="desktop-sidebar" className="fixed top-0 bottom-0 left-0 z-40 hidden w-64 border-r border-border bg-white lg:block">
        <div className="flex h-full flex-col">
          <div className="border-b border-border px-4 py-4">
            <Link to="/dashboard" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl text-text-primary">PraxisPrep</span>
            </Link>
            <div className="mt-3 flex items-center gap-2 overflow-hidden">
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-light px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                Lv {level}
              </span>
              <span className="truncate text-xs text-text-muted">{levelName}</span>
            </div>
          </div>

          <nav className="flex-1 space-y-0.5 px-3 py-3">
            <NavSection label="Learn" />
            {LEARN_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} active={isActive(item.to)} />
            ))}

            <NavSection label="Test" />
            {TEST_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} active={isActive(item.to)} />
            ))}

            <NavSection label="Play" />
            {PLAY_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} active={isActive(item.to)} accent />
            ))}
          </nav>

          <div className="space-y-0.5 border-t border-border px-3 py-3">
            <NavLink to="/analytics" icon={BarChart3} label="Analytics" active={isActive('/analytics')} />
            <NavLink to="/settings" icon={Settings} label="Settings" active={isActive('/settings')} />
            {user && (
              <button
                onClick={async () => {
                  await signOut()
                  navigate('/login')
                }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
              >
                <LogOut className="h-[18px] w-[18px]" />
                Log Out
              </button>
            )}
          </div>
        </div>
      </aside>

      <main className="lg:pl-64">
        <BetaBanner />

        {/* Mobile Header */}
        <div className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur-lg lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-display text-lg text-text-primary">PraxisPrep</p>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-text-muted">
                  Lv {level} {levelName}
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((c) => !c)}
              aria-label={mobileMenuOpen ? 'Close app menu' : 'Open app menu'}
              className="rounded-lg border border-border bg-white p-2 text-text-primary transition-colors hover:border-primary/40"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation overlay"
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            />
            <div data-testid="mobile-menu-overlay" className="absolute top-0 right-0 h-full w-[min(24rem,92vw)] border-l border-border bg-white px-4 py-5 shadow-xl">
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="font-body text-lg font-semibold text-text-primary">Navigate</p>
                  <p className="font-body text-sm text-text-muted">All pages and settings.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close app menu"
                  className="rounded-lg border border-border bg-surface-elevated p-2 text-text-primary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-0.5">
                <NavSection label="Learn" />
                {LEARN_ITEMS.map((item) => (
                  <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} active={isActive(item.to)} onNavigate={() => setMobileMenuOpen(false)} />
                ))}

                <NavSection label="Test" />
                {TEST_ITEMS.map((item) => (
                  <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} active={isActive(item.to)} onNavigate={() => setMobileMenuOpen(false)} />
                ))}

                <NavSection label="Play" />
                {PLAY_ITEMS.map((item) => (
                  <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} active={isActive(item.to)} accent onNavigate={() => setMobileMenuOpen(false)} />
                ))}

                <div className="my-2 h-px bg-border" />
                <NavLink to="/analytics" icon={BarChart3} label="Analytics" active={isActive('/analytics')} onNavigate={() => setMobileMenuOpen(false)} />
                <NavLink to="/settings" icon={Settings} label="Settings" active={isActive('/settings')} onNavigate={() => setMobileMenuOpen(false)} />
              </nav>

              {user && (
                <div className="mt-6 border-t border-border pt-4">
                  <button
                    onClick={async () => {
                      await signOut()
                      setMobileMenuOpen(false)
                      navigate('/login')
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
                  >
                    <LogOut className="h-[18px] w-[18px]" />
                    {betaMode ? 'Log Out of account' : 'Log Out'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <Outlet />
        </div>
      </main>

      {/* Bottom Nav (mobile) */}
      <nav data-testid="bottom-nav" className="fixed right-0 bottom-0 left-0 z-40 border-t border-border bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
        <div className="flex items-center justify-around px-1 py-1.5">
          {BOTTOM_NAV_ITEMS.map((item) => {
            const active = isActive(item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 ${
                  active ? 'text-primary' : 'text-text-muted'
                }`}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span className="truncate text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
