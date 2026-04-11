import { Search } from 'lucide-react';
import type { ProfessionalDomain } from '../../types';
import { professionalCategories } from '../../data/certifications';
import { useStore } from '../../store/useStore';

interface CertificationFilterBarProps {
  selectedDomain: ProfessionalDomain | 'all';
  onDomainChange: (domain: ProfessionalDomain | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const CertificationFilterBar = ({
  selectedDomain,
  onDomainChange,
  searchQuery,
  onSearchChange
}: CertificationFilterBarProps) => {
  const { lang } = useStore();

  const labels = {
    all: lang === 'fr' ? 'Tous' : 'All',
    search: lang === 'fr' ? 'Rechercher une certification...' : 'Search certifications...'
  };

  const domainColors: Record<ProfessionalDomain | 'all', string> = {
    'all': 'primary',
    'audit-compliance': 'primary',
    'project-management': 'warning',
    'data-analytics': 'info'
  };

  const getButtonClasses = (domain: ProfessionalDomain | 'all') => {
    const isActive = selectedDomain === domain;
    const color = domainColors[domain];

    if (isActive) {
      if (color === 'primary') {
        return 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25';
      }
      if (color === 'warning') {
        return 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25';
      }
      if (color === 'info') {
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25';
      }
    }

    return 'bg-white/60 dark:bg-dark-700/60 text-dark-600 dark:text-dark-300 hover:bg-white dark:hover:bg-dark-700 hover:shadow-md';
  };

  return (
    <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-dark-200/50 dark:border-dark-700/50 rounded-2xl p-4 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Domain Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onDomainChange('all')}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${getButtonClasses('all')}`}
          >
            {labels.all}
          </button>

          {professionalCategories.map(category => (
            <button
              key={category.id}
              onClick={() => onDomainChange(category.domain)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${getButtonClasses(category.domain)}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex-1 sm:max-w-xs">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={labels.search}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/60 dark:bg-dark-700/60 border border-dark-200/50 dark:border-dark-600/50 text-dark-800 dark:text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
