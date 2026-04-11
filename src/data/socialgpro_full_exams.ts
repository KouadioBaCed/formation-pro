// Fichier centralisé pour les examens complets Social Good DPro

import { socialGoodDProExam as questionsOne } from './socialgpro/mini_examen/mini_examen_1';
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

export const socialgproFullExams: FullExam[] = [
  {
    id: 1,
    name: 'Social Good DPro - Full Exam 1',
    nameFr: 'Social Good DPro - Examen Blanc 1',
    questions: normalize(questionsOne),
    questionCount: questionsOne.length
  }
];

export function getSocialgproFullExamById(id: number): FullExam | undefined {
  return socialgproFullExams.find(exam => exam.id === id);
}

export const totalSocialgproFullExamQuestions = socialgproFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
