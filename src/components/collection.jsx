import React, { useState, useEffect } from 'react';

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load products from JSON
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/data/product.json');
        const data = await response.json();
        
        // Handle both single product object and array
        const productList = Array.isArray(data) ? data : [data];
        setProducts(productList);
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setSelectedImage(0);
    setSelectedColor(0);
    setSelectedSize('');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    setSelectedImage(0);
    setSelectedColor(0);
    setSelectedSize('');
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    alert(`Added ${selectedProduct.title} (Size: ${selectedSize}) to cart!`);
  };

  const handleAddToWishlist = () => {
    alert(`Added ${selectedProduct.title} to wishlist!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Collection Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of clothing designed for the modern individual. 
            Quality, style, and comfort - all in one place.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => openProductDetail(product)}
              className="bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.colors?.[0]?.images?.[0] || product.images?.[0] || '/placeholder-image.jpg'}
                  alt={product.title || product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=No+Image';
                  }}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isLuxe && (
                    <span className="bg-black text-white px-2 py-1 text-xs font-semibold rounded">
                      LUXE
                    </span>
                  )}
                  {product.isPlusSizeAvailable && (
                    <span className="bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      PLUS SIZE
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWishlist();
                    }}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.title || product.name}
                </h3>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.ratingCount || product.rating})
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  {product.discountPrice && product.discountPrice !== product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.discountPrice}
                    </span>
                  )}
                </div>

                {/* Colors */}
                {(product.colors || product.colors) && (
                  <div className="flex space-x-2 mb-4">
                    {(product.colors || []).slice(0, 4).map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.hex || color }}
                        title={color.name || color}
                      />
                    ))}
                    {(product.colors?.length || 0) > 4 && (
                      <span className="text-xs text-gray-500 flex items-center">
                        +{(product.colors?.length || 0) - 4} more
                      </span>
                    )}
                  </div>
                )}

                {/* Category */}
                <div className="text-sm text-gray-500">
                  {Array.isArray(product.category) ? product.category.join(', ') : product.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeProductDetail}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Product Images */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={selectedProduct.colors?.[selectedColor]?.images?.[selectedImage] || 
                           selectedProduct.images?.[selectedImage] || 
                           '/placeholder-image.jpg'}
                      alt={selectedProduct.title || selectedProduct.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x600/f3f4f6/9ca3af?text=No+Image';
                      }}
                    />
                  </div>

                  {/* Image Thumbnails */}
                  {(selectedProduct.colors?.[selectedColor]?.images || selectedProduct.images) && (
                    <div className="flex space-x-2 overflow-x-auto">
                      {(selectedProduct.colors?.[selectedColor]?.images || selectedProduct.images).map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                            selectedImage === index ? 'border-black' : 'border-gray-300'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${selectedProduct.title || selectedProduct.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProduct.title || selectedProduct.name}
                    </h1>
                    
                    {/* Rating */}
                    {selectedProduct.rating && (
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-current' : 'text-gray-300'}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">
                          {selectedProduct.ratingCount || 0} REVIEWS
                        </span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-gray-900">
                        Rs. {selectedProduct.price?.toLocaleString()}
                      </span>
                    </div>

                    {/* Free Gift Badge */}
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                      <div className="flex items-center">
                        <span className="text-orange-600 mr-2">🎁</span>
                        <span className="text-sm font-medium text-orange-800">
                          Unlock a Free Gift
                        </span>
                      </div>
                      <p className="text-xs text-orange-600 mt-1">
                        Free gift on orders over ₹150 AUD. Add to cart to unlock!
                      </p>
                    </div>
                  </div>

                  {/* Colors */}
                  {selectedProduct.colors && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">COLOURS</h3>
                      <div className="flex space-x-2">
                        {selectedProduct.colors.map((color, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedColor(index);
                              setSelectedImage(0);
                            }}
                            className={`w-12 h-12 rounded-lg border-2 ${
                              selectedColor === index ? 'border-black' : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sizes */}
                  {selectedProduct.sizes && (
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-medium text-gray-900">SIZE & FIT</h3>
                        <div className="flex space-x-4 text-xs text-gray-500">
                          <span>US</span>
                          <span>EU</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`py-3 px-4 border rounded-lg text-sm font-medium ${
                              selectedSize === size
                                ? 'border-black bg-black text-white'
                                : 'border-gray-300 text-gray-900 hover:border-gray-400'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="space-y-4">
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-gray-400 text-white py-4 rounded-lg font-medium hover:bg-gray-500 transition-colors duration-200"
                      disabled={!selectedSize}
                    >
                      {selectedSize ? 'ADD TO CART' : 'SELECT A SIZE'}
                    </button>
                    
                    <button
                      onClick={handleAddToWishlist}
                      className="w-full border border-gray-300 text-gray-900 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      FAVOURITE
                    </button>
                  </div>

                  {/* Description */}
                  {selectedProduct.description && (
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">DESCRIPTION</h3>
                      <p className="text-sm text-gray-600">{selectedProduct.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
