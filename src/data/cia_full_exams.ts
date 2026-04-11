// Fichier centralisé pour les examens complets CIA (Part 1, 2, 3)

import { ciaPart1EB1Questions } from './cia-part1-exam-blanc-1';
import { questions1to40 as ciaPart1EB2RawQuestions } from './cia/cia_examen_blanc/cia_1_examen_blanc/examen_blanc_2';
import { questionsUE10 as ciaPart3EB1Questions } from './cia/cia_examen_blanc/cia_3_examen_blanc/examen_blanc_1';
import { questionsUE11 as ciaPart3EB2Questions } from './cia/cia_examen_blanc/cia_3_examen_blanc/examen_blanc_2';
import { questions as ciaPart2NewEB1Questions } from './cia/cia_examen_blanc/cia_2_examen_blanc/examen_blanc_1';
import { questions2 as ciaPart2NewEB2Questions } from './cia/cia_examen_blanc/cia_2_examen_blanc/examen_blanc_2';
import type { NormalizedFullQuestion, FullExam } from './pmp_full_exams';

// Normaliser les questions au format types (id, text, answers[{id,text,isCorrect}], explanation)
function normalizeTypesQuestions(questions: any[]): NormalizedFullQuestion[] {
  return questions.map((q, index) => {
    const opts: string[] = [];
    let correct = '';

    if (Array.isArray(q.answers)) {
      q.answers.forEach((a: any) => {
        opts.push(a.text || '');
        if (a.isCorrect) correct = a.text || '';
      });
    } else if (Array.isArray(q.options)) {
      q.options.forEach((o: any) => {
        const text = typeof o === 'string' ? o : o.text || String(o);
        opts.push(text);
      });
      correct = q.correctAnswer || q.answer || q.solution || '';
    } else if (q.options && typeof q.options === 'object') {
      Object.entries(q.options).forEach(([key, value]) => {
        opts.push(`${key}. ${value}`);
      });
      const letter = q.correctAnswer || q.answer || '';
      correct = letter && q.options[letter] ? `${letter}. ${q.options[letter]}` : letter;
    }

    return {
      id: index + 1,
      question: q.text || q.question || '',
      options: opts,
      correctAnswer: correct,
      explanation: q.explanation || q.explication || q.rationale || ''
    };
  });
}

// CIA Part 1 full exams
export const ciaPart1FullExams: FullExam[] = [
  {
    id: 1,
    name: 'CIA Part 1 - Exam Blanc 1',
    nameFr: 'CIA Partie 1 - Examen Blanc 1',
    questions: normalizeTypesQuestions(ciaPart1EB1Questions),
    questionCount: ciaPart1EB1Questions.length
  },
  {
    id: 6,
    name: 'CIA Part 1 - Exam Blanc 2',
    nameFr: 'CIA Partie 1 - Examen Blanc 2',
    questions: normalizeTypesQuestions(ciaPart1EB2RawQuestions),
    questionCount: ciaPart1EB2RawQuestions.length
  },
];

// CIA Part 2 full exams
export const ciaPart2FullExams: FullExam[] = [
  {
    id: 2,
    name: 'CIA Part 2 - Exam Blanc 1',
    nameFr: 'CIA Partie 2 - Examen Blanc 1',
    questions: normalizeTypesQuestions(ciaPart2NewEB1Questions),
    questionCount: ciaPart2NewEB1Questions.length
  },
  {
    id: 7,
    name: 'CIA Part 2 - Exam Blanc 2',
    nameFr: 'CIA Partie 2 - Examen Blanc 2',
    questions: normalizeTypesQuestions(ciaPart2NewEB2Questions),
    questionCount: ciaPart2NewEB2Questions.length
  },
];

// CIA Part 3 full exams
export const ciaPart3FullExams: FullExam[] = [
  {
    id: 3,
    name: 'CIA Part 3 - Exam Blanc 1',
    nameFr: 'CIA Partie 3 - Examen Blanc 1',
    questions: normalizeTypesQuestions(ciaPart3EB1Questions),
    questionCount: ciaPart3EB1Questions.length
  },
  {
    id: 4,
    name: 'CIA Part 3 - Exam Blanc 2',
    nameFr: 'CIA Partie 3 - Examen Blanc 2',
    questions: normalizeTypesQuestions(ciaPart3EB2Questions),
    questionCount: ciaPart3EB2Questions.length
  }
];

// All CIA exams combined (kept for backward compat)
export const ciaFullExams: FullExam[] = [
  ...ciaPart1FullExams,
  ...ciaPart2FullExams,
  ...ciaPart3FullExams,
];

// Fonction pour obtenir un examen complet par son ID
export function getCiaFullExamById(id: number): FullExam | undefined {
  return ciaFullExams.find(exam => exam.id === id);
}

// Total des questions
export const totalCiaFullExamQuestions = ciaFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
export const totalCiaPart1FullExamQuestions = ciaPart1FullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
export const totalCiaPart2FullExamQuestions = ciaPart2FullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
export const totalCiaPart3FullExamQuestions = ciaPart3FullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
