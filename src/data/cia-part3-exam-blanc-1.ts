import type { Question, Category, Topic, Chapter } from '../types';
import * as raw from './cia_part_3_exam_1';

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
    topic: 'cia-p3-exam-blanc-1',
    chapter: 'cia-p3-eb1-general',
    status: 'unseen' as const,
  };
}

// Collect individually exported questions (question1, question2, etc.)
const namedQuestions = Object.keys(raw)
  .filter((k) => /^question\d+$/.test(k))
  .map((k) => (raw as any)[k]) as Question[];

// Convert array-based questions from examen3Part2
const part2Questions: Question[] = ((raw as any).examen3Part2 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb1-part2')
);

// Convert array-based questions from examen3Part5
const part5Questions: Question[] = ((raw as any).examen3Part5 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb1-part5')
);

// Convert array-based questions from examen3Part7
const part7Questions: Question[] = ((raw as any).examen3Part7 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb1-part7')
);

// Convert array-based questions from examen3Part8
const part8Questions: Question[] = ((raw as any).examen3Part8 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb1-part8')
);

// Convert ciaPart2Questions81to90
const part81to90Questions: Question[] = ((raw as any).ciaPart2Questions81to90 || []).map((q: any) => ({
  id: `cia-p3-eb1-q-${q.id}`,
  number: q.id,
  text: q.question,
  answers: (q.options || []).map((opt: string, idx: number) => ({
    id: String.fromCharCode(97 + idx),
    text: opt,
    isCorrect: String.fromCharCode(97 + idx) === q.correct?.toLowerCase(),
  })),
  answerType: 'single' as const,
  explanation: q.explanation || '',
  difficulty: 'medium' as const,
  topic: 'cia-p3-exam-blanc-1',
  chapter: 'cia-p3-eb1-general',
  status: 'unseen' as const,
}));

// Convert examen3Part9
const part9Questions: Question[] = ((raw as any).examen3Part9 || []).map((q: any) =>
  convertOldFormatQuestion(q, 'cia-p3-eb1-part9')
);

// Combine all questions
export const ciaPart3EB1Questions: Question[] = [
  ...namedQuestions,
  ...part2Questions,
  ...part5Questions,
  ...part7Questions,
  ...part8Questions,
  ...part81to90Questions,
  ...part9Questions,
];

// Define chapters for this exam
export const ciaPart3EB1Chapters: Chapter[] = [
  { id: 'cia-p3-eb1-ch-1', name: 'Gestion de l\'AAI', slug: 'cia-p3-eb1-general', questionCount: 20 },
  { id: 'cia-p3-eb1-ch-2', name: 'Planification et Ressources', slug: 'cia-p3-eb1-planning', questionCount: 20 },
  { id: 'cia-p3-eb1-ch-3', name: 'Évaluation des Risques', slug: 'cia-p3-eb1-risk', questionCount: 20 },
  { id: 'cia-p3-eb1-ch-4', name: 'Missions et Programmes', slug: 'cia-p3-eb1-engagements', questionCount: 20 },
  { id: 'cia-p3-eb1-ch-5', name: 'Documentation et Suivi', slug: 'cia-p3-eb1-documentation', questionCount: 20 },
];

// Define topics for this exam
export const ciaPart3EB1Topics: Topic[] = [
  {
    id: 'cia-p3-eb1-topic-1',
    name: 'CIA Partie 3 - Examen Blanc 1',
    slug: 'cia-p3-exam-blanc-1',
    description: 'Examen blanc pour la partie 3 du CIA - Connaissances en audit interne',
    icon: 'ClipboardCheck',
    questionCount: ciaPart3EB1Questions.length,
    chapters: ciaPart3EB1Chapters,
  },
];

// Define category for this exam
export const ciaPart3EB1Category: Category = {
  id: 'cia-p3-eb1-cat',
  name: 'CIA Partie 3 - Examen Blanc 1',
  slug: 'cia-part3-exam-blanc-1',
  description: 'Examen blanc n°1 pour la préparation à la Partie 3 du CIA (Certified Internal Auditor)',
  icon: 'GraduationCap',
  color: 'indigo',
  topics: ciaPart3EB1Topics,
};

// Answer key for reference
export const ciaPart3EB1AnswerKey: Record<number, string> = {};
ciaPart3EB1Questions.forEach((q) => {
  const correctAnswer = q.answers.find(a => a.isCorrect);
  if (correctAnswer) {
    ciaPart3EB1AnswerKey[q.number] = correctAnswer.id;
  }
});

export default {
  questions: ciaPart3EB1Questions,
  chapters: ciaPart3EB1Chapters,
  topics: ciaPart3EB1Topics,
  category: ciaPart3EB1Category,
  answerKey: ciaPart3EB1AnswerKey,
};
