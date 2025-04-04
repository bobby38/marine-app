import React from 'react';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">User Management</h2>
          <p className="text-gray-600 dark:text-gray-300">View, edit, and manage all users on the platform.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Provider Approvals</h2>
          <p className="text-gray-600 dark:text-gray-300">Approve or reject new provider applications.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Reports & Analytics</h2>
          <p className="text-gray-600 dark:text-gray-300">View platform usage, revenue, and other key metrics.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
