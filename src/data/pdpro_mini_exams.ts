// Fichier centralisé pour les mini-examens Project DPro (PM4NGOs)

import { question as allQuestions } from './pdpro/mini_exam/mini_examen_1';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

function normalize(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => {
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
      id: q.id,
      question: q.question,
      options,
      correctAnswer,
      correctAnswers,
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Split 30 questions into 2 mini exams of 15 questions each
const miniExamQuestions1 = allQuestions.slice(0, 15);
const miniExamQuestions2 = allQuestions.slice(15, 30);

export const pdproMiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'Project DPro - Mini Exam 1',
    nameFr: 'Project DPro - Mini Examen 1',
    questions: normalize(miniExamQuestions1),
    questionCount: miniExamQuestions1.length
  },
  {
    id: 2,
    name: 'Project DPro - Mini Exam 2',
    nameFr: 'Project DPro - Mini Examen 2',
    questions: normalize(miniExamQuestions2),
    questionCount: miniExamQuestions2.length
  }
];

export function getPdproMiniExamById(id: number): MiniExam | undefined {
  return pdproMiniExams.find(exam => exam.id === id);
}

export const totalPdproMiniExamQuestions = pdproMiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
