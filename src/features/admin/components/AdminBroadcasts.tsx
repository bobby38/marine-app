import React from 'react';

const AdminBroadcasts: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-white">Create Broadcast Message</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Recipient Type</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-600" name="recipient" defaultChecked />
                <span className="ml-2 text-sm text-gray-300">All Users</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-600" name="recipient" />
                <span className="ml-2 text-sm text-gray-300">Providers</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-600" name="recipient" />
                <span className="ml-2 text-sm text-gray-300">Customers</span>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Message Title</label>
            <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white" placeholder="Enter message title" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Message Content</label>
            <textarea className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white h-32" placeholder="Enter your message"></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Delivery Options</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
                <span className="ml-2 text-sm text-gray-300">In-App</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
                <span className="ml-2 text-sm text-gray-300">Email</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="ml-2 text-sm text-gray-300">SMS</span>
              </label>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-600 mr-3">Save Draft</button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Send Broadcast</button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h3 className="text-base font-semibold text-white">Recent Broadcasts</h3>
          <div>
            <select className="bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm text-white">
              <option value="all">All Types</option>
              <option value="announcement">Announcements</option>
              <option value="promotion">Promotions</option>
              <option value="update">System Updates</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sent To</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sent Date</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Delivery</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Open Rate</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">System Maintenance</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">All Users</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">Apr 1, 2025</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">In-App, Email</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">78%</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-400 hover:text-blue-300 mr-3">View</button>
                  <button className="text-green-400 hover:text-green-300">Resend</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">Spring Promotion</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">Customers</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">Mar 20, 2025</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">Email, SMS</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">65%</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-400 hover:text-blue-300 mr-3">View</button>
                  <button className="text-green-400 hover:text-green-300">Resend</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBroadcasts;
