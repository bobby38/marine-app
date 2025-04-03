import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: 'Maintenance',
      description: 'Regular upkeep and preventive maintenance for your vessel',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg',
      popular: ['Engine Tune-up', 'Hull Inspection', 'Systems Check']
    },
    {
      title: 'Repair',
      description: 'Expert repair services for all types of marine vessels',
      image: 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg',
      popular: ['Engine Repair', 'Electronics Fix', 'Structural Repair']
    },
    {
      title: 'Cleaning',
      description: 'Keep your boat spotless with our cleaning services',
      image: 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg',
      popular: ['Hull Cleaning', 'Interior Detailing', 'Deck Washing']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 mix-blend-multiply" />
          <img
            src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg"
            alt="Marine services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Your Marine Services Marketplace
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100 mb-10">
              Connect with expert marine service providers or offer your services to boat owners worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 text-lg font-medium rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Find Services
              </button>
              <button
                onClick={() => navigate('/provider/signup')}
                className="px-8 py-4 text-lg font-medium rounded-xl border-2 border-white text-white hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Become a Provider
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Providers', value: '500+' },
              { label: 'Services Completed', value: '10,000+' },
              { label: 'Happy Customers', value: '8,000+' },
              { label: 'Locations', value: '50+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Popular Service Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transform transition-all hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.popular.map((service, j) => (
                      <div key={j} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="mr-2">→</span>
                        {service}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate(`/services?category=${category.title.toLowerCase()}`)}
                    className="mt-6 w-full py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    View Services
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Provider Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Start Earning as a Service Provider</h2>
              <div className="space-y-4">
                {[
                  'Create your professional profile',
                  'Set your own prices and availability',
                  'Get paid securely for your services',
                  'Build your reputation with reviews',
                  'Access tools to grow your business'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center text-blue-100">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => navigate('/provider/signup')}
                  className="px-8 py-3 text-lg font-medium rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105"
                >
                  Start Now - It's Free
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-xl" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Preview: Engine Maintenance Service</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Starting from</span>
                    <span className="font-semibold dark:text-white">$299</span>
                  </div>
                  <div className="border-t dark:border-gray-700 pt-4">
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <div>✓ Complete engine inspection</div>
                      <div>✓ Oil and filter change</div>
                      <div>✓ System diagnostics</div>
                      <div>✓ Performance optimization</div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/provider/signup')}
                    className="w-full py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Create Similar Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/user/signup')}
              className="px-8 py-4 text-lg font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Sign Up as User
            </button>
            <button
              onClick={() => navigate('/provider/signup')}
              className="px-8 py-4 text-lg font-medium rounded-xl border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all transform hover:scale-105"
            >
              Become a Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
