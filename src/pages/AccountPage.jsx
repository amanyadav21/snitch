import React from 'react';
import { FiUser, FiServer, FiDatabase, FiSettings } from 'react-icons/fi';

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold text-black/40 mb-2 sm:mb-4">My Account</h1>
          <div className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-500">
            User account management system
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Backend Integration Notice */}
          <div className="bg-black text-white p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FiServer className="h-12 w-12 sm:h-16 sm:w-16 text-red-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-3 sm:mb-4">Backend Integration</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300">
              This section is part of the backend development
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="bg-black text-white p-4 sm:p-6 text-center">
            <div className="inline-flex items-center bg-[#d6ff00] text-black px-3 sm:px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
              <span className="animate-pulse mr-2">🚀</span>
              <span className="hidden sm:inline">Coming Soon - Backend Development in Progress</span>
              <span className="sm:hidden">Coming Soon - Backend Dev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
