// Product helper functions

/**
 * Format price with currency symbol
 */
export const formatPrice = (price) => {
  return `₹${price?.toLocaleString('en-IN') || 0}`;
};

/**
 * Calculate discount percentage
 */
export const calculateDiscountPercentage = (originalPrice, discountPrice) => {
  if (!originalPrice || !discountPrice || discountPrice >= originalPrice) {
    return 0;
  }
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
};

/**
 * Check if product is on sale
 */
export const isProductOnSale = (product) => {
  return product.discountPrice && product.discountPrice < product.price;
};

/**
 * Get product main image
 */
export const getProductMainImage = (product, fallbackUrl = 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=No+Image') => {
  if (product.colors?.[0]?.images?.[0]) {
    return product.colors[0].images[0];
  }
  if (product.images?.[0]) {
    return product.images[0];
  }
  return fallbackUrl;
};

/**
 * Filter products by category
 */
export const filterProductsByCategory = (products, category) => {
  if (!category || category.toLowerCase() === 'all') {
    return products;
  }
  
  return products.filter(product => 
    product.category?.some(cat => 
      cat.toLowerCase().includes(category.toLowerCase())
    )
  );
};

/**
 * Filter products by price range
 */
export const filterProductsByPriceRange = (products, minPrice, maxPrice) => {
  return products.filter(product => {
    const price = product.discountPrice || product.price;
    return price >= minPrice && price <= maxPrice;
  });
};

/**
 * Search products by title or description
 */
export const searchProducts = (products, searchTerm) => {
  if (!searchTerm) return products;
  
  const term = searchTerm.toLowerCase();
  return products.filter(product =>
    product.title?.toLowerCase().includes(term) ||
    product.description?.toLowerCase().includes(term) ||
    product.brand?.toLowerCase().includes(term)
  );
};

/**
 * Sort products by various criteria
 */
export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low-high':
      return sortedProducts.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    case 'price-high-low':
      return sortedProducts.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    case 'rating':
      return sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'newest':
      return sortedProducts.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    case 'name':
      return sortedProducts.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    default:
      return sortedProducts;
  }
};

/**
 * Generate product URL slug
 */
export const generateProductSlug = (product) => {
  if (product.slug) return product.slug;
  
  return product.title
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || product.id;
};

/**
 * Check if product is in stock
 */
export const isProductInStock = (product) => {
  return product.stock > 0;
};

/**
 * Get available sizes for a product
 */
export const getAvailableSizes = (product) => {
  return product.sizes || ['S', 'M', 'L', 'XL'];
};

/**
 * Validate product data
 */
export const validateProduct = (product) => {
  const errors = [];
  
  if (!product.id) errors.push('Product ID is required');
  if (!product.title) errors.push('Product title is required');
  if (!product.price || product.price <= 0) errors.push('Valid price is required');
  if (!product.category || product.category.length === 0) errors.push('At least one category is required');
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};
