import React from 'react'
import Navbar from './navbar'

const hero = () => {
  return (
    <div className='w-full h-screen bg-white'>
      {/* Navbar at top */}
      {/* <Navbar /> */}
      
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-start p-8 lg:p-16 bg-white">
          <div className="max-w-md text-center lg:text-left">
            
            {/* Brand Title */}
            <h1 className="text-6xl lg:text-9xl font-bold text-red-900 mb-6 tracking-tight">
              SNITCH
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
              Indian Brand
            </p>
            
            {/* Description */}
            <p className="text-lg text-black mb-12 leading-relaxed">
              Discover premium fashion that speaks your language. 
              Crafted with passion, designed for the modern Indian.
            </p>
            
            {/* CTA Buttons */}
            <div className="space-y-4">
              <button className="w-full lg:w-auto bg-black text-white px-10 py-2 rounded-full font-semibold text-lg hover:bg-green-400 hover:text-white cursor-pointer">
                Shop Now
              </button>
              <button className="w-full lg:w-auto ml-0 lg:ml-4 border-2 border-black text-black px-10 py-2 rounded-full font-semibold text-lg hover:bg-red-900 hover:text-white cursor-pointer ">
                View Collection
              </button>
            </div>
            
            {/* Features */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-gray-600">Premium Quality Materials</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-gray-600">Made in India</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm text-gray-600">Free Shipping Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-screen relative bg-gray-200">
          <img
            src="https://res.cloudinary.com/dqso1oxdt/image/upload/v1753180493/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-black-jacket-jeans-fashion-male-posing-studio-near-grey-wall_u5vvvd.jpg"
            alt="Snitch Fashion Collection"
            className="w-full h-full object-cover absolute inset-0"
            onLoad={() => console.log('Image loaded successfully')}
            onError={(e) => {
              console.error('Image loading error:', e);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  )
} 

export default hero