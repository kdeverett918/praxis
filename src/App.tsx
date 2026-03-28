import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const LandingPage = lazy(() => import('@/pages/LandingPage'))

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
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  )
}
