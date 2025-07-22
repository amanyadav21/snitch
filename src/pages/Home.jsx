import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategoryList from '../components/CategoryList'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Truck } from 'lucide-react'
import { products } from '../data/products'

const Home = () => {
  const featuredProducts = products.filter(product => product.featured)
  const trendingProducts = products.slice(0, 4)

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blackbg">
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
                  <Link 
                    to="/category/shirts"
                    className="inline-flex items-center justify-center bg-accentcolor hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 transform hover:scale-105 rounded-md"
                  >
                    Shop Collection
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link 
                    to="/category/jackets"
                    className="inline-flex items-center justify-center border-2 border-whitebg text-whitebg hover:bg-whitebg hover:text-blackbg px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-md"
                  >
                    View Lookbook
                  </Link>
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
              <div className="relative">
                <div className="relative h-96 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Professional man in premium clothing"
                      className="w-full h-full object-cover object-center"
                    />
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
      </section>

      {/* Category List */}
      <CategoryList />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-brand font-bold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Handpicked essentials for the modern gentleman
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/category/shirts"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accentcolor hover:bg-blue-600 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-brand font-bold text-gray-900 sm:text-4xl">
              Trending Now
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most popular items this season
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
