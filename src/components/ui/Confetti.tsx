import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

interface ConfettiProps {
  isActive: boolean;
  duration?: number;
}

const colors = [
  '#3FA055', // primary green
  '#6DBE45', // mid green
  '#8CC63F', // light green
  '#B7D334', // highlight
  '#ec4899', // pink
  '#8b5cf6', // purple
  '#ef4444', // red
  '#C9DD55', // accent
];

export const Confetti = ({ isActive, duration = 3000 }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      const newPieces: ConfettiPiece[] = [];

      for (let i = 0; i < 100; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 2,
          size: 8 + Math.random() * 8,
          rotation: Math.random() * 360,
        });
      }

      setPieces(newPieces);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setPieces([]);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, duration]);

  if (!isVisible) return null;

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.x}%`,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

// Celebration burst animation for smaller celebrations
export const CelebrationBurst = ({ isActive }: { isActive: boolean }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    angle: number;
    distance: number;
    color: string;
    size: number;
  }>>([]);

  useEffect(() => {
    if (isActive) {
      const newParticles = [];
      for (let i = 0; i < 12; i++) {
        newParticles.push({
          id: i,
          angle: (i * 30) + Math.random() * 20,
          distance: 30 + Math.random() * 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6 + Math.random() * 4,
        });
      }
      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            animation: 'burst 0.6s ease-out forwards',
            transform: `rotate(${particle.angle}deg) translateY(-${particle.distance}px)`,
          }}
        />
      ))}
      <style>{`
        @keyframes burst {
          0% {
            opacity: 1;
            transform: rotate(var(--angle)) translateY(0);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--angle)) translateY(-60px);
          }
        }
      `}</style>
    </div>
  );
};

// Success checkmark animation
export const SuccessAnimation = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;

  return (
    <div className="relative inline-flex items-center justify-center w-24 h-24">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-scale-in" />
      <svg
        className="relative w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
          className="animate-draw-check"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: 24,
            animation: 'draw-check 0.4s ease-out 0.2s forwards',
          }}
        />
      </svg>
      <style>{`
        @keyframes draw-check {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Score counter animation
export const AnimatedScore = ({ score, duration = 2000 }: { score: number; duration?: number }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = score / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score, duration]);

  return (
    <span className="result-score tabular-nums">
      {displayScore}%
    </span>
  );
};

// Progress ring animation
export const ProgressRing = ({
  progress,
  size = 120,
  strokeWidth = 8,
  color = 'primary'
}: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: 'primary' | 'success' | 'warning' | 'error';
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const colorClasses = {
    primary: 'stroke-primary-500',
    success: 'stroke-green-500',
    warning: 'stroke-yellow-500',
    error: 'stroke-red-500',
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="stroke-dark-200 dark:stroke-dark-700"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`${colorClasses[color]} transition-all duration-1000 ease-out`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-dark-900 dark:text-white">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};
