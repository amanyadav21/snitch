import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const navigate = useNavigate()

  const categories = [
    {
      id: 1,
      name: 'Sale',
      subtitle: 'Hot Deals',
      description: 'Up to 70% off on premium fashion',
      image: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753171191/pexels-picturesbyamusan-6732388_dqvefo.jpg',
      redirect: '/sale',
      badge: 'Get 10% Off',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      items: '200+ Items'
    },
    {
      id: 2,
      name: 'Tops',
      subtitle: 'Premium Collection',
      description: 'Shirts, T-shirts & Polos',
      image: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753183633/4MST2822-04_1_4e11e47b-8020-49b5-bd14-21d3d749046a_zmrmkz.webp',
      redirect: '/top',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      items: '150+ Items'
    },
    {
      id: 3,
      name: 'Bottoms',
      subtitle: 'Street Style',
      description: 'Jeans, Chinos & Joggers',
      image: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753183631/4MSD3576-07-325071_a9566a57-5bd5-4122-8db9-189bf8f6efee_fp0rdq.webp',
      redirect: '/bottom',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      items: '120+ Items'
    },
    {
      id: 4,
      name: 'Accessories',
      subtitle: 'Complete Look',
      description: 'Watches, Bags & More',
      image: 'https://res.cloudinary.com/dqso1oxdt/image/upload/v1753188710/ocult-store-P0diTRs6BlE-unsplash_lb2gkv.jpg',
      redirect: '/accessories',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      items: '80+ Items'
    }
  ]

  // Check scroll position
  const checkScrollPosition = () => {
    const container = scrollRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      )
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollPosition)
      checkScrollPosition()
      return () => container.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      })
    }
  }

  const handleCategoryClick = (redirect) => {
    navigate(redirect)
  }

  return (
    <section id="categories-section" className='w-full bg-black py-20'>
      {/* Enhanced Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <div className="inline-block">
            <h2 className="text-5xl lg:text-7xl font-normal text-white mb-6 tracking-tight relative">
              CATEGORIES
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1"></div>
            </h2>
          </div>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collections designed for the modern Indian. From trendy streetwear to premium accessories.
          </p>
        </div>
      </div>

      {/* Enhanced Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Navigation Arrows */}
        {canScrollLeft && (
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 hover:bg-gray-50 border border-gray-200"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 hover:bg-gray-50 border border-gray-200"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Categories Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-6 scroll-smooth px-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: 'none'
          }}
        >
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl flex-shrink-0 w-80 border border-gray-100"
            >
              
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onLoad={() => console.log(`✅ ${category.name} image loaded`)}
                  onError={(e) => {
                    console.error(`❌ ${category.name} image failed`);
                    e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badge */}
                {category.badge && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {category.badge}
                  </div>
                )}

                {/* Items Count */}
                <div className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {category.items}
                </div>
                
                {/* Category Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div>
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-1">
                      {category.subtitle}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Enhanced Button */}
                    <button
                      onClick={() => handleCategoryClick(category.redirect)}
                      className={`${category.color} ${category.hoverColor} cursor-pointer text-white px-7 py-2 rounded-full font-medium text-md shadow-lg`}
                    >
                      Shop {category.name}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories;
