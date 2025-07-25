import React from 'react';
import ProductShowcase from '../components/sections/ProductShowcase';

const Upcoming = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold text-black/40 mb-2 sm:mb-4">Upcoming Collection</h1>
          <div className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-500">
            Get ready for the next generation of premium sneakers. <span className="text-red-400">Coming Soon.</span>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* Additional Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Be the First to Know
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to get notified when these exclusive sneakers become available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
