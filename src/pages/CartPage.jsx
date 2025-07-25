import React, { useState, useEffect } from 'react';

const AddToBag = () => {
  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Load bag from localStorage
    const savedBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]');
    setBagItems(savedBag);
    calculateTotal(savedBag);
  }, []);

  const calculateTotal = (items) => {
    try {
      const total = items.reduce((sum, item) => {
        const price = item.price || 0;
        const quantity = item.quantity || 0;
        return sum + (price * quantity);
      }, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error('Error calculating total:', error);
      setTotalPrice(0);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromBag(productId);
      return;
    }

    const updatedBag = bagItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setBagItems(updatedBag);
    localStorage.setItem('shoppingBag', JSON.stringify(updatedBag));
    calculateTotal(updatedBag);
  };

  const removeFromBag = (productId) => {
    const updatedBag = bagItems.filter(item => item.id !== productId);
    setBagItems(updatedBag);
    localStorage.setItem('shoppingBag', JSON.stringify(updatedBag));
    calculateTotal(updatedBag);
  };

  const updateSize = (productId, newSize) => {
    const updatedBag = bagItems.map(item => 
      item.id === productId ? { ...item, selectedSize: newSize } : item
    );
    setBagItems(updatedBag);
    localStorage.setItem('shoppingBag', JSON.stringify(updatedBag));
  };

  const clearBag = () => {
    setBagItems([]);
    localStorage.removeItem('shoppingBag');
    setTotalPrice(0);
  };

  const moveToWishlist = (product) => {
    // Add to wishlist
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const productExists = existingWishlist.find(item => item.id === product.id);
    
    if (!productExists) {
      const updatedWishlist = [...existingWishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
    
    // Remove from bag
    removeFromBag(product.id);
    window.showToast && window.showToast(`Moved ${product.title} to wishlist!`, 'wishlist');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shopping Bag</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Review your selected items and proceed to checkout when you're ready.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {bagItems.length} {bagItems.length === 1 ? 'item' : 'items'} in your bag
          </div>
        </div>
      </div>

      {/* Bag Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {bagItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your bag is empty</h3>
            <p className="text-gray-500 mb-8">Add some amazing products to your bag!</p>
            <a
              href="/"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bag Items */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Your Items
                </h2>
                <button
                  onClick={clearBag}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Clear Bag
                </button>
              </div>

              <div className="space-y-6">
                {bagItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.colors?.[0]?.images?.[0] || item.images?.[0] || 'https://via.placeholder.com/150x200/f3f4f6/9ca3af?text=No+Image'}
                          alt={item.title || item.name}
                          className="w-24 h-32 object-cover rounded-md"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150x200/f3f4f6/9ca3af?text=No+Image';
                          }}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {item.title || item.name}
                            </h3>
                            
                            {/* Price */}
                            <div className="flex items-center space-x-2 mb-4">
                              <span className="text-lg font-bold text-gray-900">
                                ₹{item.price}
                              </span>
                              {item.discountPrice && item.discountPrice !== item.price && (
                                <span className="text-sm text-gray-500 line-through">
                                  ₹{item.discountPrice}
                                </span>
                              )}
                            </div>

                            {/* Size Selector */}
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Size
                              </label>
                              <select
                                value={item.selectedSize}
                                onChange={(e) => updateSize(item.id, e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                              >
                                {item.sizes?.map((size) => (
                                  <option key={size} value={size}>
                                    {size}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center space-x-3">
                              <label className="text-sm font-medium text-gray-700">
                                Quantity:
                              </label>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-3 py-1 hover:bg-gray-100"
                                >
                                  -
                                </button>
                                <span className="px-4 py-1 border-x border-gray-300">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-3 py-1 hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromBag(item.id)}
                            className="text-gray-400 hover:text-red-500"
                            title="Remove from bag"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => moveToWishlist(item)}
                            className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Move to Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({bagItems.length} items)</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>₹{Math.round(totalPrice * 0.18).toLocaleString()}</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{Math.round(totalPrice * 1.18).toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 mb-4">
                  Proceed to Checkout
                </button>

                <button className="w-full bg-white border border-gray-300 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                  Continue Shopping
                </button>

                {/* Promo Code */}
                <div className="mt-6">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-2">
                    Promo Code
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 border border-gray-300 rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToBag;
