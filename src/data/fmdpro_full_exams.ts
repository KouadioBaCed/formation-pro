// Fichier centralisé pour les examens complets Finance DPro

import { question as questionsOne } from './fmdpro/mini_examen/mini_examen_1';
import type { NormalizedFullQuestion, FullExam } from './pmp_full_exams';

function normalize(questions: any[]): NormalizedFullQuestion[] {
  return questions.map((q, index) => ({
    id: index + 1,
    question: q.question || '',
    options: Array.isArray(q.options) ? q.options : [],
    correctAnswer: q.answer || q.solution || '',
    explanation: q.explanation || q.explication || ''
  }));
}

export const fmdproFullExams: FullExam[] = [
  {
    id: 1,
    name: 'Finance DPro - Full Exam 1',
    nameFr: 'Finance DPro - Examen Blanc 1',
    questions: normalize(questionsOne),
    questionCount: questionsOne.length
  }
];

export function getFmdproFullExamById(id: number): FullExam | undefined {
  return fmdproFullExams.find(exam => exam.id === id);
}

export const totalFmdproFullExamQuestions = fmdproFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
