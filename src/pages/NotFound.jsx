import React from 'react'
import { Button } from "../components/ui"
import { ArrowLeft, Home, Search, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blackbg via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-brand text-9xl md:text-[12rem] font-black text-whitebg/10 select-none">
            404
          </h1>
          <div className="relative -mt-16 md:-mt-24">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-whitebg mb-4">
              Oops! Page Not Found
            </h2>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-4">
          <p className="font-content text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the fashion void.
          </p>
          <p className="font-content text-lg text-gray-400 max-w-xl mx-auto">
            Don't worry, our style experts are here to help you find what you need.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            asChild
            size="lg"
            className="bg-accentcolor hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300"
          >
            <Link to="/">
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-whitebg text-whitebg hover:bg-whitebg hover:text-blackbg px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Link to="/shop">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Continue Shopping
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="bg-whitebg/5 backdrop-blur-sm rounded-2xl p-8 border border-whitebg/10">
          <h3 className="font-heading text-xl font-semibold text-whitebg mb-6">
            Popular Destinations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              to="/shirts" 
              className="group p-4 rounded-lg bg-whitebg/5 hover:bg-accentcolor/20 transition-all duration-300 border border-whitebg/10 hover:border-accentcolor/30"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accentcolor/20 rounded-full flex items-center justify-center group-hover:bg-accentcolor/30 transition-colors">
                  <ShoppingBag className="h-6 w-6 text-accentcolor" />
                </div>
                <h4 className="font-content font-semibold text-whitebg text-sm">Shirts Collection</h4>
                <p className="font-content text-xs text-gray-400 mt-1">Premium shirts</p>
              </div>
            </Link>

            <Link 
              to="/tshirts" 
              className="group p-4 rounded-lg bg-whitebg/5 hover:bg-accentcolor/20 transition-all duration-300 border border-whitebg/10 hover:border-accentcolor/30"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accentcolor/20 rounded-full flex items-center justify-center group-hover:bg-accentcolor/30 transition-colors">
                  <ShoppingBag className="h-6 w-6 text-accentcolor" />
                </div>
                <h4 className="font-content font-semibold text-whitebg text-sm">T-Shirts & Polos</h4>
                <p className="font-content text-xs text-gray-400 mt-1">Casual wear</p>
              </div>
            </Link>

            <Link 
              to="/sale" 
              className="group p-4 rounded-lg bg-whitebg/5 hover:bg-accentcolor/20 transition-all duration-300 border border-whitebg/10 hover:border-accentcolor/30"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accentcolor/20 rounded-full flex items-center justify-center group-hover:bg-accentcolor/30 transition-colors">
                  <div className="text-accentcolor font-bold text-lg">%</div>
                </div>
                <h4 className="font-content font-semibold text-whitebg text-sm">Sale</h4>
                <p className="font-content text-xs text-gray-400 mt-1">Up to 50% off</p>
              </div>
            </Link>

            <Link 
              to="/jeans" 
              className="group p-4 rounded-lg bg-whitebg/5 hover:bg-accentcolor/20 transition-all duration-300 border border-whitebg/10 hover:border-accentcolor/30"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accentcolor/20 rounded-full flex items-center justify-center group-hover:bg-accentcolor/30 transition-colors">
                  <ShoppingBag className="h-6 w-6 text-accentcolor" />
                </div>
                <h4 className="font-content font-semibold text-whitebg text-sm">Premium Jeans</h4>
                <p className="font-content text-xs text-gray-400 mt-1">Denim collection</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="font-content text-sm text-gray-500">
            Still lost? <Link to="/contact" className="text-accentcolor hover:text-blue-400 underline">Contact our support team</Link>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accentcolor/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accentcolor/3 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  )
}

export default NotFound
