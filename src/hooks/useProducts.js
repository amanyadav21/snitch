// Custom hook for managing products data
import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching and managing products
 * @param {string} category - Optional category filter
 * @returns {object} - Products data and loading state
 */
export const useProducts = (category = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter by category if provided
        let filteredProducts = data;
        if (category && category !== 'all') {
          filteredProducts = data.filter(product => {
            if (!product.category) return false;
            
            const categories = Array.isArray(product.category) 
              ? product.category 
              : [product.category];
              
            return categories.some(cat =>
              cat.toLowerCase().includes(category.toLowerCase())
            );
          });
        }
        
        setProducts(filteredProducts);
      } catch (err) {
        console.error('Error loading products:', err);
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return {
    products,
    loading,
    error,
    refetch: () => {
      setLoading(true);
      setError(null);
      // Re-trigger useEffect by changing a dependency
    },
  };
};

/**
 * Custom hook for getting a single product by ID
 * @param {string} productId - Product ID to fetch
 * @returns {object} - Product data and loading state
 */
export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setProduct(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const foundProduct = data.find(p => p.id === productId);
        
        if (!foundProduct) {
          throw new Error('Product not found');
        }
        
        setProduct(foundProduct);
      } catch (err) {
        console.error('Error loading product:', err);
        setError(err.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return {
    product,
    loading,
    error,
  };
};
