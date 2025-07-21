import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui"
import { ArrowRight, Star, Shield, Truck } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blackbg">
      {/* Main Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-300">Trusted by 50,000+ customers</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-brand font-black leading-tight text-whitebg">
                    <span className="block">Redefine</span>
                    <span className="block text-accentcolor">Men's Fashion</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl font-content text-gray-300 leading-relaxed max-w-lg">
                    Premium menswear designed exclusively for the modern man. 
                    Where <span className="text-accentcolor font-semibold">sophistication meets style</span>.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-accentcolor hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 transform hover:scale-105"
                  >
                    <Link to="/shop">
                      Shop Collection
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-2 border-whitebg text-whitebg hover:bg-whitebg hover:text-blackbg px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <Link to="/lookbook">
                      View Lookbook
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Shield className="h-5 w-5 text-accentcolor" />
                    <span className="text-sm">Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Truck className="h-5 w-5 text-accentcolor" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Star className="h-5 w-5 text-accentcolor" />
                    <span className="text-sm">4.9/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="relative h-96 lg:h-full">
                  {/* Hero Image - Using a professional model image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg lg:rounded-none overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Professional man in premium clothing"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blackbg/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating Price Tag */}
                  <div className="absolute top-6 right-6 bg-whitebg/90 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-blackbg">₹1,999</p>
                      <p className="text-xs text-accentcolor">Free Shipping</p>
                    </div>
                  </div>

                  {/* Style Badge */}
                  <div className="absolute bottom-6 left-6 bg-accentcolor/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white font-semibold text-sm">New Collection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accentcolor/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accentcolor/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Featured Categories Strip */}
      <div className="bg-whitebg/5 backdrop-blur-sm border-t border-whitebg/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 bg-whitebg/10 rounded-full flex items-center justify-center group-hover:bg-accentcolor/20 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Formal Shirts"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <h3 className="text-whitebg font-semibold text-sm">Formal Shirts</h3>
              <p className="text-gray-400 text-xs mt-1">From ₹1,299</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 bg-whitebg/10 rounded-full flex items-center justify-center group-hover:bg-accentcolor/20 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="T-Shirts & Polos"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <h3 className="text-whitebg font-semibold text-sm">T-Shirts & Polos</h3>
              <p className="text-gray-400 text-xs mt-1">From ₹699</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 bg-whitebg/10 rounded-full flex items-center justify-center group-hover:bg-accentcolor/20 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Premium Jeans"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <h3 className="text-whitebg font-semibold text-sm">Premium Jeans</h3>
              <p className="text-gray-400 text-xs mt-1">From ₹1,999</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 bg-whitebg/10 rounded-full flex items-center justify-center group-hover:bg-accentcolor/20 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Blazers & Jackets"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <h3 className="text-whitebg font-semibold text-sm">Blazers & Jackets</h3>
              <p className="text-gray-400 text-xs mt-1">From ₹2,999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
