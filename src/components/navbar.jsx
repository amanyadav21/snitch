import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Sale', href: '/sale' },
    { name: 'Top', href: '/top' },
    { name: 'Bottom', href: '/bottom' },
    { name: 'Accessories', href: '/accessories' },
  ];

  return (
    <header className='bg-black sticky top-0 z-50 shadow-md'>
      <nav className='flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-13'>
          {/* Main Navigation */}
          <ul className='flex space-x-5'>
            {mainLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className='text-white hover:text-gray-300 px-3 py-2 rounded-md text-md font-normal transition-colors duration-200'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <div>
            <a
              href="/cart"
              className='text-white hover:text-gray-300 p-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center'
              aria-label="Cart"
            >
              <FiShoppingCart className='h-5 w-5' />
              <span className='sr-only'>Cart</span>
              {/* Optional: Add cart item count */}
              {/* <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span> */}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;