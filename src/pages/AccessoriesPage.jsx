import React from 'react';
import LazyProductGrid from '../components/sections/LazyProductGrid';

const Accessories = () => {
  return (
    <LazyProductGrid 
      category="Accessories"
      pageTitle="Accessories Collection"
      pageDescription="Complete your style with our curated collection of watches, belts, wallets, sunglasses, and more premium accessories."
    />
  );
};

export default Accessories;
