import React from 'react';
import { FiUser, FiServer, FiDatabase, FiSettings } from 'react-icons/fi';

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <FiUser className="h-12 w-12 text-gray-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">My Account</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            User account management system
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Backend Integration Notice */}
          <div className="bg-black text-white p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <FiServer className="h-16 w-16 text-red-900" />
            </div>
            <h2 className="text-5xl font-thin mb-5">Backend Integration</h2>
            <p className="text-thin text-lg">
              This section is part of the backend development
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="bg-black text-white p-6 text-center">
            <div className="inline-flex items-center bg-red-900 text-white px-4 py-2 rounded-full font-semibold">
              <span className="animate-pulse mr-2">🚀</span>
              Coming Soon - Backend Development in Progress
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
