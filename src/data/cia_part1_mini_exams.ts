// Fichier centralisé pour tous les mini-examens CIA Part 1

import { questions as questionsOne } from './cia/cia_mini_examen/cia_mini_examen_1/mini_exman_1';
import { questions1to10 as questionsTwo } from './cia/cia_mini_examen/cia_mini_examen_1/mini_exman_2';
import { questions1to10 as questionsThree } from './cia/cia_mini_examen/cia_mini_examen_1/mini_exman_3';
import { questions as questionsFour } from './cia/cia_mini_examen/cia_mini_examen_1/mini_exman_4';
import { questions as questionsFive } from './cia/cia_mini_examen/cia_mini_examen_1/mini_exman_5';
import { questions as questionsSix } from './cia/cia_mini_examen/cia_mini_examen_1/mini_exman_6';
import { questions as questionsSeven } from './cia/cia_mini_examen/cia_mini_examen_1/mini_exman_7';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

// Normaliser les questions format string[] options + solution
function normalizeSimple(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => ({
    id: q.id,
    question: q.question,
    options: Array.isArray(q.options) ? q.options : [],
    correctAnswer: q.solution || q.answer || '',
    explanation: q.explanation || q.explication || ''
  }));
}

// Normaliser les questions format {A,B,C,D} options + correctAnswer
function normalizeObject(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => {
    let opts: string[] = [];
    if (Array.isArray(q.options)) {
      opts = q.options;
    } else if (q.options && typeof q.options === 'object') {
      opts = Object.entries(q.options).map(([key, value]) => `${key}. ${value}`);
    }
    return {
      id: q.id,
      question: q.question,
      options: opts,
      correctAnswer: q.correctAnswer
        ? (q.options && !Array.isArray(q.options) ? `${q.correctAnswer}. ${q.options[q.correctAnswer]}` : q.correctAnswer)
        : q.solution || '',
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Liste de tous les mini-examens CIA Part 1
export const ciaPart1MiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'CIA Part 1 - Mini Exam 1',
    nameFr: 'CIA Partie 1 - Mini Examen 1',
    questions: normalizeSimple(questionsOne),
    questionCount: questionsOne.length
  },
  {
    id: 2,
    name: 'CIA Part 1 - Mini Exam 2',
    nameFr: 'CIA Partie 1 - Mini Examen 2',
    questions: normalizeObject(questionsTwo),
    questionCount: questionsTwo.length
  },
  {
    id: 3,
    name: 'CIA Part 1 - Mini Exam 3',
    nameFr: 'CIA Partie 1 - Mini Examen 3',
    questions: normalizeSimple(questionsThree),
    questionCount: questionsThree.length
  },
  {
    id: 4,
    name: 'CIA Part 1 - Mini Exam 4',
    nameFr: 'CIA Partie 1 - Mini Examen 4',
    questions: normalizeSimple(questionsFour),
    questionCount: questionsFour.length
  },
  {
    id: 5,
    name: 'CIA Part 1 - Mini Exam 5',
    nameFr: 'CIA Partie 1 - Mini Examen 5',
    questions: normalizeSimple(questionsFive),
    questionCount: questionsFive.length
  },
  {
    id: 6,
    name: 'CIA Part 1 - Mini Exam 6',
    nameFr: 'CIA Partie 1 - Mini Examen 6',
    questions: normalizeSimple(questionsSix),
    questionCount: questionsSix.length
  },
  {
    id: 7,
    name: 'CIA Part 1 - Mini Exam 7',
    nameFr: 'CIA Partie 1 - Mini Examen 7',
    questions: normalizeSimple(questionsSeven),
    questionCount: questionsSeven.length
  }
];

// Fonction pour obtenir un mini-examen par son ID
export function getCiaPart1MiniExamById(id: number): MiniExam | undefined {
  return ciaPart1MiniExams.find(exam => exam.id === id);
}

// Total des questions
export const totalCiaPart1MiniExamQuestions = ciaPart1MiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
