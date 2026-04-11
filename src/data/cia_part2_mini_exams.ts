// Fichier centralisé pour tous les mini-examens CIA Part 2

import { questions as questionsOne } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_1';
import { questions1to20 as questionsTwo } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_2';
import { questions as questionsThree } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_3';
import { auditQuestions as questionsFour } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_4';
import { questions as questionsFive } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_5';
import { questions as questionsSix } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_6';
import { questions as questionsSeven } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_7';
import { questions as questionsEight } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_8';
import { questions as questionsNine } from './cia/cia_mini_examen/cia_mini_examen_2/mini_exam_9';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

// Normaliser les questions avec options objet {A,B,C,D}
function normalizeObject(questions: any[]): NormalizedQuestion[] {
  return questions
    .filter((q: any) => q.options && (typeof q.question === 'string' && q.question.length > 5))
    .map((q: any) => {
      const opts: string[] = Object.entries(q.options).map(([key, value]) => `${key}. ${value}`);
      const letter = q.correctAnswer || q.answer || '';
      const correctAnswer = letter && q.options[letter] ? `${letter}. ${q.options[letter]}` : letter;
      return {
        id: q.id,
        question: q.question,
        options: opts,
        correctAnswer,
        explanation: q.explanation || q.explication || ''
      };
    });
}

// Normaliser les questions avec options string[] et réponse lettre ou texte
function normalizeStringWithLetter(questions: any[]): NormalizedQuestion[] {
  return questions.map((q: any) => {
    let opts: string[] = [];
    if (Array.isArray(q.options)) {
      opts = q.options.map((o: any) => typeof o === 'string' ? o : (o.text || String(o)));
    } else if (q.options && typeof q.options === 'object') {
      opts = Object.entries(q.options).map(([key, value]) => `${key}. ${value}`);
    }
    const answer = q.answer || q.solution || '';
    let correctAnswer = answer;
    if (answer.length <= 2) {
      // Answer is a letter like "B", match with option starting with that letter
      const matched = opts.find((o: string) => o.startsWith(`${answer}.`) || o.startsWith(`${answer} `));
      if (matched) correctAnswer = matched;
    } else {
      // Answer is full text, find matching option
      const matched = opts.find((o: string) => o === answer);
      if (matched) correctAnswer = matched;
    }
    return {
      id: q.id,
      question: q.question,
      options: opts,
      correctAnswer,
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Normaliser mini_exam_2 (format mixte: 20 premières entrées sans options, puis objets)
function normalizeMixed(questions: any[]): NormalizedQuestion[] {
  return questions
    .filter((q: any) => q.options && typeof q.question === 'string' && q.question.length > 5)
    .map((q: any) => {
      let opts: string[] = [];
      if (Array.isArray(q.options)) {
        opts = q.options;
      } else if (typeof q.options === 'object') {
        opts = Object.entries(q.options).map(([key, value]) => `${key}. ${value}`);
      }
      const letter = q.answer || q.correctAnswer || '';
      const correctAnswer = !Array.isArray(q.options) && q.options[letter]
        ? `${letter}. ${q.options[letter]}`
        : letter;
      return {
        id: q.id,
        question: q.question,
        options: opts,
        correctAnswer,
        explanation: q.explanation || q.explication || ''
      };
    });
}

// Liste de tous les mini-examens CIA Part 2
export const ciaPart2MiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'CIA Part 2 - Mini Exam 1',
    nameFr: 'CIA Partie 2 - Mini Examen 1',
    questions: normalizeObject(questionsOne as any[]),
    questionCount: (questionsOne as any[]).filter((q: any) => q.options).length
  },
  {
    id: 2,
    name: 'CIA Part 2 - Mini Exam 2',
    nameFr: 'CIA Partie 2 - Mini Examen 2',
    questions: normalizeMixed(questionsTwo as any[]),
    questionCount: normalizeMixed(questionsTwo as any[]).length
  },
  {
    id: 3,
    name: 'CIA Part 2 - Mini Exam 3',
    nameFr: 'CIA Partie 2 - Mini Examen 3',
    questions: normalizeStringWithLetter(questionsThree as any[]),
    questionCount: (questionsThree as any[]).length
  },
  {
    id: 4,
    name: 'CIA Part 2 - Mini Exam 4',
    nameFr: 'CIA Partie 2 - Mini Examen 4',
    questions: normalizeStringWithLetter(questionsFour as any[]),
    questionCount: (questionsFour as any[]).length
  },
  {
    id: 5,
    name: 'CIA Part 2 - Mini Exam 5',
    nameFr: 'CIA Partie 2 - Mini Examen 5',
    questions: normalizeStringWithLetter(questionsFive as any[]),
    questionCount: (questionsFive as any[]).length
  },
  {
    id: 6,
    name: 'CIA Part 2 - Mini Exam 6',
    nameFr: 'CIA Partie 2 - Mini Examen 6',
    questions: normalizeObject(questionsSix as any[]),
    questionCount: (questionsSix as any[]).length
  },
  {
    id: 7,
    name: 'CIA Part 2 - Mini Exam 7',
    nameFr: 'CIA Partie 2 - Mini Examen 7',
    questions: normalizeStringWithLetter(questionsSeven as any[]),
    questionCount: (questionsSeven as any[]).length
  },
  {
    id: 8,
    name: 'CIA Part 2 - Mini Exam 8',
    nameFr: 'CIA Partie 2 - Mini Examen 8',
    questions: normalizeStringWithLetter(questionsEight as any[]),
    questionCount: (questionsEight as any[]).length
  },
  {
    id: 9,
    name: 'CIA Part 2 - Mini Exam 9',
    nameFr: 'CIA Partie 2 - Mini Examen 9',
    questions: normalizeStringWithLetter(questionsNine as any[]),
    questionCount: (questionsNine as any[]).length
  }
];

// Fonction pour obtenir un mini-examen par son ID
export function getCiaPart2MiniExamById(id: number): MiniExam | undefined {
  return ciaPart2MiniExams.find(exam => exam.id === id);
}

// Total des questions
export const totalCiaPart2MiniExamQuestions = ciaPart2MiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
