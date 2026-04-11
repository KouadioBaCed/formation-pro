// Fichier centralisé pour les examens complets PMP

import { questions as questionsOne } from './final_exam_pmp_one';
import { questions as questionsTwo } from './final_exam_pmp_two';
import { section4Questions as questionsThree } from './final_exam_pmp_three';
import { questions as questionsFour } from './final_exam_pmp_four';
import { questions as questionsFive } from './mini_examen_pmp_five';

// Interface normalisée pour les questions
export interface NormalizedFullQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  correctAnswers?: string[];
  rawAnswer?: string;
  answerType?: 'single' | 'multiple';
  explanation: string;
}

// Interface pour un examen complet
export interface FullExam {
  id: number;
  name: string;
  nameFr: string;
  questions: NormalizedFullQuestion[];
  questionCount: number;
}

// Normaliser les questions du fichier 1 (format: options string[], answer: "C. text", explanation)
function normalizeQuestionsOne(questions: any[]): NormalizedFullQuestion[] {
  return questions.map(q => ({
    id: q.id,
    question: q.question,
    options: Array.isArray(q.options)
      ? q.options.map((o: any) =>
          typeof o === 'string' ? o : (o.label || o.key) ? `${o.label || o.key}. ${o.text || o.value}` : String(o)
        )
      : [],
    correctAnswer: q.answer || q.correctAnswer || '',
    explanation: q.explanation || q.explication || q.rationale || ''
  }));
}

// Normaliser les questions du fichier 2 (format: options [{key, text}], correctAnswer: "B")
function normalizeQuestionsTwo(questions: any[]): NormalizedFullQuestion[] {
  return questions.map(q => {
    let opts: string[] = [];
    if (Array.isArray(q.options)) {
      opts = q.options.map((o: any) => {
        if (typeof o === 'string') return o;
        if (o.key) return `${o.key}. ${o.text}`;
        if (o.label) return `${o.label}. ${o.text || o.value}`;
        return String(o);
      });
    }

    return {
      id: q.id,
      question: q.question,
      options: opts,
      correctAnswer: q.correctAnswer || q.answer || q.solution || '',
      explanation: q.explanation || q.explication || q.rationale || ''
    };
  });
}

// Liste de tous les examens complets
export const pmpFullExams: FullExam[] = [
  {
    id: 1,
    name: 'Full Exam 1',
    nameFr: 'Examen Complet 1',
    questions: normalizeQuestionsOne(questionsOne),
    questionCount: questionsOne.length
  },
  {
    id: 2,
    name: 'Full Exam 2',
    nameFr: 'Examen Complet 2',
    questions: normalizeQuestionsTwo(questionsTwo),
    questionCount: questionsTwo.length
  },
  {
    id: 3,
    name: 'Full Exam 3',
    nameFr: 'Examen Complet 3',
    questions: normalizeQuestionsTwo(questionsThree),
    questionCount: questionsThree.length
  },
  {
    id: 4,
    name: 'Full Exam 4',
    nameFr: 'Examen Complet 4',
    questions: normalizeQuestionsTwo(questionsFour),
    questionCount: questionsFour.length
  },
  {
    id: 5,
    name: 'Full Exam 5',
    nameFr: 'Examen Complet 5',
    questions: normalizeQuestionsTwo(questionsFive),
    questionCount: questionsFive.length
  }
];

// Fonction pour obtenir un examen complet par son ID
export function getFullExamById(id: number): FullExam | undefined {
  return pmpFullExams.find(exam => exam.id === id);
}

// Fonction pour obtenir toutes les questions d'un examen complet
export function getFullExamQuestions(id: number): NormalizedFullQuestion[] {
  const exam = getFullExamById(id);
  return exam ? exam.questions : [];
}

// Total des questions
export const totalFullExamQuestions = pmpFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
