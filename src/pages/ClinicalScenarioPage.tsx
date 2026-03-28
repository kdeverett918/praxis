import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import {
  Stethoscope, ArrowRight, RotateCcw, Home, CheckCircle2,
  XCircle, ChevronRight, Star,
} from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import { useGamificationStore } from '@/stores/gamificationStore'

interface DecisionOption {
  text: string
  points: number
  feedback: string
  nextNode: string | null
}

interface ScenarioNode {
  id: string
  narrative: string
  question: string
  options: DecisionOption[]
}

interface Scenario {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  maxPoints: number
  nodes: ScenarioNode[]
}

const SCENARIOS: Scenario[] = [
  {
    id: 'dysphagia-acute',
    title: 'Acute Care Dysphagia',
    subtitle: 'Stroke Patient Evaluation',
    description:
      'A 72-year-old male was admitted after an acute left MCA stroke. Nursing reports coughing during meals. You are consulted for a swallowing evaluation.',
    category: 'Dysphagia',
    maxPoints: 50,
    nodes: [
      {
        id: 'node1',
        narrative:
          'You arrive at the patient\'s bedside. He is alert but has right-sided hemiplegia and mild dysarthria. His oxygen saturation is 94% on room air. The nurse mentions he coughed several times during his breakfast of scrambled eggs and thin liquids.',
        question: 'What is your first course of action?',
        options: [
          {
            text: 'Begin a clinical swallow evaluation (CSE) at bedside',
            points: 10,
            feedback:
              'Correct. A bedside clinical swallow evaluation is the appropriate first step to assess oral motor function, cognition, and swallowing safety before considering instrumental assessment.',
            nextNode: 'node2',
          },
          {
            text: 'Immediately order an MBSS (Modified Barium Swallow Study)',
            points: 3,
            feedback:
              'While an MBSS provides valuable information, jumping to instrumental assessment without a bedside evaluation first skips critical screening steps and may not be immediately available.',
            nextNode: 'node2',
          },
          {
            text: 'Recommend NPO until further evaluation',
            points: 6,
            feedback:
              'Placing the patient NPO is cautious and protects the airway, but a clinical swallow evaluation should be conducted promptly to guide diet recommendations rather than keeping the patient without nutrition indefinitely.',
            nextNode: 'node2',
          },
          {
            text: 'Trial thin liquids to observe swallowing',
            points: 0,
            feedback:
              'Starting with thin liquids when coughing has already been reported is unsafe. Thin liquids are the most aspirated consistency. A systematic evaluation should be conducted first.',
            nextNode: 'node2',
          },
        ],
      },
      {
        id: 'node2',
        narrative:
          'During your CSE, you note: reduced lingual range of motion on the right, delayed pharyngeal swallow initiation (~3 seconds), wet vocal quality after thin liquid trials, and coughing with thin liquids. He tolerated puree textures without overt signs of aspiration.',
        question: 'Based on your CSE findings, what do you recommend?',
        options: [
          {
            text: 'Recommend MBSS to fully evaluate pharyngeal phase and aspiration risk',
            points: 10,
            feedback:
              'Excellent. The wet vocal quality and delayed swallow initiation suggest possible silent aspiration. An MBSS will visualize the pharyngeal phase and help determine the safest diet.',
            nextNode: 'node3',
          },
          {
            text: 'Recommend IDDSI Level 4 (pureed) diet with IDDSI Level 2 (mildly thick) liquids',
            points: 6,
            feedback:
              'This is a reasonable conservative recommendation, but without instrumental assessment, you cannot confirm whether aspiration is occurring on thicker consistencies or rule out silent aspiration.',
            nextNode: 'node3',
          },
          {
            text: 'Recommend a regular diet with thin liquids and chin tuck strategy',
            points: 0,
            feedback:
              'A regular diet with thin liquids is not appropriate given the clinical findings. The patient showed clear signs of difficulty with thin liquids, and a chin tuck alone may not be sufficient.',
            nextNode: 'node3',
          },
          {
            text: 'Recommend a FEES evaluation instead',
            points: 8,
            feedback:
              'FEES is also an appropriate instrumental option. It provides excellent visualization of the pharyngeal phase and can be done at bedside, which is advantageous for this patient. Both MBSS and FEES are valid choices.',
            nextNode: 'node3',
          },
        ],
      },
      {
        id: 'node3',
        narrative:
          'The MBSS reveals: penetration to the level of the true vocal folds with thin liquids (PAS score 5), trace aspiration with nectar-thick liquids during sequential swallows (PAS score 6), and adequate airway protection with honey-thick liquids and puree solids.',
        question: 'What diet recommendation is most appropriate?',
        options: [
          {
            text: 'IDDSI Level 4 (pureed) foods with IDDSI Level 3 (moderately thick/liquidised) liquids',
            points: 10,
            feedback:
              'Correct. The MBSS showed aspiration with thin and nectar-thick liquids but safe swallows with honey-thick liquids and puree. This IDDSI recommendation matches the instrumental findings.',
            nextNode: 'node4',
          },
          {
            text: 'NPO with nasogastric tube placement',
            points: 2,
            feedback:
              'NPO is overly restrictive. The patient demonstrated safe swallowing with certain consistencies. Oral intake should be maintained at the safest level to support nutrition and quality of life.',
            nextNode: 'node4',
          },
          {
            text: 'IDDSI Level 6 (soft & bite-sized) with IDDSI Level 0 (thin liquids) and chin tuck',
            points: 0,
            feedback:
              'Thin liquids are contraindicated — the MBSS showed penetration/aspiration. Compensatory strategies alone cannot reliably prevent aspiration with thin liquids in this patient.',
            nextNode: 'node4',
          },
          {
            text: 'IDDSI Level 5 (minced & moist) with IDDSI Level 2 (mildly thick) liquids',
            points: 5,
            feedback:
              'Close, but mildly thick (IDDSI 2) still showed trace aspiration during sequential swallows. A moderately thick (IDDSI 3) liquid would be more appropriate based on the MBSS findings.',
            nextNode: 'node4',
          },
        ],
      },
      {
        id: 'node4',
        narrative:
          'Two days later, the patient\'s wife asks you: "When will he be able to eat normal food again? He is miserable with the thick liquids." The patient appears frustrated and is eating less than 50% of his meals.',
        question: 'How do you address this situation?',
        options: [
          {
            text: 'Explain the aspiration risk, validate their feelings, discuss the rehabilitation plan and timeline for re-evaluation',
            points: 10,
            feedback:
              'Excellent approach. Patient and family education with empathy is essential. Discussing the plan for re-evaluation gives hope while maintaining safety. This supports both clinical safety and patient-centered care.',
            nextNode: null,
          },
          {
            text: 'Upgrade the diet to include thin liquids since he is unhappy',
            points: 0,
            feedback:
              'Patient satisfaction is important but must be balanced with safety. Upgrading to thin liquids against instrumental findings could result in aspiration pneumonia. There are better ways to address quality of life.',
            nextNode: null,
          },
          {
            text: 'Request a repeat MBSS immediately',
            points: 5,
            feedback:
              'A repeat MBSS this soon (2 days) is unlikely to show significant improvement. Re-evaluation is typically done after a period of rehabilitation. Address the patient\'s concerns first.',
            nextNode: null,
          },
          {
            text: 'Tell the wife this is how it has to be and not to question the recommendation',
            points: 0,
            feedback:
              'This dismissive approach damages the therapeutic relationship and violates patient-centered care principles. Families deserve education, empathy, and inclusion in the care process.',
            nextNode: null,
          },
        ],
      },
    ],
  },
  {
    id: 'peds-language',
    title: 'Pediatric Language',
    subtitle: 'Late Talker Evaluation',
    description:
      'An 18-month-old bilingual (Spanish-English) child is referred to your outpatient clinic by the pediatrician for "not talking yet." Parents are concerned.',
    category: 'Language',
    maxPoints: 50,
    nodes: [
      {
        id: 'node1',
        narrative:
          'The parents report that Marco produces about 5 words total — 3 in Spanish ("mama," "agua," "no") and 2 in English ("bye," "uh-oh"). He uses pointing and reaching to communicate. He understands simple commands in both languages. The parents speak primarily Spanish at home but use English at daycare.',
        question: 'What is the most important first step in your assessment?',
        options: [
          {
            text: 'Gather a comprehensive case history including developmental milestones, bilingual language exposure, and family history',
            points: 10,
            feedback:
              'Correct. A thorough case history is essential, especially for bilingual children. Understanding language exposure patterns, developmental milestones, and family history helps differentiate a language difference from a disorder.',
            nextNode: 'node2',
          },
          {
            text: 'Administer a standardized English-only vocabulary test',
            points: 0,
            feedback:
              'Assessing only in English would underrepresent this child\'s abilities. Bilingual children must be assessed in both languages. A single-language test would be biased and could lead to overidentification.',
            nextNode: 'node2',
          },
          {
            text: 'Recommend speech therapy immediately — 5 words at 18 months is significantly delayed',
            points: 2,
            feedback:
              'While 5 words at 18 months is below the typical 50-word benchmark, you must count words across BOTH languages (conceptual vocabulary) and complete a full assessment before making eligibility decisions.',
            nextNode: 'node2',
          },
          {
            text: 'Tell the parents to speak only English at home to reduce confusion',
            points: 0,
            feedback:
              'This is a harmful myth. Bilingualism does NOT cause language delay. Advising parents to drop their native language can damage family communication, cultural identity, and the child\'s overall language development.',
            nextNode: 'node2',
          },
        ],
      },
      {
        id: 'node2',
        narrative:
          'Your case history reveals: normal birth history, sitting at 6 months, walking at 13 months. Hearing screening passed at birth. Babbling noted at 7 months. Older sibling was also a "late talker" who caught up by age 3. Spanish is used ~70% of the time, English ~30%. Marco uses about 8 gestures (pointing, showing, waving, etc.).',
        question: 'Which assessment approach is most appropriate?',
        options: [
          {
            text: 'Use a conceptual vocabulary approach — count total concepts across both languages, use parent report tools in both languages (e.g., bilingual CDI)',
            points: 10,
            feedback:
              'Excellent. A conceptual scoring approach counts each concept once regardless of language, giving the most accurate picture. Parent report tools like the MacArthur-Bates CDI have bilingual adaptations that are culturally appropriate.',
            nextNode: 'node3',
          },
          {
            text: 'Use standardized English norm-referenced tests with a Spanish interpreter present',
            points: 3,
            feedback:
              'Using English norm-referenced tests with an interpreter is insufficient. The norms were established on English-speaking monolinguals and do not account for bilingual development patterns. Interpreting does not make a test bilingual.',
            nextNode: 'node3',
          },
          {
            text: 'Conduct a play-based language sample in English only since the child attends English daycare',
            points: 4,
            feedback:
              'A language sample is a good idea, but it must be done in both languages (or at minimum in the dominant language, Spanish). English-only sampling underrepresents a bilingual child\'s abilities.',
            nextNode: 'node3',
          },
          {
            text: 'Defer assessment for 6 months — many late talkers catch up',
            points: 2,
            feedback:
              'While some late talkers do catch up, a "wait and see" approach at 18 months is not best practice. Early intervention is more effective, and the assessment itself can determine if monitoring vs. therapy is appropriate.',
            nextNode: 'node3',
          },
        ],
      },
      {
        id: 'node3',
        narrative:
          'Your assessment reveals: conceptual vocabulary of ~12 words across both languages (below the 10th percentile for 18 months). Receptive language is within functional limits in Spanish. He demonstrates symbolic play (feeding a doll, pretending to talk on phone). Gesture use is age-appropriate. No red flags for autism.',
        question: 'What is your clinical decision?',
        options: [
          {
            text: 'Qualify for early intervention services with a family-centered, bilingual approach targeting both languages',
            points: 10,
            feedback:
              'Correct. With expressive vocabulary below the 10th percentile despite adequate receptive skills, early intervention is warranted. A bilingual approach supports development in both languages and respects family culture.',
            nextNode: 'node4',
          },
          {
            text: 'Qualify for English-only therapy since that is the language of education',
            points: 3,
            feedback:
              'English-only therapy ignores the child\'s dominant language and home environment. Research shows bilingual intervention is more effective and does not slow progress. ASHA supports intervention in both languages.',
            nextNode: 'node4',
          },
          {
            text: 'Recommend monitoring only — he has good receptive language and gestures',
            points: 5,
            feedback:
              'The strong receptive skills and gesture use are positive prognostic indicators, but the expressive vocabulary is significantly below expectations. A combination of direct services and monitoring is more appropriate than monitoring alone.',
            nextNode: 'node4',
          },
          {
            text: 'Refer for an autism evaluation before making any recommendations',
            points: 2,
            feedback:
              'You noted no red flags for autism, and the child demonstrates symbolic play, joint attention, and gestures. An autism evaluation is not indicated at this time. Delaying intervention for unnecessary referrals is not appropriate.',
            nextNode: 'node4',
          },
        ],
      },
      {
        id: 'node4',
        narrative:
          'The parents express concern: "My mother-in-law says we should stop speaking Spanish at home. She thinks that\'s why Marco isn\'t talking." The father looks unsure.',
        question: 'How do you counsel this family?',
        options: [
          {
            text: 'Educate that bilingualism does NOT cause language delays, encourage maintaining Spanish at home, and explain that strong L1 skills support L2 acquisition',
            points: 10,
            feedback:
              'Perfect response. Research clearly shows bilingualism does not cause language delay. Supporting the home language strengthens the child\'s overall linguistic foundation and family connections. This is evidence-based, culturally responsive counseling.',
            nextNode: 'node5',
          },
          {
            text: 'Suggest reducing Spanish to 50/50 to give English more exposure',
            points: 3,
            feedback:
              'Artificially manipulating language exposure is not recommended. The home language should be maintained naturally. The focus should be on enriching communication in both languages, not restricting either one.',
            nextNode: 'node5',
          },
          {
            text: 'Agree that focusing on one language might help initially',
            points: 0,
            feedback:
              'This reinforces a harmful myth. There is no evidence that dropping a language helps a child with language delay. This advice can damage family dynamics and the child\'s cultural identity.',
            nextNode: 'node5',
          },
          {
            text: 'Say it is not your place to comment on family language choices',
            points: 2,
            feedback:
              'As the SLP, it IS your place to provide evidence-based guidance about language development. Failing to address this misconception is a missed opportunity to support the family and the child\'s development.',
            nextNode: 'node5',
          },
        ],
      },
      {
        id: 'node5',
        narrative:
          'You begin early intervention services. After 3 months, Marco\'s conceptual vocabulary has grown to 45 words. His parents report he is combining two words in Spanish ("mas agua," "mama ven"). He is beginning to combine in English as well ("more juice").',
        question: 'What is your recommended next step?',
        options: [
          {
            text: 'Continue services with updated goals reflecting his progress; shift focus to word combinations and early morphology in both languages',
            points: 10,
            feedback:
              'Excellent. Marco is making great progress but has not yet caught up to age expectations. Updating goals to target emerging skills (word combinations, early morphology) while continuing bilingual support is best practice.',
            nextNode: null,
          },
          {
            text: 'Discharge from services — he is making excellent progress',
            points: 3,
            feedback:
              'While progress is encouraging, 45 words at 21 months is still below age expectations (should be approaching 200+ words). Premature discharge could lead to regression or widening gaps.',
            nextNode: null,
          },
          {
            text: 'Increase therapy to 3x per week to accelerate progress',
            points: 5,
            feedback:
              'Increasing frequency is worth considering, but the current rate of progress is strong. The focus should be on updating goals and ensuring parent coaching is effective. More is not always better if family burden increases.',
            nextNode: null,
          },
          {
            text: 'Transition to English-only services since he will start preschool soon',
            points: 0,
            feedback:
              'Dropping Spanish from therapy as preschool approaches goes against evidence-based practice. Bilingual support should continue. The home language remains critical for family communication and overall language development.',
            nextNode: null,
          },
        ],
      },
    ],
  },
  {
    id: 'fluency-school',
    title: 'School-Age Fluency',
    subtitle: 'Stuttering Assessment',
    description:
      'A 9-year-old boy, Jake, is referred by his teacher. She reports he has been "getting stuck on words" more frequently and has become noticeably quieter in class over the past semester.',
    category: 'Fluency',
    maxPoints: 50,
    nodes: [
      {
        id: 'node1',
        narrative:
          'You meet Jake in the school therapy room. He makes limited eye contact and answers questions with short phrases. During your conversation, you observe sound repetitions ("b-b-b-ball"), prolongations ("ssssometimes"), and occasional blocks with visible tension in his jaw. He says, "I hate reading out loud."',
        question: 'What assessment tools and approaches should you use?',
        options: [
          {
            text: 'Use a comprehensive approach: speech samples in multiple contexts, stuttering severity instrument (SSI-4), and assess affective/cognitive components (e.g., OASES, CAT-R)',
            points: 10,
            feedback:
              'Excellent. A comprehensive fluency assessment includes both the observable speech behaviors AND the speaker\'s attitudes, emotions, and quality of life impact. The SSI-4 quantifies severity while the OASES or CAT-R captures the hidden aspects of stuttering.',
            nextNode: 'node2',
          },
          {
            text: 'Count disfluencies during a 5-minute reading passage',
            points: 3,
            feedback:
              'Counting disfluencies in a single context provides limited information. Stuttering varies across speaking situations, and you would miss the affective and cognitive components that are critical at this age.',
            nextNode: 'node2',
          },
          {
            text: 'Administer an articulation assessment — the repetitions might be phonological',
            points: 1,
            feedback:
              'The pattern described (sound repetitions, prolongations, blocks with tension) is clearly consistent with stuttering, not a phonological disorder. Sound repetitions in stuttering differ from phonological processes in their nature and pattern.',
            nextNode: 'node2',
          },
          {
            text: 'Ask the teacher to video record him in class so you can assess natural speech',
            points: 7,
            feedback:
              'Observing in natural contexts is valuable, but you should combine this with formal assessment tools. Video recording alone does not capture the affective component, which is significant for Jake given his comment about hating reading aloud.',
            nextNode: 'node2',
          },
        ],
      },
      {
        id: 'node2',
        narrative:
          'Your assessment reveals: SSI-4 score indicates moderate stuttering (18 percentile). His stuttering frequency is 11% syllables stuttered in conversation and 18% in reading. The CAT-R (Communication Attitude Test - Revised) shows highly negative communication attitudes. Jake reports avoiding speaking in class, not raising his hand, and feeling "stupid" when he stutters.',
        question: 'How do you interpret these findings?',
        options: [
          {
            text: 'The affective impact is disproportionately high relative to the moderate severity — both the stuttering behaviors AND the negative attitudes/avoidance need to be treatment targets',
            points: 10,
            feedback:
              'Excellent clinical reasoning. The moderate severity on the SSI-4 tells only part of the story. Jake\'s high negative attitudes, avoidance behaviors, and self-perception ("feeling stupid") indicate significant covert features that may be MORE impactful than the overt stuttering.',
            nextNode: 'node3',
          },
          {
            text: 'Moderate stuttering is not severe enough to qualify for school services',
            points: 0,
            feedback:
              'Severity on the SSI-4 alone should not determine eligibility. The significant impact on educational participation (avoiding speaking in class, not raising his hand) clearly demonstrates adverse educational impact.',
            nextNode: 'node3',
          },
          {
            text: 'Focus on reducing the stuttering frequency first — once he stutters less, the negative attitudes will resolve',
            points: 3,
            feedback:
              'Research shows that reducing stuttering frequency alone does not automatically resolve negative attitudes. In fact, only targeting fluency can increase pressure and worsen avoidance. Both must be addressed simultaneously.',
            nextNode: 'node3',
          },
          {
            text: 'The reading difficulty suggests he may also have a reading disorder — refer for a learning disability evaluation',
            points: 2,
            feedback:
              'The higher stuttering rate during reading is typical of stuttering (increased linguistic demands, performance pressure) and does not suggest a reading disorder. A referral is not indicated based on this alone.',
            nextNode: 'node3',
          },
        ],
      },
      {
        id: 'node3',
        narrative:
          'You determine Jake qualifies for services. His parents attend the IEP meeting. His father says: "Just teach him to slow down and think about what he wants to say. That\'s what my dad told me to do — and I grew out of it."',
        question: 'How do you respond?',
        options: [
          {
            text: 'Validate the father\'s experience, gently educate about stuttering as a neurological condition, and explain that "slowing down" and "thinking" can actually increase tension and avoidance',
            points: 10,
            feedback:
              'Perfect. The father\'s experience is real and should be acknowledged, but the advice to "slow down" often increases struggle and shame. Educating the family that stuttering has a neurological basis removes blame and sets the stage for effective treatment.',
            nextNode: 'node4',
          },
          {
            text: 'Agree that slowing down is a good strategy and incorporate it into the IEP goals',
            points: 0,
            feedback:
              'Telling a person who stutters to "slow down" implies the stuttering is their fault and within their control. This can increase tension, shame, and avoidance. Evidence-based treatment takes a very different approach.',
            nextNode: 'node4',
          },
          {
            text: 'Explain that the father\'s stuttering likely resolved due to neurological maturation, not the strategy itself',
            points: 7,
            feedback:
              'This is factually accurate — natural recovery is neurologically mediated, not a result of "slowing down." However, be careful to validate the father\'s experience first. The delivery matters as much as the content.',
            nextNode: 'node4',
          },
          {
            text: 'Tell the parents that stuttering is genetic and Jake may never fully recover',
            points: 2,
            feedback:
              'While genetics play a role, this framing is overly negative and not appropriate for an IEP meeting. The focus should be on what CAN be done to help Jake communicate effectively and reduce the impact of stuttering.',
            nextNode: 'node4',
          },
        ],
      },
      {
        id: 'node4',
        narrative:
          'You develop treatment goals. Jake has been coming to therapy for 6 weeks. He is learning stuttering modification techniques (cancellations, pull-outs) and is beginning to explore his feelings about stuttering through activities. He tells you, "My friend Aiden asked why I talk funny. I didn\'t know what to say."',
        question: 'What therapeutic approach do you take?',
        options: [
          {
            text: 'Help Jake develop a personal self-disclosure statement about stuttering and practice it; role-play peer interactions; build self-advocacy skills',
            points: 10,
            feedback:
              'Excellent. Self-disclosure and self-advocacy are evidence-based components of stuttering treatment for school-age children. Helping Jake have a simple, confident explanation empowers him and often reduces bullying and negative reactions from peers.',
            nextNode: null,
          },
          {
            text: 'Tell Jake to ignore the comment — kids can be mean',
            points: 0,
            feedback:
              'Dismissing Jake\'s concern is invalidating and misses a critical therapeutic opportunity. Peer interactions significantly impact quality of life for children who stutter. This is exactly the kind of situation therapy should address.',
            nextNode: null,
          },
          {
            text: 'Contact Aiden\'s parents about the inappropriate comment',
            points: 2,
            feedback:
              'Aiden\'s question may have been curiosity rather than bullying. Framing it as inappropriate does not empower Jake. The priority should be helping Jake develop his own tools for navigating these interactions.',
            nextNode: null,
          },
          {
            text: 'Focus on fluency shaping so Jake will stutter less and not attract attention',
            points: 3,
            feedback:
              'Trying to eliminate stuttering to avoid peer questions sends the message that stuttering is something to hide. A healthier approach is helping Jake be comfortable with his stuttering and equipped to explain it confidently.',
            nextNode: null,
          },
        ],
      },
    ],
  },
]

type GamePhase = 'select' | 'playing' | 'results'

interface DecisionRecord {
  nodeId: string
  selectedIdx: number
  points: number
  maxPoints: number
}

export default function ClinicalScenarioPage() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState<GamePhase>('select')
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)
  const [currentNodeIdx, setCurrentNodeIdx] = useState(0)
  const [decisions, setDecisions] = useState<DecisionRecord[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [totalScore, setTotalScore] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)

  const addXP = useGamificationStore((s) => s.addXP)
  const updateStreak = useGamificationStore((s) => s.updateStreak)
  const completeScenario = useGamificationStore((s) => s.completeScenario)
  const addQuestionsAnswered = useGamificationStore((s) => s.addQuestionsAnswered)

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      )
    }
  }, [phase, currentNodeIdx, showFeedback])

  function startScenario(scenario: Scenario) {
    setSelectedScenario(scenario)
    setCurrentNodeIdx(0)
    setDecisions([])
    setSelectedOption(null)
    setShowFeedback(false)
    setTotalScore(0)
    setPhase('playing')
  }

  function handleOptionSelect(idx: number) {
    if (showFeedback) return
    setSelectedOption(idx)
  }

  function submitDecision() {
    if (selectedOption === null || !selectedScenario) return

    const node = selectedScenario.nodes[currentNodeIdx]
    if (!node) return
    const option = node.options[selectedOption]
    if (!option) return

    const maxNodePoints = Math.max(...node.options.map((o) => o.points))

    setDecisions((d) => [
      ...d,
      {
        nodeId: node.id,
        selectedIdx: selectedOption,
        points: option.points,
        maxPoints: maxNodePoints,
      },
    ])

    setTotalScore((s) => s + option.points)
    setShowFeedback(true)
  }

  function advanceNode() {
    if (!selectedScenario) return
    const node = selectedScenario.nodes[currentNodeIdx]
    if (!node) return
    const option = node.options[selectedOption ?? 0]

    if (!option?.nextNode || currentNodeIdx >= selectedScenario.nodes.length - 1) {
      // End of scenario
      const finalScore = totalScore
      addXP(finalScore)
      addQuestionsAnswered(selectedScenario.nodes.length)
      updateStreak()
      completeScenario()
      setPhase('results')
    } else {
      setCurrentNodeIdx((i) => i + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    }
  }

  const currentNode = selectedScenario?.nodes[currentNodeIdx] ?? null
  const currentOption = selectedOption !== null && currentNode ? currentNode.options[selectedOption] : null

  return (
    <div className="mx-auto max-w-4xl pb-24 lg:pb-0">
      {/* Scenario Selection */}
      {phase === 'select' && (
        <div ref={contentRef}>
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-indigo-400 shadow-lg shadow-primary/30">
              <Stethoscope className="h-10 w-10 text-white" />
            </div>
            <h1 className="font-display text-4xl text-text-primary md:text-5xl">Clinical Scenarios</h1>
            <p className="mx-auto mt-4 max-w-lg font-body text-lg text-text-secondary">
              Navigate branching clinical cases. Make decisions at each step and see how your clinical reasoning scores.
            </p>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {SCENARIOS.map((scenario) => (
              <Card key={scenario.id} hover className="group flex h-full cursor-pointer flex-col" onClick={() => startScenario(scenario)}>
                <Badge variant={scenario.category === 'Dysphagia' ? 'error' : scenario.category === 'Language' ? 'primary' : 'secondary'}>
                  {scenario.category}
                </Badge>
                <h3 className="mt-4 font-display text-xl text-text-primary">{scenario.title}</h3>
                <p className="mt-1 font-body text-sm text-text-muted">{scenario.subtitle}</p>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary line-clamp-3">
                  {scenario.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-text-muted">
                    {scenario.nodes.length} decisions &middot; {scenario.maxPoints} XP
                  </span>
                  <ArrowRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Playing */}
      {phase === 'playing' && selectedScenario && currentNode && (
        <div ref={contentRef}>
          {/* Progress header */}
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <Badge
                variant={
                  selectedScenario.category === 'Dysphagia'
                    ? 'error'
                    : selectedScenario.category === 'Language'
                      ? 'primary'
                      : 'secondary'
                }
              >
                {selectedScenario.category}
              </Badge>
              <h2 className="mt-2 font-display text-xl text-text-primary sm:text-2xl">{selectedScenario.title}</h2>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-sm font-bold text-secondary">{totalScore} pts</p>
              <p className="font-body text-xs text-text-muted">
                Step {currentNodeIdx + 1}/{selectedScenario.nodes.length}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-surface-elevated">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${((currentNodeIdx + (showFeedback ? 1 : 0)) / selectedScenario.nodes.length) * 100}%` }}
            />
          </div>

          {/* Narrative */}
          <Card className="mb-6">
            <p className="font-body leading-relaxed text-text-secondary">{currentNode.narrative}</p>
            <h3 className="mt-4 font-display text-lg text-text-primary">{currentNode.question}</h3>
          </Card>

          {/* Options */}
          <div className="space-y-3">
            {currentNode.options.map((option, idx) => {
              const isSelected = selectedOption === idx
              const isCorrect = showFeedback && option.points === Math.max(...currentNode.options.map((o) => o.points))
              const wasSelected = showFeedback && isSelected

              let borderClass = 'border-border'
              if (showFeedback) {
                if (isCorrect) borderClass = 'border-success/50'
                else if (wasSelected && !isCorrect) borderClass = 'border-error/50'
                else borderClass = 'border-border opacity-50'
              } else if (isSelected) {
                borderClass = 'border-primary/50 bg-primary/5'
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={showFeedback}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${borderClass} ${
                    !showFeedback ? 'hover:border-primary/30 hover:bg-surface' : ''
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs text-text-muted">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="min-w-0 flex-1 font-body text-sm leading-relaxed text-text-primary">{option.text}</span>
                    {showFeedback && isCorrect && <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-success" />}
                    {showFeedback && wasSelected && !isCorrect && <XCircle className="ml-auto h-5 w-5 shrink-0 text-error" />}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {showFeedback && currentOption && (
            <Card
              className={`mt-4 ${
                currentOption.points === Math.max(...currentNode.options.map((o) => o.points))
                  ? 'border-success/30 bg-success/5'
                  : 'border-warning/30 bg-warning/5'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {currentOption.points === Math.max(...currentNode.options.map((o) => o.points)) ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <Star className="h-5 w-5 text-warning" />
                )}
                <span className="font-mono text-sm font-bold text-text-primary">
                  +{currentOption.points} points
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {currentOption.feedback}
              </p>
            </Card>
          )}

          {/* Action buttons */}
          <div className="mt-6 flex justify-end gap-3">
            {!showFeedback ? (
              <Button
                variant="primary"
                onClick={submitDecision}
                disabled={selectedOption === null}
              >
                Submit Decision
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button variant="primary" onClick={advanceNode}>
                {currentNodeIdx < selectedScenario.nodes.length - 1 ? 'Continue' : 'See Results'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      {phase === 'results' && selectedScenario && (
        <div ref={contentRef} className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30">
            <Stethoscope className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-4xl text-text-primary md:text-5xl">Case Complete!</h1>
          <p className="mt-2 font-body text-lg text-text-secondary">{selectedScenario.title}</p>

          <div className="mt-8 grid w-full max-w-md grid-cols-2 items-stretch gap-4">
            <Card className="flex flex-col items-center justify-center text-center">
              <p className="font-mono text-2xl font-bold text-secondary sm:text-3xl">{totalScore}</p>
              <p className="mt-1 font-body text-xs text-text-muted">Points Earned</p>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center">
              <p className="font-mono text-2xl font-bold text-primary sm:text-3xl">{selectedScenario.maxPoints}</p>
              <p className="mt-1 font-body text-xs text-text-muted">Max Possible</p>
            </Card>
          </div>

          {/* Decision breakdown */}
          <div className="mt-6 w-full max-w-md">
            <h3 className="mb-3 font-display text-lg text-text-primary">Decision Breakdown</h3>
            <div className="space-y-2">
              {decisions.map((d, idx) => (
                <div key={d.nodeId} className="flex items-center justify-between rounded-xl bg-surface px-4 py-3">
                  <span className="font-body text-sm text-text-secondary">Decision {idx + 1}</span>
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-sm font-bold ${d.points === d.maxPoints ? 'text-success' : d.points > 0 ? 'text-warning' : 'text-error'}`}>
                      {d.points}/{d.maxPoints}
                    </span>
                    {d.points === d.maxPoints ? (
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    ) : (
                      <XCircle className="h-4 w-4 text-text-muted" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-secondary/10 px-6 py-3">
            <p className="font-body text-sm text-secondary">+{totalScore} XP earned!</p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button variant="primary" onClick={() => setPhase('select')}>
              <RotateCcw className="h-4 w-4" />
              Try Another
            </Button>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
