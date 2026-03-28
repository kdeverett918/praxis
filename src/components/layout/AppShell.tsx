import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import {
  BookOpen, LayoutDashboard, GraduationCap, Clock,
  Layers, BarChart3, FileText, Settings, LogOut,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
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
]

export default function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const { signOut } = useAuth()

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="fixed top-0 bottom-0 left-0 z-40 hidden w-64 border-r border-border bg-surface/50 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2.5 border-b border-border px-6 py-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl text-text-primary">PraxisPrep</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 font-body text-sm transition-all ${
                    active
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Bottom */}
          <div className="space-y-1 border-t border-border px-3 py-4">
            <Link
              to="/settings"
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-body text-sm text-text-secondary transition-all hover:bg-surface hover:text-text-primary"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            {!BETA_MODE && (
              <button
                onClick={async () => {
                  await signOut()
                  navigate('/login')
                }}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-body text-sm text-text-secondary transition-all hover:bg-surface hover:text-text-primary"
              >
                <LogOut className="h-5 w-5" />
                Log Out
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:pl-64">
        <BetaBanner />
        <div className="min-h-screen px-6 py-8 lg:px-10">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed right-0 bottom-0 left-0 z-40 border-t border-border bg-surface/90 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-around px-2 py-2">
          {NAV_ITEMS.slice(0, 5).map((item) => {
            const active = location.pathname === item.to || location.pathname.startsWith(item.to + '/')
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 ${
                  active ? 'text-primary' : 'text-text-muted'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
