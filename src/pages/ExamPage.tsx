import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Clock,
  Play,
  Settings,
  ChevronLeft,
  ChevronRight,
  Flag,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Home,
  Shuffle,
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { useAuth } from '../contexts/AuthContext';
import { allTopics, allQuestions, categories } from '../data/questions';
import type { ExamSettings } from '../types';
import { QuestionView } from '../components/question/QuestionView';
import { ProgressBar } from '../components/ui/ProgressBar';
import { saveExamResult } from '../services/firestore';

export const ExamPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const topicParam = searchParams.get('topic');

  const {
    isExamMode,
    examQuestions,
    currentExamQuestionIndex,
    examAnswers,
    examTimeRemaining,
    examResult,
    startExam,
    endExam,
    submitExamAnswer,
    nextExamQuestion,
    prevExamQuestion,
    goToExamQuestion,
    setExamTimeRemaining,
    resetExam,
  } = useStore();

  const { appUser } = useAuth();
  const savedRef = useRef(false);

  const [settings, setSettings] = useState<ExamSettings>({
    questionCount: 10,
    timeLimit: 30,
    shuffleQuestions: true,
    shuffleAnswers: true,
    showFeedback: false,
  });

  const [selectedTopic, setSelectedTopic] = useState<string>(topicParam || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Save exam result to Firestore when exam completes
  useEffect(() => {
    if (examResult && appUser && !savedRef.current) {
      savedRef.current = true;
      const certification = selectedTopic !== 'all'
        ? (categories.find(c => c.topics?.some(t => t.slug === selectedTopic))?.slug
          || categories.find(c => c.subcategories?.some(sc => sc.topics?.some(t => t.slug === selectedTopic)))?.slug
          || selectedTopic)
        : 'mixed';

      saveExamResult({
        userId: appUser.uid,
        certification,
        examType: 'exam',
        score: examResult.score,
        totalQuestions: examResult.totalQuestions,
        correctAnswers: examResult.correctAnswers,
        incorrectAnswers: examResult.incorrectAnswers,
        unanswered: examResult.unanswered,
        timeSpent: examResult.timeSpent,
        answers: examResult.questions.map(q => ({
          questionId: q.questionId,
          selectedAnswers: q.selectedAnswers,
          isCorrect: q.isCorrect,
        })),
        completedAt: new Date().toISOString(),
      }).catch(console.error);
    }
    if (!examResult) {
      savedRef.current = false;
    }
  }, [examResult, appUser, selectedTopic]);

  // Calculate max available questions for selected topic
  const getMaxQuestionsForTopic = useCallback(() => {
    if (selectedTopic === 'all') {
      return allQuestions.length;
    }
    return allQuestions.filter(q => q.topic === selectedTopic).length;
  }, [selectedTopic]);

  const maxQuestions = getMaxQuestionsForTopic();

  // Adjust question count when topic changes to ensure valid selection
  useEffect(() => {
    const validOptions = [5, 10, 20, 30, 50].filter(n => n <= maxQuestions);

    // Si le nombre actuel n'est plus valide, prendre la plus grande option disponible
    if (settings.questionCount > maxQuestions || !validOptions.includes(settings.questionCount)) {
      const newCount = validOptions.length > 0
        ? validOptions[validOptions.length - 1]  // Prendre le plus grand disponible
        : Math.max(1, maxQuestions);

      setSettings(prev => ({
        ...prev,
        questionCount: newCount
      }));
    }
  }, [maxQuestions, selectedTopic]);

  // Timer effect
  useEffect(() => {
    if (!isExamMode || examResult) return;

    const timer = setInterval(() => {
      setExamTimeRemaining(Math.max(0, examTimeRemaining - 1));
    }, 1000);

    if (examTimeRemaining <= 0) {
      endExam();
    }

    return () => clearInterval(timer);
  }, [isExamMode, examTimeRemaining, examResult, setExamTimeRemaining, endExam]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleStartExam = () => {
    console.log('=== Starting Exam ===');
    console.log('Settings:', settings);
    console.log('Selected Topic:', selectedTopic);
    console.log('Max Questions:', maxQuestions);
    console.log('Question Count from settings:', settings.questionCount);
    startExam(settings, selectedTopic === 'all' ? undefined : selectedTopic);
  };

  const handleAnswerSelect = (answerId: string) => {
    const currentQuestion = examQuestions[currentExamQuestionIndex];
    const currentAnswers = examAnswers[currentQuestion.id] || [];

    let newAnswers: string[];
    if (currentQuestion.answerType === 'single') {
      newAnswers = [answerId];
    } else {
      newAnswers = currentAnswers.includes(answerId)
        ? currentAnswers.filter((id) => id !== answerId)
        : [...currentAnswers, answerId];
    }

    submitExamAnswer(currentQuestion.id, newAnswers);
  };

  const currentQuestion = examQuestions[currentExamQuestionIndex];
  const answeredCount = Object.keys(examAnswers).length;
  const isLastQuestion = currentExamQuestionIndex === examQuestions.length - 1;

  // Exam Results View
  if (examResult) {
    const getScoreColor = (score: number) => {
      if (score >= 80) return 'text-success';
      if (score >= 60) return 'text-warning';
      return 'text-error';
    };

    return (
      <div className="min-h-[calc(100vh-4rem)] bg-dark-50 dark:bg-dark-950 py-4 sm:py-6 md:py-8">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="card p-4 sm:p-6 md:p-8 text-center mb-4 sm:mb-6 md:mb-8">
            <div className="mb-4 sm:mb-6">
              {examResult.score >= 70 ? (
                <CheckCircle className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-success mx-auto" />
              ) : (
                <AlertCircle className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-error mx-auto" />
              )}
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-1 sm:mb-2">
              Examen terminé !
            </h1>
            <p className="text-sm sm:text-base text-dark-600 dark:text-dark-400 mb-4 sm:mb-6">
              {examResult.score >= 70
                ? 'Félicitations, vous avez réussi !'
                : 'Continuez à réviser, vous y arriverez !'}
            </p>

            <div className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 ${getScoreColor(examResult.score)}`}>
              {examResult.score}%
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="p-2 sm:p-3 md:p-4 rounded-xl bg-dark-50 dark:bg-dark-800">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-success">{examResult.correctAnswers}</div>
                <div className="text-xs sm:text-sm text-dark-500">Correctes</div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 rounded-xl bg-dark-50 dark:bg-dark-800">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-error">{examResult.incorrectAnswers}</div>
                <div className="text-xs sm:text-sm text-dark-500">Incorrectes</div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 rounded-xl bg-dark-50 dark:bg-dark-800">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-warning">{examResult.unanswered}</div>
                <div className="text-xs sm:text-sm text-dark-500">Sans réponse</div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 rounded-xl bg-dark-50 dark:bg-dark-800">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-dark-900 dark:text-white">
                  {formatTime(examResult.timeSpent)}
                </div>
                <div className="text-xs sm:text-sm text-dark-500">Temps</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <button
                onClick={() => {
                  resetExam();
                  setSelectedTopic(topicParam || 'all');
                }}
                className="btn-primary text-sm sm:text-base"
              >
                <RotateCcw className="w-4 h-4" />
                Recommencer
              </button>
              <button
                onClick={() => {
                  resetExam();
                  navigate('/');
                }}
                className="btn-secondary text-sm sm:text-base"
              >
                <Home className="w-4 h-4" />
                Accueil
              </button>
            </div>
          </div>

          {/* Question Review */}
          <div className="card p-3 sm:p-4 md:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-dark-900 dark:text-white mb-3 sm:mb-4">
              Révision des réponses
            </h2>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {examResult.questions.map((result, index) => {
                const question = examQuestions.find((q) => q.id === result.questionId);
                if (!question) return null;

                return (
                  <div
                    key={result.questionId}
                    className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border-2 ${
                      result.isCorrect
                        ? 'border-success bg-green-50 dark:bg-green-900/10'
                        : 'border-error bg-red-50 dark:bg-red-900/10'
                    }`}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      {result.isCorrect ? (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-error flex-shrink-0 mt-0.5" />
                      )}

                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-dark-900 dark:text-white mb-0.5 sm:mb-1 line-clamp-2">
                          Q{index + 1}: {question.text}
                        </p>
                        <p className="text-[10px] sm:text-xs text-dark-600 dark:text-dark-400">
                          {result.isCorrect ? 'Réponse correcte' : 'Réponse incorrecte'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Exam Mode View
  if (isExamMode && currentQuestion) {
    const timePercentage = (examTimeRemaining / (settings.timeLimit * 60)) * 100;
    const isLowTime = timePercentage < 20;

    return (
      <div className="min-h-[calc(100vh-4rem)] bg-dark-50 dark:bg-dark-950">

        {/* Header */}
        <div className="sticky top-14 sm:top-16 z-30 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700 shadow-sm">
          <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
            <div className="flex items-center justify-between gap-2 sm:gap-4">

              {/* Timer */}
              <div
                className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg ${
                  isLowTime
                    ? 'bg-red-100 dark:bg-red-900/30 text-error'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300'
                }`}
              >
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-mono text-sm sm:text-lg font-semibold">
                  {formatTime(examTimeRemaining)}
                </span>
              </div>

              {/* Desktop Progress */}
              <div className="flex-1 max-w-xs hidden md:block">
                <ProgressBar
                  value={answeredCount}
                  max={examQuestions.length}
                  showLabel
                  size="sm"
                />
              </div>

              {/* Mobile */}
              <div className="flex-1 md:hidden text-center">
                <span className="text-xs sm:text-sm font-medium text-dark-600 dark:text-dark-400">
                  {answeredCount}/{examQuestions.length}
                </span>
              </div>

              {/* End */}
              <button
                onClick={endExam}
                className="btn-error text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2"
              >
                <Flag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline sm:inline">Terminer</span>
              </button>

            </div>
          </div>
        </div>

        {/* Navigator */}
        <div className="bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700">
          <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-thin pb-1 sm:pb-2">
              {examQuestions.map((q, index) => {
                const isAnswered = examAnswers[q.id]?.length > 0;
                const isCurrent = index === currentExamQuestionIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => goToExamQuestion(index)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium flex-shrink-0 transition-all ${
                      isCurrent
                        ? 'bg-primary-600 text-white ring-2 ring-primary-300 dark:ring-primary-700'
                        : isAnswered
                          ? 'bg-success text-white'
                          : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">

          <QuestionView
            question={currentQuestion}
            topicSlug={currentQuestion.topic}
            isExamMode
            selectedAnswers={examAnswers[currentQuestion.id] || []}
            onAnswerSelect={handleAnswerSelect}
            showNavigation={false}
          />

          {/* Controls */}
          <div className="flex items-center justify-between mt-4 sm:mt-6">
            <button
              onClick={prevExamQuestion}
              disabled={currentExamQuestionIndex === 0}
              className="btn-secondary text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden xs:inline">Précédent</span>
            </button>

            {isLastQuestion ? (
              <button onClick={endExam} className="btn-success text-xs sm:text-sm px-3 sm:px-4 py-2">
                <Flag className="w-4 h-4" />
                <span className="hidden xs:inline">Terminer l'examen</span>
                <span className="xs:hidden">Terminer</span>
              </button>
            ) : (
              <button onClick={nextExamQuestion} className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2">
                <span className="hidden xs:inline">Suivant</span>
                <span className="xs:hidden">Suiv.</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    );
  }

  // Exam Setup View
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-dark-50 dark:bg-dark-950 py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-1 sm:mb-2">
            Mode Examen
          </h1>
          <p className="text-sm sm:text-base text-dark-600 dark:text-dark-400 px-4">
            Configurez votre session d'examen et testez vos connaissances.
          </p>
        </div>

        <div className="card p-4 sm:p-5 md:p-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
            <h2 className="text-base sm:text-lg font-semibold text-dark-900 dark:text-white">
              Paramètres de l'examen
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">

            {/* Category -> Subtopic selection (hierarchical) */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 sm:mb-2">
                Menu principal
              </label>
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedCategory(val);
                    // reset topic selection when category changes
                    setSelectedTopic('all');
                  }}
                  className="input text-sm sm:text-base py-2 sm:py-3 w-1/2"
                >
                  <option value="all">Tous</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>{cat.name}</option>
                  ))}
                </select>

                {/* Submenu: shown only when a main category is chosen */}
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="input text-sm sm:text-base py-2 sm:py-3 w-1/2"
                >
                  <option value="all">Tous les sujets</option>
                  {selectedCategory === 'all'
                    ? allTopics.map((topic) => (
                        <option key={topic.id} value={topic.slug}>
                          {topic.name} ({topic.questionCount} questions)
                        </option>
                      ))
                    : (() => {
                        const cat = categories.find(c => c.slug === selectedCategory);
                        if (!cat) return null;
                        // if subcategories exist, flatten their topics, otherwise use category.topics
                        const topicsToShow = (cat.subcategories && cat.subcategories.length > 0)
                          ? cat.subcategories.flatMap(sc => sc.topics)
                          : cat.topics;
                        return topicsToShow.map((topic) => (
                          <option key={topic.id} value={topic.slug}>
                            {topic.name} ({topic.questionCount} questions)
                          </option>
                        ));
                      })()
                  }
                </select>
              </div>
            </div>

            {/* Question count */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 sm:mb-2">
                Nombre de questions (max: {maxQuestions})
              </label>
              <select
                value={settings.questionCount}
                onChange={(e) => setSettings({ ...settings, questionCount: parseInt(e.target.value) })}
                className="input text-sm sm:text-base py-2 sm:py-3"
              >
                {[5, 10, 20, 30, 50].filter(n => n <= maxQuestions).map(n => (
                  <option key={n} value={n}>{n} questions</option>
                ))}
                {/* Ajouter une option pour le max si ce n'est pas une valeur standard */}
                {maxQuestions > 0 && ![5, 10, 20, 30, 50].includes(maxQuestions) && maxQuestions < 50 && (
                  <option value={maxQuestions}>{maxQuestions} questions (max)</option>
                )}
              </select>
            </div>

            {/* Time limit */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5 sm:mb-2">
                Limite de temps
              </label>
              <select
                value={settings.timeLimit}
                onChange={(e) => setSettings({ ...settings, timeLimit: parseInt(e.target.value) })}
                className="input text-sm sm:text-base py-2 sm:py-3"
              >
                <option value={10}>10 minutes</option>
                <option value={20}>20 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
                <option value={90}>90 minutes</option>
              </select>
            </div>

            {/* Options */}
            <div className="space-y-2 sm:space-y-3">
              <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.shuffleQuestions}
                  onChange={(e) => setSettings({ ...settings, shuffleQuestions: e.target.checked })}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                  <Shuffle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Mélanger les questions
                </span>
              </label>

              <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.shuffleAnswers}
                  onChange={(e) => setSettings({ ...settings, shuffleAnswers: e.target.checked })}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                  <Shuffle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Mélanger les réponses
                </span>
              </label>
            </div>

          </div>

          {/* Start button */}
          <button
            onClick={handleStartExam}
            className="btn-primary w-full mt-6 sm:mt-8 py-2.5 sm:py-3 text-sm sm:text-base"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            Démarrer l'examen
          </button>

        </div>
      </div>
    </div>
  );
};
