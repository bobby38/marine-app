import React from 'react';
import { MarineService } from '../types';
import { RatingWidget } from './RatingWidget';
import { BookNowButton } from './BookNowButton';

interface ServiceCardProps {
  service: MarineService;
  onBookNow: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookNow }) => {
  const isAvailable = service.availability.slots.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        {service.averageRating > 4.5 && (
          <div className="absolute top-2 right-2 bg-[#1E3A8A] text-white px-2 py-1 rounded-md text-sm font-semibold">
            Top Rated
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {service.title}
          </h3>
          <span className="text-lg font-bold text-[#1E3A8A]">
            ${service.price}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <RatingWidget rating={service.averageRating} size="sm" />
            <span className="text-sm text-gray-600">
              ({service.reviews.length} reviews)
            </span>
          </div>
          {isAvailable && (
            <span className="text-sm text-green-600">
              Next available: {service.availability.nextAvailable}
            </span>
          )}
        </div>

        <BookNowButton
          onClick={() => onBookNow(service.id)}
          isAvailable={isAvailable}
          className="w-full"
        />
      </div>
    </div>
  );
};