import React from 'react';

const AdminMarketing: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-white">Marketing Campaigns</h3>
          <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Create Campaign</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Campaign</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Target</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Performance</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">Spring Boat Cleaning</div>
                  <div className="text-xs text-gray-400">Created Apr 1, 2025</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">Email</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">Boat Owners</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">Active</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">32% Open Rate</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-400 hover:text-blue-300 mr-3">Edit</button>
                  <button className="text-red-400 hover:text-red-300">Pause</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">Engine Maintenance</div>
                  <div className="text-xs text-gray-400">Created Mar 15, 2025</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">SMS</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">Previous Customers</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-600 text-gray-300">Draft</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">--</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-400 hover:text-blue-300 mr-3">Edit</button>
                  <button className="text-green-400 hover:text-green-300">Launch</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-white">Promotion Tools</h3>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-700 rounded-lg p-3 flex items-center">
              <div className="rounded-full bg-blue-900 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Email Campaigns</div>
                <div className="text-xs text-gray-400">Create targeted email campaigns</div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 flex items-center">
              <div className="rounded-full bg-green-900 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-white">SMS Marketing</div>
                <div className="text-xs text-gray-400">Send text message promotions</div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 flex items-center">
              <div className="rounded-full bg-purple-900 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Social Media</div>
                <div className="text-xs text-gray-400">Manage social media campaigns</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-white">Discount Codes</h3>
            <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Create Code</button>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-700 rounded-lg p-3 flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-white">SPRING25</div>
                <div className="text-xs text-gray-400">25% off, expires Apr 30</div>
              </div>
              <div className="text-sm text-gray-400">43 uses</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-white">NEWUSER</div>
                <div className="text-xs text-gray-400">$20 off first service</div>
              </div>
              <div className="text-sm text-gray-400">128 uses</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-white">REFER10</div>
                <div className="text-xs text-gray-400">10% off for referrals</div>
              </div>
              <div className="text-sm text-gray-400">75 uses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMarketing;
