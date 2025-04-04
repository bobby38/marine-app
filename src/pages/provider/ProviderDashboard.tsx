import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  ProviderSidebar,
  ProviderOverview,
  ProviderServices,
  ProviderProfile,
  ProviderMessages,
  ProviderEarnings,
  CreateService
} from '../../features/provider/components';

const ProviderDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  // Render the active component based on the selected tab
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'overview':
        return <ProviderOverview />;
      case 'services':
        return <ProviderServices />;
      case 'create-service':
        return <CreateService />;
      case 'profile':
        return <ProviderProfile />;
      case 'messages':
        return <ProviderMessages />;
      case 'earnings':
        return <ProviderEarnings />;
      default:
        return <ProviderOverview />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <ProviderSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {activeTab === 'overview' && 'Dashboard Overview'}
            {activeTab === 'services' && 'My Services'}
            {activeTab === 'create-service' && 'Create New Service'}
            {activeTab === 'profile' && 'Provider Profile'}
            {activeTab === 'messages' && 'Messages'}
            {activeTab === 'earnings' && 'Earnings & Payments'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back, {user?.name}
          </p>
        </div>

        {/* Active Component */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
