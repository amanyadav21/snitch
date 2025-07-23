import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import { useSearch } from '../../hooks/useSearch';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const { searchProducts, searchResults, isLoading } = useSearch();
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sortBy: 'relevance'
  });
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (query) {
      searchProducts(query);
    }
  }, [query]);

  useEffect(() => {
    let results = [...searchResults];

    // Apply category filter
    if (filters.category) {
      results = results.filter(product => 
        product.category?.includes(filters.category)
      );
    }

    // Apply price filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      results = results.filter(product => {
        const price = product.price || 0;
        return price >= min && price <= max;
      });
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        results.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        results.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'rating':
        results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Keep relevance order
        break;
    }

    setFilteredResults(results);
  }, [searchResults, filters]);

  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const exists = wishlist.find(item => item.id === product.id);
    
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert('Added to wishlist!');
    } else {
      alert('Already in wishlist!');
    }
  };

  const addToBag = (product) => {
    const bag = JSON.parse(localStorage.getItem('shoppingBag') || '[]');
    const existingItem = bag.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      bag.push({
        ...product,
        quantity: 1,
        selectedSize: 'M',
        selectedColor: product.colors?.[0] || { name: 'Default' }
      });
    }
    
    localStorage.setItem('shoppingBag', JSON.stringify(bag));
    alert('Added to bag!');
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Search Results
            {query && (
              <span className="text-green-500 ml-2">for "{query}"</span>
            )}
          </h1>
          <p className="text-gray-400">
            {isLoading ? 'Searching...' : `${filteredResults.length} results found`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Filters</h3>
                <button
                  onClick={() => setFilters({ category: '', priceRange: '', sortBy: 'relevance' })}
                  className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1"
                >
                  <FiX className="h-4 w-4" />
                  Clear
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">All Categories</option>
                  <option value="Top">Tops</option>
                  <option value="Bottom">Bottoms</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">All Prices</option>
                  <option value="0-500">₹0 - ₹500</option>
                  <option value="500-1000">₹500 - ₹1000</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="2000-5000">₹2000+</option>
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                <p className="mt-4 text-gray-400">Searching products...</p>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((product, index) => (
                  <div key={product.id || index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 group hover:border-green-500/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.colors?.[0]?.images?.[0] || '/placeholder-image.jpg'}
                        alt={product.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-green-500">
                            ₹{product.price}
                          </span>
                          {product.discountPrice && product.discountPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">
                              ₹{product.discountPrice}
                            </span>
                          )}
                        </div>
                        {product.rating && (
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-400">{product.rating}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => addToWishlist(product)}
                          className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                        >
                          ♡ Wishlist
                        </button>
                        <button
                          onClick={() => addToBag(product)}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-black py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FiSearch className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-6">
                  {query ? `No products found for "${query}"` : 'Try searching for something'}
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <span>Browse All Products</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
