// Fichier centralisé pour les mini-examens MEAL DPro

import { question as allQuestions } from './mealdpro/mini_examen/mini_examen_1';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

function normalize(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => {
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
      id: q.id,
      question: q.question,
      options,
      correctAnswer: answer,
      correctAnswers: answers,
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Split 30 questions into 2 mini exams of 15 questions each
const miniExamQuestions1 = allQuestions.slice(0, 15);
const miniExamQuestions2 = allQuestions.slice(15, 30);

export const mealdproMiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'MEAL DPro - Mini Exam 1',
    nameFr: 'MEAL DPro - Mini Examen 1',
    questions: normalize(miniExamQuestions1),
    questionCount: miniExamQuestions1.length
  },
  {
    id: 2,
    name: 'MEAL DPro - Mini Exam 2',
    nameFr: 'MEAL DPro - Mini Examen 2',
    questions: normalize(miniExamQuestions2),
    questionCount: miniExamQuestions2.length
  }
];

export function getMealdproMiniExamById(id: number): MiniExam | undefined {
  return mealdproMiniExams.find(exam => exam.id === id);
}

export const totalMealdproMiniExamQuestions = mealdproMiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
