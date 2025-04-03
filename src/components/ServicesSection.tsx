import React from 'react';
import { MarineService } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  services: MarineService[];
  onBookNow: (serviceId: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services, onBookNow }) => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our range of professional marine services designed to keep your vessel in optimal condition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onBookNow={onBookNow} 
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#152a65] transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;