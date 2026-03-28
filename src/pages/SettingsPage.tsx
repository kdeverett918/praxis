import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Settings, UserRound, Target, ShieldCheck, RefreshCcw, Save, BookOpenText, Beaker,
} from 'lucide-react'
import PageHeader from '@/components/shared/PageHeader'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import { useAuth } from '@/hooks/useAuth'
import { useGamificationStore } from '@/stores/gamificationStore'
import {
  DEFAULT_BETA_MODE_ENABLED,
  DEFAULT_DISPLAY_NAME,
  DEFAULT_QUIZ_LENGTH,
  useSettingsStore,
} from '@/stores/settingsStore'
import { BETA_MODE_AVAILABLE, resolveBetaMode } from '@/lib/beta'

const QUIZ_LENGTH_OPTIONS = [10, 20, 30, 50]

export default function SettingsPage() {
  const navigate = useNavigate()
  const { user, profile } = useAuth()
  const dailyGoal = useGamificationStore((s) => s.dailyGoal)
  const updateDailyGoalTargets = useGamificationStore((s) => s.updateDailyGoalTargets)
  const resetProgress = useGamificationStore((s) => s.resetProgress)

  const storedDisplayName = useSettingsStore((s) => s.displayName)
  const defaultQuizLength = useSettingsStore((s) => s.defaultQuizLength)
  const examTimerWarnings = useSettingsStore((s) => s.examTimerWarnings)
  const storedBetaModeEnabled = useSettingsStore((s) => s.betaModeEnabled)
  const updateSettings = useSettingsStore((s) => s.updateSettings)
  const resetSettings = useSettingsStore((s) => s.resetSettings)
  const betaMode = resolveBetaMode(storedBetaModeEnabled)

  const [displayName, setDisplayName] = useState(storedDisplayName || profile?.display_name || '')
  const [dailyQuestionGoal, setDailyQuestionGoal] = useState(dailyGoal.questionsTarget)
  const [dailyXpGoal, setDailyXpGoal] = useState(dailyGoal.xpTarget)
  const [quizLength, setQuizLength] = useState(defaultQuizLength)
  const [timerWarnings, setTimerWarnings] = useState(examTimerWarnings)
  const [betaWorkspaceEnabled, setBetaWorkspaceEnabled] = useState(storedBetaModeEnabled)
  const [notice, setNotice] = useState<string | null>(null)

  function handleSave() {
    const nextBetaMode = BETA_MODE_AVAILABLE && betaWorkspaceEnabled

    updateSettings({
      displayName: displayName.trim(),
      defaultQuizLength: quizLength,
      examTimerWarnings: timerWarnings,
      betaModeEnabled: nextBetaMode,
    })
    updateDailyGoalTargets(
      Math.min(Math.max(dailyQuestionGoal, 5), 100),
      Math.min(Math.max(dailyXpGoal, 25), 500),
    )
    if (!nextBetaMode && !user) {
      navigate('/login', {
        replace: true,
        state: { from: { pathname: '/dashboard' } },
      })
      return
    }

    if (nextBetaMode !== storedBetaModeEnabled) {
      setNotice(nextBetaMode ? 'Beta mode enabled for this browser.' : 'Account mode enabled. Login is now required on protected pages.')
      return
    }

    setNotice('Settings saved locally for this workspace.')
  }

  function handleResetPreferences() {
    const confirmed = window.confirm('Reset your saved settings to their defaults?')
    if (!confirmed) return

    resetSettings()
    updateDailyGoalTargets(20, 100)
    setDisplayName(DEFAULT_DISPLAY_NAME)
    setDailyQuestionGoal(20)
    setDailyXpGoal(100)
    setQuizLength(DEFAULT_QUIZ_LENGTH)
    setTimerWarnings(true)
    setBetaWorkspaceEnabled(DEFAULT_BETA_MODE_ENABLED)
    setNotice('Preferences reset to defaults.')
  }

  function handleResetProgress() {
    const confirmed = window.confirm('Reset local study progress, streaks, XP, and achievements?')
    if (!confirmed) return
    resetProgress()
    setNotice('Local progress has been reset.')
  }

  return (
    <div className="mx-auto max-w-6xl pb-24 lg:pb-0">
      <PageHeader
        icon={Settings}
        title="Settings"
        subtitle="Manage profile details, study defaults, and compliance links without leaving the app."
        badge={<Badge variant="secondary">{betaMode ? 'Local beta' : 'Account'}</Badge>}
        actions={(
          <Button variant="primary" size="sm" onClick={handleSave}>
            <Save className="h-4 w-4" />
            Save changes
          </Button>
        )}
      />

      {notice && (
        <div className="mb-6 rounded-2xl border border-success/30 bg-success-light px-4 py-3 font-body text-sm text-text-primary">
          {notice}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)]">
        <Card className="space-y-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <UserRound className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl text-text-primary">Profile</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="font-body text-sm font-medium text-text-secondary">Display name</span>
                <input
                  type="text"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                  placeholder="How you want the app to greet you"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted/60 focus:border-primary focus:outline-none"
                />
              </label>
              <div className="space-y-2">
                <span className="font-body text-sm font-medium text-text-secondary">Email</span>
                <div className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-text-primary">
                  {profile?.email || (betaMode ? 'No connected account in local beta mode' : 'Sign in to connect an account')}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Target className="h-5 w-5 text-secondary" />
              <h2 className="font-display text-xl text-text-primary">Study defaults</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="font-body text-sm font-medium text-text-secondary">Daily question goal</span>
                <input
                  type="number"
                  min={5}
                  max={100}
                  value={dailyQuestionGoal}
                  onChange={(event) => setDailyQuestionGoal(Number(event.target.value))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-text-primary focus:border-primary focus:outline-none"
                />
              </label>
              <label className="space-y-2">
                <span className="font-body text-sm font-medium text-text-secondary">Daily XP goal</span>
                <input
                  type="number"
                  min={25}
                  max={500}
                  step={25}
                  value={dailyXpGoal}
                  onChange={(event) => setDailyXpGoal(Number(event.target.value))}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-text-primary focus:border-primary focus:outline-none"
                />
              </label>
            </div>

            <div className="mt-5">
              <p className="font-body text-sm font-medium text-text-secondary">Default custom quiz length</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {QUIZ_LENGTH_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setQuizLength(option)}
                    className={`rounded-xl border px-4 py-2 font-mono text-sm transition-colors ${
                      quizLength === option
                        ? 'border-primary bg-primary text-white'
                        : 'border-border bg-background text-text-secondary hover:border-primary/40'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-4">
              <div>
                <p className="font-body text-sm font-semibold text-text-primary">Exam timer warnings</p>
                <p className="mt-1 font-body text-xs leading-6 text-text-secondary">
                  Keep low-time color and pulse warnings active during exam simulations.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setTimerWarnings((current) => !current)}
                className={`inline-flex h-11 w-20 items-center rounded-full border px-1 transition-colors ${
                  timerWarnings
                    ? 'border-secondary/40 bg-secondary/20 justify-end'
                    : 'border-border bg-surface justify-start'
                }`}
                aria-pressed={timerWarnings}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white font-body text-[11px] font-semibold text-background shadow">
                  {timerWarnings ? 'On' : 'Off'}
                </span>
              </button>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {BETA_MODE_AVAILABLE && (
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <Beaker className="h-5 w-5 text-secondary" />
                <h2 className="font-display text-xl text-text-primary">Workspace mode</h2>
              </div>
              <p className="font-body text-sm leading-7 text-text-secondary">
                Choose whether this browser should run the unlocked local beta workspace or the standard account-gated experience.
              </p>
              <div className="mt-5 grid gap-3">
                <label className={`rounded-2xl border p-4 transition-colors ${betaWorkspaceEnabled ? 'border-secondary bg-secondary/10' : 'border-border bg-background'}`}>
                  <input
                    type="radio"
                    name="workspace-mode"
                    className="sr-only"
                    checked={betaWorkspaceEnabled}
                    onChange={() => setBetaWorkspaceEnabled(true)}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-body text-sm font-semibold text-text-primary">Beta workspace</p>
                      <p className="mt-1 font-body text-sm leading-6 text-text-secondary">
                        Unlock all features locally and skip login requirements on protected pages.
                      </p>
                    </div>
                    <Badge variant="secondary">Local</Badge>
                  </div>
                </label>

                <label className={`rounded-2xl border p-4 transition-colors ${!betaWorkspaceEnabled ? 'border-primary bg-primary/10' : 'border-border bg-background'}`}>
                  <input
                    type="radio"
                    name="workspace-mode"
                    className="sr-only"
                    checked={!betaWorkspaceEnabled}
                    onChange={() => setBetaWorkspaceEnabled(false)}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-body text-sm font-semibold text-text-primary">Account mode</p>
                      <p className="mt-1 font-body text-sm leading-6 text-text-secondary">
                        Require authentication for protected routes and use subscription-based access rules.
                      </p>
                    </div>
                    <Badge variant="default">Auth</Badge>
                  </div>
                </label>
              </div>
            </Card>
          )}

          <Card>
            <div className="mb-4 flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-success" />
              <h2 className="font-display text-xl text-text-primary">Workspace snapshot</h2>
            </div>
            <dl className="space-y-4">
              <div>
                <dt className="font-body text-xs uppercase tracking-[0.24em] text-text-muted">Mode</dt>
                <dd className="mt-1 font-body text-sm text-text-primary">
                  {betaMode ? 'Beta mode with local feature access' : 'Account mode with login and subscription checks'}
                </dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-[0.24em] text-text-muted">Subscription</dt>
                <dd className="mt-1 font-body text-sm text-text-primary">
                  {profile?.subscription_tier || (betaMode ? 'Beta workspace' : 'Not signed in')}
                </dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-[0.24em] text-text-muted">Daily challenge</dt>
                <dd className="mt-1 font-body text-sm text-text-primary">
                  {dailyGoal.questionsCompleted}/{dailyGoal.questionsTarget} questions and {dailyGoal.xpEarned}/{dailyGoal.xpTarget} XP today
                </dd>
              </div>
            </dl>
          </Card>

          <Card>
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <h2 className="font-display text-xl text-text-primary">Legal and content standards</h2>
            </div>
            <div className="space-y-3 font-body text-sm leading-7 text-text-secondary">
              <p>This product is not affiliated with, endorsed by, or sponsored by ETS.</p>
              <p>
                PraxisPrep uses original questions, references public-law materials like IDEA and Medicare,
                and cites public professional frameworks such as ASHA and IDDSI where appropriate.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/terms">
                <Button variant="outline" size="sm">Terms & Conditions</Button>
              </Link>
              <Link to="/privacy">
                <Button variant="ghost" size="sm">Privacy Policy</Button>
              </Link>
            </div>
          </Card>

          <Card>
            <div className="mb-4 flex items-center gap-3">
              <RefreshCcw className="h-5 w-5 text-warning" />
              <h2 className="font-display text-xl text-text-primary">Reset controls</h2>
            </div>
            <p className="font-body text-sm leading-7 text-text-secondary">
              Use these controls when you want a fresh local workspace. Progress reset clears streaks, XP,
              achievements, and daily challenge history from this browser.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="outline" size="sm" onClick={handleResetProgress}>
                Reset progress
              </Button>
              <Button variant="ghost" size="sm" onClick={handleResetPreferences}>
                Reset preferences
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
