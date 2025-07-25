import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load wishlist from localStorage
  const loadWishlist = () => {
    try {
      const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      console.log('Loaded wishlist:', savedWishlist); // Debug log
      setWishlistItems(savedWishlist);
    } catch (error) {
      console.error('Error loading wishlist:', error);
      setWishlistItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial load
    loadWishlist();

    // Listen for storage changes
    const handleStorageChange = () => {
      console.log('Storage changed, reloading wishlist...');
      loadWishlist();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for when we update storage from this app
    window.addEventListener('wishlistUpdate', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdate', handleStorageChange);
    };
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    // Trigger storage event for navbar update
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('wishlistUpdate'));
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
    // Trigger storage event for navbar update
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('wishlistUpdate'));
  };

  // Add test products for debugging
  const addTestProducts = () => {
    const testProducts = [
      {
        id: "test1",
        title: "SNITCH Premium T-Shirt",
        price: 1499,
        discountPrice: 1999,
        rating: 4,
        ratingCount: 25,
        category: ["Top", "T-shirts"],
        colors: [
          {
            name: "Black",
            hex: "#000000",
            images: ["https://res.cloudinary.com/dqso1oxdt/image/upload/v1753202829/4MST2728-02-M17_oihpwi.webp"]
          }
        ],
        sizes: ["S", "M", "L", "XL"],
        brand: "Snitch"
      },
      {
        id: "test2", 
        title: "SNITCH Urban Joggers",
        price: 2299,
        discountPrice: 2799,
        rating: 5,
        ratingCount: 18,
        category: ["Bottom", "Joggers"],
        colors: [
          {
            name: "Navy",
            hex: "#1e3a8a",
            images: ["https://res.cloudinary.com/dqso1oxdt/image/upload/v1753202827/4MST2728-02_3_5f42dd4e-51e8-42e2-98e6-76213ce0493c_tv7sxs.webp"]
          }
        ],
        sizes: ["S", "M", "L", "XL"],
        brand: "Snitch"
      }
    ];
    
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updatedWishlist = [...existingWishlist, ...testProducts];
    console.log('🔄 Adding test products...');
    console.log('📊 Before update - existing wishlist:', existingWishlist);
    console.log('📊 After update - updated wishlist:', updatedWishlist);
    
    // Update state first
    setWishlistItems(updatedWishlist);
    
    // Then update localStorage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    console.log('💾 Saved to localStorage');
    
    // Trigger storage event for navbar update
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('wishlistUpdate'));
    console.log('📡 Events dispatched');
    
    window.showToast && window.showToast('Added test products to wishlist!', 'wishlist');
  };

  // Debug function to check localStorage
  const checkLocalStorage = () => {
    const wishlist = localStorage.getItem('wishlist');
    console.log('Raw wishlist data:', wishlist);
    console.log('Parsed wishlist data:', JSON.parse(wishlist || '[]'));
    console.log('Current wishlistItems state:', wishlistItems);
    alert(`Wishlist items in localStorage: ${wishlist ? JSON.parse(wishlist).length : 0}\nCurrent state items: ${wishlistItems.length}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[120px] font-bold text-black/40 mb-4">My Wishlist</h1>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save your favorite items for later. Never miss out on the products you love.
          </p> */}
          <div className="mt-4 text-sm text-gray-500">
            {isLoading ? 'Loading...' : `${wishlistItems.length} ${wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist`}
          </div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-8xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Loading your wishlist...</p>
          </div>
        ) : wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8">Start adding items you love to your wishlist!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Continue Shopping
              </Link>
              <button
                onClick={addTestProducts}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Add Test Products
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Clear Wishlist Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Your Favorite Items
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={checkLocalStorage}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Debug
                </button>
                <button
                  onClick={clearWishlist}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
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
                  <div className="p-6 flex flex-col flex-grow">
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

                    {/* Action Buttons - Always at bottom */}
                    <div className="flex space-x-2 mt-auto">
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
