import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/animations/loading-animation.json';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        {/* Lottie Animation */}
        <div className="mx-auto w-32 h-32">
          <Lottie 
            animationData={loadingAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        {/* Brand & Message */}
        <div className="space-y-3">
          <h2 className="text-5xl font-thin text-white tracking-wider">SNITCH</h2>
          <p className='text-red-700 text-1xl font-semibold '>Made In India</p>
          {/* <p className="text-gray-300 text-sm font-medium">{message}</p> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;