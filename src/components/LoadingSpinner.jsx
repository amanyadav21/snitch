import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-green-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-gray-800 border-t-green-400 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">SNITCH</h2>
          <p className="text-gray-400 text-lg">{message}</p>
          <div className="flex justify-center space-x-1 mt-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
