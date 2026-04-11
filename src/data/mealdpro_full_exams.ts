// Fichier centralisé pour les examens complets MEAL DPro

import { question as questionsOne } from './mealdpro/mini_examen/mini_examen_1';
import type { NormalizedFullQuestion, FullExam } from './pmp_full_exams';

function normalize(questions: any[]): NormalizedFullQuestion[] {
  return questions.map((q, index) => {
    const answer = q.answer || q.solution || '';
    const options = Array.isArray(q.options) ? q.options : [];
    // Only treat as multi-answer if each part matches an option exactly
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

export const mealdproFullExams: FullExam[] = [
  {
    id: 1,
    name: 'MEAL DPro - Full Exam 1',
    nameFr: 'MEAL DPro - Examen Blanc 1',
    questions: normalize(questionsOne),
    questionCount: questionsOne.length
  }
];

export function getMealdproFullExamById(id: number): FullExam | undefined {
  return mealdproFullExams.find(exam => exam.id === id);
}

export const totalMealdproFullExamQuestions = mealdproFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
