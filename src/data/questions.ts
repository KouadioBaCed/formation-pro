import type { Question, Category, Topic, Chapter } from '../types';
import { cfe3Questions, cfe3Category, cfe3Topics, cfe3Chapters, cfe3AnswerKey } from './cfe3-financial-transactions';
import { cfe3FraudPreventionQuestions, cfe3FraudPreventionCategory, cfe3FraudPreventionTopics, cfe3FraudPreventionChapters, cfe3FraudPreventionAnswerKey } from './cfe3-fraud-prevention';
import { cfe3LawQuestions, cfe3LawCategory, cfe3LawTopics, cfe3LawChapters, cfe3LawAnswerKey } from './cfe3-law';
import { cia3UE1Questions, cia3UE1Category, cia3UE1Topics, cia3UE1Chapters, cia3UE1AnswerKey } from './cia3-ue1-business-acumen';
import { ciaPart1EB1Questions, ciaPart1EB1Category, ciaPart1EB1Topics, ciaPart1EB1Chapters, ciaPart1EB1AnswerKey } from './cia-part1-exam-blanc-1';
import { ciaPart1EB2Questions, ciaPart1EB2Category, ciaPart1EB2Topics, ciaPart1EB2Chapters, ciaPart1EB2AnswerKey } from './cia-part2-exam-blanc-2';
import { ciaPart3EB1Questions, ciaPart3EB1Category, ciaPart3EB1Topics, ciaPart3EB1Chapters, ciaPart3EB1AnswerKey } from './cia-part3-exam-blanc-1';
import { ciaPart3EB2Questions, ciaPart3EB2Category, ciaPart3EB2Topics, ciaPart3EB2Chapters, ciaPart3EB2AnswerKey } from './cia-part3-exam-blanc-2';
import { pmpExamQuestions, pmpExamCategory, pmpExamTopics, pmpExamChapters, pmpExamAnswerKey } from './pmp';
import { powerBiQuestions, powerBiExamCategory, powerBiExamTopics, powerBiExamChapters, powerBiExamAnswerKey } from './pl-300-examen';

export const chapters: Chapter[] = [
  { id: 'ch-1', name: 'Fraud Prevention Fundamentals', slug: 'fraud-prevention-fundamentals', questionCount: 15 },
  { id: 'ch-2', name: 'Corporate Governance', slug: 'corporate-governance', questionCount: 12 },
  { id: 'ch-3', name: 'Risk Management', slug: 'risk-management', questionCount: 18 },
  { id: 'ch-4', name: 'Investigation Techniques', slug: 'investigation-techniques', questionCount: 20 },
  { id: 'ch-5', name: 'Data Analysis', slug: 'data-analysis', questionCount: 14 },
  { id: 'ch-6', name: 'Interview Methods', slug: 'interview-methods', questionCount: 16 },
  { id: 'ch-7', name: 'Legal Framework', slug: 'legal-framework', questionCount: 22 },
  { id: 'ch-8', name: 'Financial Transactions', slug: 'financial-transactions', questionCount: 19 },
];

export const topics: Topic[] = [
  {
    id: 'topic-1',
    name: 'Fraud Prevention and Deterrence',
    slug: 'fraud-prevention-deterrence',
    description: 'Learn about fraud prevention strategies, corporate governance, and risk management.',
    icon: 'Shield',
    questionCount: 45,
    chapters: [chapters[0], chapters[1], chapters[2]],
  },
  {
    id: 'topic-2',
    name: 'Investigation',
    slug: 'investigation',
    description: 'Master investigation techniques, data analysis, and interview methods.',
    icon: 'Search',
    questionCount: 50,
    chapters: [chapters[3], chapters[4], chapters[5]],
  },
  {
    id: 'topic-3',
    name: 'Law',
    slug: 'law',
    description: 'Understand legal frameworks, civil and criminal justice systems.',
    icon: 'Scale',
    questionCount: 22,
    chapters: [chapters[6]],
  },
  {
    id: 'topic-4',
    name: 'Financial Transactions and Fraud Schemes',
    slug: 'financial-transactions-fraud',
    description: 'Analyze financial transactions and identify common fraud schemes.',
    icon: 'DollarSign',
    questionCount: 19,
    chapters: [chapters[7]],
  },
];

export const categories: Category[] = [
  {
    id: 'cat-cfe-main',
    name: 'CFE',
    slug: 'cfe',
    description: 'Certified Fraud Examiner certification programs',
    icon: 'Award',
    color: 'primary',
    topics: topics,
    subcategories: [
      {
        id: 'cat-cfe-3-financial',
        name: 'Financial Transactions',
        slug: 'cfe-3-financial',
        description: 'CFE 3 - Financial Transactions',
        icon: 'DollarSign',
        color: 'primary',
        topics: cfe3Topics || [],
      },
      {
        id: 'cat-cfe-3-fraud-prevention',
        name: 'Fraud Prevention',
        slug: 'cfe-3-fraud-prevention',
        description: 'CFE 3 - Fraud Prevention and Deterrence',
        icon: 'Shield',
        color: 'primary',
        topics: cfe3FraudPreventionTopics || [],
      },
      {
        id: 'cat-cfe-3-law',
        name: 'Law',
        slug: 'cfe-3-law',
        description: 'CFE 3 - Legal Framework',
        icon: 'Scale',
        color: 'primary',
        topics: cfe3LawTopics || [],
      },
    ],
  },
  {
    id: 'cat-cia-1-main',
    name: 'CIA Part 1',
    slug: 'cia-1',
    description: 'CIA Part 1 - Essentials of Internal Auditing',
    icon: 'Briefcase',
    color: 'success',
    topics: [],
    subcategories: [
      {
        id: 'cat-cia-ue1',
        name: 'Part 1 - Business Acumen',
        slug: 'cia-part-1-business-acumen',
        description: 'CIA Part 1 - Essentials of Internal Auditing',
        icon: 'BookOpen',
        color: 'success',
        topics: cia3UE1Topics || [],
      },
      ...(ciaPart1EB1Category ? [{
        id: 'cat-cia-part1-eb1',
        name: 'Part 1 - Exam Blanc 1',
        slug: 'cia-part-1-exam-blanc-1',
        description: 'CIA Part 1 - Exam Blanc 1',
        icon: 'FileText',
        color: 'success',
        topics: ciaPart1EB1Topics || [],
      }] : []),
    ],
  },
  {
    id: 'cat-cia-2-main',
    name: 'CIA Part 2',
    slug: 'cia-2',
    description: 'CIA Part 2 - Practice of Internal Auditing',
    icon: 'Briefcase',
    color: 'success',
    topics: [],
    subcategories: [
      ...(ciaPart1EB2Category ? [{
        id: 'cat-cia-part2-eb1',
        name: 'Part 2 - Exam Blanc 1',
        slug: 'cia-part-2-exam-blanc-1',
        description: 'CIA Part 2 - Exam Blanc 1',
        icon: 'FileText',
        color: 'success',
        topics: ciaPart1EB2Topics || [],
      }] : []),
    ],
  },
  {
    id: 'cat-cia-3-main',
    name: 'CIA Part 3',
    slug: 'cia-3',
    description: 'CIA Part 3 - Business Knowledge for Internal Auditing',
    icon: 'Briefcase',
    color: 'success',
    topics: [],
    subcategories: [
      ...(ciaPart3EB1Category ? [{
        id: 'cat-cia-part3-eb1',
        name: 'Part 3 - Exam Blanc 1',
        slug: 'cia-part-3-exam-blanc-1',
        description: 'CIA Part 3 - Exam Blanc 1',
        icon: 'FileText',
        color: 'success',
        topics: ciaPart3EB1Topics || [],
      }] : []),
      ...(ciaPart3EB2Category ? [{
        id: 'cat-cia-part3-eb2',
        name: 'Part 3 - Exam Blanc 2',
        slug: 'cia-part-3-exam-blanc-2',
        description: 'CIA Part 3 - Exam Blanc 2',
        icon: 'FileText',
        color: 'success',
        topics: ciaPart3EB2Topics || [],
      }] : []),
    ],
  },
  {
    id: 'cat-pmp-main',
    name: 'PMP',
    slug: 'pmp',
    description: 'Project Management Professional certification program',
    icon: 'Target',
    color: 'warning',
    topics: pmpExamTopics || [],
    subcategories: [
      ...(pmpExamCategory ? [{
        id: 'cat-pmp-exam',
        name: 'PMP Exam Blanc',
        slug: 'pmp-exam-blanc',
        description: 'PMP Exam - Project Management Professional',
        icon: 'Award',
        color: 'warning',
        topics: pmpExamTopics || [],
      }] : []),
    ],
  },
  {
    id: 'cat-pl300-main',
    name: 'PL-300',
    slug: 'pl-300',
    description: 'Microsoft Power BI Data Analyst certification program',
    icon: 'BarChart',
    color: 'info',
    topics: powerBiExamTopics || [],
    subcategories: [
      ...(powerBiExamCategory ? [{
        id: 'cat-pl300-exam',
        name: 'PL-300 Exam Blanc',
        slug: 'pl-300-exam-blanc',
        description: 'PL-300 Exam - Microsoft Power BI Data Analyst',
        icon: 'BarChart',
        color: 'info',
        topics: powerBiExamTopics || [],
      }] : []),
    ],
  },
];

export const sampleQuestions: Question[] = [
  {
    id: 'q-001',
    number: 1,
    text: 'Which of the following is the PRIMARY objective of a fraud prevention program?',
    answers: [
      { id: 'a-1', text: 'To detect all fraudulent activities after they occur', isCorrect: false },
      { id: 'a-2', text: 'To create a culture of honesty and ethical behavior', isCorrect: true },
      { id: 'a-3', text: 'To punish employees who commit fraud', isCorrect: false },
      { id: 'a-4', text: 'To eliminate the need for internal audits', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'The primary objective of a fraud prevention program is to create a culture of honesty and ethical behavior within the organization. While detection, punishment, and auditing are important aspects, prevention through culture is the most effective long-term strategy.',
    difficulty: 'easy',
    topic: 'fraud-prevention-deterrence',
    chapter: 'fraud-prevention-fundamentals',
    status: 'unseen',
  },
  {
    id: 'q-002',
    number: 2,
    text: 'The "fraud triangle" consists of which three elements?',
    answers: [
      { id: 'a-1', text: 'Opportunity, Rationalization, and Pressure', isCorrect: true },
      { id: 'a-2', text: 'Motive, Means, and Method', isCorrect: false },
      { id: 'a-3', text: 'Intent, Knowledge, and Skill', isCorrect: false },
      { id: 'a-4', text: 'Planning, Execution, and Concealment', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'The fraud triangle, developed by criminologist Donald Cressey, identifies three elements that are typically present when fraud occurs: Opportunity (the ability to commit fraud), Rationalization (justifying the fraudulent behavior), and Pressure (the motivation or incentive to commit fraud).',
    difficulty: 'easy',
    topic: 'fraud-prevention-deterrence',
    chapter: 'fraud-prevention-fundamentals',
    status: 'unseen',
  },
  {
    id: 'q-003',
    number: 3,
    text: 'Which of the following internal controls is MOST effective in preventing asset misappropriation?',
    answers: [
      { id: 'a-1', text: 'Annual financial statement audits', isCorrect: false },
      { id: 'a-2', text: 'Segregation of duties', isCorrect: true },
      { id: 'a-3', text: 'Employee background checks', isCorrect: false },
      { id: 'a-4', text: 'Fraud hotlines', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Segregation of duties is the most effective internal control for preventing asset misappropriation because it ensures that no single individual has control over all aspects of a financial transaction. This creates a system of checks and balances where fraud would require collusion between multiple employees.',
    difficulty: 'medium',
    topic: 'fraud-prevention-deterrence',
    chapter: 'corporate-governance',
    status: 'unseen',
  },
  {
    id: 'q-004',
    number: 4,
    text: 'Which of the following are components of the COSO Internal Control Framework? (Select all that apply)',
    answers: [
      { id: 'a-1', text: 'Control Environment', isCorrect: true },
      { id: 'a-2', text: 'Risk Assessment', isCorrect: true },
      { id: 'a-3', text: 'Fraud Investigation', isCorrect: false },
      { id: 'a-4', text: 'Monitoring Activities', isCorrect: true },
    ],
    answerType: 'multiple',
    explanation: 'The COSO Internal Control Framework consists of five components: Control Environment, Risk Assessment, Control Activities, Information and Communication, and Monitoring Activities. Fraud Investigation is not a component of the COSO framework.',
    difficulty: 'medium',
    topic: 'fraud-prevention-deterrence',
    chapter: 'risk-management',
    status: 'unseen',
  },
  {
    id: 'q-005',
    number: 5,
    text: 'When conducting a fraud investigation interview, which technique should be used FIRST?',
    answers: [
      { id: 'a-1', text: 'Accusatory questioning', isCorrect: false },
      { id: 'a-2', text: 'Building rapport and establishing baseline behavior', isCorrect: true },
      { id: 'a-3', text: 'Presenting evidence of fraud', isCorrect: false },
      { id: 'a-4', text: 'Recording a confession', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Building rapport and establishing baseline behavior should always be the first step in a fraud investigation interview. This helps create a comfortable environment for the interviewee and allows the investigator to observe normal behavioral patterns, making it easier to detect deceptive behavior later in the interview.',
    difficulty: 'easy',
    topic: 'investigation',
    chapter: 'interview-methods',
    status: 'unseen',
  },
  {
    id: 'q-006',
    number: 6,
    text: 'Benford\'s Law is MOST useful for detecting fraud in which type of data?',
    answers: [
      { id: 'a-1', text: 'Employee attendance records', isCorrect: false },
      { id: 'a-2', text: 'Naturally occurring numerical data such as invoice amounts', isCorrect: true },
      { id: 'a-3', text: 'Customer satisfaction surveys', isCorrect: false },
      { id: 'a-4', text: 'Employee performance ratings', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Benford\'s Law describes the expected frequency distribution of first digits in naturally occurring numerical data sets. It is particularly useful for detecting fraud in financial data like invoice amounts, check amounts, and account balances, where manipulated numbers often deviate from the expected distribution.',
    difficulty: 'medium',
    topic: 'investigation',
    chapter: 'data-analysis',
    status: 'unseen',
  },
  {
    id: 'q-007',
    number: 7,
    text: 'Under the doctrine of respondeat superior, an employer may be held liable for:',
    answers: [
      { id: 'a-1', text: 'All criminal acts committed by employees', isCorrect: false },
      { id: 'a-2', text: 'Wrongful acts committed by employees within the scope of their employment', isCorrect: true },
      { id: 'a-3', text: 'Only intentional acts committed by management', isCorrect: false },
      { id: 'a-4', text: 'Acts committed by independent contractors', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Respondeat superior ("let the master answer") is a legal doctrine that holds employers vicariously liable for wrongful acts committed by employees if those acts were performed within the scope of their employment. This does not extend to all criminal acts or to independent contractors.',
    difficulty: 'hard',
    topic: 'law',
    chapter: 'legal-framework',
    status: 'unseen',
  },
  {
    id: 'q-008',
    number: 8,
    text: 'Which of the following is a characteristic of a Ponzi scheme?',
    answers: [
      { id: 'a-1', text: 'Returns to existing investors are paid from new investor funds', isCorrect: true },
      { id: 'a-2', text: 'Investments are made in legitimate securities', isCorrect: false },
      { id: 'a-3', text: 'The scheme can continue indefinitely', isCorrect: false },
      { id: 'a-4', text: 'Returns are based on actual investment performance', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'A Ponzi scheme is characterized by using funds from new investors to pay returns to existing investors, rather than generating legitimate investment returns. This creates the illusion of a successful investment while the scheme operator typically siphons off funds. The scheme inevitably collapses when new investment slows.',
    difficulty: 'easy',
    topic: 'financial-transactions-fraud',
    chapter: 'financial-transactions',
    status: 'unseen',
  },
  {
    id: 'q-009',
    number: 9,
    text: 'Which data analysis technique involves comparing two or more lists to identify matches, duplicates, or anomalies?',
    answers: [
      { id: 'a-1', text: 'Trend analysis', isCorrect: false },
      { id: 'a-2', text: 'Gap analysis', isCorrect: false },
      { id: 'a-3', text: 'Join analysis or relational testing', isCorrect: true },
      { id: 'a-4', text: 'Stratification', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Join analysis (or relational testing) involves comparing two or more data sets to identify matches, duplicates, or anomalies. This technique is commonly used to detect ghost employees, duplicate payments, or unauthorized vendor relationships by comparing payroll, vendor, and employee data.',
    difficulty: 'medium',
    topic: 'investigation',
    chapter: 'data-analysis',
    status: 'unseen',
  },
  {
    id: 'q-010',
    number: 10,
    text: 'In a fraud investigation, the chain of custody refers to:',
    answers: [
      { id: 'a-1', text: 'The organizational hierarchy of those involved in the fraud', isCorrect: false },
      { id: 'a-2', text: 'The documented history of how evidence was collected, handled, and stored', isCorrect: true },
      { id: 'a-3', text: 'The sequence of events leading to the discovery of fraud', isCorrect: false },
      { id: 'a-4', text: 'The order in which suspects should be interviewed', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Chain of custody refers to the chronological documentation showing the collection, custody, control, transfer, analysis, and disposition of evidence. Maintaining proper chain of custody is essential to preserve the integrity and admissibility of evidence in legal proceedings.',
    difficulty: 'medium',
    topic: 'investigation',
    chapter: 'investigation-techniques',
    status: 'unseen',
  },
  {
    id: 'q-011',
    number: 11,
    text: 'Which of the following statements about corporate fraud risk assessment is TRUE?',
    answers: [
      { id: 'a-1', text: 'It should be performed only once during company formation', isCorrect: false },
      { id: 'a-2', text: 'It should identify and prioritize fraud risks based on likelihood and impact', isCorrect: true },
      { id: 'a-3', text: 'It is only necessary for publicly traded companies', isCorrect: false },
      { id: 'a-4', text: 'It should focus exclusively on external fraud threats', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'A proper fraud risk assessment should identify potential fraud risks, evaluate their likelihood of occurrence, assess their potential impact, and prioritize them for mitigation. This is an ongoing process that should consider both internal and external fraud threats.',
    difficulty: 'hard',
    topic: 'fraud-prevention-deterrence',
    chapter: 'risk-management',
    status: 'unseen',
  },
  {
    id: 'q-012',
    number: 12,
    text: 'The purpose of a control environment assessment includes which of the following? (Select all that apply)',
    answers: [
      { id: 'a-1', text: 'Evaluating management\'s commitment to integrity and ethical values', isCorrect: true },
      { id: 'a-2', text: 'Assessing the board\'s oversight responsibilities', isCorrect: true },
      { id: 'a-3', text: 'Calculating the exact dollar amount of fraud losses', isCorrect: false },
      { id: 'a-4', text: 'Reviewing organizational structure and authority assignments', isCorrect: true },
    ],
    answerType: 'multiple',
    explanation: 'A control environment assessment evaluates the foundation of internal control, including management\'s integrity and ethical values, board oversight, organizational structure, authority and responsibility assignments, and human resource policies. Calculating fraud losses is a detection/investigation activity, not part of control environment assessment.',
    difficulty: 'hard',
    topic: 'fraud-prevention-deterrence',
    chapter: 'corporate-governance',
    status: 'unseen',
  },
];

// Combined questions from all exams
export const allQuestions: Question[] = [...sampleQuestions, ...cfe3Questions, ...cfe3FraudPreventionQuestions, ...cfe3LawQuestions, ...cia3UE1Questions, ...ciaPart1EB1Questions, ...ciaPart1EB2Questions, ...ciaPart3EB1Questions, ...ciaPart3EB2Questions, ...pmpExamQuestions, ...powerBiQuestions];

// Combined topics from all exams - with dynamically calculated question counts
const baseTopics: Topic[] = [...topics, ...cfe3Topics, ...cfe3FraudPreventionTopics, ...cfe3LawTopics, ...cia3UE1Topics, ...ciaPart1EB1Topics, ...(ciaPart1EB2Topics || []), ...(ciaPart3EB1Topics || []), ...(ciaPart3EB2Topics || []), ...(pmpExamTopics || []), ...(powerBiExamTopics || [])];

export const allTopics: Topic[] = baseTopics.map(topic => ({
  ...topic,
  questionCount: allQuestions.filter(q => q.topic === topic.slug).length
}));

// Combined chapters from all exams
export const allChapters: Chapter[] = [...chapters, ...cfe3Chapters, ...cfe3FraudPreventionChapters, ...cfe3LawChapters, ...cia3UE1Chapters, ...ciaPart1EB1Chapters, ...(ciaPart1EB2Chapters || []), ...(ciaPart3EB1Chapters || []), ...(ciaPart3EB2Chapters || []), ...(pmpExamChapters || []), ...(powerBiExamChapters || [])];

export const getQuestionsByTopic = (topicSlug: string): Question[] => {
  return allQuestions.filter(q => q.topic === topicSlug);
};

export const getQuestionsByChapter = (chapterSlug: string): Question[] => {
  return allQuestions.filter(q => q.chapter === chapterSlug);
};

export const getQuestionById = (id: string): Question | undefined => {
  return allQuestions.find(q => q.id === id);
};

export const getTopicBySlug = (slug: string): Topic | undefined => {
  return allTopics.find(t => t.slug === slug);
};

export const getChapterBySlug = (slug: string): Chapter | undefined => {
  return allChapters.find(c => c.slug === slug);
};

// Re-export CFE-3 data for direct access
export { cfe3Questions, cfe3Category, cfe3Topics, cfe3Chapters, cfe3AnswerKey };
export { cfe3FraudPreventionQuestions, cfe3FraudPreventionCategory, cfe3FraudPreventionTopics, cfe3FraudPreventionChapters, cfe3FraudPreventionAnswerKey };
export { cfe3LawQuestions, cfe3LawCategory, cfe3LawTopics, cfe3LawChapters, cfe3LawAnswerKey };
export { cia3UE1Questions, cia3UE1Category, cia3UE1Topics, cia3UE1Chapters, cia3UE1AnswerKey };
export { ciaPart1EB1Questions, ciaPart1EB1Category, ciaPart1EB1Topics, ciaPart1EB1Chapters, ciaPart1EB1AnswerKey };
export { ciaPart1EB2Questions, ciaPart1EB2Category, ciaPart1EB2Topics, ciaPart1EB2Chapters, ciaPart1EB2AnswerKey };
export { ciaPart3EB1Questions, ciaPart3EB1Category, ciaPart3EB1Topics, ciaPart3EB1Chapters, ciaPart3EB1AnswerKey };
export { ciaPart3EB2Questions, ciaPart3EB2Category, ciaPart3EB2Topics, ciaPart3EB2Chapters, ciaPart3EB2AnswerKey };
export { pmpExamQuestions, pmpExamCategory, pmpExamTopics, pmpExamChapters, pmpExamAnswerKey };
export { powerBiQuestions, powerBiExamCategory, powerBiExamTopics, powerBiExamChapters, powerBiExamAnswerKey };
