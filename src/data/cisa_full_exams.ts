// Fichier centralisé pour les examens complets (blancs) CISA

import { questionsCISA as eb1q1 } from './cisa/examen_blanc/examen_blanc_1/mini_examen_1';
import { questionsCISA2 as eb1q2 } from './cisa/examen_blanc/examen_blanc_1/mini_examen_2';
import { questionsCISA3 as eb1q3 } from './cisa/examen_blanc/examen_blanc_1/mini_examen_3';
import { questionsCISA4 as eb2q4 } from './cisa/examen_blanc/examen_blanc_2/mini_examen_4';
import { questionsCISA5 as eb2q5 } from './cisa/examen_blanc/examen_blanc_2/mini_examen_5';
import { questionsCISA6 as eb2q6 } from './cisa/examen_blanc/examen_blanc_2/mini_examen_6';
import { questions as eb3q7 } from './cisa/examen_blanc/examen_blanc_3/mini_examen_7';
import { questionsCISA8 as eb3q8 } from './cisa/examen_blanc/examen_blanc_3/mini_examen_8';
import { questionsCISA9 as eb3q9 } from './cisa/examen_blanc/examen_blanc_3/mini_examen_9';
import { questions as eb3q10 } from './cisa/examen_blanc/examen_blanc_3/mini_examen_10';
import type { NormalizedFullQuestion, FullExam } from './pmp_full_exams';

// Normaliser les questions CISA
function normalizeCISAQuestions(questions: any[]): NormalizedFullQuestion[] {
  return questions.map((q, index) => {
    const options = Array.isArray(q.options) ? q.options : [];
    let correctAnswer = q.answer || q.solution || '';
    // If correctAnswer is a single letter (A-D), resolve to actual option text
    if (/^[A-D]$/.test(correctAnswer)) {
      const idx = correctAnswer.charCodeAt(0) - 65;
      if (idx >= 0 && idx < options.length) {
        correctAnswer = options[idx];
      }
    }
    return {
      id: index + 1,
      question: q.question || '',
      options,
      correctAnswer,
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Combiner les questions pour chaque examen blanc
const eb1AllQuestions = [...eb1q1, ...eb1q2, ...eb1q3];
const eb2AllQuestions = [...eb2q4, ...eb2q5, ...eb2q6];
const eb3AllQuestions = [...eb3q7, ...eb3q8, ...eb3q9, ...eb3q10];

// Liste des examens complets CISA
export const cisaFullExams: FullExam[] = [
  {
    id: 1,
    name: 'CISA - Full Exam 1',
    nameFr: 'CISA - Examen Blanc 1',
    questions: normalizeCISAQuestions(eb1AllQuestions),
    questionCount: eb1AllQuestions.length
  },
  {
    id: 2,
    name: 'CISA - Full Exam 2',
    nameFr: 'CISA - Examen Blanc 2',
    questions: normalizeCISAQuestions(eb2AllQuestions),
    questionCount: eb2AllQuestions.length
  },
  {
    id: 3,
    name: 'CISA - Full Exam 3',
    nameFr: 'CISA - Examen Blanc 3',
    questions: normalizeCISAQuestions(eb3AllQuestions),
    questionCount: eb3AllQuestions.length
  }
];

// Fonction pour obtenir un examen complet par son ID
export function getCisaFullExamById(id: number): FullExam | undefined {
  return cisaFullExams.find(exam => exam.id === id);
}

// Total des questions
export const totalCisaFullExamQuestions = cisaFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
