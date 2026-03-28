import { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  LayoutDashboard,
  GraduationCap,
  Clock,
  Layers,
  BarChart3,
  FileText,
  Settings,
  LogOut,
  Gamepad2,
  MessageSquareHeart,
  Menu,
  X,
  Stethoscope,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useGamificationStore, LEVEL_NAMES } from '@/stores/gamificationStore'
import { useSettingsStore } from '@/stores/settingsStore'
import BetaBanner from '@/components/layout/BetaBanner'
import { resolveBetaMode } from '@/lib/beta'

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
      className={`font-body relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
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
  const { user, signOut } = useAuth()
  const level = useGamificationStore((s) => s.level)
  const levelName = LEVEL_NAMES[Math.min(level - 1, LEVEL_NAMES.length - 1)]
  const betaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const betaMode = resolveBetaMode(betaModeEnabled)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-background min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="border-border bg-surface/50 fixed top-0 bottom-0 left-0 z-40 hidden w-64 border-r backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col">
          <div className="border-border border-b px-5 py-4">
            <Link to="/dashboard" className="flex items-center gap-2.5">
              <div className="from-primary to-secondary flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-text-primary text-xl">PraxisPrep</span>
            </Link>
            <div className="mt-3 flex items-center gap-2 overflow-hidden">
              <span className="bg-primary-light text-primary inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                Lv {level}
              </span>
              <span className="text-text-secondary truncate text-xs">{levelName}</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {NAV_ITEMS.map((item) => {
              const active =
                location.pathname === item.to || location.pathname.startsWith(item.to + '/')
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
              <div className="via-border absolute top-3 right-4 left-4 h-px bg-gradient-to-r from-transparent to-transparent" />
              <span className="font-body text-text-muted text-[10px] font-semibold tracking-widest uppercase">
                Games
              </span>
            </div>
            {GAMES_ITEMS.map((item) => {
              const active =
                location.pathname === item.to || location.pathname.startsWith(item.to + '/')
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
              <div className="via-border h-px bg-gradient-to-r from-transparent to-transparent" />
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

          <div className="border-border space-y-1 border-t px-3 py-4">
            <NavLink
              to="/settings"
              icon={Settings}
              label="Settings"
              active={location.pathname === '/settings'}
            />
            {user && (
              <button
                onClick={async () => {
                  await signOut()
                  navigate('/login')
                }}
                className="font-body text-text-secondary hover:bg-surface-hover hover:text-text-primary flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200"
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

        <div className="border-border bg-background/85 sticky top-0 z-30 border-b backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="from-primary to-secondary flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-display text-text-primary text-lg">PraxisPrep</p>
                <p className="font-body text-text-muted text-[11px] tracking-[0.22em] uppercase">
                  Lv {level} {levelName}
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              aria-label={mobileMenuOpen ? 'Close app menu' : 'Open app menu'}
              className="border-border bg-surface text-text-primary hover:border-primary/40 rounded-xl border p-2 transition-colors"
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
              className="bg-background/70 absolute inset-0 backdrop-blur-sm"
            />
            <div className="border-border bg-surface absolute top-0 right-0 h-full w-[min(24rem,92vw)] border-l px-4 py-5 shadow-2xl shadow-black/30">
              <div className="border-border mb-5 flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-display text-text-primary text-xl">Navigate</p>
                  <p className="font-body text-text-secondary text-sm">
                    Access analytics, review, settings, and games.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close app menu"
                  className="border-border bg-background text-text-primary rounded-xl border p-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active =
                    location.pathname === item.to || location.pathname.startsWith(item.to + '/')
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
                  <div className="via-border absolute top-3 right-4 left-4 h-px bg-gradient-to-r from-transparent to-transparent" />
                  <span className="font-body text-text-muted text-[10px] font-semibold tracking-widest uppercase">
                    Games
                  </span>
                </div>
                {GAMES_ITEMS.map((item) => {
                  const active =
                    location.pathname === item.to || location.pathname.startsWith(item.to + '/')
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
                  <div className="via-border h-px bg-gradient-to-r from-transparent to-transparent" />
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

              {user && (
                <div className="border-border mt-6 border-t pt-4">
                  <button
                    onClick={async () => {
                      await signOut()
                      setMobileMenuOpen(false)
                      navigate('/login')
                    }}
                    className="font-body text-text-secondary hover:bg-background hover:text-text-primary flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200"
                  >
                    <LogOut className="h-5 w-5" />
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

      <nav className="border-border bg-surface/90 fixed right-0 bottom-0 left-0 z-40 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-around px-1 py-1.5">
          {NAV_ITEMS.slice(0, 5).map((item) => {
            const active =
              location.pathname === item.to || location.pathname.startsWith(item.to + '/')
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
