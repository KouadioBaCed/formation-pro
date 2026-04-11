import { Link } from 'react-router-dom';
import { Shield, Briefcase, Target, ChevronRight, BookOpen, HelpCircle, Users } from 'lucide-react';
import type { Certification } from '../../types';
import { professionalCategories } from '../../data/certifications';
import { useStore } from '../../store/useStore';

interface CertificationListItemProps {
  certification: Certification;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Briefcase,
  Target,
  BookOpen,
  HelpCircle,
  Users
};

export const CertificationListItem = ({ certification, index }: CertificationListItemProps) => {
  const { lang } = useStore();

  const Icon = iconMap[certification.icon] || Shield;

  // Find which professional category this certification belongs to
  const category = professionalCategories.find(cat =>
    cat.certifications.some(c => c.id === certification.id)
  );

  const colorClasses: Record<string, { gradient: string; badge: string; iconBg: string }> = {
    primary: {
      gradient: 'from-primary-500 to-primary-600',
      badge: 'bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300',
      iconBg: 'bg-gradient-to-br from-primary-500 to-primary-600'
    },
    success: {
      gradient: 'from-green-500 to-emerald-500',
      badge: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    warning: {
      gradient: 'from-orange-500 to-amber-500',
      badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
      iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500'
    }
  };

  const colors = colorClasses[certification.color] || colorClasses.primary;

  const labels = {
    questions: lang === 'fr' ? 'questions' : 'questions',
    topics: lang === 'fr' ? 'topics' : 'topics',
    viewDetails: lang === 'fr' ? 'Voir les détails' : 'View Details'
  };

  return (
    <Link
      to={`/topics?cert=${certification.slug}`}
      className="block group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-dark-200/50 dark:border-dark-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-600 animate-fade-in-up">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`${colors.iconBg} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                {/* Name + Badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-white">
                    {certification.name}
                  </h3>
                  <span className="text-dark-500 dark:text-dark-400">-</span>
                  <span className="text-sm sm:text-base text-dark-600 dark:text-dark-300">
                    {certification.fullName}
                  </span>
                  {certification.badge && (
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                      certification.badge === 'POPULAR'
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
                    }`}>
                      {certification.badge}
                    </span>
                  )}
                </div>

                {/* Category + Stats */}
                <div className="flex items-center gap-3 mt-1 text-sm text-dark-500 dark:text-dark-400">
                  {category && (
                    <>
                      <span className={`${colors.badge} px-2 py-0.5 rounded-full text-xs font-medium`}>
                        {category.name}
                      </span>
                      <span>|</span>
                    </>
                  )}
                  <span>{certification.questionCount} {labels.questions}</span>
                  <span>|</span>
                  <span>{certification.topicCount} {labels.topics}</span>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-400 line-clamp-2">
                  {certification.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 hidden sm:flex items-center">
                <div className="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-200">
                  <ChevronRight className="w-5 h-5 text-dark-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-3 sm:hidden">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1">
                {labels.viewDetails}
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
