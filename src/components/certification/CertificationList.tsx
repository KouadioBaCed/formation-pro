import type { Certification } from '../../types';
import { CertificationListItem } from './CertificationListItem';
import { useStore } from '../../store/useStore';

interface CertificationListProps {
  certifications: Certification[];
}

export const CertificationList = ({ certifications }: CertificationListProps) => {
  const { lang } = useStore();

  const labels = {
    noCertifications: lang === 'fr'
      ? 'Aucune certification trouvée'
      : 'No certifications found',
    tryAdjusting: lang === 'fr'
      ? 'Essayez d\'ajuster vos filtres ou votre recherche'
      : 'Try adjusting your filters or search'
  };

  if (certifications.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-dark-500 dark:text-dark-400 text-lg">{labels.noCertifications}</p>
        <p className="text-dark-400 dark:text-dark-500 text-sm mt-1">{labels.tryAdjusting}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {certifications.map((certification, index) => (
        <CertificationListItem
          key={certification.id}
          certification={certification}
          index={index}
        />
      ))}
    </div>
  );
};
