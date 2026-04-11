interface ProgressBarProps {
  value: number;
  max: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'error';
}

export const ProgressBar = ({
  value,
  max,
  showLabel = false,
  size = 'md',
  color = 'primary',
}: ProgressBarProps) => {
  const percentage = Math.round((value / max) * 100);

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const colorClasses = {
    primary: 'bg-primary-600 dark:bg-primary-500',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-dark-600 dark:text-dark-400">
            {value} / {max}
          </span>
          <span className="font-medium text-dark-900 dark:text-white">{percentage}%</span>
        </div>
      )}
      <div
        className={`w-full bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden ${sizeClasses[size]}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-300 ease-out ${colorClasses[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
