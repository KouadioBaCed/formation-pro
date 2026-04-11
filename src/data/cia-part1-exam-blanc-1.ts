import type { Question, Category, Topic, Chapter } from '../types';
import * as raw from './cia_partie_1exam_blanc_n1';

const baseQuestions = (raw as any).ciaPart1EB1Questions as Question[] | undefined;
const exportedQuestions: Question[] = baseQuestions ? [...baseQuestions] : [];

const namedQuestions = Object.keys(raw)
  .filter((k) => /^question\d+$/.test(k))
  .map((k) => (raw as any)[k]) as Question[];

export const ciaPart1EB1Questions: Question[] = [...exportedQuestions, ...namedQuestions];

export const ciaPart1EB1Chapters = (raw as any).ciaPart1EB1Chapters as Chapter[];
export const ciaPart1EB1Topics = (raw as any).ciaPart1EB1Topics as Topic[];
export const ciaPart1EB1Category = (raw as any).ciaPart1EB1Category as Category;
export const ciaPart1EB1AnswerKey = (raw as any).ciaPart1EB1AnswerKey as Record<number, string>;

// Convenience default export
export default {
  questions: ciaPart1EB1Questions,
  chapters: ciaPart1EB1Chapters,
  topics: ciaPart1EB1Topics,
  category: ciaPart1EB1Category,
  answerKey: ciaPart1EB1AnswerKey,
};
