export const FUNNEL_HERO_STATS = [
  { value: 450, suffix: '+', label: 'Original practice questions' },
  { value: 132, suffix: '', label: 'Questions in each exam sim' },
  { value: 6, suffix: '', label: 'Months of access on paid plans' },
  { value: 3, suffix: '', label: 'Content categories covered' },
] as const

export const FUNNEL_PAIN_POINTS = [
  {
    title: 'You are studying between clinic, class, and paperwork',
    description:
      'You do not need another giant course. You need a focused system you can open for 30 minutes and make real progress with.',
  },
  {
    title: 'Most Praxis prep feels fragmented',
    description:
      'Students bounce between notes, free quizlets, PDFs, and practice tests without a clear next move. That kills consistency.',
  },
  {
    title: 'Premium prep stacks get expensive fast',
    description:
      'Official prep, books, and subscription-style banks can pile up quickly. A leaner one-time offer has to feel obviously worth it.',
  },
] as const

export const FUNNEL_PILLARS = [
  {
    title: 'Start with a diagnostic, not guesswork',
    description:
      'The funnel begins by showing students where they are weak, then moves them into the right study path instead of overwhelming them.',
  },
  {
    title: 'Sell a pass-focused study system',
    description:
      'The core paid offer is a one-time Praxis Pass Pack: focused practice, exam simulations, and a practical study flow built for externship life.',
  },
  {
    title: 'Use the free tier as a trial, not the product',
    description:
      'Free access proves the experience and captures intent. Paid access unlocks the depth, structure, and speed students actually need near test day.',
  },
] as const

export const FUNNEL_FEATURES = [
  {
    title: 'Adaptive practice flow',
    description:
      'Practice sessions keep momentum high and make it obvious what to review next, instead of dropping students into a random pile of questions.',
  },
  {
    title: 'Realistic exam simulations',
    description:
      'Students can rehearse the actual pace and fatigue of a 132-question sitting before they pay the real ETS testing fee.',
  },
  {
    title: 'Targeted rationales',
    description:
      'The premium upsell adds deeper AI tutoring so anxious or returning test takers can understand the clinical reasoning behind misses.',
  },
  {
    title: 'Study tracks that fit exam timing',
    description:
      'The funnel copy and offer are organized around 30-, 60-, and 90-day preparation windows so the next step always feels clear.',
  },
] as const

export const FUNNEL_WHO_ITS_FOR = [
  {
    title: 'Externship-heavy grad students',
    description:
      'You need short, productive sessions and a plan that respects real SLP program life.',
  },
  {
    title: 'Retakers who need a confidence reset',
    description:
      'You do not need generic motivation. You need to diagnose weak areas quickly and drill with purpose.',
  },
  {
    title: 'Budget-conscious students',
    description:
      'A one-time paid offer removes subscription fatigue and gives you a cleaner purchase decision.',
  },
] as const

export const FUNNEL_STEPS = [
  {
    step: '01',
    title: 'Take the free diagnostic',
    description:
      'Get a fast read on readiness across all three Praxis content categories before committing money or time.',
  },
  {
    step: '02',
    title: 'Choose the right path',
    description:
      'Free account if you want to explore. Pass Pack if your score or exam date says you need structure now.',
  },
  {
    step: '03',
    title: 'Study by weak area',
    description:
      'Use practice, review, flashcards, and exam sims in the order that moves a student toward a passing score fastest.',
  },
] as const

export const FUNNEL_OFFER_PATHS = [
  {
    title: 'Free Account',
    price: '$0',
    subtitle: 'Trial the experience',
    cta: 'Create Free Account',
    href: '/signup',
    features: [
      'Take the diagnostic',
      'Explore the interface',
      'Use free daily practice',
      'See whether the workflow fits',
    ],
  },
  {
    title: 'Praxis Pass Pack',
    price: '$49',
    subtitle: 'One-time core offer',
    cta: 'See the Pass Pack',
    href: '/pro?tier=pro',
    features: [
      '6 months of access',
      'Unlimited practice and exam sims',
      'Practice-first workflow',
      'Built for 30- to 60-minute sessions',
    ],
    featured: true,
  },
  {
    title: 'Pass Pack + AI Tutor',
    price: '$69',
    subtitle: 'Higher-intent upgrade',
    cta: 'Choose AI Tutor',
    href: '/pro?tier=pro_ai',
    features: [
      'Everything in Pass Pack',
      'Deeper rationale support',
      'Best for retakers or anxious test takers',
      'Positioned as the premium confidence layer',
    ],
  },
] as const

export const FUNNEL_COMPARISON_ROWS = [
  {
    label: 'Pricing style',
    passPack: 'One-time payment',
    legacy: 'Often multiple purchases',
    subscription: 'Usually time-based access',
  },
  {
    label: 'Best fit',
    passPack: 'Students who need a focused practice system fast',
    legacy: 'Students who want a broad textbook-style review',
    subscription: 'Students who want a very large question bank',
  },
  {
    label: 'Study rhythm',
    passPack: 'Built for short daily sessions',
    legacy: 'Heavier reading and self-structuring',
    subscription: 'Practice-heavy, but still needs student discipline',
  },
  {
    label: 'Founder voice',
    passPack: 'Built by a CCC-SLP developer',
    legacy: 'Publisher or training-company voice',
    subscription: 'Platform-first voice',
  },
  {
    label: 'Funnel entry point',
    passPack: 'Free diagnostic to guided offer',
    legacy: 'Usually product-first purchase',
    subscription: 'Free trial or direct plan selection',
  },
] as const

export const FUNNEL_FAQS = [
  {
    question: 'What is the best first offer for PraxisPrep?',
    answer:
      'The strongest first paid offer is a one-time Praxis Pass Pack at $49. It fits the finite nature of Praxis studying better than a subscription and keeps the purchase decision simple for grad students.',
  },
  {
    question: 'Why keep a free option at all?',
    answer:
      'Because the free tier is the trial mechanism. It lowers acquisition friction, makes ads more clickable, and gives the paid offer a clear contrast without giving away the whole product.',
  },
  {
    question: 'How should this be positioned against official ETS prep?',
    answer:
      'Not as a replacement for official materials. Position it as the practical, student-budget practice layer that helps candidates move from uncertainty to repetition and test-day confidence.',
  },
  {
    question: 'Who is most likely to buy?',
    answer:
      'Students within roughly 30 to 60 days of test day, retakers, and anyone who feels behind and wants a clear next-step study system instead of another pile of materials.',
  },
  {
    question: 'Why add the AI Tutor tier?',
    answer:
      'It creates a clean premium upsell for higher-intent buyers without forcing every customer to subsidize AI usage. That protects margins while raising average order value.',
  },
  {
    question: 'What needs to happen next for billing and gating?',
    answer:
      'The funnel can launch now, but the actual paid unlock path should be completed by wiring Stripe checkout and reconciling the local question IDs with the Supabase schema before hard paywalls are enforced.',
  },
] as const

export const FUNNEL_RESEARCH_NOTES = [
  'ETS currently sells a Speech-Language Pathology Praxis prep course for $199 and interactive practice tests for $24.95 each.',
  'TrueLearn currently markets a Speech Language Pathology Praxis bank with time-based plans and a free trial.',
  'TherapyEd currently sells an SLP study guide and an SLP study pack, so PraxisPrep should not compete only on raw content volume.',
  'The sharper value proposition is a focused, practice-first, clinician-built study system at a budget-friendly one-time price.',
] as const
