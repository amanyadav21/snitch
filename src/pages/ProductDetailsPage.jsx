import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiHeart, FiShoppingBag, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PageSkeleton } from '../components/ui/SkeletonLoader';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        const productList = Array.isArray(data) ? data : [data];
        
        // Find the specific product
        const foundProduct = productList.find(p => p.id === productId);
        
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Find related products from the same categories
          const foundProductCategories = Array.isArray(foundProduct.category) 
            ? foundProduct.category 
            : [foundProduct.category];
            
          const related = productList.filter(p => {
            if (p.id === productId) return false;
            
            const productCategories = Array.isArray(p.category) 
              ? p.category 
              : [p.category];
              
            return productCategories.some(cat => 
              foundProductCategories.includes(cat)
            );
          }).slice(0, 4);
          
          setRelatedProducts(related);
        } else {
          // Product not found, redirect to 404 or home
          navigate('/');
        }
      } catch (error) {
        console.error('Error loading product details:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      loadProductDetails();
    }
  }, [productId, navigate]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      window.showToast && window.showToast('Please select a size', 'error');
      return;
    }
    
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('shoppingBag') || '[]');
    
    const cartItem = {
      ...product,
      quantity: 1,
      selectedSize,
      selectedColor: product.colors[selectedColor],
      addedAt: new Date().toISOString()
    };
    
    // Check if item already exists
    const existingItemIndex = existingCart.findIndex(item => 
      item.id === product.id && 
      item.selectedSize === selectedSize &&
      item.selectedColor.name === cartItem.selectedColor.name
    );
    
    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push(cartItem);
    }
    
    localStorage.setItem('shoppingBag', JSON.stringify(existingCart));
    window.showToast && window.showToast(`Added ${product.title} to cart!`, 'cart');
  };

  const handleAddToWishlist = () => {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const productExists = existingWishlist.find(item => item.id === product.id);
    
    if (productExists) {
      window.showToast && window.showToast(`${product.title} is already in your wishlist!`, 'error');
      return;
    }
    
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    window.showToast && window.showToast(`Added ${product.title} to wishlist!`, 'wishlist');
  };

  const getCategoryPage = (category) => {
    const categoryMap = {
      'Top': '/top',
      'Bottom': '/bottom',
      'Accessories': '/accessories',
      'Sale': '/sale'
    };
    return categoryMap[category] || '/';
  };

  if (loading) {
    return <PageSkeleton />;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Return to Home</Link>
        </div>
      </div>
    );
  }

  const currentImages = product.colors[selectedColor]?.images || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            {product.category.map((cat, index) => (
              <React.Fragment key={cat}>
                <Link 
                  to={getCategoryPage(cat)} 
                  className="text-gray-500 hover:text-gray-700"
                >
                  {cat}
                </Link>
                {index < product.category.length - 1 && <span className="text-gray-400">/</span>}
              </React.Fragment>
            ))}
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <FiArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={currentImages[selectedImage]}
                alt={product.title}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              
              {/* Image Navigation */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : currentImages.length - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => prev < currentImages.length - 1 ? prev + 1 : 0)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Images */}
            {currentImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {currentImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 bg-white rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {product.category.map(cat => (
                <Link
                  key={cat}
                  to={getCategoryPage(cat)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={`h-5 w-5 ${i < product.rating ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-gray-600">({product.ratingCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
              {product.discountPrice > product.price && (
                <>
                  <span className="text-lg text-gray-500 line-through">₹{product.discountPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    {Math.round(((product.discountPrice - product.price) / product.discountPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Color Selection */}
            {product.colors.length > 1 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedColor(index);
                        setSelectedImage(0);
                      }}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === index ? 'border-gray-900 scale-110' : 'border-gray-300 hover:border-gray-500'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">Selected: {product.colors[selectedColor]?.name}</p>
              </div>
            )}

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 border rounded-lg text-center transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-500 bg-white text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FiShoppingBag className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              
              <button
                onClick={handleAddToWishlist}
                className="w-full border border-gray-900 text-gray-900 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FiHeart className="h-5 w-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Product Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Brand:</span>
                  <span className="ml-2 text-gray-600">{product.brand}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Stock:</span>
                  <span className="ml-2 text-gray-600">{product.stock} items</span>
                </div>
                {product.isLuxe && (
                  <div className="col-span-2">
                    <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded text-xs font-medium">Luxe Collection</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.colors[0]?.images[0]}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{relatedProduct.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">₹{relatedProduct.price}</span>
                      {relatedProduct.discountPrice > relatedProduct.price && (
                        <span className="text-sm text-gray-500 line-through">₹{relatedProduct.discountPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
