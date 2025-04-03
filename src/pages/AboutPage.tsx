import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">About MarineServices</h1>
        
        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            At MarineServices, we're dedicated to connecting boat owners with trusted marine service providers. Our mission is to make marine services accessible, reliable, and transparent for everyone.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold dark:text-white">500+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Providers</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold dark:text-white">10,000+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Services</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold dark:text-white">8,000+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Customers</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold dark:text-white">50+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Locations</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Values</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in clear pricing and honest reviews to help you make informed decisions.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We verify all providers to ensure you receive top-notch marine services.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're building a network of boat owners and service providers who share our passion for the marine world.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">How do I find a service provider?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply browse our services page, filter by category and location, and choose the provider that best fits your needs.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">Are all providers verified?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we thoroughly verify each provider's credentials and reviews before they join our platform.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 dark:text-white">What if I'm not satisfied with a service?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer a satisfaction guarantee. Contact our support team, and we'll work to resolve any issues.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 dark:text-white text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="John Doe" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold dark:text-white">John Doe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                With 15+ years in marine services, John founded MarineServices to revolutionize the industry.
              </p>
            </div>
            <div className="text-center">
              <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" alt="Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold dark:text-white">Jane Smith</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Operations Manager</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jane ensures smooth operations with her expertise in logistics and customer service.
              </p>
            </div>
            <div className="text-center">
              <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="Mike Johnson" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold dark:text-white">Mike Johnson</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Customer Success Lead</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Mike leads our support team, ensuring every customer has a great experience.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 dark:text-white text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "MarineServices has been a game-changer for my boat maintenance needs. The providers are professional and reliable."
              </p>
              <div className="flex items-center">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Sarah L." className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold dark:text-white">Sarah L.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Boat Owner</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "As a service provider, I've found MarineServices to be an excellent platform to grow my business and connect with clients."
              </p>
              <div className="flex items-center">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt="Mark T." className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold dark:text-white">Mark T.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marine Technician</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Ready to Get Started?</h2>
          <div className="flex justify-center gap-4">
            <a
              href="/services"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Services
            </a>
            <a
              href="/provider/signup"
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Become a Provider
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
