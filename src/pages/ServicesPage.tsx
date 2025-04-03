import React, { useState } from 'react';
import { MarineService } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { useNavigate } from 'react-router-dom';

interface ServicesPageProps {
  services: MarineService[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'maintenance', 'cleaning', 'repair', 'installation'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 mb-12"> 
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900">
          {/* Optional: Add overlay elements here */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Explore Our Marine Services</h1>
          <p className="text-xl text-blue-100">Top-quality services for your vessel</p>
        </div>
      </div>

      {/* How It Works Section - Restored background and dark text */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Browse Services', description: 'Find the perfect service for your needs.', icon: '🔍' },
              { title: 'Book Online', description: 'Schedule your service easily and quickly.', icon: '📅' },
              { title: 'Get Quality Work', description: 'Our certified providers deliver top results.', icon: '⭐' },
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"> {/* Restored bg, dark:bg, shadow */}
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Restored background, shadow, and dark styles */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 py-4 px-4 rounded-lg shadow-sm mb-8"> 
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600' // Restored dark styles
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid Section - Restored background and dark text */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Our Services</h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">Browse our range of professional marine services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              // ServiceCard already handles its own dark mode styling
              <ServiceCard key={service.id} service={service} /> 
            ))}
          </div>
        </div>
      </section>

      {/* Provider CTA - Restored dark gradient */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 mt-16">
        <div className="absolute inset-0 bg-grid-white/15 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative px-6 py-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Are you a Marine Service Provider?
          </h3>
          <p className="text-lg text-purple-100 mb-8">
            Join our platform and reach more customers today!
          </p>
          <button
            onClick={() => navigate('/provider-signup')}
            className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            Learn More & Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
