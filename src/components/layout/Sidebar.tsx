import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  Shield,
  Search,
  Scale,
  DollarSign,
  ChevronDown,
  ChevronRight,
  Filter,
  X,
  Briefcase,
  Target,
  Award,
  BookOpen,
  FileText,
  Info,
  BookText,
  ClipboardList,
  Calculator,
  Zap,
  FileCheck,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { useStore } from '../../store/useStore';
import { useAuth } from '../../contexts/AuthContext';
import { categories, allTopics } from '../../data/questions';
import { certifications } from '../../data/certifications';
import type { Difficulty, QuestionStatus, Category, CertificationSlug } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Search,
  Scale,
  DollarSign,
  Briefcase,
  Target,
  Award,
  BookOpen,
  FileText,
};

const colorMap: Record<string, string> = {
  primary: 'text-primary-600 dark:text-primary-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-orange-600 dark:text-orange-400',
};

export const Sidebar = () => {
  const { topicSlug } = useParams();
  const [searchParams] = useSearchParams();
  const certFilter = searchParams.get('cert');
  const { filters, setFilters, resetFilters, isSidebarOpen, setSidebarOpen, lang, topicsTab, topicsExamType, setTopicsTab, setTopicsExamType } = useStore();
  const { appUser } = useAuth();
  const allowedCourses = appUser?.allowedCourses || [];
  const filteredCategories = useMemo(() =>
    categories.filter(c => allowedCourses.includes(c.slug as CertificationSlug)),
    [allowedCourses]
  );
  const [expandedCategories, setExpandedCategories] = useState<string[]>(() => {
    if (topicSlug) {
      for (const cat of filteredCategories) {
        if (cat.topics?.some(t => t.slug === topicSlug)) {
          return [cat.slug];
        }
        if (cat.subcategories?.some(sub => sub.topics?.some(t => t.slug === topicSlug))) {
          const subcat = cat.subcategories.find(sub => sub.topics?.some(t => t.slug === topicSlug));
          return [cat.slug, subcat?.slug || ''];
        }
      }
    }
    return [];
  });
  const [showFilters, setShowFilters] = useState(false);
  const [examsExpanded, setExamsExpanded] = useState(topicsTab === 'exams');

  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const currentTopic = allTopics.find((t) => t.slug === topicSlug);

  const labels = {
    navigation: 'Navigation',
    certifications: lang === 'fr' ? 'Certifications' : 'Certifications',
    subjects: lang === 'fr' ? 'Sujets' : 'Topics',
    filters: lang === 'fr' ? 'Filtres' : 'Filters',
    difficulty: lang === 'fr' ? 'Difficulté' : 'Difficulty',
    status: lang === 'fr' ? 'Statut' : 'Status',
    chapter: lang === 'fr' ? 'Chapitre' : 'Chapter',
    all: lang === 'fr' ? 'Tous' : 'All',
    allF: lang === 'fr' ? 'Toutes' : 'All',
    easy: lang === 'fr' ? 'Facile' : 'Easy',
    medium: lang === 'fr' ? 'Moyen' : 'Medium',
    hard: lang === 'fr' ? 'Difficile' : 'Hard',
    unseen: lang === 'fr' ? 'Non vues' : 'Unseen',
    seen: lang === 'fr' ? 'Vues' : 'Seen',
    marked: lang === 'fr' ? 'Marquées' : 'Marked',
    answered: lang === 'fr' ? 'Répondues' : 'Answered',
    resetFilters: lang === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters',
    generalInfo: lang === 'fr' ? 'Informations générales' : 'General Information',
    terminologies: lang === 'fr' ? 'Terminologies' : 'Terminologies',
    formulasAndExams: lang === 'fr' ? 'Formules & Examens' : 'Formulas & Exams',
    formulas: lang === 'fr' ? 'Formules' : 'Formulas',
    domainExams: lang === 'fr' ? 'Examens par domaine' : 'Domain Exams',
    miniExam: lang === 'fr' ? 'Mini examen' : 'Mini Exam',
    fullExam: lang === 'fr' ? 'Examen complet' : 'Full Exam',
  };

  // Check if we should show the cert-specific nav (when on /topics?cert=xxx without a topicSlug)
  const hasCertAccess = certFilter ? allowedCourses.includes(certFilter as CertificationSlug) : false;
  const showCertNav = !!certFilter && !topicSlug && hasCertAccess;
  const activeCertification = certFilter && hasCertAccess
    ? certifications.find(c => c.slug === certFilter)
    : null;

  // Render subcategory with its topics
  const renderSubcategory = (subcat: Category, parentColor: string) => {
    const isExpanded = expandedCategories.includes(subcat.slug);
    const Icon = iconMap[subcat.icon] || BookOpen;
    const hasTopics = subcat.topics && subcat.topics.length > 0;

    if (!hasTopics) return null;

    return (
      <div key={subcat.id} className="ml-3 sm:ml-4">
        <button
          onClick={() => toggleCategory(subcat.slug)}
          className="flex items-center justify-between w-full px-2 py-1.5 text-sm text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-200 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800"
        >
          <span className="flex items-center gap-2 min-w-0">
            <Icon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate text-xs sm:text-sm">{subcat.name}</span>
          </span>
          {isExpanded ? (
            <ChevronDown className="w-3.5 h-3.5 flex-shrink-0 ml-1" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 ml-1" />
          )}
        </button>

        {isExpanded && (
          <div className="ml-3 sm:ml-4 mt-1 space-y-0.5 border-l-2 border-dark-200 dark:border-dark-700 pl-2">
            {subcat.topics!.map((topic) => {
              const isActive = topicSlug === topic.slug;
              return (
                <Link
                  key={topic.id}
                  to={`/topics/${topic.slug}`}
                  className={`block px-2 py-1.5 text-xs rounded transition-colors ${
                    isActive
                      ? `${colorMap[parentColor] || colorMap.primary} font-medium bg-dark-100 dark:bg-dark-800`
                      : 'text-dark-500 dark:text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="truncate block">{topic.name}</span>
                  <span className="text-[10px] text-dark-400">
                    ({topic.questionCount})
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // Render the certification-specific navigation (Info, Terminologies, Formules & Examens)
  const renderCertNav = () => {
    const handleNavClick = (tab: string, examType?: string) => {
      if (examType) {
        setTopicsExamType(examType);
      } else {
        setTopicsTab(tab);
      }
      setSidebarOpen(false);
    };

    const isExamSubActive = (type: string) => topicsTab === 'exams' && topicsExamType === type;

    return (
      <div className="space-y-1">
        {/* Certification name header */}
        {activeCertification && (
          <div className="mb-4 pb-3 border-b border-dark-200 dark:border-dark-700">
            <h3 className="text-sm font-bold text-dark-900 dark:text-white">
              {activeCertification.name}
            </h3>
            <p className="text-[10px] text-dark-500 mt-0.5">{activeCertification.fullName}</p>
          </div>
        )}

        {/* Informations générales */}
        <button
          onClick={() => handleNavClick('info')}
          className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
            topicsTab === 'info'
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
              : 'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800'
          }`}
        >
          <Info className="w-4 h-4 flex-shrink-0" />
          <span>{labels.generalInfo}</span>
        </button>

        {/* Terminologies */}
        <button
          onClick={() => handleNavClick('terminologies')}
          className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
            topicsTab === 'terminologies'
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
              : 'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800'
          }`}
        >
          <BookText className="w-4 h-4 flex-shrink-0" />
          <span>{labels.terminologies}</span>
        </button>

        {/* Formules & Examens (collapsible) */}
        <div>
          <button
            onClick={() => setExamsExpanded(!examsExpanded)}
            className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              topicsTab === 'exams'
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                : 'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <ClipboardList className="w-4 h-4 flex-shrink-0" />
              <span>{labels.formulasAndExams}</span>
            </span>
            {examsExpanded ? (
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            )}
          </button>

          {examsExpanded && (
            <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-dark-200 dark:border-dark-700 pl-2">
              {/* Formules */}
              <button
                onClick={() => handleNavClick('exams', 'formulas')}
                className={`flex items-center gap-2 w-full px-2 py-2 rounded-lg text-xs sm:text-sm transition-all ${
                  isExamSubActive('formulas')
                    ? 'text-primary-700 dark:text-primary-400 font-medium bg-dark-100 dark:bg-dark-800'
                    : 'text-dark-500 dark:text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{labels.formulas}</span>
              </button>

              {/* Examens par domaine */}
              <button
                onClick={() => handleNavClick('exams', 'domain')}
                className={`flex items-center gap-2 w-full px-2 py-2 rounded-lg text-xs sm:text-sm transition-all ${
                  isExamSubActive('domain')
                    ? 'text-primary-700 dark:text-primary-400 font-medium bg-dark-100 dark:bg-dark-800'
                    : 'text-dark-500 dark:text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                }`}
              >
                <Target className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{labels.domainExams}</span>
              </button>

              {/* Mini examen */}
              <button
                onClick={() => handleNavClick('exams', 'mini')}
                className={`flex items-center gap-2 w-full px-2 py-2 rounded-lg text-xs sm:text-sm transition-all ${
                  isExamSubActive('mini')
                    ? 'text-primary-700 dark:text-primary-400 font-medium bg-dark-100 dark:bg-dark-800'
                    : 'text-dark-500 dark:text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                }`}
              >
                <Zap className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{labels.miniExam}</span>
              </button>

              {/* Examen complet */}
              <button
                onClick={() => handleNavClick('exams', 'full')}
                className={`flex items-center gap-2 w-full px-2 py-2 rounded-lg text-xs sm:text-sm transition-all ${
                  isExamSubActive('full')
                    ? 'text-primary-700 dark:text-primary-400 font-medium bg-dark-100 dark:bg-dark-800'
                    : 'text-dark-500 dark:text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{labels.fullExam}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative z-40
          top-[3.5rem] sm:top-[4rem] md:top-0
          left-0
          h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] md:h-full
          w-[280px] sm:w-72
          bg-white dark:bg-dark-900
          border-r border-dark-200 dark:border-dark-700
          transform transition-transform duration-200 ease-in-out
          lg:transform-none flex-shrink-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="h-full overflow-y-auto scrollbar-thin p-3 sm:p-4 pb-20 md:pb-4">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <span className="font-semibold text-dark-900 dark:text-white text-sm sm:text-base">{labels.navigation}</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1.5 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cert-specific navigation OR category tree */}
          {showCertNav ? (
            renderCertNav()
          ) : (
            <>
              {/* Certifications Navigation */}
              <div className="mb-6">
                <h3 className="text-[10px] sm:text-xs font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider mb-3">
                  {labels.certifications}
                </h3>
                <nav className="space-y-1">
                  {filteredCategories.map((category) => {
                    const Icon = iconMap[category.icon] || Shield;
                    const isExpanded = expandedCategories.includes(category.slug);
                    const color = category.color || 'primary';
                    const hasContent = (category.topics && category.topics.length > 0) ||
                      (category.subcategories && category.subcategories.length > 0);

                    if (!hasContent) return null;

                    return (
                      <div key={category.id} className="space-y-1">
                        <button
                          onClick={() => toggleCategory(category.slug)}
                          className={`flex items-center justify-between w-full px-2 sm:px-3 py-2 rounded-lg transition-colors ${
                            isExpanded
                              ? 'bg-dark-100 dark:bg-dark-800'
                              : 'hover:bg-dark-100 dark:hover:bg-dark-800'
                          }`}
                        >
                          <span className={`flex items-center gap-2 font-medium text-sm sm:text-base ${colorMap[color]}`}>
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span>{category.name}</span>
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-dark-400 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-dark-400 flex-shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="space-y-1 pb-2">
                            {category.topics && category.topics.length > 0 && (
                              <div className="ml-3 sm:ml-4 space-y-0.5 border-l-2 border-dark-200 dark:border-dark-700 pl-2">
                                {category.topics.map((topic) => {
                                  const isActive = topicSlug === topic.slug;
                                  return (
                                    <Link
                                      key={topic.id}
                                      to={`/topics/${topic.slug}`}
                                      className={`block px-2 py-1.5 text-xs rounded transition-colors ${
                                        isActive
                                          ? `${colorMap[color]} font-medium bg-dark-100 dark:bg-dark-800`
                                          : 'text-dark-500 dark:text-dark-500 hover:text-dark-700 dark:hover:text-dark-300'
                                      }`}
                                      onClick={() => setSidebarOpen(false)}
                                    >
                                      <span className="truncate block">{topic.name}</span>
                                      <span className="text-[10px] text-dark-400">
                                        ({topic.questionCount})
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            )}

                            {category.subcategories && category.subcategories.map((subcat) =>
                              renderSubcategory(subcat, color)
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Filters Section */}
              {topicSlug && (
                <div className="border-t border-dark-200 dark:border-dark-700 pt-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center justify-between w-full mb-3"
                  >
                    <h3 className="text-[10px] sm:text-xs font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider flex items-center gap-2">
                      <Filter className="w-3 h-3" />
                      {labels.filters}
                    </h3>
                    {showFilters ? (
                      <ChevronDown className="w-4 h-4 text-dark-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-dark-400" />
                    )}
                  </button>

                  {showFilters && (
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="text-[10px] sm:text-xs font-medium text-dark-600 dark:text-dark-400 mb-1.5 sm:mb-2 block">
                          {labels.difficulty}
                        </label>
                        <select
                          value={filters.difficulty}
                          onChange={(e) =>
                            setFilters({ difficulty: e.target.value as Difficulty | 'all' })
                          }
                          className="input text-xs sm:text-sm py-1.5 sm:py-2"
                        >
                          <option value="all">{labels.allF}</option>
                          <option value="easy">{labels.easy}</option>
                          <option value="medium">{labels.medium}</option>
                          <option value="hard">{labels.hard}</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] sm:text-xs font-medium text-dark-600 dark:text-dark-400 mb-1.5 sm:mb-2 block">
                          {labels.status}
                        </label>
                        <select
                          value={filters.status}
                          onChange={(e) =>
                            setFilters({ status: e.target.value as QuestionStatus | 'all' })
                          }
                          className="input text-xs sm:text-sm py-1.5 sm:py-2"
                        >
                          <option value="all">{labels.all}</option>
                          <option value="unseen">{labels.unseen}</option>
                          <option value="seen">{labels.seen}</option>
                          <option value="marked">{labels.marked}</option>
                          <option value="answered">{labels.answered}</option>
                        </select>
                      </div>

                      {currentTopic && (
                        <div>
                          <label className="text-[10px] sm:text-xs font-medium text-dark-600 dark:text-dark-400 mb-1.5 sm:mb-2 block">
                            {labels.chapter}
                          </label>
                          <select
                            value={filters.chapter}
                            onChange={(e) => setFilters({ chapter: e.target.value })}
                            className="input text-xs sm:text-sm py-1.5 sm:py-2"
                          >
                            <option value="all">{labels.all}</option>
                            {currentTopic.chapters.map((chapter) => (
                              <option key={chapter.id} value={chapter.slug}>
                                {chapter.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      <button
                        onClick={resetFilters}
                        className="btn-ghost text-xs sm:text-sm w-full justify-center py-2"
                      >
                        {labels.resetFilters}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </aside>
    </>
  );
};
