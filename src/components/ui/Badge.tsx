import type { Difficulty } from '../../types';

interface BadgeProps {
  variant?: 'default' | 'easy' | 'medium' | 'hard' | 'primary' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ variant = 'default', children, className = '' }: BadgeProps) => {
  const variantClasses = {
    default: 'bg-dark-100 text-dark-700 dark:bg-dark-700 dark:text-dark-300',
    easy: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export const DifficultyBadge = ({ difficulty }: { difficulty: Difficulty }) => {
  const labels = {
    easy: 'Facile',
    medium: 'Moyen',
    hard: 'Difficile',
  };

  return <Badge variant={difficulty}>{labels[difficulty]}</Badge>;
};
