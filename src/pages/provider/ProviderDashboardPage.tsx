import React, { useState } from 'react';
import ProviderSidebar from '../../features/provider/components/ProviderSidebar';
import ProviderOverview from '../../features/provider/components/ProviderOverview';
import ProviderEarnings from '../../features/provider/components/ProviderEarnings';
import ProviderMessages from '../../features/provider/components/ProviderMessages';
import ProviderServices from '../../features/provider/components/ProviderServices';
import ProviderProfile from '../../features/provider/components/ProviderProfile';

const ProviderDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen">
      <ProviderSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
        {activeTab === 'overview' && <ProviderOverview />}
        {activeTab === 'earnings' && <ProviderEarnings />}
        {activeTab === 'messages' && <ProviderMessages />}
        {activeTab === 'services' && <ProviderServices />}
        {activeTab === 'profile' && <ProviderProfile />}
      </main>
    </div>
  );
};

export default ProviderDashboardPage;
