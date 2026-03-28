import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ProtectedRoute from '@/components/layout/ProtectedRoute'
import AchievementToast from '@/components/shared/AchievementToast'

const LandingPage = lazy(() => import('@/pages/LandingPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const SignupPage = lazy(() => import('@/pages/SignupPage'))
const TermsPage = lazy(() => import('@/pages/TermsPage'))
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'))
const DashboardPage = lazy(() => import('@/pages/DashboardPage'))
const StudyPage = lazy(() => import('@/pages/StudyPage'))
const ExamPage = lazy(() => import('@/pages/ExamPage'))
const QuizPage = lazy(() => import('@/pages/QuizPage'))
const FlashcardsPage = lazy(() => import('@/pages/FlashcardsPage'))
const AnalyticsPage = lazy(() => import('@/pages/AnalyticsPage'))
const ReviewPage = lazy(() => import('@/pages/ReviewPage'))
const ReviewDetailPage = lazy(() => import('@/pages/ReviewDetailPage'))
const SpeedRoundPage = lazy(() => import('@/pages/SpeedRoundPage'))
const ClinicalScenarioPage = lazy(() => import('@/pages/ClinicalScenarioPage'))
const FeedbackPage = lazy(() => import('@/pages/FeedbackPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const AppShell = lazy(() => import('@/components/layout/AppShell'))

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AchievementToast />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* Protected app routes (inside shell) */}
        <Route
          element={
            <ProtectedRoute>
              <AppShell />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/review/:topicId" element={<ReviewDetailPage />} />
          <Route path="/speed-round" element={<SpeedRoundPage />} />
          <Route path="/clinical-scenario" element={<ClinicalScenarioPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
