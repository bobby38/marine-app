import React from 'react';

interface RatingWidgetProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export const RatingWidget: React.FC<RatingWidgetProps> = ({
  rating,
  size = 'md',
  interactive = false,
  onChange
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  // Calculate the number of full and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const renderStar = (position: number) => {
    // Determine if this position should be a full, half, or empty star
    const isFullStar = position < fullStars;
    const isHalfStar = position === fullStars && hasHalfStar;
    
    // Use teal from the marine color palette instead of yellow
    let starColor = 'text-gray-300'; // Default empty star
    if (isFullStar || isHalfStar) {
      starColor = 'text-[#06B6D4]';
    }

    const interactiveClasses = interactive
      ? 'cursor-pointer transition-colors duration-150 hover:text-[#06B6D4]'
      : '';

    return (
      <div
        key={position}
        className="relative"
        onClick={() => interactive && onChange?.(position + 1)}
        role={interactive ? "button" : undefined}
        aria-label={interactive ? `Rate ${position + 1} out of 5 stars` : undefined}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={(e) => {
          if (interactive && (e.key === 'Enter' || e.key === ' ')) {
            onChange?.(position + 1);
            e.preventDefault();
          }
        }}
      >
        {/* Base star (empty or full) */}
        <svg
          className={`${sizeClasses[size]} ${isHalfStar ? 'text-gray-300' : starColor} ${interactiveClasses}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={0}
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        
        {/* Half star overlay */}
        {isHalfStar && (
          <svg
            className={`${sizeClasses[size]} text-[#06B6D4] absolute top-0 left-0`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div
      className="inline-flex"
      aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}
    >
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => renderStar(index))}
      </div>
    </div>
  );
};