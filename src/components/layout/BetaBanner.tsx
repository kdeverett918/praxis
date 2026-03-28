import { BETA_MODE } from '@/lib/beta'
import { Beaker } from 'lucide-react'

export default function BetaBanner() {
  if (!BETA_MODE) return null

  return (
    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-secondary/20 to-primary/20 px-4 py-2 text-center font-body text-xs font-medium text-secondary">
      <Beaker className="h-3.5 w-3.5" />
      Beta Mode — All features unlocked. No login required.
    </div>
  )
}
