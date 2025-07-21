import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui"
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Heart,
  ChevronDown
} from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)

  const navLinks = [
    { name: 'Shirts', href: '/shirts', hasDropdown: true },
    { name: 'T-Shirts', href: '/tshirts', hasDropdown: true },
    { name: 'Jeans', href: '/jeans', hasDropdown: true },
    { name: 'Jackets', href: '/jackets', hasDropdown: true },
    { name: 'Accessories', href: '/accessories', hasDropdown: true },
    { name: 'Sale', href: '/sale', hasDropdown: false, isSpecial: true },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-blackbg text-whitebg text-center py-2 text-sm">
        Free Shipping on Orders Above ₹999 | Use Code: FREESHIP
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-brand font-black text-blackbg tracking-tight hover:text-accentcolor transition-colors">
              SNITCH
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                      link.isSpecial
                        ? 'text-red-600 hover:text-red-700'
                        : 'text-gray-700 hover:text-blackbg'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Formal Shirts</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Casual Shirts</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Polo T-Shirts</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Denim Jeans</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Blazers</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">View All</a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blackbg focus:border-blackbg"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            
            {/* Search icon for mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accentcolor text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* User Profile */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleProfile}
                className="flex items-center"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Account</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Orders</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Wishlist</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                    <hr className="my-1" />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign Out</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  link.isSpecial
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-blackbg hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Account Links */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blackbg hover:bg-gray-50">
                My Account
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blackbg hover:bg-gray-50">
                Sign In / Register
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
