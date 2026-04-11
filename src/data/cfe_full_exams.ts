// Fichier centralisé pour les examens complets CFE

import { cfe3Questions } from './cfe3-financial-transactions';
import { cfe3FraudPreventionQuestions } from './cfe3-fraud-prevention';
import { cfe3InvestigationQuestions } from './cfe3-investigation';
import { cfe3LawQuestions } from './cfe3-law';
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

// Liste de tous les examens complets CFE
export const cfeFullExams: FullExam[] = [
  {
    id: 1,
    name: 'CFE - Financial Transactions',
    nameFr: 'CFE - Transactions Financières',
    questions: normalizeTypesQuestions(cfe3Questions),
    questionCount: cfe3Questions.length
  },
  {
    id: 2,
    name: 'CFE - Fraud Prevention',
    nameFr: 'CFE - Prévention de la Fraude',
    questions: normalizeTypesQuestions(cfe3FraudPreventionQuestions),
    questionCount: cfe3FraudPreventionQuestions.length
  },
  {
    id: 3,
    name: 'CFE - Investigation',
    nameFr: 'CFE - Investigation',
    questions: normalizeTypesQuestions(cfe3InvestigationQuestions),
    questionCount: cfe3InvestigationQuestions.length
  },
  {
    id: 4,
    name: 'CFE - Law',
    nameFr: 'CFE - Droit',
    questions: normalizeTypesQuestions(cfe3LawQuestions),
    questionCount: cfe3LawQuestions.length
  }
];

// Fonction pour obtenir un examen complet par son ID
export function getCfeFullExamById(id: number): FullExam | undefined {
  return cfeFullExams.find(exam => exam.id === id);
}

// Total des questions
export const totalCfeFullExamQuestions = cfeFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
