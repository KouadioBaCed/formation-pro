// Fichier centralisé pour tous les mini-examens PMP

import { questions as questionsOne } from './mini_examen_pmp_one';
import { projectManagementQuestions as questionsTwo } from './mini_examen_pmp_two';
import { questions as questionsThree } from './mini_examen_pmp_three';
import { questions as questionsFour } from './mini_examen_pmp_four';
import { questions as questionsFive } from './mini_examen_pmp_five';
import { questions as questionsSix } from './mini_examen_pmp_six';
import { questions1to20 as questionsSeven } from './mini_examen_pmp_seven';
import { questions as questionsEight } from './mini_examen_pmp_height';
import { questions as questionsTen } from './mini_exam_pmp_ten';

// Interface normalisée pour les questions
export interface NormalizedQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  correctAnswers?: string[];
  explanation: string;
}

// Fonction pour normaliser les questions du fichier 1 (format: options: {A, B, C, D}, correctAnswer)
function normalizeQuestionsOne(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options
      ? (Array.isArray(q.options)
        ? q.options
        : Object.entries(q.options).map(([key, value]) => `${key}. ${value}`))
      : [],
    correctAnswer: q.correctAnswer || q.correctAnswers?.[0] || '',
    explanation: q.explanation || ''
  }));
}

// Fonction pour normaliser les questions du fichier 2 (format: options: {A, B, C, D}, solution)
function normalizeQuestionsTwo(questions: any[]): NormalizedQuestion[] {
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
      correctAnswer: q.solution || q.answer || '',
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Fonction pour normaliser les questions du fichier 3 (format: options: [{label, text}], solution)
function normalizeQuestionsThree(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => {
    let opts: string[] = [];
    if (Array.isArray(q.options)) {
      if (q.options[0] && typeof q.options[0] === 'object' && 'label' in q.options[0]) {
        opts = q.options.map((o: any) => `${o.label}. ${o.text}`);
      } else if (q.options[0] && typeof q.options[0] === 'object' && 'key' in q.options[0]) {
        opts = q.options.map((o: any) => `${o.key}. ${o.text}`);
      } else if (q.options[0] && typeof q.options[0] === 'object' && 'id' in q.options[0]) {
        opts = q.options.map((o: any) => `${o.id}. ${o.text}`);
      } else {
        opts = q.options;
      }
    }

    return {
      id: q.id,
      question: q.question,
      options: opts,
      correctAnswer: q.solution || q.answer || q.correctAnswers?.[0] || '',
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Fonction pour normaliser les questions format array simple
function normalizeQuestionsSimple(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => ({
    id: q.id,
    question: q.question,
    options: Array.isArray(q.options) ? q.options : [],
    correctAnswer: q.solution || q.answer || '',
    explanation: q.explanation || q.explication || ''
  }));
}

// Interface pour un mini-examen
export interface MiniExam {
  id: number;
  name: string;
  nameFr: string;
  questions: NormalizedQuestion[];
  questionCount: number;
  duration?: number; // durée en secondes (défaut: 25min)
}

// Liste de tous les mini-examens
export const pmpMiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'Mini Exam 1',
    nameFr: 'Mini Examen 1',
    questions: normalizeQuestionsOne(questionsOne),
    questionCount: questionsOne.length
  },
  {
    id: 2,
    name: 'Mini Exam 2',
    nameFr: 'Mini Examen 2',
    questions: normalizeQuestionsTwo(questionsTwo),
    questionCount: questionsTwo.length
  },
  {
    id: 3,
    name: 'Mini Exam 3',
    nameFr: 'Mini Examen 3',
    questions: normalizeQuestionsThree(questionsThree),
    questionCount: questionsThree.length
  },
  {
    id: 4,
    name: 'Mini Exam 4',
    nameFr: 'Mini Examen 4',
    questions: normalizeQuestionsOne(questionsFour),
    questionCount: questionsFour.length
  },
  {
    id: 5,
    name: 'Mini Exam 5',
    nameFr: 'Mini Examen 5',
    questions: normalizeQuestionsThree(questionsFive),
    questionCount: questionsFive.length
  },
  {
    id: 6,
    name: 'Mini Exam 6',
    nameFr: 'Mini Examen 6',
    questions: normalizeQuestionsThree(questionsSix),
    questionCount: questionsSix.length
  },
  {
    id: 7,
    name: 'Mini Exam 7',
    nameFr: 'Mini Examen 7',
    questions: normalizeQuestionsThree(questionsSeven),
    questionCount: questionsSeven.length
  },
  {
    id: 9,
    name: 'Mini Exam 9',
    nameFr: 'Mini Examen 9',
    questions: normalizeQuestionsSimple([...questionsEight, ...questionsTen]),
    questionCount: questionsEight.length + questionsTen.length,
    duration: 10 * 60 // 600s (10min)
  }
];

// Fonction pour obtenir un mini-examen par son ID
export function getMiniExamById(id: number): MiniExam | undefined {
  return pmpMiniExams.find(exam => exam.id === id);
}

// Fonction pour obtenir toutes les questions d'un mini-examen
export function getMiniExamQuestions(id: number): NormalizedQuestion[] {
  const exam = getMiniExamById(id);
  return exam ? exam.questions : [];
}

// Total des questions
export const totalMiniExamQuestions = pmpMiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
