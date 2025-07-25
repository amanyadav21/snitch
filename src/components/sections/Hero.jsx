import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loadedImages, setLoadedImages] = useState({})

  // Multiple fallback strategies for bulletproof image loading
  const slides = useMemo(() => [
    {
      id: 1,
      // Primary: High-res Unsplash
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
      // Fallback 1: Lorem Picsum
      fallback1: "https://picsum.photos/1920/1080?random=1",
      // Fallback 2: Placeholder service
      fallback2: "https://via.placeholder.com/1920x1080/1a1a1a/ffffff?text=SNITCH+FASHION",
      // Fallback 3: Gradient background
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      title: "PREMIUM COLLECTION",
      subtitle: "Modern Men's Fashion"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80",
      fallback1: "https://picsum.photos/1920/1080?random=2",
      fallback2: "https://via.placeholder.com/1920x1080/2d1b69/ffffff?text=STREET+STYLE",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      title: "STREET STYLE",
      subtitle: "Urban Fashion Trends"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80",
      fallback1: "https://picsum.photos/1920/1080?random=3",
      fallback2: "https://via.placeholder.com/1920x1080/4facfe/ffffff?text=EXCLUSIVE+DESIGNS",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      title: "EXCLUSIVE DESIGNS", 
      subtitle: "Crafted for Excellence"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=80",
      fallback1: "https://picsum.photos/1920/1080?random=4",
      fallback2: "https://via.placeholder.com/1920x1080/43e97b/ffffff?text=SOPHISTICATED+LOOKS",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      title: "SOPHISTICATED LOOKS",
      subtitle: "Contemporary Elegance"
    }
  ], [])

  // Preload images with multiple fallback attempts
  useEffect(() => {
    const preloadImage = (slide) => {
      return new Promise((resolve) => {
        // Try primary image first
        const img1 = new Image()
        img1.crossOrigin = "anonymous"
        img1.onload = () => {
          console.log('✅ Primary image loaded:', slide.image)
          setLoadedImages(prev => ({ ...prev, [slide.id]: slide.image }))
          resolve(true)
        }
        img1.onerror = () => {
          console.warn('❌ Primary image failed, trying fallback 1:', slide.fallback1)
          
          // Try fallback 1
          const img2 = new Image()
          img2.crossOrigin = "anonymous"
          img2.onload = () => {
            console.log('✅ Fallback 1 loaded:', slide.fallback1)
            setLoadedImages(prev => ({ ...prev, [slide.id]: slide.fallback1 }))
            resolve(true)
          }
          img2.onerror = () => {
            console.warn('❌ Fallback 1 failed, trying fallback 2:', slide.fallback2)
            
            // Try fallback 2
            const img3 = new Image()
            img3.onload = () => {
              console.log('✅ Fallback 2 loaded:', slide.fallback2)
              setLoadedImages(prev => ({ ...prev, [slide.id]: slide.fallback2 }))
              resolve(true)
            }
            img3.onerror = () => {
              console.warn('❌ All images failed, using gradient fallback')
              setLoadedImages(prev => ({ ...prev, [slide.id]: slide.gradient }))
              resolve(false)
            }
            img3.src = slide.fallback2
          }
          img2.src = slide.fallback1
        }
        img1.src = slide.image
      })
    }

    // Preload all images
    slides.forEach(slide => {
      preloadImage(slide)
    })
  }, [slides])

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  // Handle manual slide change
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          // Get the loaded image or use gradient fallback
          const imageUrl = loadedImages[slide.id]
          const isGradient = imageUrl && imageUrl.startsWith('linear-gradient')
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              {/* Background Image or Gradient */}
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: isGradient ? imageUrl : imageUrl ? `url(${imageUrl})` : slide.gradient,
                  filter: isGradient ? 'none' : 'brightness(0.7) contrast(1.1)',
                  backgroundColor: '#1f2937' // Always have a fallback color
                }}
              />
              
              {/* Gradient Overlay - only if not using gradient background */}
              {!isGradient && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              )}
              
              {/* Loading indicator for this slide */}
              {!loadedImages[slide.id] && index === currentSlide && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>Loading image...</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">

          {/* Dynamic Subtitle */}
          <div className="mb-6 h-20 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-wide">
              {slides[currentSlide].title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle} • Premium Indian Fashion
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => {
                document.getElementById('collection-section')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start' 
                });
              }}
              className="group relative overflow-hidden bg-white text-black px-8 py-4 font-semibold text-lg tracking-wide transition-all duration-300 hover:bg-black hover:text-white border-2 border-white hover:border-black"
            >
              <span className="relative z-10">EXPLORE COLLECTION</span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            
            <button 
              onClick={() => {
                document.getElementById('categories-section')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start' 
                });
              }}
              className="group relative overflow-hidden bg-transparent text-white px-8 py-4 font-semibold text-lg tracking-wide border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">BROWSE CATEGORIES</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

    </section>
  )
}

export default Hero;