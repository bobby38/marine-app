import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProviderProfile from '../features/provider/components/ProviderProfile';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      
      {/* Direct dashboard links */}
      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={() => navigate('/user/dashboard')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to User Dashboard
        </button>
        <button
          onClick={() => navigate('/provider/dashboard')}
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Go to Provider Dashboard
        </button>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Go to Admin Dashboard
        </button>
      </div>
      
      {user?.role === 'provider' && <ProviderProfile />}
      
      {/* Basic profile info for all users */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 text-2xl">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="ml-6">
            <h2 className="text-xl font-semibold">{user?.name || 'User'}</h2>
            <p className="text-gray-500 dark:text-gray-400">{user?.email || 'user@example.com'}</p>
            <p className="text-sm text-blue-600">Current Role: {user?.role || 'user'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
