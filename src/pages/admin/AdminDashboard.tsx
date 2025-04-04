import React, { useState } from 'react';
import AdminSidebar from '../../features/admin/components/AdminSidebar';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('2023');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  React.useEffect(() => {
    const checkOverflow = () => {
      if (document.body.scrollWidth > window.innerWidth) {
        console.warn('Horizontal overflow detected in AdminDashboard');
      }
    };
    window.addEventListener('resize', checkOverflow);
    checkOverflow();
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white overflow-x-hidden max-w-full outline outline-2 outline-red-500">
      {/* Mobile sidebar overlay */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 flex flex-col z-40 w-64 bg-gray-800">
          <AdminSidebar 
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
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button 
                className="mr-4 md:hidden text-gray-300"
                onClick={() => setSidebarOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod} 
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm text-white"
              >
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
              <div className="relative">
                <button className="p-2 bg-gray-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
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
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('providers')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'providers'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Providers
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'bookings'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'payments'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Payments
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                activeTab === 'reports'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Reports
            </button>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => setActiveTab('marketing')}
                className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                  activeTab === 'marketing'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Marketing
              </button>
              <button
                onClick={() => setActiveTab('broadcasts')}
                className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                  activeTab === 'broadcasts'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Broadcasts
              </button>
              <button
                onClick={() => setActiveTab('communications')}
                className={`px-3 py-2 text-sm rounded-md whitespace-nowrap ${
                  activeTab === 'communications'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Communications
              </button>
            </div>
          </div>
        </header>

        <div className="p-4 space-y-4 flex-1 overflow-y-auto w-full max-w-full">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-900 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">New Users</p>
                      <h3 className="text-2xl font-bold text-white">45.6k</h3>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-900 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">New Providers</p>
                      <h3 className="text-2xl font-bold text-white">1.2k</h3>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-purple-900 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Total Revenue</p>
                      <h3 className="text-2xl font-bold text-white">$89.5k</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-white">Revenue Growth</h3>
                  <div className="text-sm text-gray-400">$25,980</div>
                </div>
                <div className="h-48 flex items-end space-x-1">
                  {[35, 45, 55, 65, 75, 85, 95, 85, 75, 65, 75, 85, 95, 105, 115, 125, 115, 105, 95, 85].map((height, i) => (
                    <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${height * 0.8}px` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>0</span>
                  <span>10</span>
                  <span>20</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-base font-semibold text-white">User Management</h3>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Add User</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8">
                            <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/40" alt="" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-white">Jane Cooper</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-400">jane.cooper@example.com</div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-400">Customer</div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">Active</span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-400 hover:text-blue-300 mr-3">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Suspend</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'providers' && (
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-base font-semibold text-white">Provider Management</h3>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Add Provider</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Services</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rating</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8">
                            <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/40" alt="" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-white">John Smith</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-400">Boat Cleaning, Engine Repair</div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-400">4.8/5</div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">Verified</span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-400 hover:text-blue-300 mr-3">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Suspend</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'bookings' && (
            <div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                  <h3 className="text-base font-semibold text-white">Booking Management</h3>
                  <div>
                    <select className="bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm text-white mr-2">
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Filter</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Booking ID</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Service</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Provider</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">#BK-1234</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Boat Cleaning</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Alice Johnson</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">John Smith</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Apr 10, 2025</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900 text-yellow-300">Pending</span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-400 hover:text-blue-300 mr-3">View</button>
                          <button className="text-green-400 hover:text-green-300">Approve</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'payments' && (
            <div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                  <h3 className="text-base font-semibold text-white">Payment Management</h3>
                  <div>
                    <input type="date" className="bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm text-white mr-2" />
                    <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Export</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Transaction ID</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Service</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Provider</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">#TX-5678</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Engine Repair</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Bob Wilson</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">John Smith</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">$590.00</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Apr 2, 2025</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">Completed</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'reports' && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-white">Revenue Reports</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-600">Daily</button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Weekly</button>
                    <button className="px-3 py-1.5 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-600">Monthly</button>
                  </div>
                </div>
                <div className="h-64 flex items-end space-x-1">
                  {[45, 55, 65, 75, 85, 95, 105, 95, 85, 75, 85, 95].map((height, i) => (
                    <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${height * 0.5}px` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Week 1</span>
                  <span>Week 6</span>
                  <span>Week 12</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-white">Service Popularity</h3>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Boat Cleaning</span>
                      <span className="text-sm text-gray-400">65%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Engine Repair</span>
                      <span className="text-sm text-gray-400">45%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Hull Maintenance</span>
                      <span className="text-sm text-gray-400">30%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'marketing' && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-white">Marketing Tools</h3>
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Create Campaign</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Email Marketing */}
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full bg-blue-900 p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-white">Email Campaigns</h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">Send targeted emails to customers and providers</p>
                    <button className="w-full px-3 py-1.5 bg-gray-600 text-white text-xs rounded-md hover:bg-gray-500">Manage</button>
                  </div>
                  
                  {/* Discount Codes */}
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full bg-green-900 p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-white">Discount Codes</h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">Create and manage promotional codes</p>
                    <button className="w-full px-3 py-1.5 bg-gray-600 text-white text-xs rounded-md hover:bg-gray-500">Manage</button>
                  </div>
                  
                  {/* Broadcasts */}
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full bg-purple-900 p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-white">Broadcasts</h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">Send announcements to all users</p>
                    <button className="w-full px-3 py-1.5 bg-gray-600 text-white text-xs rounded-md hover:bg-gray-500">Manage</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'broadcasts' && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-white">Create Broadcast</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Message Title</label>
                    <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white" placeholder="Enter message title" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white h-24" placeholder="Enter your message"></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Send Broadcast</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-base font-semibold text-white mb-4">Recent Broadcasts</h3>
                <div className="space-y-3">
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="flex justify-between mb-1">
                      <div className="text-sm font-medium text-white">System Maintenance</div>
                      <div className="text-xs text-gray-400">Apr 1, 2025</div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Scheduled maintenance on April 5th from 2-4 AM EST.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Sent to: All Users</span>
                      <button className="text-xs text-blue-400 hover:text-blue-300">View Details</button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="flex justify-between mb-1">
                      <div className="text-sm font-medium text-white">New Feature Announcement</div>
                      <div className="text-xs text-gray-400">Mar 20, 2025</div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">We've added new booking features to improve your experience.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Sent to: All Users</span>
                      <button className="text-xs text-blue-400 hover:text-blue-300">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'communications' && (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-white">User Messages</h3>
                  <div>
                    <select className="bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm text-white">
                      <option value="all">All Messages</option>
                      <option value="unread">Unread</option>
                      <option value="flagged">Flagged</option>
                    </select>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">John Smith</div>
                          <div className="text-xs text-gray-400">Customer</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">Booking Cancellation</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Apr 3, 2025</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900 text-red-300">Unread</span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-400 hover:text-blue-300">Reply</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">Sarah Johnson</div>
                          <div className="text-xs text-gray-400">Provider</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">Payment Issue</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">Apr 1, 2025</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900 text-yellow-300">Flagged</span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-400 hover:text-blue-300">Reply</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-white mb-4">Support Performance</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Average Response Time</span>
                        <span className="text-sm text-white">2.4 hours</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Resolution Rate</span>
                        <span className="text-sm text-white">92%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Customer Satisfaction</span>
                        <span className="text-sm text-white">4.7/5</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-white mb-4">Message Volume</h3>
                  <div className="h-40 flex items-end justify-between px-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8 rounded-t" style={{ height: '30%' }}></div>
                      <span className="text-xs text-gray-400 mt-1">Mon</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8 rounded-t" style={{ height: '60%' }}></div>
                      <span className="text-xs text-gray-400 mt-1">Tue</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8 rounded-t" style={{ height: '45%' }}></div>
                      <span className="text-xs text-gray-400 mt-1">Wed</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8 rounded-t" style={{ height: '75%' }}></div>
                      <span className="text-xs text-gray-400 mt-1">Thu</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8 rounded-t" style={{ height: '90%' }}></div>
                      <span className="text-xs text-gray-400 mt-1">Fri</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8 rounded-t" style={{ height: '40%' }}></div>
                      <span className="text-xs text-gray-400 mt-1">Sat</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-500 w-8 rounded-t" style={{ height: '20%' }}></div>
                      <span className="text-xs text-gray-400 mt-1">Sun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;