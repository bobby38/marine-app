import React from 'react';

interface BookNowButtonProps {
  onClick: () => void;
  isAvailable: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BookNowButton: React.FC<BookNowButtonProps> = ({
  onClick,
  isAvailable,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const baseClasses = 'rounded-lg font-semibold transition-all duration-200 ease-in-out';
  const availableClasses = 'bg-[#06B6D4] hover:bg-[#0891b2] text-white';
  const unavailableClasses = 'bg-gray-300 cursor-not-allowed text-gray-600';

  return (
    <button
      onClick={isAvailable ? onClick : undefined}
      disabled={!isAvailable}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${isAvailable ? availableClasses : unavailableClasses}
        ${className}
      `}
    >
      {isAvailable ? 'Book Now' : 'Unavailable'}
    </button>
  );
};