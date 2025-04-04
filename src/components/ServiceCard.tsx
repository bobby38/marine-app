import React from 'react';
import { MarineService } from '../types';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  service: MarineService;
  // Removed onBookNow prop as it's no longer used
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          console.error('Image failed to load for service:', service.name, 'URL:', service.image);
        }}
        onLoad={() => {
          console.log('Image loaded successfully for service:', service.name, 'URL:', service.image);
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{service.description}</p> {/* Added line-clamp */} 
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold dark:text-white">${service.price.toFixed(2)}</p> {/* Ensured 2 decimal places */}
            <p className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</p>
          </div>
          <button
            onClick={() => navigate(`/services/${service.id}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};