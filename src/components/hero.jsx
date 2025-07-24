import React from 'react'
import { Link } from 'react-router-dom'

const hero = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-white">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg text-center lg:text-left">
            
            {/* Brand Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-red-900 mb-4 sm:mb-6 tracking-tight">
              SNITCH
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 font-light">
              Indian Brand
            </p>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-black mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4 lg:px-0">
              Discover premium fashion that speaks your language. 
              Crafted with passion, designed for the modern Indian.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <Link
                to="/collection"
                className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-green-400 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Shop Now
              </Link>
              <Link
                to="/collection"
                className="w-full sm:w-auto border-2 border-black text-black px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-red-900 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Collection
              </Link>
            </div>
            
            {/* Features */}
            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-gray-600">Premium Quality Materials</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-gray-600">Made in India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-gray-600">Free Shipping Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:min-h-screen relative bg-gray-200 order-first lg:order-last">
          <img
            src="https://res.cloudinary.com/dqso1oxdt/image/upload/v1753180493/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-black-jacket-jeans-fashion-male-posing-studio-near-grey-wall_u5vvvd.jpg"
            alt="Snitch Fashion Collection"
            className="w-full h-full object-cover object-center absolute inset-0"
            onLoad={() => console.log('Image loaded successfully')}
            onError={(e) => {
              console.error('Image loading error:', e);
              e.target.style.display = 'none';
            }}
          />
          
          {/* Mobile overlay for better text readability */}
          <div className="lg:hidden absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  )
} 

export default hero