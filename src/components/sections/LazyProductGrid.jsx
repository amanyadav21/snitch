import React, { Suspense } from 'react';
import { PageSkeleton } from '../ui/SkeletonLoader';

// Lazy load ProductGrid for better performance
const ProductGrid = React.lazy(() => import('./ProductGrid'));

const LazyProductGrid = (props) => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProductGrid {...props} />
    </Suspense>
  );
};

export default LazyProductGrid;
