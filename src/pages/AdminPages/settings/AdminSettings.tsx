import React from 'react';

const AdminSettings = () => {
  return (
    <div className="md:ml-[279px] sm:ml-0 p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Settings</h1>
      
      {/* Admin User Roles & Permissions */}
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold mt-6 sm:mt-10">
        Admin User Roles & Permissions
      </h2>
      <div className="overflow-x-auto mt-3 sm:mt-4 bg-white shadow-lg rounded-lg">
        <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Admin Name</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Role</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Permissions</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Status</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Super Admin</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Full Access</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="bg-green-500 text-white rounded-sm px-1 mr-1">✓</span>
                    <span className="hidden sm:inline">Active</span>
                    <span className="sm:hidden">Act</span>
                  </span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Manager</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">Manage Drivers & Reports</span>
                  <span className="sm:hidden">Manage D&R</span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="bg-green-500 text-white rounded-sm px-1 mr-1">✓</span>
                    <span className="hidden sm:inline">Active</span>
                    <span className="sm:hidden">Act</span>
                  </span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">John Doe</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Viewer</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">Read-Only Access</span>
                  <span className="sm:hidden">Read-Only</span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="text-amber-700 mr-1">⌛</span>
                    <span className="hidden sm:inline">Pending</span>
                    <span className="sm:hidden">Pend</span>
                  </span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-green-600 flex items-center">
                    <span className="mr-1">✓</span>
                    <span className="hidden sm:inline">Approve</span>
                    <span className="sm:hidden">Appr</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* System Configurations */}
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold mt-6 sm:mt-10">
        System Configurations
      </h2>
      <div className="overflow-x-auto mt-3 sm:mt-4 bg-white shadow-lg rounded-lg">
        <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Template Name</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Trigger Event</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Last Updated</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Driver Approval Email</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">When a driver is approved</span>
                  <span className="sm:hidden">Driver approved</span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">10-Aug-2024</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Route Assignment</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">When a new route is assigned</span>
                  <span className="sm:hidden">Route assigned</span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">10-Aug-2024</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Password Reset Email</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">When a user requests password reset</span>
                  <span className="sm:hidden">Password reset</span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">10-Aug-2024</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Security & Access Control */}
      <h2 className="text-[#092C4C] text-lg sm:text-2xl font-bold mt-6 sm:mt-10">
        Security & Access Control
      </h2>
      <div className="overflow-x-auto mt-3 sm:mt-4 bg-white shadow-lg rounded-lg">
        <div className="min-w-full block whitespace-nowrap overflow-x-scroll sm:overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Setting</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Status</th>
                <th className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">Two-Factor Authentication (2FA)</span>
                  <span className="sm:hidden">2FA</span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <span className="bg-green-500 text-white rounded-sm px-1 mr-1">✓</span>
                    Enabled
                  </span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">Session Timeout</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">30 Minutes</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">Maximum Login Attempts</span>
                  <span className="sm:hidden">Max Login</span>
                </td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">5 Attempts</td>
                <td className="py-3 sm:py-6 px-2 sm:px-4 text-sm sm:text-base">
                  <button className="text-amber-500 flex items-center">
                    <span className="mr-1">✏️</span>
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;