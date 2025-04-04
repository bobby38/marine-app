import React from 'react';

const ProviderOverview: React.FC = () => {
  // Sample data for the overview dashboard
  const stats = [
    { label: 'Active Services', value: 5, change: '+2', isPositive: true },
    { label: 'Completed Jobs', value: 28, change: '+3', isPositive: true },
    { label: 'Total Earnings', value: '$4,280', change: '+$650', isPositive: true },
    { label: 'Response Rate', value: '95%', change: '-2%', isPositive: false },
  ];

  const recentOrders = [
    {
      id: 'ORD-2023-1234',
      customer: 'James Wilson',
      service: 'Engine Maintenance',
      date: '2025-04-01',
      status: 'In Progress',
    },
    {
      id: 'ORD-2023-1235',
      customer: 'Sarah Brown',
      service: 'Hull Cleaning',
      date: '2025-03-30',
      status: 'Completed',
    },
    {
      id: 'ORD-2023-1236',
      customer: 'Michael Chen',
      service: 'Electrical System Check',
      date: '2025-03-29',
      status: 'Completed',
    },
  ];

  const notifications = [
    {
      id: 1,
      type: 'message',
      from: 'John Smith',
      subject: 'New inquiry',
      preview: 'Hello, I would like to know more about your services...',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'review',
      from: 'Emily Johnson',
      subject: '5-star review',
      preview: 'Great service! Very professional and thorough...',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'message',
      from: 'Robert Davis',
      subject: 'Service inquiry',
      preview: 'I am interested in your boat detailing service. Do you have availability...',
      time: '1 day ago',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Stats Cards */}
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
            <p className={`ml-2 text-sm font-medium ${
              stat.isPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'
            }`}>
              {stat.change}
            </p>
          </div>
        </div>
      ))}

      {/* Recent Orders */}
      <div className="col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {order.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="col-span-full md:col-span-1 bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="px-4 py-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Notifications</h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {notification.type === 'message' ? (
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                      <svg className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {notification.from}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {notification.subject}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {notification.preview}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderOverview;
