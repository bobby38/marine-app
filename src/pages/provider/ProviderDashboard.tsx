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
  CreateService,
  ProviderBookings,
  ProviderReviews
} from '../../features/provider/components';

const ProviderDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      case 'bookings':
        return <ProviderBookings />;
      case 'reviews':
        return <ProviderReviews />;
      default:
        return <ProviderOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar overlay */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 flex flex-col z-40 w-64 bg-white dark:bg-gray-800">
          <ProviderSidebar 
            activeTab={activeTab} 
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setSidebarOpen(false);
            }}
            mobile={true}
          />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <ProviderSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button 
                className="mr-4 md:hidden text-gray-600 dark:text-gray-300"
                onClick={() => setSidebarOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Provider Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Tab navigation for mobile */}
          <div className="flex overflow-x-auto space-x-4 mt-4 md:hidden">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'services'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('create-service')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'create-service'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Create Service
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'messages'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Messages
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'earnings'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Earnings
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-4 md:p-6">
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back, {user?.name}
            </p>
          </div>

          {/* Active Component */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6">
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
