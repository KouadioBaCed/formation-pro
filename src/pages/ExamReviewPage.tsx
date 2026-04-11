import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Loader2, AlertCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { t } from '../i18n';
import { fetchExamResultById } from '../services/firestore';
import { allQuestions } from '../data/questions';
import type { StoredExamResult } from '../types';

export const ExamReviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useStore();
  const [result, setResult] = useState<StoredExamResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchExamResultById(id)
      .then((data) => {
        if (data) setResult(data);
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-error mx-auto mb-4" />
          <p className="text-dark-600 dark:text-dark-400 mb-4">{t(lang, 'examNotFound')}</p>
          <Link to="/dashboard" className="btn-primary">
            {t(lang, 'backToDashboard')}
          </Link>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-dark-50 dark:bg-dark-950 py-4 sm:py-6 md:py-8">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/dashboard" className="p-2 rounded-xl hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors">
            <ArrowLeft className="w-5 h-5 text-dark-600 dark:text-dark-400" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">
              {t(lang, 'examReview')}
            </h1>
            <p className="text-sm text-dark-500">
              {result.certification.toUpperCase()} - {result.examType} - {new Date(result.completedAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
            </p>
          </div>
        </div>

        {/* Score Summary */}
        <div className="card p-4 sm:p-6 text-center mb-6">
          <div className={`text-3xl sm:text-5xl font-bold mb-2 ${getScoreColor(result.score)}`}>
            {result.score}%
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4">
            <div className="p-2 rounded-lg bg-dark-50 dark:bg-dark-800">
              <div className="text-base sm:text-lg font-bold text-success">{result.correctAnswers}</div>
              <div className="text-[10px] sm:text-xs text-dark-500">{t(lang, 'correct')}</div>
            </div>
            <div className="p-2 rounded-lg bg-dark-50 dark:bg-dark-800">
              <div className="text-base sm:text-lg font-bold text-error">{result.incorrectAnswers}</div>
              <div className="text-[10px] sm:text-xs text-dark-500">{t(lang, 'incorrect')}</div>
            </div>
            <div className="p-2 rounded-lg bg-dark-50 dark:bg-dark-800">
              <div className="text-base sm:text-lg font-bold text-warning">{result.unanswered}</div>
              <div className="text-[10px] sm:text-xs text-dark-500">{t(lang, 'unanswered')}</div>
            </div>
            <div className="p-2 rounded-lg bg-dark-50 dark:bg-dark-800">
              <div className="text-base sm:text-lg font-bold text-dark-900 dark:text-white">{result.totalQuestions}</div>
              <div className="text-[10px] sm:text-xs text-dark-500">Total</div>
            </div>
          </div>
        </div>

        {/* Question-by-question review */}
        <div className="space-y-4">
          {result.answers.map((answer, index) => {
            const question = allQuestions.find(q => q.id === answer.questionId);

            // Embedded data fallback for mini/full/domain exams
            if (!question && answer.questionText && answer.options) {
              return (
                <div
                  key={answer.questionId}
                  className={`card p-3 sm:p-6 border-l-4 ${
                    answer.isCorrect
                      ? 'border-l-green-500'
                      : answer.selectedAnswers.length === 0
                        ? 'border-l-yellow-500'
                        : 'border-l-red-500'
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3 mb-3">
                    {answer.isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-dark-900 dark:text-white">
                        Q{index + 1}: {answer.questionText}
                      </p>
                    </div>
                  </div>

                  <div className="ml-0 sm:ml-8 space-y-2 mb-3">
                    {answer.options.map((opt) => {
                      const isSelected = answer.selectedAnswers.some(s => s === opt.text || s.charAt(0) === opt.id);
                      const isCorrectAnswer = opt.isCorrect;

                      let optionClass = 'bg-dark-50 dark:bg-dark-800 border-dark-200 dark:border-dark-700';
                      if (isCorrectAnswer) {
                        optionClass = 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700';
                      } else if (isSelected && !isCorrectAnswer) {
                        optionClass = 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-2 sm:p-3 rounded-lg border ${optionClass} flex items-start gap-2`}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {isCorrectAnswer && <CheckCircle className="w-4 h-4 text-success" />}
                            {isSelected && !isCorrectAnswer && <XCircle className="w-4 h-4 text-error" />}
                            {!isCorrectAnswer && !isSelected && <div className="w-4 h-4" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={`text-xs sm:text-sm ${
                              isCorrectAnswer
                                ? 'text-green-700 dark:text-green-400 font-medium'
                                : isSelected
                                  ? 'text-red-700 dark:text-red-400'
                                  : 'text-dark-600 dark:text-dark-400'
                            }`}>
                              {opt.text}
                            </span>
                            {isSelected && (
                              <span className="block sm:inline sm:ml-2 text-[10px] sm:text-xs text-dark-400 mt-0.5 sm:mt-0">
                                {lang === 'fr' ? 'Votre réponse' : 'Your answer'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {answer.explanation && (
                    <div className="ml-0 sm:ml-8 p-2 sm:p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                      <p className="text-xs sm:text-sm text-primary-800 dark:text-primary-300">
                        <span className="font-medium">{lang === 'fr' ? 'Explication' : 'Explanation'}:</span>{' '}
                        {answer.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            }

            if (!question) return null;

            const correctAnswerIds = question.answers.filter(a => a.isCorrect).map(a => a.id);

            return (
              <div
                key={answer.questionId}
                className={`card p-3 sm:p-6 border-l-4 ${
                  answer.isCorrect
                    ? 'border-l-green-500'
                    : 'border-l-red-500'
                }`}
              >
                {/* Question header */}
                <div className="flex items-start gap-2 sm:gap-3 mb-3">
                  {answer.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-dark-900 dark:text-white">
                      Q{index + 1}: {question.text}
                    </p>
                  </div>
                </div>

                {/* Answer options */}
                <div className="ml-0 sm:ml-8 space-y-2 mb-3">
                  {question.answers.map((opt) => {
                    const isSelected = answer.selectedAnswers.includes(opt.id);
                    const isCorrectAnswer = correctAnswerIds.includes(opt.id);

                    let optionClass = 'bg-dark-50 dark:bg-dark-800 border-dark-200 dark:border-dark-700';
                    if (isCorrectAnswer) {
                      optionClass = 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700';
                    } else if (isSelected && !isCorrectAnswer) {
                      optionClass = 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`p-2 sm:p-3 rounded-lg border ${optionClass} flex items-start gap-2`}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {isCorrectAnswer && <CheckCircle className="w-4 h-4 text-success" />}
                          {isSelected && !isCorrectAnswer && <XCircle className="w-4 h-4 text-error" />}
                          {!isCorrectAnswer && !isSelected && <div className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-xs sm:text-sm ${
                            isCorrectAnswer
                              ? 'text-green-700 dark:text-green-400 font-medium'
                              : isSelected
                                ? 'text-red-700 dark:text-red-400'
                                : 'text-dark-600 dark:text-dark-400'
                          }`}>
                            {opt.text}
                          </span>
                          {isSelected && (
                            <span className="block sm:inline sm:ml-2 text-[10px] sm:text-xs text-dark-400 mt-0.5 sm:mt-0">
                              {lang === 'fr' ? 'Votre réponse' : 'Your answer'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                {question.explanation && (
                  <div className="ml-0 sm:ml-8 p-2 sm:p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                    <p className="text-xs sm:text-sm text-primary-800 dark:text-primary-300">
                      <span className="font-medium">{lang === 'fr' ? 'Explication' : 'Explanation'}:</span>{' '}
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Back to dashboard */}
        <div className="mt-8 text-center">
          <Link to="/dashboard" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            {t(lang, 'backToDashboard')}
          </Link>
        </div>
      </div>
    </div>
  );
};
