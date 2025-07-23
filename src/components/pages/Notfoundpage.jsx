import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiArrowLeft, FiSearch } from 'react-icons/fi';

const NotFoundPage = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Sale', path: '/sale', icon: FiShoppingBag },
    { name: 'Top Wear', path: '/top', icon: FiShoppingBag },
    { name: 'Bottom Wear', path: '/bottom', icon: FiShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-12">
          <h1 className="text-[12rem] sm:text-[15rem] lg:text-[18rem] font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-green-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            OOPS! PAGE NOT FOUND
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or might have been moved.
          </p>
          
          {/* Brand Message */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-gray-800">
            <p className="text-green-400 text-lg font-medium mb-2">
              Don't worry, the perfect outfit is just a click away!
            </p>
            <p className="text-gray-300">
              Explore our latest collections and find what you're looking for.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-green-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg transition-colors duration-300">
                    <link.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="group flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            <FiArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
          
          <Link
            to="/sale"
            className="group flex items-center space-x-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 hover:border-white/40 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <FiShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Shop Sale</span>
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FiSearch className="h-6 w-6 text-green-500" />
            <h4 className="text-xl font-semibold">Looking for something specific?</h4>
          </div>
          <p className="text-gray-400 mb-6">
            Try searching for products, categories, or browse our collections
          </p>
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-800/50 border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition-all duration-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-black p-2 rounded-md transition-colors duration-300">
              <FiSearch className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Need help? Contact our support team or visit our{' '}
            <Link to="/" className="text-green-500 hover:text-green-400 transition-colors duration-300">
              help center
            </Link>
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;