import React from 'react';
import { useParams } from 'react-router-dom';
import { MarineService } from '../types';
import ServiceCard from '../components/ServiceCard';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Fetch service data based on id

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900">
          <img src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg" alt="Marine services" className="w-full h-full object-cover mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Details</h1>
            <div className="text-sm text-blue-100">
              <span>Home</span> / <span>Services</span> / <span>Service Name</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Service Title</h1>
            <div className="mb-8">
              <img src="/service-image.jpg" alt="Service" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About This Service</h2>
              <p>Detailed service description...</p>
              <h2 className="text-2xl font-semibold mb-4 mt-8">What's Included</h2>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Service Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Price:</p>
                  <p className="text-2xl font-bold dark:text-white">$299.99</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Duration:</p>
                  <p className="text-lg font-medium dark:text-white">2-3 hours</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">About the Provider</h3>
              <div className="flex items-center space-x-4">
                <img src="/provider.jpg" alt="Provider" className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-semibold dark:text-white">Provider Name</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Rating: 4.8/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
