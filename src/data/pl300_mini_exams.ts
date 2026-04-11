// Fichier centralisé pour les mini-examens PL-300

import { questionsPreparationDonnees } from './pl-300-examen_one';
import { questions as questionsTwo } from './pl-300-examen_two';
import { section3Questions } from './pl-300-examen_three';
import { section4Questions } from './pl-300-examen_four';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

function normalize(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => {
    const options = Array.isArray(q.options) ? q.options : [];
    let correctAnswer = q.solution || q.answer || '';
    // If correctAnswer is a single letter (A-D), resolve to actual option text
    if (/^[A-D]$/.test(correctAnswer)) {
      const index = correctAnswer.charCodeAt(0) - 65;
      if (index >= 0 && index < options.length) {
        correctAnswer = options[index];
      }
    }
    return {
      id: q.id,
      question: q.question,
      options,
      correctAnswer,
      explanation: q.explication || q.explanation || ''
    };
  });
}

// Combine all PL-300 questions from the 4 exam files
const allQuestions = [
  ...questionsPreparationDonnees,
  ...questionsTwo,
  ...section3Questions,
  ...section4Questions
];

// Split into mini exams of 15 questions each
const MINI_EXAM_SIZE = 15;
const miniExamCount = Math.ceil(allQuestions.length / MINI_EXAM_SIZE);

export const pl300MiniExams: MiniExam[] = Array.from({ length: miniExamCount }, (_, i) => {
  const start = i * MINI_EXAM_SIZE;
  const questions = allQuestions.slice(start, start + MINI_EXAM_SIZE);
  return {
    id: i + 1,
    name: `PL-300 - Mini Exam ${i + 1}`,
    nameFr: `PL-300 - Mini Examen ${i + 1}`,
    questions: normalize(questions),
    questionCount: questions.length
  };
});

export function getPl300MiniExamById(id: number): MiniExam | undefined {
  return pl300MiniExams.find(exam => exam.id === id);
}

export const totalPl300MiniExamQuestions = pl300MiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
