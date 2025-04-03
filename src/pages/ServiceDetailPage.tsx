import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MarineService } from '../types';
import { FaStar, FaRegStar, FaStarHalfAlt, FaCalendarAlt, FaClock, FaUser, FaCheckCircle, FaEnvelope, FaPhone } from 'react-icons/fa';

interface ServiceDetailPageProps {
  services: MarineService[];
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ services }) => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Find the service with the matching ID
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Service Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">The service you're looking for doesn't exist or has been removed.</p>
        <Link to="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Back to Services
        </Link>
      </div>
    );
  }

  // Sample reviews if none exist
  const reviews = service.reviews && service.reviews.length > 0 ? service.reviews : [
    {
      id: 'r1',
      user: 'John D.',
      rating: 5,
      comment: 'Excellent service! The team was professional and completed the work ahead of schedule.',
      date: '2025-03-15',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 'r2',
      user: 'Sarah M.',
      rating: 4,
      comment: 'Very satisfied with the quality of work. Would recommend to other boat owners.',
      date: '2025-03-10',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 'r3',
      user: 'Robert K.',
      rating: 5,
      comment: 'Outstanding attention to detail. My boat looks brand new!',
      date: '2025-02-28',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg'
    }
  ];

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{service.name}</h1>
            <div className="text-sm text-blue-100">
              <Link to="/" className="hover:underline">Home</Link> / 
              <Link to="/services" className="hover:underline"> Services</Link> / 
              <span> {service.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Service Image */}
            <div className="mb-8">
              <img src={service.image} alt={service.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex space-x-8">
                <button 
                  className={`py-4 font-medium text-lg border-b-2 ${activeTab === 'description' ? 'border-blue-600 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`py-4 font-medium text-lg border-b-2 ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({reviews.length})
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            {activeTab === 'description' ? (
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">About This Service</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
                
                <h2 className="text-2xl font-semibold mb-4 mt-8 dark:text-white">What's Included</h2>
                <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300">
                  <li>Professional {service.name.toLowerCase()} by certified technicians</li>
                  <li>All necessary equipment and materials</li>
                  <li>Detailed report of work completed</li>
                  <li>30-day satisfaction guarantee</li>
                  <li>Follow-up inspection if needed</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4 mt-8 dark:text-white">Service Process</h2>
                <ol className="list-decimal pl-5 mb-6 text-gray-700 dark:text-gray-300">
                  <li>Initial assessment of your vessel</li>
                  <li>Detailed quote and timeline provided</li>
                  <li>Service performed by our expert team</li>
                  <li>Quality check and final inspection</li>
                  <li>Customer review and satisfaction confirmation</li>
                </ol>
              </div>
            ) : (
              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="font-semibold mr-2 dark:text-white">{review.user}</h4>
                          <div className="flex">{renderStars(review.rating)}</div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{review.date}</p>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Leave a Review</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Share your experience with this service</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Write a Review
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Service Details Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Service Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Price:</p>
                  <p className="text-2xl font-bold dark:text-white">${service.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Duration:</p>
                  <p className="text-lg font-medium dark:text-white">{service.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Category:</p>
                  <p className="text-lg font-medium dark:text-white capitalize">{service.category}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Rating:</p>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(service.averageRating || 0)}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">({service.averageRating})</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Next Available:</p>
                  <p className="text-lg font-medium dark:text-white flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-600" />
                    {service.availability?.nextAvailable || 'Contact for availability'}
                  </p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
            
            {/* Provider Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">About the Provider</h3>
              {service.provider && (
                <>
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(service.provider.name)}&background=0D8ABC&color=fff`} 
                      alt={service.provider.name} 
                      className="w-16 h-16 rounded-full border-2 border-blue-600" 
                    />
                    <div>
                      <p className="font-semibold dark:text-white">{service.provider.name}</p>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {renderStars(service.provider.rating)}
                        </div>
                        <span className="text-gray-600 dark:text-gray-300">({service.provider.rating})</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaCheckCircle className="mr-2 text-green-500" />
                      <span>Verified Provider</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaUser className="mr-2 text-blue-600" />
                      <span>{service.provider.totalServices}+ Services Completed</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaClock className="mr-2 text-blue-600" />
                      <span>Member since {service.provider.joinedDate}</span>
                    </div>
                  </div>
                </>
              )}
              
              {/* Contact Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full bg-white border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <FaEnvelope className="mr-2" /> Contact Provider
                </button>
                <a 
                  href="tel:+1234567890" 
                  className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center dark:bg-transparent dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <FaPhone className="mr-2" /> Call Provider
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            {showContactForm && (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                      rows={4}
                      placeholder="What would you like to know about this service?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
