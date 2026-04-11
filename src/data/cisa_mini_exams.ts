// Fichier centralisé pour tous les mini-examens CISA

import { questionsCISA as questionsOne } from './cisa/mini_examens/mini_examen_1';
import { questionsCISA2 as questionsTwo } from './cisa/mini_examens/mini_examen_2';
import { questionsCISA3 as questionsThree } from './cisa/mini_examens/mini_examen_3';
import { questionsCISA4 as questionsFour } from './cisa/mini_examens/mini_examen_4';
import { questionsCISA5 as questionsFive } from './cisa/mini_examens/mini_examen_5';
import { questionsCISA6 as questionsSix } from './cisa/mini_examens/mini_examen_6';
import { questions as questionsSeven } from './cisa/mini_examens/mini_examen_7';
import { questionsCISA8 as questionsEight } from './cisa/mini_examens/mini_examen_8';
import { questionsCISA9 as questionsNine } from './cisa/mini_examens/mini_examen_9';
import { questions as questionsTen } from './cisa/mini_examens/mini_examen_10';
import type { NormalizedQuestion, MiniExam } from './pmp_mini_exams';

// Normaliser les questions format {id, question, options[], answer, explanation}
function normalizeAnswerFormat(questions: any[]): NormalizedQuestion[] {
  return questions.map(q => {
    const options = Array.isArray(q.options) ? q.options : [];
    let correctAnswer = q.answer || q.solution || '';
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
      explanation: q.explanation || q.explication || ''
    };
  });
}

// Liste de tous les mini-examens CISA
export const cisaMiniExams: MiniExam[] = [
  {
    id: 1,
    name: 'CISA - Mini Exam 1',
    nameFr: 'CISA - Mini Examen 1',
    questions: normalizeAnswerFormat(questionsOne),
    questionCount: questionsOne.length
  },
  {
    id: 2,
    name: 'CISA - Mini Exam 2',
    nameFr: 'CISA - Mini Examen 2',
    questions: normalizeAnswerFormat(questionsTwo),
    questionCount: questionsTwo.length
  },
  {
    id: 3,
    name: 'CISA - Mini Exam 3',
    nameFr: 'CISA - Mini Examen 3',
    questions: normalizeAnswerFormat(questionsThree),
    questionCount: questionsThree.length
  },
  {
    id: 4,
    name: 'CISA - Mini Exam 4',
    nameFr: 'CISA - Mini Examen 4',
    questions: normalizeAnswerFormat(questionsFour),
    questionCount: questionsFour.length
  },
  {
    id: 5,
    name: 'CISA - Mini Exam 5',
    nameFr: 'CISA - Mini Examen 5',
    questions: normalizeAnswerFormat(questionsFive),
    questionCount: questionsFive.length
  },
  {
    id: 6,
    name: 'CISA - Mini Exam 6',
    nameFr: 'CISA - Mini Examen 6',
    questions: normalizeAnswerFormat(questionsSix),
    questionCount: questionsSix.length
  },
  {
    id: 7,
    name: 'CISA - Mini Exam 7',
    nameFr: 'CISA - Mini Examen 7',
    questions: normalizeAnswerFormat(questionsSeven),
    questionCount: questionsSeven.length
  },
  {
    id: 8,
    name: 'CISA - Mini Exam 8',
    nameFr: 'CISA - Mini Examen 8',
    questions: normalizeAnswerFormat(questionsEight),
    questionCount: questionsEight.length
  },
  {
    id: 9,
    name: 'CISA - Mini Exam 9',
    nameFr: 'CISA - Mini Examen 9',
    questions: normalizeAnswerFormat(questionsNine),
    questionCount: questionsNine.length
  },
  {
    id: 10,
    name: 'CISA - Mini Exam 10',
    nameFr: 'CISA - Mini Examen 10',
    questions: normalizeAnswerFormat(questionsTen),
    questionCount: questionsTen.length
  }
];

// Fonction pour obtenir un mini-examen par son ID
export function getCisaMiniExamById(id: number): MiniExam | undefined {
  return cisaMiniExams.find(exam => exam.id === id);
}

// Total des questions
export const totalCisaMiniExamQuestions = cisaMiniExams.reduce((sum, exam) => sum + exam.questionCount, 0);
