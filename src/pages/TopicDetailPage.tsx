import { useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Clock, BookOpen, Filter } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getTopicBySlug, allQuestions as freshQuestions } from '../data/questions';
import { QuestionCard } from '../components/question/QuestionCard';
import { ProgressBar } from '../components/ui/ProgressBar';

export const TopicDetailPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const [searchParams] = useSearchParams();
  const chapterFilter = searchParams.get('chapter');

  const { questions, filters } = useStore();

  const topic = useMemo(() => getTopicBySlug(topicSlug || ''), [topicSlug]);

  // Merge fresh questions with store questions to get statuses
  const mergedQuestions = useMemo(() => {
    const questionMap = new Map(questions.map(q => [q.id, q]));
    return freshQuestions.map(q => questionMap.get(q.id) || q);
  }, [questions]);

  const topicQuestions = useMemo(() => {
    if (!topicSlug) return [];

    let filtered = mergedQuestions.filter((q) => q.topic === topicSlug);

    // Apply chapter filter from URL
    if (chapterFilter) {
      filtered = filtered.filter((q) => q.chapter === chapterFilter);
    }

    // Apply sidebar filters
    if (filters.difficulty !== 'all') {
      filtered = filtered.filter((q) => q.difficulty === filters.difficulty);
    }

    if (filters.status !== 'all') {
      filtered = filtered.filter((q) => q.status === filters.status);
    }

    if (filters.chapter !== 'all') {
      filtered = filtered.filter((q) => q.chapter === filters.chapter);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter((q) =>
        q.text.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [topicSlug, mergedQuestions, filters, chapterFilter]);

  const stats = useMemo(() => {
    const topicAllQuestions = mergedQuestions.filter((q) => q.topic === topicSlug);
    const seen = topicAllQuestions.filter((q) => q.status !== 'unseen').length;
    const marked = topicAllQuestions.filter((q) => q.status === 'marked').length;
    const answered = topicAllQuestions.filter((q) => q.status === 'answered').length;

    return {
      total: topicAllQuestions.length,
      seen,
      marked,
      answered,
      progress: topicAllQuestions.length > 0 ? (seen / topicAllQuestions.length) * 100 : 0,
    };
  }, [mergedQuestions, topicSlug]);

  if (!topic) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
            Sujet non trouvé
          </h2>
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            Le sujet que vous recherchez n'existe pas.
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
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-1 sm:mb-2">
            {topic.name}
          </h1>
          <p className="text-sm sm:text-base text-dark-600 dark:text-dark-400 mb-3 sm:mb-4">
            {topic.description}
          </p>

          {/* Stats */}
          <div className="card p-3 sm:p-4 mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-dark-600 dark:text-dark-400">
                Progression
              </span>
              <span className="text-xs sm:text-sm font-semibold text-dark-900 dark:text-white">
                {stats.seen} / {stats.total} vues
              </span>
            </div>
            <ProgressBar value={stats.seen} max={stats.total} size="md" />

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-dark-200 dark:border-dark-700">
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-dark-900 dark:text-white">
                  {stats.total}
                </div>
                <div className="text-[10px] sm:text-xs text-dark-500 dark:text-dark-400">Total</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-yellow-600">
                  {stats.marked}
                </div>
                <div className="text-[10px] sm:text-xs text-dark-500 dark:text-dark-400">Marquées</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-success">
                  {stats.answered}
                </div>
                <div className="text-[10px] sm:text-xs text-dark-500 dark:text-dark-400">Répondues</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              to={`/exam?topic=${topicSlug}`}
              className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Mode Examen</span>
              <span className="xs:hidden">Examen</span>
            </Link>
            {topicQuestions.length > 0 && (
              <Link
                to={`/question/${topicSlug}/${topicQuestions[0].id}`}
                className="btn-secondary text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Commencer la révision</span>
                <span className="xs:hidden">Réviser</span>
              </Link>
            )}
          </div>
        </div>

        {/* Chapter filter indicator */}
        {chapterFilter && (
          <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600" />
            <span className="text-xs sm:text-sm text-dark-600 dark:text-dark-400">
              Filtre:{' '}
              <span className="font-medium text-dark-900 dark:text-white capitalize">
                {chapterFilter.replace(/-/g, ' ')}
              </span>
            </span>
            <Link
              to={`/topics/${topicSlug}`}
              className="text-xs sm:text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              Effacer
            </Link>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-2 sm:space-y-3">
          {topicQuestions.length === 0 ? (
            <div className="card p-4 sm:p-6 md:p-8 text-center">
              <p className="text-sm sm:text-base text-dark-600 dark:text-dark-400">
                Aucune question ne correspond à vos critères.
              </p>
            </div>
          ) : (
            topicQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                topicSlug={topicSlug || ''}
              />
            ))
          )}
        </div>

        {/* Results count */}
        {topicQuestions.length > 0 && (
          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-dark-500 dark:text-dark-400">
            {topicQuestions.length} question{topicQuestions.length > 1 ? 's' : ''} affichée{topicQuestions.length > 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  );
};
