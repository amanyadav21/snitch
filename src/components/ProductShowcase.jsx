import React, { useState } from 'react';

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const showcaseProducts = [
    {
      id: 1,
      name: 'SNITCH Air Classic',
      category: 'Premium Sneakers',
      description: 'The perfect blend of street style and premium comfort. Designed for the modern individual who demands both performance and aesthetics.',
      mainImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350931/download_10_z7gzcx.jpg',
      detailImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350931/download_10_z7gzcx.jpg',
      features: ['Premium leather construction', 'Air cushioning technology', 'Anti-slip rubber sole', 'Breathable mesh lining', 'Handcrafted in India'],
      colors: ['Burgundy Red', 'Classic White', 'Midnight Black'],
      price: '₹4,999',
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'SNITCH Urban Runner',
      category: 'Athletic Sneakers',
      description: 'Built for the city hustle. These sneakers combine cutting-edge technology with urban aesthetics for all-day comfort.',
      mainImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350929/download_11_xfe0ck.jpg',
      detailImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350929/download_11_xfe0ck.jpg',
      features: ['Lightweight EVA midsole', 'Moisture-wicking interior', 'Reflective accents', 'Eco-friendly materials', 'Memory foam insole'],
      colors: ['Storm Grey', 'Electric Blue', 'Neon Green'],
      price: '₹3,799',
      badge: 'ECO-FRIENDLY'
    },
    {
      id: 3,
      name: 'SNITCH Elite Sport',
      category: 'Performance Sneakers',
      description: 'Engineered for peak performance. Whether you\'re hitting the gym or the streets, these sneakers deliver unmatched support.',
      mainImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350934/download_9_kbaipu.jpg',
      detailImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350934/download_9_kbaipu.jpg',
      features: ['Advanced shock absorption', 'Reinforced heel support', 'Quick-dry technology', 'Ergonomic design', 'Professional grade materials'],
      colors: ['Titanium Silver', 'Carbon Black', 'Royal Blue'],
      price: '₹5,499',
      badge: 'LIMITED EDITION'
    },
    // New products added below
    {
      id: 4,
      name: 'SNITCH Legend Court',
      category: 'Casual Sneakers',
      description: 'Inspired by classic court designs with a modern twist. Perfect for casual outings and everyday comfort.',
      mainImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350944/Legend_Court_Sneakers_fegdym.jpg',
      detailImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350949/download_5_allm0n.jpg',
      features: ['Vintage-inspired design', 'Soft suede upper', 'Cushioned footbed', 'Flexible outsole', 'Breathable fabric lining'],
      colors: ['Cream White', 'Navy Blue', 'Olive Green'],
      price: '₹3,299',
      badge: 'NEW ARRIVAL'
    },
    {
      id: 5,
      name: 'SNITCH Pure Sense',
      category: 'Minimalist Sneakers',
      description: 'Less is more. These minimalist sneakers offer clean lines and understated elegance for the modern wardrobe.',
      mainImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350941/Pure_Sense_nj9rzs.jpg',
      detailImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350948/download_6_u0izl5.jpg',
      features: ['Sleek silhouette', 'Premium canvas upper', 'Ultra-lightweight', 'Arch support', 'Versatile styling'],
      colors: ['Pure White', 'Charcoal Gray', 'Soft Beige'],
      price: '₹3,899',
      badge: 'MINIMALIST'
    },
    {
      id: 6,
      name: 'SNITCH Street Pro',
      category: 'Urban Sneakers',
      description: 'Designed for urban explorers who value both style and durability in their daily adventures.',
      mainImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350946/download_7_midxei.jpg',
      detailImage: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753350946/download_7_midxei.jpg',
      features: ['Reinforced toe cap', 'Textured rubber sole', 'Padded collar', 'Quick-lace system', 'Water-resistant finish'],
      colors: ['Jet Black', 'Cement Gray', 'Military Green'],
      price: '₹4,299',
      badge: 'URBAN'
    }
  ];

  // Rest of the component code remains the same...
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePreview = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 lg:py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafted in India with global standards. Every step tells a story of
            <span className="font-semibold text-gray-900"> quality, comfort, and style.</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {showcaseProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer ${
                index === 1 ? 'lg:-mt-8' : ''
              } ${index === 2 ? 'lg:mt-8' : ''}`}
              onClick={() => handleProductClick(product)}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-stone-100 border border-gray-900">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x500/f3f4f6/9ca3af?text=SNITCH';
                    }}
                  />
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium mb-2">Click to explore</p>
                      <div className="flex space-x-2">
                        {product.colors.slice(0, 3).map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border-2 border-white bg-gray-400"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 lg:p-8">
                  <div className="text-sm font-medium text-red-600 mb-2">{product.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Preview Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-6xl w-[90vw] h-[90vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={selectedProduct.detailImage}
                    alt={selectedProduct.name}
                    className="w-full h-80 lg:h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                  />
                  
                  {/* Close button */}
                  <button
                    onClick={closePreview}
                    className="absolute top-6 right-6 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg"
                  >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="text-sm font-medium text-red-600 mb-2">{selectedProduct.category}</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h3>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-6">{selectedProduct.price}</div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {selectedProduct.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Premium Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Available Colors</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((color, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button 
                      className="w-full bg-black text-white py-3 px-6 rounded-full font-normal text-md cursor-pointer "
                      onClick={closePreview}
                    >
                      🔒 Preview Only - Coming Soon
                    </button>
                    
                    <button 
                      className="w-full border-2 border-black text-black py-2 px-6 rounded-full font-normal cursor-pointer hover:border-black"
                      onClick={closePreview}
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;