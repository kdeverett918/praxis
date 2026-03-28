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
    title: 'Pediatric Language Evaluation',
    subtitle: 'Bilingual Late Talker',
    description:
      'A bilingual (Spanish-English) 2.5-year-old, Sofia, is referred to your outpatient clinic by her pediatrician for "late talking." Her parents report she uses fewer words than her older brother did at the same age.',
    category: 'Language',
    maxPoints: 50,
    nodes: [
      {
        id: 'node1',
        narrative:
          'Sofia arrives with both parents. They speak Spanish at home; she attends an English-speaking daycare 3 days per week. Her mother reports Sofia says about 30 words — a mix of Spanish and English — and is not yet combining words. She follows simple directions in both languages and uses gestures frequently. Her developmental history is unremarkable.',
        question: 'What is your initial assessment approach?',
        options: [
          {
            text: 'Begin with a detailed parent interview in the family\'s preferred language (Spanish) to gather communication history, language exposure patterns, and developmental milestones',
            points: 10,
            feedback:
              'Excellent. Starting with a parent interview in L1 (Spanish) establishes rapport, yields the most accurate information about the child\'s full communicative profile, and is culturally responsive. Understanding language exposure is essential for bilingual assessment.',
            nextNode: 'node2',
          },
          {
            text: 'Administer a standardized English-only assessment to establish a baseline',
            points: 0,
            feedback:
              'An English-only standardized test would significantly underestimate Sofia\'s abilities. Bilingual children distribute their vocabulary across languages, so testing in only one language gives an incomplete and biased picture.',
            nextNode: 'node2',
          },
          {
            text: 'Use dynamic assessment to evaluate her learning potential across both languages',
            points: 7,
            feedback:
              'Dynamic assessment is a valuable tool for bilingual children and can help differentiate disorder from difference. However, starting with a thorough parent interview in L1 provides essential context that should inform your dynamic assessment approach.',
            nextNode: 'node2',
          },
          {
            text: 'Conduct a bilingual assessment using standardized tools normed on bilingual populations',
            points: 5,
            feedback:
              'A bilingual assessment approach is appropriate, but jumping straight to standardized tools without first gathering a thorough case history and understanding her language exposure patterns means you lack critical context for interpreting results.',
            nextNode: 'node2',
          },
        ],
      },
      {
        id: 'node2',
        narrative:
          'Your parent interview reveals Sofia\'s language exposure is approximately 65% Spanish, 35% English. She says about 20 words in Spanish and 15 in English, with 5 of those being translation equivalents (e.g., "agua" and "water"). She uses pointing, reaching, and showing to communicate. No concerns about hearing, play skills, or social interaction.',
        question: 'How do you measure Sofia\'s vocabulary most accurately?',
        options: [
          {
            text: 'Use conceptual scoring across both languages — count each unique concept once, regardless of which language it is expressed in',
            points: 10,
            feedback:
              'Correct. Conceptual scoring is the gold standard for bilingual vocabulary assessment. Sofia knows "agua" and "water" — that is one concept, not two. Her conceptual vocabulary is approximately 30 words (20 + 15 - 5 translation equivalents), which gives the truest picture of her lexical knowledge.',
            nextNode: 'node3',
          },
          {
            text: 'Administer the English MacArthur-Bates CDI only, since English is the language of education',
            points: 0,
            feedback:
              'The English CDI alone would show only 15 words, dramatically underestimating Sofia\'s abilities. Bilingual children\'s vocabulary must be measured across both languages. Using a single-language measure leads to over-identification of language disorders.',
            nextNode: 'node3',
          },
          {
            text: 'Administer a standardized English vocabulary test and adjust the score by adding 30% for the "bilingual factor"',
            points: 2,
            feedback:
              'There is no valid "bilingual adjustment factor" for standardized tests. Norms were established on monolingual populations, and arbitrary score adjustments lack empirical support. Conceptual scoring across both languages is the evidence-based approach.',
            nextNode: 'node3',
          },
          {
            text: 'Rely on informal observation during a play session to estimate vocabulary size',
            points: 4,
            feedback:
              'Play-based observation provides useful qualitative data, but it underestimates total vocabulary — children do not produce all their words in a single session. Combining parent report with conceptual scoring provides a more accurate and comprehensive measure.',
            nextNode: 'node3',
          },
        ],
      },
      {
        id: 'node3',
        narrative:
          'Your full assessment shows: conceptual vocabulary of approximately 30 words at age 2.5 (expected: 200-300+ words). Receptive language is age-appropriate in Spanish and slightly below in English. She demonstrates symbolic play, joint attention, and age-appropriate social skills. Language sample shows single words only, no word combinations in either language. Her skills are distributed across both languages — stronger in Spanish for home routines, stronger in English for daycare vocabulary.',
        question: 'Given these results showing distributed competence across languages, what is your clinical interpretation?',
        options: [
          {
            text: 'Language disorder — expressive vocabulary is significantly below expectations even with conceptual scoring, despite adequate receptive skills and normal development in other areas',
            points: 10,
            feedback:
              'Correct. Even with conceptual scoring giving Sofia credit for all unique concepts across both languages, 30 words at 2.5 years is significantly below expectations (expected 200-300+). The distributed competence across languages is a normal bilingual pattern, but the overall vocabulary size indicates a true language disorder, not a language difference.',
            nextNode: 'node4',
          },
          {
            text: 'Language difference, not disorder — her skills are distributed across two languages, which explains the lower numbers in each individual language',
            points: 3,
            feedback:
              'Distributed competence IS a normal bilingual pattern, but even when you combine her vocabularies using conceptual scoring, 30 words at 2.5 years is far below the expected 200-300+ words. This goes beyond a typical bilingual difference — it suggests a true disorder.',
            nextNode: 'node4',
          },
          {
            text: 'Recommend monitoring and re-evaluation in 6 months — she may be a late bloomer',
            points: 4,
            feedback:
              'While some late talkers catch up, Sofia\'s expressive vocabulary at 2.5 is significantly delayed (30 vs. 200-300+ expected). A "wait and see" approach at this level of delay risks missing the critical window for early intervention. The evidence supports beginning services now.',
            nextNode: 'node4',
          },
          {
            text: 'Refer for a comprehensive hearing evaluation before making any determination',
            points: 5,
            feedback:
              'A hearing evaluation is always part of a thorough workup, and it is reasonable to confirm hearing status. However, Sofia passed her newborn hearing screening, her receptive language in Spanish is age-appropriate, and no hearing concerns were reported. This alone should not delay your clinical determination.',
            nextNode: 'node4',
          },
        ],
      },
      {
        id: 'node4',
        narrative:
          'You share your findings with Sofia\'s parents. Her mother becomes tearful and says, "My mother told me this would happen if we spoke two languages. Should we just switch to English at home so she can catch up?" Her father adds, "We want to do whatever is best for her."',
        question: 'What do you tell the parents about bilingualism and Sofia\'s language development?',
        options: [
          {
            text: 'Explain that bilingualism did NOT cause the delay, encourage maintaining both Spanish and English, and share that strong L1 skills actually support L2 development',
            points: 10,
            feedback:
              'Perfect response. Research conclusively shows bilingualism does not cause language disorders. Maintaining the home language (Spanish) preserves family bonds, cultural identity, and actually supports the acquisition of the second language. Dropping Spanish would harm family communication without helping Sofia\'s language development.',
            nextNode: 'node5',
          },
          {
            text: 'Recommend they reduce Spanish input and increase English exposure at home to prepare for school',
            points: 0,
            feedback:
              'This is harmful advice. Reducing L1 input disrupts family communication, damages cultural identity, and does NOT accelerate L2 development. Children with language disorders have difficulty with ALL languages — restricting input in one language does not help the other.',
            nextNode: 'node5',
          },
          {
            text: 'Suggest they speak only English at home since that is the language she will need for school',
            points: 0,
            feedback:
              'Advising parents to abandon their home language is one of the most harmful recommendations an SLP can make. It severs family communication (grandparents, extended family), damages cultural identity, and has NO evidence of improving outcomes. ASHA\'s position is clear: support both languages.',
            nextNode: 'node5',
          },
          {
            text: 'Tell them language choice doesn\'t matter much either way — they should do whatever feels comfortable',
            points: 3,
            feedback:
              'While being supportive of family comfort is good, this response misses a critical opportunity to provide evidence-based guidance. The family specifically asked for direction, and research clearly supports maintaining both languages. An SLP has a responsibility to share this evidence.',
            nextNode: 'node5',
          },
        ],
      },
      {
        id: 'node5',
        narrative:
          'Sofia qualifies for early intervention services. You are developing the treatment plan. The family lives in an area with limited bilingual SLP services. The closest bilingual (Spanish-English) SLP has a 4-month waitlist.',
        question: 'What is the most appropriate treatment approach?',
        options: [
          {
            text: 'Begin parent training in L1 (Spanish) now — coach parents to use language facilitation strategies at home — while also providing direct therapy and pursuing the bilingual SLP referral',
            points: 10,
            feedback:
              'Excellent. Parent training in the home language provides immediate intervention through the child\'s most natural communication partners. Parents can implement strategies throughout daily routines, maximizing language input. Combining this with direct therapy and pursuing bilingual services creates a comprehensive approach.',
            nextNode: null,
          },
          {
            text: 'Provide English-only therapy yourself and skip the bilingual SLP referral since the waitlist is too long',
            points: 3,
            feedback:
              'English-only therapy ignores 65% of Sofia\'s language environment. While you should begin services, providing therapy in only one language is insufficient. Parent coaching in Spanish and pursuing bilingual services are essential components of an equitable treatment plan.',
            nextNode: null,
          },
          {
            text: 'Place Sofia on the bilingual SLP waitlist and delay all services until that appointment is available',
            points: 2,
            feedback:
              'Waiting 4 months for the "ideal" provider delays critical early intervention. Research supports beginning services immediately. You can provide effective intervention through parent coaching in L1 and direct therapy while waiting for the bilingual SLP.',
            nextNode: null,
          },
          {
            text: 'Refer to a bilingual SLP only and do not provide services yourself since you do not speak Spanish',
            points: 4,
            feedback:
              'Referring to a bilingual SLP is appropriate, but withholding all services in the meantime is not. You can provide effective intervention using trained interpreters, parent coaching models, and culturally responsive strategies even without speaking Spanish yourself. Collaboration is key.',
            nextNode: null,
          },
        ],
      },
    ],
  },
  {
    id: 'fluency-school',
    title: 'School-Age Fluency',
    subtitle: 'Stuttering Referral',
    description:
      'A 9-year-old boy, Jake, is referred by his 3rd-grade teacher for stuttering. She reports he has been "getting stuck on words" more frequently and has become noticeably quieter in class over the past semester.',
    category: 'Fluency',
    maxPoints: 50,
    nodes: [
      {
        id: 'node1',
        narrative:
          'You meet Jake in the school therapy room. He makes limited eye contact and answers questions with short phrases. During your conversation, you observe sound repetitions ("b-b-b-ball"), prolongations ("ssssometimes"), and occasional blocks with visible tension in his jaw. He whispers, "I hate reading out loud." His teacher sent a note saying he has stopped raising his hand in class.',
        question: 'What assessment approach do you choose?',
        options: [
          {
            text: 'Comprehensive battery: SSI-4 for severity, OASES for quality-of-life impact, plus speech samples in conversation, reading, and narrative retell',
            points: 10,
            feedback:
              'Excellent. A comprehensive fluency assessment includes both observable speech behaviors (SSI-4 across multiple contexts) AND the speaker\'s attitudes, emotions, and quality-of-life impact (OASES). This multi-dimensional approach captures both the overt and covert features of stuttering.',
            nextNode: 'node2',
          },
          {
            text: 'Administer the SSI-4 only using a reading passage and conversation sample',
            points: 5,
            feedback:
              'The SSI-4 is essential but captures only the observable surface features — frequency, duration, and physical concomitants. Given Jake\'s avoidance behaviors and negative self-statements, you are missing the affective and cognitive dimensions that are critical for treatment planning.',
            nextNode: 'node2',
          },
          {
            text: 'Conduct informal observation in the classroom without formal assessment tools',
            points: 3,
            feedback:
              'Naturalistic observation provides useful context, but without standardized tools you cannot quantify severity, compare to norms, or systematically assess the affective/cognitive components. Informal observation alone is insufficient for a thorough evaluation.',
            nextNode: 'node2',
          },
          {
            text: 'Rely on a parent interview only — parents know the child best',
            points: 2,
            feedback:
              'Parent input is valuable but cannot replace direct assessment. Parents may not observe stuttering in all contexts (stuttering often varies by situation), and they cannot provide the standardized severity or quality-of-life measures needed for eligibility determination and treatment planning.',
            nextNode: 'node2',
          },
        ],
      },
      {
        id: 'node2',
        narrative:
          'Your assessment reveals: SSI-4 total score indicates moderate stuttering (18th percentile), with 11% syllables stuttered in conversation and 18% in reading. The OASES results show a significant negative impact on quality of life. Jake reports: "I feel stupid when I get stuck," "I never raise my hand anymore," and "I pretend I don\'t know the answer so I don\'t have to talk." He rates his frustration with speaking as 9/10.',
        question: 'Jake reports significant negative feelings about his speech. What is your next step?',
        options: [
          {
            text: 'Address the emotional impact alongside speech strategies — both the stuttering behaviors and the negative attitudes/avoidance must be treatment targets from the start',
            points: 10,
            feedback:
              'Excellent clinical reasoning. Jake\'s affective impact is disproportionately high relative to his moderate severity. The avoidance, negative self-perception, and emotional distress may be MORE impactful on his daily life than the overt stuttering itself. Evidence-based stuttering treatment for school-age children integrates affective, behavioral, and cognitive components.',
            nextNode: 'node3',
          },
          {
            text: 'Focus only on fluency modification techniques first — once he stutters less, the negative feelings will resolve on their own',
            points: 3,
            feedback:
              'Research clearly shows that reducing stuttering frequency alone does not automatically resolve negative attitudes, avoidance, or emotional distress. In fact, focusing only on fluency can increase communicative pressure and worsen avoidance. Both dimensions must be addressed simultaneously.',
            nextNode: 'node3',
          },
          {
            text: 'Ignore the affective component — that is a psychologist\'s domain, not an SLP\'s',
            points: 0,
            feedback:
              'The affective and cognitive components of stuttering are squarely within the SLP\'s scope of practice. ASHA recognizes counseling related to communication disorders as a core SLP competency. Ignoring these components results in incomplete treatment.',
            nextNode: 'node3',
          },
          {
            text: 'Refer to a psychologist for the emotional issues before beginning any speech therapy',
            points: 4,
            feedback:
              'A psychology referral may be appropriate as a complement to speech therapy if emotional concerns are severe, but it should not REPLACE or DELAY fluency intervention. The SLP is uniquely qualified to address communication-related attitudes and emotions. Collaboration, not deferral, is the best approach.',
            nextNode: 'node3',
          },
        ],
      },
      {
        id: 'node3',
        narrative:
          'You qualify Jake for services and begin developing his treatment plan. You consider the available approaches: fluency shaping (teaching smooth, controlled speech patterns), stuttering modification (reducing struggle through cancellations, pull-outs, and preparatory sets), the Lidcombe Program (parent-delivered behavioral treatment), and avoidance reduction therapy (targeting approach behaviors and reducing avoidance).',
        question: 'What primary treatment approach do you choose for Jake?',
        options: [
          {
            text: 'Stuttering modification combined with counseling — teach Jake to stutter more easily while addressing his feelings, attitudes, and avoidance behaviors',
            points: 10,
            feedback:
              'Excellent choice. For a 9-year-old with significant negative attitudes and avoidance, stuttering modification (Van Riper approach) combined with counseling is well-supported. This approach reduces struggle and fear by teaching Jake to manage moments of stuttering rather than avoid them, while directly addressing the affective component.',
            nextNode: 'node4',
          },
          {
            text: 'Fluency shaping only — teach prolonged speech and gentle onsets to produce fluent speech',
            points: 4,
            feedback:
              'Fluency shaping can increase fluency, but used alone it does not address Jake\'s avoidance behaviors, negative attitudes, or emotional distress. It can also create an artificial-sounding speech pattern that some children resist. For Jake, whose covert features are significant, a more comprehensive approach is needed.',
            nextNode: 'node4',
          },
          {
            text: 'Lidcombe Program — it has strong evidence for stuttering treatment',
            points: 2,
            feedback:
              'The Lidcombe Program is an evidence-based treatment for PRESCHOOL-age children (typically under 6). It is a parent-delivered operant program designed for young children and is not appropriate for a 9-year-old with significant affective and cognitive components to his stuttering.',
            nextNode: 'node4',
          },
          {
            text: 'Avoidance reduction therapy — focus entirely on eliminating avoidance behaviors',
            points: 7,
            feedback:
              'Avoidance reduction therapy (Vivian Sisskin\'s approach) is a strong choice given Jake\'s significant avoidance patterns. It targets approach behaviors and reduces the power of avoidance. However, combining this with stuttering modification techniques gives Jake concrete tools for managing moments of stuttering, creating a more comprehensive treatment plan.',
            nextNode: 'node4',
          },
        ],
      },
      {
        id: 'node4',
        narrative:
          'Jake has been making progress in therapy. You are preparing for his IEP meeting and need to provide guidance to his teacher, Mrs. Chen, and his parents about how to support him in the classroom. Mrs. Chen asks: "Should I stop calling on him? I don\'t want to embarrass him. Sometimes the other kids giggle when he gets stuck."',
        question: 'What do you tell Mrs. Chen and the school staff?',
        options: [
          {
            text: 'Give Jake extra time to respond with the same participation expectations as peers — maintain normal academic expectations while reducing time pressure and educating classmates about communication differences',
            points: 10,
            feedback:
              'Perfect. Children who stutter should have the same opportunities and expectations as their peers. Providing extra wait time, signaling before calling on him, and educating the class about different ways of talking reduces stigma without singling Jake out or lowering expectations. This approach supports both his academic participation and self-advocacy.',
            nextNode: null,
          },
          {
            text: 'Don\'t call on him in class — let him volunteer when he feels ready to avoid embarrassment',
            points: 0,
            feedback:
              'Excusing Jake from participation reinforces the message that stuttering is something to hide and that he cannot handle speaking situations. This increases avoidance, reduces educational engagement, and can worsen the affective impact over time. Accommodation should enable participation, not eliminate it.',
            nextNode: null,
          },
          {
            text: 'Reduce his verbal participation requirements — give him written alternatives for oral reports and class discussions',
            points: 3,
            feedback:
              'Replacing verbal participation with written work removes opportunities for Jake to practice communication skills and sends the message that his speech is too impaired for classroom participation. While occasional written options may be appropriate, systematically reducing verbal demands is counterproductive.',
            nextNode: null,
          },
          {
            text: 'Treat him exactly like every other student with no modifications whatsoever',
            points: 4,
            feedback:
              'Equal treatment sounds fair but ignores Jake\'s specific needs. Simple accommodations like extra wait time, advance notice before being called on, and reduced time pressure are not special treatment — they are evidence-based supports that enable equitable participation. Ignoring his stuttering is not the same as accepting it.',
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
