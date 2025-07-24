import React from 'react';
import LazyProductGrid from '../LazyProductGrid';

const Sale = () => {
  return (
    <LazyProductGrid 
      category="Sale"
      pageTitle="Sale Collection"
      pageDescription="Discover amazing deals on premium clothing. Limited time offers on your favorite styles - shop now before they're gone!"
    />
  );
};

export default Sale;
