import React from 'react';

// Base Skeleton component
const Skeleton = ({ 
  className = '', 
  width = 'w-full', 
  height = 'h-4', 
  rounded = 'rounded',
  animated = true 
}) => {
  return (
    <div 
      className={`bg-gray-200 ${width} ${height} ${rounded} ${
        animated ? 'animate-pulse' : ''
      } ${className}`}
    />
  );
};

// Product Card Skeleton
export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton 
        width="w-full" 
        height="h-64" 
        rounded="rounded-none"
        className="bg-gray-300"
      />
      
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <Skeleton width="w-3/4" height="h-5" />
        
        {/* Description */}
        <div className="space-y-2">
          <Skeleton width="w-full" height="h-3" />
          <Skeleton width="w-2/3" height="h-3" />
        </div>
        
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} width="w-4" height="h-4" rounded="rounded-full" />
          ))}
          <Skeleton width="w-12" height="h-3" className="ml-2" />
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <Skeleton width="w-20" height="h-6" />
          <Skeleton width="w-16" height="h-4" />
        </div>
        
        {/* Colors */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} width="w-6" height="h-6" rounded="rounded-full" />
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex space-x-2 pt-2">
          <Skeleton width="w-full" height="h-10" rounded="rounded-md" />
          <Skeleton width="w-10" height="h-10" rounded="rounded-md" />
        </div>
      </div>
    </div>
  );
};

// Product Grid Skeleton
export const ProductGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(count)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

// Hero Section Skeleton
export const HeroSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        {/* Main Title */}
        <div className="space-y-4">
          <Skeleton width="w-96" height="h-12" className="mx-auto" />
          <Skeleton width="w-80" height="h-12" className="mx-auto" />
        </div>
        
        {/* Subtitle */}
        <div className="space-y-2">
          <Skeleton width="w-64" height="h-4" className="mx-auto" />
          <Skeleton width="w-48" height="h-4" className="mx-auto" />
        </div>
        
        {/* CTA Button */}
        <Skeleton width="w-40" height="h-12" rounded="rounded-full" className="mx-auto mt-8" />
      </div>
    </div>
  );
};

// Category Card Skeleton
export const CategoryCardSkeleton = () => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Image */}
      <Skeleton width="w-full" height="h-48" rounded="rounded-xl" className="bg-gray-300" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="absolute bottom-4 left-4 right-4">
          <Skeleton width="w-24" height="h-6" className="bg-white/20" />
          <Skeleton width="w-16" height="h-4" className="bg-white/20 mt-2" />
        </div>
      </div>
    </div>
  );
};

// Categories Section Skeleton
export const CategoriesSkeleton = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Skeleton width="w-64" height="h-8" className="mx-auto mb-4" />
          <Skeleton width="w-96" height="h-4" className="mx-auto" />
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <CategoryCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Navbar Skeleton
export const NavbarSkeleton = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Skeleton width="w-24" height="h-8" className="bg-gray-700" />
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} width="w-16" height="h-4" className="bg-gray-700" />
          ))}
        </div>
        
        {/* Right side icons */}
        <div className="flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} width="w-6" height="h-6" rounded="rounded-full" className="bg-gray-700" />
          ))}
        </div>
      </div>
    </nav>
  );
};

// Text Skeleton (for general text content)
export const TextSkeleton = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {[...Array(lines)].map((_, index) => (
        <Skeleton 
          key={index}
          width={index === lines - 1 ? 'w-3/4' : 'w-full'} 
          height="h-4" 
        />
      ))}
    </div>
  );
};

// Button Skeleton
export const ButtonSkeleton = ({ width = 'w-24', height = 'h-10' }) => {
  return <Skeleton width={width} height={height} rounded="rounded-md" />;
};

// Page Loading Skeleton
export const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Skeleton width="w-64" height="h-10" className="mx-auto mb-4" />
          <div className="space-y-2">
            <Skeleton width="w-96" height="h-4" className="mx-auto" />
            <Skeleton width="w-80" height="h-4" className="mx-auto" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGridSkeleton count={12} />
      </div>
    </div>
  );
};

export default Skeleton;
