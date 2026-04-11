// Fichier centralisé pour les mini-examens Program DPro

import { question as allQuestions } from './pgdpro/examen_blanc/examen_blanc_1';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

function normalize(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => {
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
      id: q.id,
      question: q.question,
      options,
      correctAnswer: answer,
      correctAnswers: answers,
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Split 75 questions into 5 mini exams of 15 questions each
const miniExamQuestions1 = allQuestions.slice(0, 15);
const miniExamQuestions2 = allQuestions.slice(15, 30);
const miniExamQuestions3 = allQuestions.slice(30, 45);
const miniExamQuestions4 = allQuestions.slice(45, 60);
const miniExamQuestions5 = allQuestions.slice(60, 75);

export const pgdproMiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'Program DPro - Mini Exam 1',
    nameFr: 'Program DPro - Mini Examen 1',
    questions: normalize(miniExamQuestions1),
    questionCount: miniExamQuestions1.length
  },
  {
    id: 2,
    name: 'Program DPro - Mini Exam 2',
    nameFr: 'Program DPro - Mini Examen 2',
    questions: normalize(miniExamQuestions2),
    questionCount: miniExamQuestions2.length
  },
  {
    id: 3,
    name: 'Program DPro - Mini Exam 3',
    nameFr: 'Program DPro - Mini Examen 3',
    questions: normalize(miniExamQuestions3),
    questionCount: miniExamQuestions3.length
  },
  {
    id: 4,
    name: 'Program DPro - Mini Exam 4',
    nameFr: 'Program DPro - Mini Examen 4',
    questions: normalize(miniExamQuestions4),
    questionCount: miniExamQuestions4.length
  },
  {
    id: 5,
    name: 'Program DPro - Mini Exam 5',
    nameFr: 'Program DPro - Mini Examen 5',
    questions: normalize(miniExamQuestions5),
    questionCount: miniExamQuestions5.length
  }
];

export function getPgdproMiniExamById(id: number): MiniExam | undefined {
  return pgdproMiniExams.find(exam => exam.id === id);
}

export const totalPgdproMiniExamQuestions = pgdproMiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
