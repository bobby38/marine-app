import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProviderProfile from '../features/provider/components/ProviderProfile';

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, updateUserRole } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  if (user?.role === 'provider') {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <div className="mb-4 flex space-x-4">
          <button
            onClick={() => updateUserRole('user')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Switch to User Role
          </button>
          <button
            onClick={() => {
              updateUserRole('admin');
              setTimeout(() => {
                window.location.href = '/admin/dashboard';
              }, 100);
            }}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Switch to Admin Role
          </button>
          <a
            href="/provider/dashboard"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-block"
          >
            Go to Provider Dashboard
          </a>
        </div>
        <ProviderProfile />
      </div>
    );
  }

  if (user?.role === 'admin') {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <div className="mb-4 flex space-x-4">
          <button
            onClick={() => updateUserRole('user')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Switch to User Role
          </button>
          <button
            onClick={() => {
              updateUserRole('provider');
              setTimeout(() => {
                window.location.href = '/provider/dashboard';
              }, 100);
            }}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Switch to Provider Role
          </button>
          <a
            href="/admin/dashboard"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-block"
          >
            Go to Admin Dashboard
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => updateUserRole('user')}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Switch to User Role
        </button>
        <button
          onClick={() => {
            updateUserRole('provider');
            setTimeout(() => {
              window.location.href = '/provider/dashboard';
            }, 100);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Switch to Provider Role
        </button>
        <button
          onClick={() => {
            updateUserRole('admin');
            setTimeout(() => {
              window.location.href = '/admin/dashboard';
            }, 100);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Switch to Admin Role
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Profile Information
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'bookings'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Favorites
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 text-2xl overflow-hidden">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                  ) : (
                    <span>{user?.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <div className="ml-6">
                  <h2 className="text-xl font-semibold">{user?.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
                  <button className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Change profile picture
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        defaultValue={user?.name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={user?.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Vessel Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="vesselType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Vessel Type
                        </label>
                        <select
                          id="vesselType"
                          name="vesselType"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                          <option value="">Select vessel type</option>
                          <option value="yacht">Yacht</option>
                          <option value="speedboat">Speedboat</option>
                          <option value="sailboat">Sailboat</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="vesselLength" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Vessel Length (ft)
                        </label>
                        <input
                          type="number"
                          id="vesselLength"
                          name="vesselLength"
                          placeholder="Enter vessel length"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-5">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div>
              <h3 className="text-lg font-medium mb-4">My Bookings</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-md p-4 mb-6">
                <p className="text-yellow-700 dark:text-yellow-500">
                  You don't have any active bookings. Browse our services to book your first marine service!
                </p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => window.location.href = '/services'}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Browse Services
                </button>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h3 className="text-lg font-medium mb-4">Favorite Services</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-md p-4 mb-6">
                <p className="text-yellow-700 dark:text-yellow-500">
                  You haven't saved any services as favorites yet.
                </p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => window.location.href = '/services'}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Browse Services
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
