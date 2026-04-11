// Fichier centralisé pour les mini-examens Social Good DPro

import { socialGoodDProExam as allQuestions } from './socialgpro/mini_examen/mini_examen_1';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

function normalize(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => ({
    id: q.id,
    question: q.question,
    options: Array.isArray(q.options) ? q.options : [],
    correctAnswer: q.answer || q.solution || '',
    explanation: q.explanation || q.explication || ''
  }));
}

// Split 30 questions into 2 mini exams of 15 questions each
const miniExamQuestions1 = allQuestions.slice(0, 15);
const miniExamQuestions2 = allQuestions.slice(15, 30);

export const socialgproMiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'Social Good DPro - Mini Exam 1',
    nameFr: 'Social Good DPro - Mini Examen 1',
    questions: normalize(miniExamQuestions1),
    questionCount: miniExamQuestions1.length
  },
  {
    id: 2,
    name: 'Social Good DPro - Mini Exam 2',
    nameFr: 'Social Good DPro - Mini Examen 2',
    questions: normalize(miniExamQuestions2),
    questionCount: miniExamQuestions2.length
  }
];

export function getSocialgproMiniExamById(id: number): MiniExam | undefined {
  return socialgproMiniExams.find(exam => exam.id === id);
}

export const totalSocialgproMiniExamQuestions = socialgproMiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
