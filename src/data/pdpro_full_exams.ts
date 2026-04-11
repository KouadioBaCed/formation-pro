// Fichier centralisé pour les examens complets Project DPro

import { question as questionsOne } from './pdpro/mini_exam/mini_examen_1';
import type { NormalizedFullQuestion, FullExam } from './pmp_full_exams';

function normalize(questions: any[]): NormalizedFullQuestion[] {
  return questions.map((q, index) => {
    const answer = q.answer || q.solution || '';
    const options = Array.isArray(q.options) ? q.options : [];
    // Use pre-computed correctAnswers from source data if available
    let correctAnswers: string[] | undefined = Array.isArray(q.correctAnswers) ? q.correctAnswers : undefined;
    let correctAnswer = answer;
    // Fallback: detect multi-answer from "A, B, C" format
    if (!correctAnswers) {
      const parts = answer.split(',').map((l: string) => l.trim());
      if (parts.length > 1 && parts.every((p: string) => /^[A-D]$/.test(p))) {
        const resolved = parts.map((l: string) => {
          const idx = l.charCodeAt(0) - 65;
          return idx >= 0 && idx < options.length ? options[idx] : l;
        });
        correctAnswers = resolved;
      }
    }
    // Resolve correctAnswer to option text for single-letter answers
    if (/^[A-D]$/.test(answer)) {
      const idx = answer.charCodeAt(0) - 65;
      if (idx >= 0 && idx < options.length) correctAnswer = options[idx];
    } else if (correctAnswers && correctAnswers.length > 0) {
      correctAnswer = correctAnswers[0];
    }
    return {
      id: index + 1,
      question: q.question || '',
      options,
      correctAnswer,
      correctAnswers,
      rawAnswer: answer,
      explanation: q.explanation || q.explication || ''
    };
  });
}

export const pdproFullExams: FullExam[] = [
  {
    id: 1,
    name: 'Project DPro - Full Exam 1',
    nameFr: 'Project DPro - Examen Blanc 1',
    questions: normalize(questionsOne),
    questionCount: questionsOne.length
  }
];

export function getPdproFullExamById(id: number): FullExam | undefined {
  return pdproFullExams.find(exam => exam.id === id);
}

export const totalPdproFullExamQuestions = pdproFullExams.reduce((sum, exam) => sum + exam.questionCount, 0);
