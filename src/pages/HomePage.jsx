import React, { Suspense } from 'react';
import { PageSkeleton } from '../components/ui/SkeletonLoader';

// Lazy load heavy components for better performance
const Hero = React.lazy(() => import('../components/sections/Hero'));
const Categories = React.lazy(() => import('../components/sections/Categories'));
const Collection = React.lazy(() => import('../components/sections/Collection'));
const ProductShowcase = React.lazy(() => import('../components/sections/ProductShowcase'));
const LifestyleSection = React.lazy(() => import('../components/sections/LifestyleSection'));

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<PageSkeleton />}>
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
