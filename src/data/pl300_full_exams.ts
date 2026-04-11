// Fichier centralisé pour les examens complets PL-300

import { powerBiQuestions } from './pl-300-examen';
import { questionsPreparationDonnees } from './pl-300-examen_one';
import { questions as questionsTwo } from './pl-300-examen_two';
import { section3Questions } from './pl-300-examen_three';
import { section4Questions } from './pl-300-examen_four';
import type { NormalizedFullQuestion, FullExam } from './pmp_full_exams';

// Normaliser les questions au format types (id, text, answers[{id,text,isCorrect}], explanation)
function normalizeTypesQuestions(questions: any[]): NormalizedFullQuestion[] {
  return questions.map((q, index) => {
    const opts: string[] = [];
    const correctList: string[] = [];

    if (Array.isArray(q.answers)) {
      q.answers.forEach((a: any) => {
        opts.push(a.text || '');
        if (a.isCorrect) correctList.push(a.text || '');
      });
    }

    return {
      id: index + 1,
      question: q.text || q.question || '',
      options: opts,
      correctAnswer: correctList[0] || '',
      correctAnswers: correctList.length > 1 ? correctList : undefined,
      answerType: q.answerType === 'multiple' ? 'multiple' as const : (correctList.length > 1 ? 'multiple' as const : 'single' as const),
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Normaliser les questions au format simple (question, options string[], solution, explication)
function normalizeSimpleQuestions(questions: any[]): NormalizedFullQuestion[] {
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

    // Detect multi-answer from correctAnswers array or answer format "A, B, C"
    let correctAnswers: string[] | undefined = Array.isArray(q.correctAnswers) ? q.correctAnswers : undefined;
    const answer = q.correctAnswer || q.answer || q.solution || '';
    if (!correctAnswers && typeof answer === 'string' && answer.includes(',')) {
      const parts = answer.split(',').map((s: string) => s.trim());
      if (parts.length > 1 && parts.every((p: string) => /^[A-D]$/.test(p))) {
        correctAnswers = parts.map((l: string) => {
          const idx = l.charCodeAt(0) - 65;
          return idx >= 0 && idx < opts.length ? opts[idx] : l;
        });
      }
    }

    return {
      id: q.id,
      question: q.question || '',
      options: opts,
      correctAnswer: correctAnswers ? correctAnswers[0] : answer,
      correctAnswers,
      explanation: q.explanation || q.explication || q.rationale || ''
    };
  });
}

// Liste de tous les examens complets PL-300
export const pl300FullExams: FullExam[] = [
  {
    id: 1,
    name: 'PL-300 Full Exam 1',
    nameFr: 'PL-300 Examen Complet 1',
    questions: normalizeTypesQuestions(powerBiQuestions),
    questionCount: powerBiQuestions.length
  },
  {
    id: 2,
    name: 'PL-300 - Data Preparation',
    nameFr: 'PL-300 - Préparation des Données',
    questions: normalizeSimpleQuestions(questionsPreparationDonnees),
    questionCount: questionsPreparationDonnees.length
  },
  {
    id: 3,
    name: 'PL-300 Exam 2',
    nameFr: 'PL-300 Examen 2',
    questions: normalizeSimpleQuestions(questionsTwo),
    questionCount: questionsTwo.length
  },
  {
    id: 4,
    name: 'PL-300 Exam 3',
    nameFr: 'PL-300 Examen 3',
    questions: normalizeSimpleQuestions(section3Questions),
    questionCount: section3Questions.length
  },
  {
    id: 5,
    name: 'PL-300 Exam 4',
    nameFr: 'PL-300 Examen 4',
    questions: normalizeSimpleQuestions(section4Questions),
    questionCount: section4Questions.length
  }
];

// Fonction pour obtenir un examen complet par son ID
export function getPl300FullExamById(id: number): FullExam | undefined {
  return pl300FullExams.find(exam => exam.id === id);
}

// Total des questions
export const totalPl300FullExamQuestions = pl300FullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
