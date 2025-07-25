import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';

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
          <h1 className="text-[12rem] sm:text-[15rem] lg:text-[18rem] font-bold text-transparent bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-green-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="group flex items-center justify-center p-3 space-x-3 bg-neutral-300 hover:bg-neutral-400 text-black font-medium rounded-[50px]"
          >
            <FiArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
          
          <Link
            to="/sale"
            className="group flex items-center p-3 space-x-3 bg-transparent hover:bg-white/10 text-white border-1 border-white/20 hover:border-white/40 font-medium rounded-[50px]"
          >
            <FiShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Shop Sale</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;