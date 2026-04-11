import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck, Eye, CheckCircle, ChevronRight } from 'lucide-react';
import type { Question } from '../../types';
import { DifficultyBadge } from '../ui/Badge';
import { useStore } from '../../store/useStore';

interface QuestionCardProps {
  question: Question;
  topicSlug: string;
  index?: number;
}

export const QuestionCard = ({ question, topicSlug, index = 0 }: QuestionCardProps) => {
  const { toggleQuestionMarked } = useStore();

  const statusConfig = {
    unseen: {
      icon: null,
      bg: '',
      ring: '',
    },
    seen: {
      icon: <Eye className="w-4 h-4" />,
      bg: 'bg-dark-100 dark:bg-dark-700',
      ring: 'ring-dark-200 dark:ring-dark-600',
    },
    marked: {
      icon: <BookmarkCheck className="w-4 h-4" />,
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      ring: 'ring-yellow-200 dark:ring-yellow-800',
    },
    answered: {
      icon: <CheckCircle className="w-4 h-4" />,
      bg: 'bg-green-100 dark:bg-green-900/30',
      ring: 'ring-green-200 dark:ring-green-800',
    },
  };

  const status = statusConfig[question.status];

  return (
    <div
      className="group relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-dark-200/50 dark:border-dark-700/50 p-3 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-700 animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Status indicator line */}
      {question.status !== 'unseen' && (
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl sm:rounded-t-2xl ${
          question.status === 'answered' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
          question.status === 'marked' ? 'bg-gradient-to-r from-yellow-500 to-amber-500' :
          'bg-gradient-to-r from-dark-300 to-dark-400 dark:from-dark-600 dark:to-dark-500'
        }`} />
      )}

      <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
        {/* Question number badge */}
        <div className="flex-shrink-0">
          <div className="question-number w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-sm sm:text-base rounded-xl">
            {question.number}
          </div>
        </div>

        {/* Main content */}
        <Link
          to={`/question/${topicSlug}/${question.id}`}
          className="flex-1 min-w-0"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-wrap">
            <DifficultyBadge difficulty={question.difficulty} />
            {status.icon && (
              <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium ${status.bg} ${
                question.status === 'answered' ? 'text-green-700 dark:text-green-400' :
                question.status === 'marked' ? 'text-yellow-700 dark:text-yellow-400' :
                'text-dark-600 dark:text-dark-400'
              }`}>
                {status.icon}
                <span className="hidden xs:inline">
                  {question.status === 'answered' ? 'Répondu' :
                   question.status === 'marked' ? 'Marqué' : 'Vu'}
                </span>
              </span>
            )}
          </div>

          <p className="text-sm sm:text-base text-dark-800 dark:text-dark-200 font-medium line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-relaxed">
            {question.text}
          </p>

          <div className="flex items-center justify-between mt-2 sm:mt-3">
            <p className="text-[10px] sm:text-xs text-dark-500 dark:text-dark-400 capitalize bg-dark-100/50 dark:bg-dark-700/50 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg truncate max-w-[120px] sm:max-w-none">
              {question.chapter.replace(/-/g, ' ')}
            </p>
            <span className="hidden sm:flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Voir la question
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Bookmark button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleQuestionMarked(question.id);
          }}
          className={`flex-shrink-0 p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            question.status === 'marked'
              ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 shadow-lg shadow-yellow-500/20'
              : 'text-dark-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
          }`}
          aria-label={question.status === 'marked' ? 'Retirer le marque-page' : 'Ajouter un marque-page'}
        >
          {question.status === 'marked' ? (
            <BookmarkCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
