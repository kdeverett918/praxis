import LegalPageLayout from '@/components/legal/LegalPageLayout'
import Card from '@/components/shared/Card'

const LAST_UPDATED = 'March 27, 2026'

const TERMS_SECTIONS = [
  {
    number: 1,
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using SLP Study Hub, you agree to these Terms and Conditions and to our Privacy Policy.',
      'If you do not agree, do not use the product.',
    ],
  },
  {
    number: 2,
    title: 'Educational Use Only',
    paragraphs: [
      'SLP Study Hub is an educational study platform for speech-language pathology exam preparation.',
      'It is not medical advice, therapy, legal advice, or a substitute for official ETS exam materials.',
    ],
  },
  {
    number: 3,
    title: 'Accounts and Access',
    paragraphs: [
      'You are responsible for maintaining accurate account information and for activity that occurs under your account.',
      'We may suspend or terminate access for misuse, fraud, scraping, or conduct that harms the service or other users.',
    ],
  },
  {
    number: 4,
    title: 'Acceptable Use',
    paragraphs: [
      'You may not copy, resell, reverse engineer, scrape, or use the platform to create competing products or mass-export content.',
      'You may not upload unlawful, infringing, or harmful material or attempt to bypass access controls.',
    ],
  },
  {
    number: 5,
    title: 'Original Educational Content',
    paragraphs: [
      'All practice questions, scenarios, rationales, and study materials in SLP Study Hub are intended to be original educational content.',
      'You may use them for your personal learning, but you may not republish or redistribute them without written permission.',
    ],
  },
  {
    number: 6,
    title: 'Third-Party Services',
    paragraphs: [
      'Certain features may rely on third-party services such as Supabase, Stripe, or AI providers. Their availability may change without notice.',
      'Your use of those services may also be subject to their separate terms and privacy policies.',
    ],
  },
  {
    number: 7,
    title: 'Subscriptions and Payments',
    paragraphs: [
      'If paid plans are offered, pricing, billing terms, and refund policies will be presented before purchase.',
      'We may change pricing or plan structure prospectively.',
    ],
  },
  {
    number: 8,
    title: 'Beta Features',
    paragraphs: [
      'Some features may be marked beta or may operate with mock, local, or partially connected data.',
      'Beta features are provided as-is and may change, break, or be removed.',
    ],
  },
  {
    number: 9,
    title: 'Intellectual Property',
    paragraphs: [
      'SLP Study Hub, its design, source code, copy, original study content, and branding are protected by applicable intellectual property laws.',
      'You receive a limited, non-exclusive, revocable license to use the service for its intended purpose.',
    ],
  },
  {
    number: 10,
    title: 'User Feedback',
    paragraphs: [
      'If you send suggestions, feedback, or bug reports, you allow us to use them to improve the service without compensation.',
    ],
  },
  {
    number: 11,
    title: 'No Guarantee of Results',
    paragraphs: [
      'Using SLP Study Hub does not guarantee a passing score on any exam, certification, or licensure process.',
      'Study outcomes depend on many factors outside our control.',
    ],
  },
  {
    number: 12,
    title: 'Disclaimer of Warranties',
    paragraphs: [
      'The service is provided on an as-is and as-available basis to the maximum extent permitted by law.',
      'We do not warrant uninterrupted availability, perfect accuracy, or fitness for a particular purpose.',
    ],
  },
  {
    number: 13,
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, SLP Study Hub and Tech SLP Studio will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the service.',
    ],
  },
  {
    number: 14,
    title: 'Indemnification',
    paragraphs: [
      'You agree to indemnify and hold harmless SLP Study Hub and Tech SLP Studio from claims arising out of your misuse of the service or your violation of these terms.',
    ],
  },
  {
    number: 15,
    title: 'Changes to These Terms',
    paragraphs: [
      'We may update these terms from time to time. Continued use after updates means you accept the revised version.',
    ],
  },
  {
    number: 16,
    title: 'Contact',
    paragraphs: [
      'Questions about these Terms and Conditions can be sent to kristine@slpstudyhub.com.',
    ],
  },
  {
    number: 17,
    title: 'Legal Considerations',
    paragraphs: [
      'This product is not affiliated with, endorsed by, or sponsored by ETS.',
      '"Praxis" is a registered trademark of Educational Testing Service. Any use of the term is purely nominative and descriptive.',
    ],
    bullets: [
      'Question content must be 100% original. SLP Study Hub does not reproduce ETS questions.',
      'The ASHA Code of Ethics may be referenced with attribution because it is public professional guidance.',
      'IDEA, Medicare, and Medicaid rules are public law and may be summarized or cited as such.',
      'The IDDSI framework may be referenced with attribution in accordance with its published terms.',
      'Named assessments and treatment approaches may be referenced factually, but test forms, manuals, scoring rubrics, and proprietary materials may not be reproduced.',
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Terms"
      title="Terms & Conditions"
      summary="These terms govern access to SLP Study Hub, including how the product may be used, what legal protections apply, and how we handle exam-prep content that references public standards or third-party marks."
      updatedOn={LAST_UPDATED}
    >
      {TERMS_SECTIONS.map((section) => (
        <Card key={section.number} className="p-0">
          <div className="border-b border-border px-6 py-5">
            <h2 className="font-display text-2xl text-text-primary">
              {section.number}. {section.title}
            </h2>
          </div>
          <div className="space-y-4 px-6 py-6">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-body text-sm leading-7 text-text-secondary">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-3 font-body text-sm leading-7 text-text-secondary">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      ))}
    </LegalPageLayout>
  )
}
