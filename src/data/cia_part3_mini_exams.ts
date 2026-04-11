// Fichier centralisé pour tous les mini-examens CIA Part 3

import { questions as questionsOne } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_1';
import { quizQuestions as questionsTwo } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_2';
import { quizQuestions as questionsThree } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_3';
import { quizQuestions as questionsFour } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_4';
import { quizQuestions as questionsFive } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_5';
import { question as questionsSix } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_6';
import { quizQuestions as questionsSeven } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_7';
import { quizQuestions as questionsEight } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_8';
import { question as questionsNine } from './cia/cia_mini_examen/cia_mini_examen_3/mini_exam_9';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

// Normaliser les questions avec options string[] préfixées "A. " et réponse lettre
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
      const matched = opts.find((o: string) => o.startsWith(`${answer}.`) || o.startsWith(`${answer} `));
      if (matched) correctAnswer = matched;
    } else {
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

// Liste de tous les mini-examens CIA Part 3
export const ciaPart3MiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'CIA Part 3 - Mini Exam 1',
    nameFr: 'CIA Partie 3 - Mini Examen 1',
    questions: normalizeStringWithLetter(questionsOne as any[]),
    questionCount: (questionsOne as any[]).length
  },
  {
    id: 2,
    name: 'CIA Part 3 - Mini Exam 2',
    nameFr: 'CIA Partie 3 - Mini Examen 2',
    questions: normalizeStringWithLetter(questionsTwo as any[]),
    questionCount: (questionsTwo as any[]).length
  },
  {
    id: 3,
    name: 'CIA Part 3 - Mini Exam 3',
    nameFr: 'CIA Partie 3 - Mini Examen 3',
    questions: normalizeStringWithLetter(questionsThree as any[]),
    questionCount: (questionsThree as any[]).length
  },
  {
    id: 4,
    name: 'CIA Part 3 - Mini Exam 4',
    nameFr: 'CIA Partie 3 - Mini Examen 4',
    questions: normalizeStringWithLetter(questionsFour as any[]),
    questionCount: (questionsFour as any[]).length
  },
  {
    id: 5,
    name: 'CIA Part 3 - Mini Exam 5',
    nameFr: 'CIA Partie 3 - Mini Examen 5',
    questions: normalizeStringWithLetter(questionsFive as any[]),
    questionCount: (questionsFive as any[]).length
  },
  {
    id: 6,
    name: 'CIA Part 3 - Mini Exam 6',
    nameFr: 'CIA Partie 3 - Mini Examen 6',
    questions: normalizeStringWithLetter(questionsSix as any[]),
    questionCount: (questionsSix as any[]).length
  },
  {
    id: 7,
    name: 'CIA Part 3 - Mini Exam 7',
    nameFr: 'CIA Partie 3 - Mini Examen 7',
    questions: normalizeStringWithLetter(questionsSeven as any[]),
    questionCount: (questionsSeven as any[]).length
  },
  {
    id: 8,
    name: 'CIA Part 3 - Mini Exam 8',
    nameFr: 'CIA Partie 3 - Mini Examen 8',
    questions: normalizeStringWithLetter(questionsEight as any[]),
    questionCount: (questionsEight as any[]).length
  },
  {
    id: 9,
    name: 'CIA Part 3 - Mini Exam 9',
    nameFr: 'CIA Partie 3 - Mini Examen 9',
    questions: normalizeStringWithLetter(questionsNine as any[]),
    questionCount: (questionsNine as any[]).length
  }
];

// Fonction pour obtenir un mini-examen par son ID
export function getCiaPart3MiniExamById(id: number): MiniExam | undefined {
  return ciaPart3MiniExams.find(exam => exam.id === id);
}

// Total des questions
export const totalCiaPart3MiniExamQuestions = ciaPart3MiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
