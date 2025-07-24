import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bagItems, setBagItems] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sale', href: '/sale', isSpecial: true },
    { name: 'Top', href: '/top' },
    { name: 'Bottom', href: '/bottom' },
    { name: 'Accessories', href: '/accessories' },
  ];

  // Update item counts from localStorage
  useEffect(() => {
    const updateCounts = () => {
      const bag = JSON.parse(localStorage.getItem('shoppingBag') || '[]');
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setBagItems(bag.reduce((total, item) => total + item.quantity, 0));
      setWishlistItems(wishlist.length);
    };

    updateCounts();
    // Listen for storage changes
    window.addEventListener('storage', updateCounts);
    
    // Check periodically for updates
    const interval = setInterval(updateCounts, 1000);

    return () => {
      window.removeEventListener('storage', updateCounts);
      clearInterval(interval);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
    }`}>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Brand Logo */}
          <div className='flex-shrink-0'>
            <Link 
              to="/" 
              className='text-white text-2xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-200'
            >
              SNITCH
              <span className='text-green-500 text-xs ml-1'>●</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  isActive(link.href)
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                } ${link.isSpecial ? 'text-red-400 hover:text-red-300' : ''}`}
              >
                {link.name}
                {/* Active indicator */}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></span>
                )}
                {/* Sale badge */}
                {link.isSpecial && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                    HOT
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Account, Wishlist, Cart */}
          <div className='flex items-center space-x-1'>
            {/* Account Icon */}
            <Link
              to="/account"
              className='hidden sm:flex p-2.5 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group'
              aria-label="My Account"
            >
              <FiUser className='h-5 w-5 group-hover:scale-110 transition-transform duration-200' />
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className='relative p-2.5 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group'
              aria-label="Wishlist"
            >
              <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
              {wishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {wishlistItems > 99 ? '99+' : wishlistItems}
                </span>
              )}
            </Link>

            {/* Shopping Bag */}
            <Link
              to="/bag"
              className='relative p-2.5 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 group'
              aria-label="Shopping Bag"
            >
              <FiShoppingCart className='h-5 w-5 group-hover:scale-110 transition-transform duration-200' />
              {bagItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {bagItems > 99 ? '99+' : bagItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2.5 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200'
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className='h-5 w-5 transform rotate-180 transition-transform duration-200' />
              ) : (
                <FiMenu className='h-5 w-5 transition-transform duration-200' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className='px-2 pt-2 pb-6 space-y-1 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-2'>
            {/* Mobile Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                  isActive(link.href)
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                } ${link.isSpecial ? 'text-red-400 hover:text-red-300' : ''}`}
              >
                <span>{link.name}</span>
                {link.isSpecial && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    HOT
                  </span>
                )}
                {isActive(link.href) && (
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Mobile Account Actions */}
            <div className='border-t border-gray-700 pt-4 mt-4'>
              <Link
                to="/account"
                onClick={() => setIsOpen(false)}
                className='flex items-center w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200'
              >
                <FiUser className='h-5 w-5 mr-3' />
                <span>My Account</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;