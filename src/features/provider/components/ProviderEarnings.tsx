import React, { useState } from 'react';

interface Transaction {
  id: string;
  date: string;
  customer: string;
  service: string;
  amount: number;
  status: 'completed' | 'pending' | 'in-escrow';
  orderId: string;
}

const ProviderEarnings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample earnings data
  const earningsData = {
    totalEarnings: 4280.50,
    pendingPayments: 799.99,
    inEscrow: 549.98,
    availableForWithdrawal: 2930.53,
    monthlyEarnings: [
      { month: 'Jan', amount: 450 },
      { month: 'Feb', amount: 680 },
      { month: 'Mar', amount: 1240 },
      { month: 'Apr', amount: 1910.50 },
    ],
    transactions: [
      {
        id: 'txn-1234',
        date: '2025-04-01',
        customer: 'James Wilson',
        service: 'Engine Maintenance',
        amount: 299.99,
        status: 'in-escrow',
        orderId: 'ORD-2023-1234'
      },
      {
        id: 'txn-1233',
        date: '2025-03-28',
        customer: 'Sarah Johnson',
        service: 'Hull Cleaning',
        amount: 199.99,
        status: 'completed',
        orderId: 'ORD-2023-1233'
      },
      {
        id: 'txn-1232',
        date: '2025-03-25',
        customer: 'Michael Brown',
        service: 'Electrical System Check',
        amount: 249.99,
        status: 'completed',
        orderId: 'ORD-2023-1232'
      },
      {
        id: 'txn-1231',
        date: '2025-03-20',
        customer: 'Lisa Thompson',
        service: 'Boat Detailing',
        amount: 499.99,
        status: 'completed',
        orderId: 'ORD-2023-1231'
      },
      {
        id: 'txn-1230',
        date: '2025-03-15',
        customer: 'Robert Davis',
        service: 'Navigation System Installation',
        amount: 799.99,
        status: 'pending',
        orderId: 'ORD-2023-1230'
      },
      {
        id: 'txn-1229',
        date: '2025-03-10',
        customer: 'Emily Wilson',
        service: 'Hull Cleaning',
        amount: 199.99,
        status: 'completed',
        orderId: 'ORD-2023-1229'
      },
      {
        id: 'txn-1228',
        date: '2025-03-05',
        customer: 'David Miller',
        service: 'Engine Maintenance',
        amount: 299.99,
        status: 'completed',
        orderId: 'ORD-2023-1228'
      },
      {
        id: 'txn-1227',
        date: '2025-03-01',
        customer: 'Jennifer Lee',
        service: 'Sail Repair',
        amount: 399.99,
        status: 'completed',
        orderId: 'ORD-2023-1227'
      },
    ] as Transaction[]
  };

  // Filter transactions based on status
  const getFilteredTransactions = () => {
    if (activeTab === 'overview') return earningsData.transactions.slice(0, 5);
    if (activeTab === 'escrow') return earningsData.transactions.filter(t => t.status === 'in-escrow');
    if (activeTab === 'pending') return earningsData.transactions.filter(t => t.status === 'pending');
    if (activeTab === 'completed') return earningsData.transactions.filter(t => t.status === 'completed');
    return earningsData.transactions;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Earnings</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{formatCurrency(earningsData.totalEarnings)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Available for Withdrawal</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{formatCurrency(earningsData.availableForWithdrawal)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">In Escrow</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{formatCurrency(earningsData.inEscrow)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Payments</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{formatCurrency(earningsData.pendingPayments)}</p>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Monthly Earnings</h3>
        <div className="h-64 flex items-end justify-between">
          {earningsData.monthlyEarnings.map((month, index) => {
            const heightPercentage = (month.amount / Math.max(...earningsData.monthlyEarnings.map(m => m.amount))) * 100;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{formatCurrency(month.amount)}</div>
                <div 
                  className="w-16 bg-blue-500 rounded-t"
                  style={{ height: `${heightPercentage}%` }}
                ></div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-2">{month.month}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('escrow')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'escrow'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              In Escrow
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Completed
            </button>
          </nav>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Service
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {getFilteredTransactions().map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                    {transaction.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {transaction.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {transaction.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {formatCurrency(transaction.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : transaction.status === 'in-escrow'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {transaction.status === 'in-escrow' ? 'In Escrow' : transaction.status === 'pending' ? 'Pending' : 'Completed'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {getFilteredTransactions().length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
          </div>
        )}

        {activeTab === 'overview' && getFilteredTransactions().length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View All Transactions
            </button>
          </div>
        )}
      </div>

      {/* Withdrawal Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Withdraw Funds</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Amount to Withdraw
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
                placeholder="0.00"
                min="0"
                max={earningsData.availableForWithdrawal}
                step="0.01"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Available balance: {formatCurrency(earningsData.availableForWithdrawal)}
            </p>
          </div>
          
          <div>
            <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Payment Method
            </label>
            <select
              id="payment-method"
              name="payment-method"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="bank">Bank Transfer (ACH)</option>
              <option value="paypal">PayPal</option>
              <option value="stripe">Stripe</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderEarnings;
