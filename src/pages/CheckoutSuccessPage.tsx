import { Link } from 'react-router-dom'
import { CheckCircle2, GraduationCap, Sparkles } from 'lucide-react'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-background text-text-primary min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Purchase complete
          </Badge>
          <h1 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
            You are in. Now turn that purchase into momentum.
          </h1>
          <p className="font-body text-text-secondary mx-auto mt-6 max-w-2xl text-lg leading-8">
            The next step is simple: create your account or log back in, start a focused study
            session, and use the diagnostic result as your first priority list.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: 'Create or confirm your account',
              copy: 'Use the same email address you entered at checkout so support can match your access quickly.',
            },
            {
              icon: Sparkles,
              title: 'Start with your weak area',
              copy: 'Do not randomize everything on day one. Begin with the domain the diagnostic flagged first.',
            },
            {
              icon: CheckCircle2,
              title: 'Schedule your first sim',
              copy: 'Book your first full exam simulation after your first two focused practice blocks.',
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="bg-secondary/10 text-secondary flex h-12 w-12 items-center justify-center rounded-2xl">
                <item.icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-text-primary mt-5 text-2xl">{item.title}</h2>
              <p className="font-body text-text-secondary mt-3 text-sm leading-7">{item.copy}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/signup">
            <Button variant="primary" size="lg">
              Create your account
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg">
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
