import React, { Suspense } from 'react';

// Lazy load ProductGrid for better performance
const ProductGrid = React.lazy(() => import('./ProductGrid'));

const LazyProductGrid = (props) => {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-700 border-t-green-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading products...</p>
          </div>
        </div>
      }
    >
      <ProductGrid {...props} />
    </Suspense>
  );
};

export default LazyProductGrid;
