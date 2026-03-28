import { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import {
  BookOpen, LayoutDashboard, GraduationCap, Clock, Layers, BarChart3, FileText,
  Settings, LogOut, Gamepad2, MessageSquareHeart, Menu, X, Stethoscope,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useGamificationStore, LEVEL_NAMES } from '@/stores/gamificationStore'
import BetaBanner from '@/components/layout/BetaBanner'
import { BETA_MODE } from '@/lib/beta'

const NAV_ITEMS = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/study', icon: GraduationCap, label: 'Study' },
  { to: '/exam', icon: Clock, label: 'Exam Sim' },
  { to: '/quiz', icon: Layers, label: 'Quiz' },
  { to: '/flashcards', icon: FileText, label: 'Flashcards' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/review', icon: BookOpen, label: 'Review' },
] as const

const GAMES_ITEMS = [
  { to: '/speed-round', icon: Gamepad2, label: 'Speed Round' },
  { to: '/clinical-scenario', icon: Stethoscope, label: 'Clinical Scenarios' },
] as const

const FEEDBACK_ITEMS = [
  { to: '/feedback', icon: MessageSquareHeart, label: 'Beta Feedback' },
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
  const activeBg = accent ? 'bg-secondary/10' : 'bg-primary/10'
  const activeText = accent ? 'text-secondary' : 'text-primary'

  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={`relative flex items-center gap-3 rounded-xl px-4 py-3 font-body text-sm transition-all duration-200 ${
        active
          ? `${activeBg} font-medium ${activeText}`
          : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
      }`}
    >
      {active && (
        <span
          className="absolute inset-0 rounded-xl border border-current opacity-10 transition-all duration-300"
          aria-hidden="true"
        />
      )}
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  )
}

export default function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const level = useGamificationStore((s) => s.level)
  const levelName = LEVEL_NAMES[Math.min(level - 1, LEVEL_NAMES.length - 1)]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="fixed top-0 bottom-0 left-0 z-40 hidden w-64 border-r border-border bg-surface/50 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col">
          <div className="border-b border-border px-5 py-4">
            <Link to="/dashboard" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl text-text-primary">PraxisPrep</span>
            </Link>
            <div className="mt-3 flex items-center gap-2 overflow-hidden">
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-light px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                Lv {level}
              </span>
              <span className="truncate text-xs text-text-secondary">{levelName}</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  active={active}
                />
              )
            })}

            <div className="relative px-4 pt-5 pb-2">
              <div className="absolute top-3 left-4 right-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-text-muted">Games</span>
            </div>
            {GAMES_ITEMS.map((item) => {
              const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  active={active}
                  accent
                />
              )
            })}

            <div className="px-4 pt-4 pb-2">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            {FEEDBACK_ITEMS.map((item) => {
              const active = location.pathname === item.to
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  active={active}
                />
              )
            })}
          </nav>

          <div className="space-y-1 border-t border-border px-3 py-4">
            <NavLink
              to="/settings"
              icon={Settings}
              label="Settings"
              active={location.pathname === '/settings'}
            />
            {!BETA_MODE && (
              <button
                onClick={async () => {
                  await signOut()
                  navigate('/login')
                }}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-body text-sm text-text-secondary transition-all duration-200 hover:bg-surface-hover hover:text-text-primary"
              >
                <LogOut className="h-5 w-5" />
                Log Out
              </button>
            )}
          </div>
        </div>
      </aside>

      <main className="lg:pl-64">
        <BetaBanner />

        <div className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-display text-lg text-text-primary">PraxisPrep</p>
                <p className="font-body text-[11px] uppercase tracking-[0.22em] text-text-muted">
                  Lv {level} {levelName}
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={mobileMenuOpen ? 'Close app menu' : 'Open app menu'}
              className="rounded-xl border border-border bg-surface p-2 text-text-primary transition-colors hover:border-primary/40"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation overlay"
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            />
            <div className="absolute top-0 right-0 h-full w-[min(24rem,92vw)] border-l border-border bg-surface px-4 py-5 shadow-2xl shadow-black/30">
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="font-display text-xl text-text-primary">Navigate</p>
                  <p className="font-body text-sm text-text-secondary">Access analytics, review, settings, and games.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close app menu"
                  className="rounded-xl border border-border bg-background p-2 text-text-primary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      icon={item.icon}
                      label={item.label}
                      active={active}
                      onNavigate={() => setMobileMenuOpen(false)}
                    />
                  )
                })}

                <div className="relative px-4 pt-5 pb-2">
                  <div className="absolute top-3 left-4 right-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-text-muted">Games</span>
                </div>
                {GAMES_ITEMS.map((item) => {
                  const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      icon={item.icon}
                      label={item.label}
                      active={active}
                      accent
                      onNavigate={() => setMobileMenuOpen(false)}
                    />
                  )
                })}

                <div className="px-4 pt-4 pb-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                <NavLink
                  to="/settings"
                  icon={Settings}
                  label="Settings"
                  active={location.pathname === '/settings'}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
                {FEEDBACK_ITEMS.map((item) => {
                  const active = location.pathname === item.to
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      icon={item.icon}
                      label={item.label}
                      active={active}
                      onNavigate={() => setMobileMenuOpen(false)}
                    />
                  )
                })}
              </nav>

              {!BETA_MODE && (
                <div className="mt-6 border-t border-border pt-4">
                  <button
                    onClick={async () => {
                      await signOut()
                      setMobileMenuOpen(false)
                      navigate('/login')
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-body text-sm text-text-secondary transition-all duration-200 hover:bg-background hover:text-text-primary"
                  >
                    <LogOut className="h-5 w-5" />
                    Log Out
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

      <nav className="fixed right-0 bottom-0 left-0 z-40 border-t border-border bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-around px-1 py-1.5">
          {NAV_ITEMS.slice(0, 5).map((item) => {
            const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 ${
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
