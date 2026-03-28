import LegalPageLayout from '@/components/legal/LegalPageLayout'
import Card from '@/components/shared/Card'

const LAST_UPDATED = 'March 27, 2026'

const PRIVACY_SECTIONS = [
  {
    title: 'Information We Collect',
    body: [
      'We may collect account details such as name, email address, authentication identifiers, and subscription status when those features are enabled.',
      'We also store product usage information such as study progress, streaks, quiz settings, and other preferences needed to run the learning experience.',
    ],
  },
  {
    title: 'Browser Storage and Beta Data',
    body: [
      'In beta or offline modes, PraxisPrep may store settings, progress, and gamification data in your browser using local storage.',
      'Local browser data stays on your device unless a connected backend feature sends it to our services.',
    ],
  },
  {
    title: 'How We Use Information',
    body: [
      'We use information to authenticate users, personalize study sessions, remember settings, improve the product, support customers, and process purchases if paid features are enabled.',
      'We may also use aggregated, non-identifying product data to understand feature usage and improve reliability.',
    ],
  },
  {
    title: 'Third-Party Processors',
    body: [
      'PraxisPrep may rely on third-party providers such as Supabase for authentication and data storage, Stripe for payments, and AI providers for rationale generation.',
      'Those services process data according to their own terms and privacy notices.',
    ],
  },
  {
    title: 'Sharing',
    body: [
      'We do not sell your personal information.',
      'We may share data with service providers that help us operate the product, comply with law, prevent abuse, or complete transactions you request.',
    ],
  },
  {
    title: 'Retention',
    body: [
      'We keep data only as long as needed to provide the service, comply with legal obligations, resolve disputes, or enforce our agreements.',
      'Locally stored preferences remain in your browser until you clear them or reset them from settings.',
    ],
  },
  {
    title: 'Your Choices',
    body: [
      'You can update stored preferences and reset local progress from the settings page.',
      'If you use a connected account, you may also contact us to request updates or deletion where applicable.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'Questions about privacy can be sent to hello@praxisprep.io.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      summary="This page explains what PraxisPrep stores, how that information is used, and where beta-mode browser storage fits into the current product."
      updatedOn={LAST_UPDATED}
    >
      {PRIVACY_SECTIONS.map((section) => (
        <Card key={section.title} className="p-0">
          <div className="border-b border-border px-6 py-5">
            <h2 className="font-display text-2xl text-text-primary">{section.title}</h2>
          </div>
          <div className="space-y-4 px-6 py-6">
            {section.body.map((paragraph) => (
              <p key={paragraph} className="font-body text-sm leading-7 text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      ))}
    </LegalPageLayout>
  )
}
