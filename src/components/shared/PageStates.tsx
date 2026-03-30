import { AlertCircle } from 'lucide-react'
import Card from '@/components/shared/Card'

export function PageLoadingState({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
      <Card className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="font-body text-sm text-text-secondary">{message}</p>
      </Card>
    </div>
  )
}

export function PageErrorState({
  title,
  message,
}: {
  title: string
  message: string
}) {
  return (
    <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
      <Card className="py-12 text-center">
        <AlertCircle className="mx-auto h-10 w-10 text-error" />
        <h1 className="mt-4 font-display text-2xl text-text-primary">{title}</h1>
        <p className="mt-3 font-body text-sm text-text-secondary">{message}</p>
      </Card>
    </div>
  )
}

export function PageEmptyState({
  title,
  message,
}: {
  title: string
  message: string
}) {
  return (
    <div className="mx-auto max-w-3xl pb-24 lg:pb-0">
      <Card className="py-12 text-center">
        <h1 className="font-display text-2xl text-text-primary">{title}</h1>
        <p className="mt-3 font-body text-sm text-text-secondary">{message}</p>
      </Card>
    </div>
  )
}
