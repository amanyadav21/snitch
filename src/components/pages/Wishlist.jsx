import React, { useState, useEffect } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistItems(savedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const addToBag = (product) => {
    // Get existing bag items from localStorage
    const existingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]');
    
    // Create bag item with default size
    const bagItem = {
      ...product,
      quantity: 1,
      selectedSize: product.sizes?.[0] || 'M',
      addedAt: new Date().toISOString()
    };
    
    // Check if product already exists in bag
    const existingItemIndex = existingBag.findIndex(item => 
      item.id === product.id && item.selectedSize === bagItem.selectedSize
    );
    
    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      existingBag[existingItemIndex].quantity += 1;
    } else {
      // Add new item to bag
      existingBag.push(bagItem);
    }
    
    localStorage.setItem('shoppingBag', JSON.stringify(existingBag));
    window.showToast && window.showToast(`Added ${product.title} to bag!`, 'cart');
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem('wishlist');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Wishlist</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save your favorite items for later. Never miss out on the products you love.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
          </div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8">Start adding items you love to your wishlist!</p>
            <a
              href="/"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            {/* Clear Wishlist Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Your Favorite Items
              </h2>
              <button
                onClick={clearWishlist}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Clear All
              </button>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.colors?.[0]?.images?.[0] || product.images?.[0] || 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=No+Image'}
                      alt={product.title || product.name}
                      className="w-full h-80 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=No+Image';
                      }}
                    />
                    
                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
                      title="Remove from wishlist"
                    >
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {product.isOnSale && (
                        <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                          SALE
                        </span>
                      )}
                      {product.isLuxe && (
                        <span className="bg-black text-white px-2 py-1 text-xs font-semibold rounded">
                          LUXE
                        </span>
                      )}
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
                    {product.colors && (
                      <div className="flex space-x-2 mb-4">
                        {product.colors.slice(0, 4).map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-gray-300"
                            style={{ backgroundColor: color.hex || color }}
                            title={color.name || color}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <span className="text-xs text-gray-500 flex items-center">
                            +{product.colors.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="flex-1 bg-white border border-gray-300 text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => addToBag(product)}
                        className="flex-1 bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
