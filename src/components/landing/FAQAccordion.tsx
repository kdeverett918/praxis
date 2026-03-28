import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Card from '@/components/shared/Card'

const FAQS = [
  {
    question: 'Who is PraxisPrep for?',
    answer:
      'It is built for SLP graduate students and recent grads preparing for Praxis 5331 who want a tighter, more guided study flow than a static book gives them.',
  },
  {
    question: 'How is this different from buying a study guide?',
    answer:
      'The product is designed around repeated practice, explanations, full-length exam simulation, and a mobile-first experience. The funnel leads with a diagnostic so students see their weak spots before they buy.',
  },
  {
    question: 'How long do I get access?',
    answer:
      'The Pass Pack is positioned as a 6-month access window, which covers the normal Praxis study cycle without creating subscription fatigue.',
  },
  {
    question: 'Is PraxisPrep affiliated with ETS?',
    answer:
      'No. PraxisPrep is an independent prep platform. All questions, scenarios, and explanations on the site are original educational content.',
  },
  {
    question: 'What should I do if I am not ready to buy yet?',
    answer:
      'Take the free diagnostic quiz first. It gives you a readiness signal, highlights the domains you are missing, and tells you what to study next.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="space-y-4">
      {FAQS.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <Card key={item.question} className="p-0">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-text-primary text-lg">{item.question}</span>
              <ChevronDown
                className={`text-text-muted h-5 w-5 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-border border-t px-5 py-4 sm:px-6">
                <p className="font-body text-text-secondary text-sm leading-7">{item.answer}</p>
              </div>
            )}
          </Card>
        )
      })}
    </div>
  )
}
