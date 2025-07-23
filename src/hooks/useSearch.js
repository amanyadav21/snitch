import { useState, useEffect } from 'react';

export const useSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/data/product.json');
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

  const searchProducts = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return [];
    }

    setIsLoading(true);
    
    const searchTerm = query.toLowerCase();
    const results = products.filter(product => {
      return (
        product.title?.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm) ||
        product.category?.some(cat => cat.toLowerCase().includes(searchTerm)) ||
        product.colors?.some(color => color.name?.toLowerCase().includes(searchTerm))
      );
    });

    setSearchResults(results);
    setIsLoading(false);
    return results;
  };

  return {
    searchProducts,
    searchResults,
    isLoading,
    allProducts: products
  };
};
