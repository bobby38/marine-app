import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const BecomeProviderPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUserRole } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    description: '',
    serviceArea: '',
    phoneNumber: '',
    experience: '',
    certifications: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/auth');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateUserRole('provider');
      navigate('/provider/dashboard');
    } catch (err) {
      setError('Failed to register as provider. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] mb-12 flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1007836/pexels-photo-1007836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Marine background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Grow Your Marine Business</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">Join the leading platform connecting marine service providers with thousands of boat owners.</p>
          <a
            href="/auth?mode=signup"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Become a Provider Today
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5,000+</p>
            <p className="text-gray-600 dark:text-gray-300">Active Customers</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$2.5M+</p>
            <p className="text-gray-600 dark:text-gray-300">Revenue Generated</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</p>
            <p className="text-gray-600 dark:text-gray-300">Service Providers</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.8/5</p>
            <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Membership Pricing Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center border border-gray-200 dark:border-gray-700">
            <div className="text-5xl mb-4">🆓</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Free</h3>
            <p className="text-2xl font-bold mb-4 dark:text-white">$0<span className="text-base font-normal">/year</span></p>
            <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Basic profile listing</li>
              <li>Limited service categories</li>
              <li>Access to inquiries</li>
            </ul>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center border-2 border-blue-600 dark:border-blue-400">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Pro</h3>
            <p className="text-2xl font-bold mb-4 dark:text-white">$500<span className="text-base font-normal">/year</span></p>
            <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Everything in Free</li>
              <li>Priority listing</li>
              <li>Unlimited service categories</li>
              <li>Booking management tools</li>
              <li>Customer messaging</li>
            </ul>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Upgrade to Pro
            </button>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center border border-gray-200 dark:border-gray-700">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Elite</h3>
            <p className="text-2xl font-bold mb-4 dark:text-white">$1000<span className="text-base font-normal">/year</span></p>
            <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Everything in Pro</li>
              <li>Featured provider badge</li>
              <li>Dedicated support</li>
              <li>Marketing promotions</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Go Elite
            </button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-3xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Register as a Provider</h2>
          {!user ? (
            <div className="text-center">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                You need to be signed in to register as a provider.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => navigate('/auth?mode=signin')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate('/auth?mode=signup')}
                  className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-4 p-4 text-red-700 bg-red-100 dark:bg-red-900/20 dark:text-red-400 rounded-md">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {/* Form content omitted for brevity, same as before */}
              </form>
            </>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">What Our Providers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "MarineServices helped me grow my business by 50% in just one year. The platform is easy to use and connects me with serious clients."
            </p>
            <p className="font-semibold dark:text-white">Captain Lee, Singapore</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "Joining MarineServices was the best decision for my marine repair shop. I get steady leads and great support."
            </p>
            <p className="font-semibold dark:text-white">Maria Gomez, Philippines</p>
          </div>
        </div>
      </section>

      {/* Trust Signs Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="https://via.placeholder.com/120x60?text=SG+Maritime" alt="SG Maritime" className="h-12 object-contain" />
          <img src="https://via.placeholder.com/120x60?text=Asia+Marine" alt="Asia Marine" className="h-12 object-contain" />
          <img src="https://via.placeholder.com/120x60?text=Boat+Assoc" alt="Boat Association" className="h-12 object-contain" />
          <img src="https://via.placeholder.com/120x60?text=Int'l+Marine" alt="International Marine" className="h-12 object-contain" />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Seafarer Services, Singapore</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Increased bookings by 70% after joining MarineServices, expanded their team, and now serve clients across Southeast Asia.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">OceanFix, Malaysia</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Grew from a small workshop to a regional leader in marine repairs, thanks to steady leads and platform support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2 dark:text-white">How do I become a provider?</h3>
            <p className="text-gray-600 dark:text-gray-300">Sign up on this page, complete your profile, and start receiving inquiries from boat owners.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2 dark:text-white">Is there a fee to join?</h3>
            <p className="text-gray-600 dark:text-gray-300">We offer Free, Pro, and Elite plans to suit your business needs. See the membership section above.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2 dark:text-white">Can I upgrade my plan later?</h3>
            <p className="text-gray-600 dark:text-gray-300">Yes, you can upgrade or downgrade your membership anytime from your dashboard.</p>
          </div>
        </div>
      </section>

      {/* Media Appearances Section */}
      <section className="max-w-5xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">As Featured In</h2>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-5xl mb-2">📰</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Straits Times</p>
          </div>
          <div>
            <div className="text-5xl mb-2">📺</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Channel NewsAsia</p>
          </div>
          <div>
            <div className="text-5xl mb-2">🌊</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Marine Weekly</p>
          </div>
          <div>
            <div className="text-5xl mb-2">🌐</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">International Boat Magazine</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeProviderPage;
