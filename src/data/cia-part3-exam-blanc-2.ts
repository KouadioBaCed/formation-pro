import type { Question, Category, Topic, Chapter } from '../types';
import * as raw from './cia_part_3_exam_2';

// Helper function to convert old format questions to new format
function convertOldFormatQuestion(q: any, baseId: string): Question {
  const correctAnswer = q.reponse?.toLowerCase() || 'a';
  const choix = q.choix || {};

  return {
    id: `${baseId}-q-${q.numero}`,
    number: q.numero,
    text: q.question,
    answers: [
      { id: 'a', text: choix.a || '', isCorrect: correctAnswer === 'a' },
      { id: 'b', text: choix.b || '', isCorrect: correctAnswer === 'b' },
      { id: 'c', text: choix.c || '', isCorrect: correctAnswer === 'c' },
      { id: 'd', text: choix.d || '', isCorrect: correctAnswer === 'd' },
    ].filter(a => a.text !== ''),
    answerType: 'single' as const,
    explanation: (q.explication || '').trim(),
    difficulty: 'medium' as const,
    topic: 'cia-p3-exam-blanc-2',
    chapter: 'cia-p3-eb2-general',
    status: 'unseen' as const,
  };
}

// Helper function to convert questions with options array format
function convertOptionsFormatQuestion(q: any, baseId: string): Question {
  const options = q.options || [];
  const correctText = q.correctAnswer || q.correct || '';

  return {
    id: `${baseId}-q-${q.id}`,
    number: q.id,
    text: q.question,
    answers: options.map((opt: string, idx: number) => ({
      id: String.fromCharCode(97 + idx),
      text: opt,
      isCorrect: opt === correctText || String.fromCharCode(97 + idx) === q.correct?.toLowerCase(),
    })),
    answerType: 'single' as const,
    explanation: q.explanation || '',
    difficulty: 'medium' as const,
    topic: 'cia-p3-exam-blanc-2',
    chapter: 'cia-p3-eb2-general',
    status: 'unseen' as const,
  };
}

// Convert examenAAI_Q1to10
const q1to10: Question[] = ((raw as any).examenAAI_Q1to10 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb2')
);

// Convert ciaPart2Questions11to20
const q11to20: Question[] = ((raw as any).ciaPart2Questions11to20 || []).map((q: any) =>
  convertOptionsFormatQuestion(q, 'cia-p3-eb2')
);

// Convert examenAAI_Q21to30
const q21to30: Question[] = ((raw as any).examenAAI_Q21to30 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb2')
);

// Convert ciaPart2Questions31to40
const q31to40: Question[] = ((raw as any).ciaPart2Questions31to40 || []).map((q: any) =>
  convertOptionsFormatQuestion(q, 'cia-p3-eb2')
);

// Convert examenAAI_Q41to50
const q41to50: Question[] = ((raw as any).examenAAI_Q41to50 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb2')
);

// Convert ciaPart2Questions51to60
const q51to60: Question[] = ((raw as any).ciaPart2Questions51to60 || []).map((q: any) =>
  convertOptionsFormatQuestion(q, 'cia-p3-eb2')
);

// Convert auditQuestions (71-80)
const q71to80: Question[] = ((raw as any).auditQuestions || []).map((q: any) => {
  const options = q.options || [];
  const correctText = q.correctAnswer || '';

  return {
    id: `cia-p3-eb2-q-${q.id}`,
    number: q.id,
    text: q.question,
    answers: options.map((opt: string, idx: number) => ({
      id: String.fromCharCode(97 + idx),
      text: opt,
      isCorrect: opt === correctText,
    })),
    answerType: 'single' as const,
    explanation: '',
    difficulty: 'medium' as const,
    topic: 'cia-p3-exam-blanc-2',
    chapter: 'cia-p3-eb2-general',
    status: 'unseen' as const,
  };
});

// Convert examenAAI_Q81to90
const q81to90: Question[] = ((raw as any).examenAAI_Q81to90 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb2')
);

// Convert examenAAI_Q91to100
const q91to100: Question[] = ((raw as any).examenAAI_Q91to100 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb2')
);

// Combine all questions
export const ciaPart3EB2Questions: Question[] = [
  ...q1to10,
  ...q11to20,
  ...q21to30,
  ...q31to40,
  ...q41to50,
  ...q51to60,
  ...q71to80,
  ...q81to90,
  ...q91to100,
];

// Define chapters for this exam
export const ciaPart3EB2Chapters: Chapter[] = [
  { id: 'cia-p3-eb2-ch-1', name: 'Gestion de l\'Audit Interne', slug: 'cia-p3-eb2-general', questionCount: 20 },
  { id: 'cia-p3-eb2-ch-2', name: 'Planification des Missions', slug: 'cia-p3-eb2-planning', questionCount: 20 },
  { id: 'cia-p3-eb2-ch-3', name: 'Exécution de la Mission', slug: 'cia-p3-eb2-execution', questionCount: 20 },
  { id: 'cia-p3-eb2-ch-4', name: 'Communication des Résultats', slug: 'cia-p3-eb2-communication', questionCount: 20 },
  { id: 'cia-p3-eb2-ch-5', name: 'Suivi et Amélioration', slug: 'cia-p3-eb2-followup', questionCount: 20 },
];

// Define topics for this exam
export const ciaPart3EB2Topics: Topic[] = [
  {
    id: 'cia-p3-eb2-topic-1',
    name: 'CIA Partie 3 - Examen Blanc 2',
    slug: 'cia-p3-exam-blanc-2',
    description: 'Examen blanc n°2 pour la partie 3 du CIA - Connaissances en audit interne',
    icon: 'ClipboardCheck',
    questionCount: ciaPart3EB2Questions.length,
    chapters: ciaPart3EB2Chapters,
  },
];

// Define category for this exam
export const ciaPart3EB2Category: Category = {
  id: 'cia-p3-eb2-cat',
  name: 'CIA Partie 3 - Examen Blanc 2',
  slug: 'cia-part3-exam-blanc-2',
  description: 'Examen blanc n°2 pour la préparation à la Partie 3 du CIA (Certified Internal Auditor)',
  icon: 'GraduationCap',
  color: 'purple',
  topics: ciaPart3EB2Topics,
};

// Answer key for reference
export const ciaPart3EB2AnswerKey: Record<number, string> = {};
ciaPart3EB2Questions.forEach((q) => {
  const correctAnswer = q.answers.find(a => a.isCorrect);
  if (correctAnswer) {
    ciaPart3EB2AnswerKey[q.number] = correctAnswer.id;
  }
});

export default {
  questions: ciaPart3EB2Questions,
  chapters: ciaPart3EB2Chapters,
  topics: ciaPart3EB2Topics,
  category: ciaPart3EB2Category,
  answerKey: ciaPart3EB2AnswerKey,
};
