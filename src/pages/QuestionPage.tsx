import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getTopicBySlug, allQuestions } from '../data/questions';
import { QuestionView } from '../components/question/QuestionView';

export const QuestionPage = () => {
  const { topicSlug, questionId } = useParams<{
    topicSlug: string;
    questionId: string;
  }>();

  const { questions } = useStore();

  const topic = useMemo(() => getTopicBySlug(topicSlug || ''), [topicSlug]);

  // Use allQuestions for navigation to ensure we always have the full list
  const topicQuestions = useMemo(
    () => allQuestions.filter((q) => q.topic === topicSlug),
    [topicSlug]
  );

  // Get the current question from store (for status) or fall back to allQuestions
  const currentQuestion = useMemo(
    () => questions.find((q) => q.id === questionId) || allQuestions.find((q) => q.id === questionId),
    [questions, questionId]
  );

  const currentIndex = useMemo(
    () => topicQuestions.findIndex((q) => q.id === questionId),
    [topicQuestions, questionId]
  );

  const prevQuestion = currentIndex > 0 ? topicQuestions[currentIndex - 1] : undefined;
  const nextQuestion =
    currentIndex < topicQuestions.length - 1
      ? topicQuestions[currentIndex + 1]
      : undefined;

  if (!topic || !currentQuestion) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
            Question non trouvée
          </h2>
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            La question que vous recherchez n'existe pas.
          </p>
          <Link to="/topics" className="btn-primary">
            Retour aux sujets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-dark-50 dark:bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to={`/topics/${topicSlug}`}
            className="inline-flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à {topic.name}
          </Link>
        </div>

        {/* Progress indicator */}
        <div className="mb-6 flex items-center justify-between text-sm">
          <span className="text-dark-600 dark:text-dark-400">
            Question {currentIndex + 1} sur {topicQuestions.length}
          </span>
          <span className="text-dark-500 dark:text-dark-400 capitalize">
            {currentQuestion.chapter.replace(/-/g, ' ')}
          </span>
        </div>

        {/* Question View */}
        <QuestionView
          key={questionId}
          question={currentQuestion}
          topicSlug={topicSlug || ''}
          prevQuestionId={prevQuestion?.id}
          nextQuestionId={nextQuestion?.id}
        />
      </div>
    </div>
  );
};
