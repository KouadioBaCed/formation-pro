import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  Lightbulb,
  Sparkles,
  Check,
} from 'lucide-react';
import type { Question } from '../../types';
import { DifficultyBadge } from '../ui/Badge';
import { useStore } from '../../store/useStore';

interface QuestionViewProps {
  question: Question;
  topicSlug: string;
  prevQuestionId?: string;
  nextQuestionId?: string;
  showNavigation?: boolean;
  isExamMode?: boolean;
  selectedAnswers?: string[];
  onAnswerSelect?: (answerId: string) => void;
  showCorrectAnswer?: boolean;
}

export const QuestionView = ({
  question,
  topicSlug,
  prevQuestionId,
  nextQuestionId,
  showNavigation = true,
  isExamMode = false,
  selectedAnswers = [],
  onAnswerSelect,
  showCorrectAnswer = false,
}: QuestionViewProps) => {
  const { toggleQuestionMarked, updateQuestionStatus } = useStore();
  const [showAnswer, setShowAnswer] = useState(showCorrectAnswer);
  const [localSelected, setLocalSelected] = useState<string[]>(selectedAnswers);
  const [animateCorrect, setAnimateCorrect] = useState(false);

  // Réinitialiser les états quand on change de question
  useEffect(() => {
    setLocalSelected([]);
    setShowAnswer(false);
    setAnimateCorrect(false);
  }, [question.id]);

  useEffect(() => {
    if (!isExamMode && question.status === 'unseen') {
      updateQuestionStatus(question.id, 'seen');
    }
  }, [question.id, question.status, isExamMode, updateQuestionStatus]);

  useEffect(() => {
    if (showAnswer || showCorrectAnswer) {
      setAnimateCorrect(true);
    }
  }, [showAnswer, showCorrectAnswer]);

  const handleAnswerClick = (answerId: string) => {
    let newSelected: string[];

    if (question.answerType === 'single') {
      newSelected = [answerId];
    } else {
      if (localSelected.includes(answerId)) {
        newSelected = localSelected.filter((id) => id !== answerId);
      } else {
        newSelected = [...localSelected, answerId];
      }
    }

    setLocalSelected(newSelected);
    if (onAnswerSelect) {
      onAnswerSelect(answerId);
    }
  };

  const getAnswerStyles = (answer: { id: string; isCorrect: boolean }) => {
    const isSelected = localSelected.includes(answer.id);
    const shouldShowCorrect = showAnswer || showCorrectAnswer;

    if (shouldShowCorrect) {
      if (answer.isCorrect) {
        return 'answer-option-correct';
      }
      if (isSelected && !answer.isCorrect) {
        return 'answer-option-incorrect';
      }
    }

    if (isSelected) {
      return 'answer-option-selected';
    }

    return 'answer-option';
  };

  const getLetterStyles = (answer: { id: string; isCorrect: boolean }) => {
    const isSelected = localSelected.includes(answer.id);
    const shouldShowCorrect = showAnswer || showCorrectAnswer;

    if (shouldShowCorrect) {
      if (answer.isCorrect) {
        return 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30';
      }
      if (isSelected && !answer.isCorrect) {
        return 'bg-gradient-to-br from-red-500 to-rose-500 text-white shadow-lg shadow-red-500/30';
      }
    }

    if (isSelected) {
      return 'bg-gradient-to-br from-primary-500 to-cyan-500 text-white shadow-lg shadow-primary-500/30';
    }

    return 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300';
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Question Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
          <div className="question-number w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl">
            {question.number}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <DifficultyBadge difficulty={question.difficulty} />
            <span className="text-xs sm:text-sm text-dark-500 dark:text-dark-400 capitalize bg-dark-100/50 dark:bg-dark-800/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg truncate max-w-[150px] sm:max-w-none">
              {question.chapter.replace(/-/g, ' ')}
            </span>
          </div>
        </div>

        {!isExamMode && (
          <button
            onClick={() => toggleQuestionMarked(question.id)}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-300 self-start sm:self-auto ${
              question.status === 'marked'
                ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 shadow-lg shadow-yellow-500/20'
                : 'text-dark-500 hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
            }`}
          >
            {question.status === 'marked' ? (
              <>
                <BookmarkCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-semibold">Marquée</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-semibold">Marquer</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Question Card */}
      <div className="card-glass p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
        {/* Question Text */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <p className="text-base sm:text-lg md:text-xl text-dark-900 dark:text-white leading-relaxed font-medium">
            {question.text}
          </p>
          {question.image && (
            <img
              src={question.image}
              alt="Question illustration"
              className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl max-w-full shadow-lg"
            />
          )}
        </div>

        {/* Answer Type Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-xs sm:text-sm text-dark-500 dark:text-dark-400 bg-dark-100/50 dark:bg-dark-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl w-fit">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
          <span className="hidden sm:inline">
            {question.answerType === 'single'
              ? 'Sélectionnez une seule réponse'
              : 'Sélectionnez toutes les réponses correctes'}
          </span>
          <span className="sm:hidden">
            {question.answerType === 'single'
              ? 'Une seule réponse'
              : 'Plusieurs réponses'}
          </span>
        </div>

        {/* Answers */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {question.answers.map((answer, index) => {
            const isSelected = localSelected.includes(answer.id);
            const shouldShowCorrect = showAnswer || showCorrectAnswer;
            const letterIndex = String.fromCharCode(65 + index);

            return (
              <button
                key={answer.id}
                onClick={() => !shouldShowCorrect && handleAnswerClick(answer.id)}
                disabled={shouldShowCorrect}
                className={`w-full text-left transition-all duration-300 p-3 sm:p-4 rounded-lg sm:rounded-xl ${getAnswerStyles(answer)} ${
                  shouldShowCorrect ? 'cursor-default' : ''
                } ${animateCorrect && shouldShowCorrect && answer.isCorrect ? 'animate-bounce-in' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className={`answer-letter w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base rounded-lg sm:rounded-xl ${getLetterStyles(answer)}`}>
                  {letterIndex}
                </span>
                <span className="flex-1 text-sm sm:text-base text-dark-800 dark:text-dark-200 font-medium leading-relaxed">
                  {answer.text}
                </span>
                {shouldShowCorrect && (
                  <span className="flex-shrink-0">
                    {answer.isCorrect ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                      </div>
                    ) : isSelected ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400" />
                      </div>
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Show Answer / Validate Button */}
        {!isExamMode && (
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
            {question.answerType === 'single' ? (
              /* Pour les questions à réponse unique : bouton Valider seulement */
              !showAnswer && (
                <button
                  onClick={() => setShowAnswer(true)}
                  disabled={localSelected.length === 0}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                    localSelected.length > 0
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50'
                      : 'bg-dark-200 text-dark-400 dark:bg-dark-700 dark:text-dark-500 cursor-not-allowed'
                  }`}
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Valider ma réponse</span>
                </button>
              )
            ) : (
              /* Pour les questions à réponses multiples : garder le comportement actuel */
              <>
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                    showAnswer
                      ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-dark-100 text-dark-700 dark:bg-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600'
                  }`}
                >
                  {showAnswer ? (
                    <>
                      <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Masquer la réponse</span>
                      <span className="sm:hidden">Masquer</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Voir la réponse</span>
                      <span className="sm:hidden">Réponse</span>
                    </>
                  )}
                </button>

                {!showAnswer && localSelected.length > 0 && (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Valider</span>
                    <span className="sm:hidden">Valider</span>
                  </button>
                )}
              </>
            )}
          </div>
        )}

        {/* Feedback pour réponse unique */}
        {(showAnswer || showCorrectAnswer) && question.answerType === 'single' && localSelected.length > 0 && (
          (() => {
            const selectedAnswer = question.answers.find(a => a.id === localSelected[0]);
            const isCorrect = selectedAnswer?.isCorrect;
            return (
              <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl animate-fade-in-up flex items-center gap-3 ${
                isCorrect
                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-300 dark:border-green-700'
                  : 'bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 border border-red-300 dark:border-red-700'
              }`}>
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
                )}
                <span className={`font-bold text-base sm:text-lg ${
                  isCorrect
                    ? 'text-green-700 dark:text-green-300'
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse'}
                </span>
              </div>
            );
          })()
        )}

        {/* Explanation */}
        {(showAnswer || showCorrectAnswer) && (
          <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 border border-primary-200/50 dark:border-primary-800/50 animate-fade-in-up">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-primary-800 dark:text-primary-300">
                Explication
              </h4>
            </div>
            <p className="text-sm sm:text-base text-dark-700 dark:text-dark-300 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      {showNavigation && !isExamMode && (
        <div className="flex items-center justify-between gap-2">
          {prevQuestionId ? (
            <Link
              to={`/question/${topicSlug}/${prevQuestionId}`}
              className="btn-secondary group text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Question précédente</span>
              <span className="sm:hidden">Préc.</span>
            </Link>
          ) : (
            <div />
          )}

          {nextQuestionId ? (
            <Link
              to={`/question/${topicSlug}/${nextQuestionId}`}
              className="btn-primary group text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              <span className="hidden sm:inline">Question suivante</span>
              <span className="sm:hidden">Suiv.</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link to={`/topics/${topicSlug}`} className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2">
              <span className="hidden sm:inline">Retour à la liste</span>
              <span className="sm:hidden">Retour</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
