// Fichier centralisé pour les examens complets Program DPro

import { question as questionsOne } from './pgdpro/examen_blanc/examen_blanc_1';
import type { NormalizedFullQuestion, FullExam } from './pmp_full_exams';

function normalize(questions: any[]): NormalizedFullQuestion[] {
  return questions.map((q, index) => {
    const answer = q.answer || q.solution || '';
    const options = Array.isArray(q.options) ? q.options : [];
    let answers: string[] | undefined;
    if (answer.includes(' ; ')) {
      const parts = answer.split(' ; ').map((a: string) => a.trim());
      if (parts.length > 1 && parts.every((p: string) => options.includes(p))) {
        answers = parts;
      }
    }
    return {
      id: index + 1,
      question: q.question || '',
      options,
      correctAnswer: answer,
      correctAnswers: answers,
      explanation: q.explanation || q.explication || ''
    };
  });
}

export const pgdproFullExams: FullExam[] = [
  {
    id: 1,
    name: 'Program DPro - Full Exam 1',
    nameFr: 'Program DPro - Examen Blanc 1',
    questions: normalize(questionsOne),
    questionCount: questionsOne.length
  }
];

export function getPgdproFullExamById(id: number): FullExam | undefined {
  return pgdproFullExams.find(exam => exam.id === id);
}

export const totalPgdproFullExamQuestions = pgdproFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
