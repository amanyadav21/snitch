import React, { Suspense } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Lazy load heavy components for better performance
const Hero = React.lazy(() => import('../components/sections/Hero'));
const Categories = React.lazy(() => import('../components/sections/Categories'));
const Collection = React.lazy(() => import('../components/sections/Collection'));
const ProductShowcase = React.lazy(() => import('../components/sections/ProductShowcase'));
const LifestyleSection = React.lazy(() => import('../components/sections/LifestyleSection'));

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner message="Loading home..." />}>
        <Hero />
        <Categories />
        <Collection />
        <ProductShowcase />
        <LifestyleSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
