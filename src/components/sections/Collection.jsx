import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductGridSkeleton } from '../ui/SkeletonLoader';

const Collection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        console.log('Collection: Starting to load products...'); // Debug log
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const productList = Array.isArray(data) ? data : [data];
        console.log('Collection: Loaded products:', productList.length); // Debug log
        
        // Show a good mix of products (limit to 12 for performance)
        const featuredProducts = productList.slice(0, 12);
        setProducts(featuredProducts);
      } catch (error) {
        console.error('Collection: Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const openProductDetail = (product) => {
    // Navigate to product details page
    navigate(`/product/${product.id}`);
  };

  const handleAddToWishlist = (product) => {
    // Get existing wishlist from localStorage
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    // Check if product already exists in wishlist
    const productExists = existingWishlist.find(item => item.id === product.id);
    
    if (productExists) {
      window.showToast && window.showToast(`${product.title} is already in your wishlist!`, 'error');
      return;
    }
    
    // Add product to wishlist
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('wishlistUpdate'));
    window.showToast && window.showToast(`Added ${product.title} to wishlist!`, 'wishlist');
  };

  const handleAddToBag = (product) => {
    // Get existing bag items from localStorage
    const existingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]');
    
    // Create bag item with default size (user can change later)
    const bagItem = {
      ...product,
      quantity: 1,
      selectedSize: product.sizes?.[0] || 'M', // Default to first available size
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

  // if (loading) {
    // return (
    //   <div className="min-h-screen bg-white">
    //     <div className="bg-white py-8 sm:py-12 lg:py-16">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6">Our Collection</h1>
    //         <p className="text-base sm:text-lg md:text-xl text-red-900 max-w-2xl mx-auto px-4 sm:px-0">
    //           Discover our premium range of clothing designed for the modern individual.
    //           Quality, style, and comfort - all in one place.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    //       <ProductGridSkeleton count={12} />
    //     </div>
    //   </div>
    // );
  // }

  return (
    <div id="collection-section" className="min-h-screen bg-[#EFEFEF]">
      <div className="bg-[#EFEFEF] py-8 sm:py-12 lg:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-neutral-900 mb-4 sm:mb-6">Our Collection</h1>
          <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto px-4 sm:px-0">
            Discover our premium range of clothing designed for the modern individual.
            Quality, style, and comfort - all in one place.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => openProductDetail(product)}
              className="bg-white rounded-md cursor-pointer group shadow-md flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.colors?.[0]?.images?.[0] || product.images?.[0] || 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=No+Image'}
                  alt={product.title || product.name}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500/f3f4f6/9ca3af?text=No+Image';
                  }}
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWishlist();
                    }}>
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black mb-2 line-clamp-2">
                  {product.title || product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl font-bold text-red-900">
                    ₹{product.price}
                  </span>
                  {product.discountPrice && product.discountPrice !== product.price && (
                    <span className="text-xs sm:text-sm text-black line-through">
                      ₹{product.discountPrice}
                    </span>
                  )}
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="flex space-x-2 mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWishlist(product);
                    }}
                    className="flex-1 bg-white border border-black text-black py-2 px-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium hover:bg-neutral-300 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Wishlist</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToBag(product);
                    }}
                    className="flex-1 bg-[#d6ff00] text-black py-2 px-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium hover:bg-[#d6ff00] hover:text-black transition-colors duration-200 flex items-center justify-center cursor-pointer"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
