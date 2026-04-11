// Fichier centralisé pour les mini-examens Finance DPro (FMD Pro)

import { question as allQuestions } from './fmdpro/mini_examen/mini_examen_1';
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

export const fmdproMiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'Finance DPro - Mini Exam 1',
    nameFr: 'Finance DPro - Mini Examen 1',
    questions: normalize(miniExamQuestions1),
    questionCount: miniExamQuestions1.length
  },
  {
    id: 2,
    name: 'Finance DPro - Mini Exam 2',
    nameFr: 'Finance DPro - Mini Examen 2',
    questions: normalize(miniExamQuestions2),
    questionCount: miniExamQuestions2.length
  }
];

export function getFmdproMiniExamById(id: number): MiniExam | undefined {
  return fmdproMiniExams.find(exam => exam.id === id);
}

export const totalFmdproMiniExamQuestions = fmdproMiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
