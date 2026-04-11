import type { Question, Chapter, Topic, Category } from '../types';
import * as raw from './cia_partie_2exam_blanc_n2';

const baseQuestions = (raw as any).ciaPart1EB2Questions as Question[] | undefined;
const exportedQuestions: Question[] = baseQuestions ? [...baseQuestions] : [];

const namedQuestions = Object.keys(raw)
  .filter((k) => /^question\d+$/i.test(k))
  .map((k) => (raw as any)[k]) as Question[];

export const ciaPart1EB2Questions: Question[] = [...exportedQuestions, ...namedQuestions];

export const ciaPart1EB2Chapters = (raw as any).ciaPart1EB2Chapters as Chapter[] | undefined;
export const ciaPart1EB2AnswerKey = (raw as any).ciaPart1EB2AnswerKey as Record<number, string> | undefined;

// If the source file doesn't provide topics/category, synthesize them so the UI can list the exam.
const inferredQuestionsCount = ciaPart1EB2Questions.length;
export const ciaPart1EB2Topics: Topic[] = (raw as any).ciaPart1EB2Topics as Topic[] | undefined || [
  {
    id: 'cia-p1-eb2-topic-1',
    name: 'CIA Part 1 - Exam Blanc 2',
    slug: 'cia-p1-exam-blanc-2',
    description: 'Examen blanc 2 pour la Partie 1 du CIA',
    icon: 'FileText',
    questionCount: inferredQuestionsCount,
    chapters: ciaPart1EB2Chapters || [],
  },
];

export const ciaPart1EB2Category = (raw as any).ciaPart1EB2Category as Category | undefined || {
  id: 'cia-p1-eb2-cat-1',
  name: 'CIA Part 1 - Exam Blanc 2',
  slug: 'cia-part-1-exam-blanc-2',
  description: 'Examen blanc 2 pour la Partie 1 du CIA',
  icon: 'GraduationCap',
  color: 'primary',
  topics: ciaPart1EB2Topics,
};

export default {
  questions: ciaPart1EB2Questions,
  chapters: ciaPart1EB2Chapters,
  topics: ciaPart1EB2Topics,
  category: ciaPart1EB2Category,
  answerKey: ciaPart1EB2AnswerKey,
};
