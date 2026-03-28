export interface DiagnosticCategoryScore {
  correct: number
  total: number
  percentage: number
}

export interface DiagnosticWeakArea {
  label: string
  misses: number
}

export interface DiagnosticResult {
  score: number
  total: number
  percentage: number
  readinessLabel: string
  readinessSummary: string
  categoryScores: Record<'I' | 'II' | 'III', DiagnosticCategoryScore>
  weakAreas: DiagnosticWeakArea[]
}

export interface DiagnosticLead {
  email: string
  examWindow: string
}

const DIAGNOSTIC_RESULT_KEY = 'praxisprep:diagnostic-result'
const DIAGNOSTIC_LEAD_KEY = 'praxisprep:diagnostic-lead'

function canUseStorage() {
  return typeof window !== 'undefined'
}

export function saveDiagnosticResult(result: DiagnosticResult) {
  if (!canUseStorage()) return
  window.sessionStorage.setItem(DIAGNOSTIC_RESULT_KEY, JSON.stringify(result))
}

export function readDiagnosticResult(): DiagnosticResult | null {
  if (!canUseStorage()) return null
  const raw = window.sessionStorage.getItem(DIAGNOSTIC_RESULT_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as DiagnosticResult
  } catch {
    return null
  }
}

export function saveDiagnosticLead(lead: DiagnosticLead) {
  if (!canUseStorage()) return
  window.localStorage.setItem(DIAGNOSTIC_LEAD_KEY, JSON.stringify(lead))
}

export function readDiagnosticLead(): DiagnosticLead | null {
  if (!canUseStorage()) return null
  const raw = window.localStorage.getItem(DIAGNOSTIC_LEAD_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as DiagnosticLead
  } catch {
    return null
  }
}
