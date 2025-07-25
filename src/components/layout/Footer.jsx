import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    window.showToast && window.showToast('Thank you for subscribing to our newsletter!', 'success');
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Offline Store Section */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">OFFLINE STORE</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  SNITCH Stores Near Me
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  SNITCH Shirts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  SNITCH Jeans
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  SNITCH Trousers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  T Shirts for men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Jackets for men
                </a>
              </li>
            </ul>
          </div>

          {/* Get to Know Us Section */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">GET TO KNOW US</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Old money outfits
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Cargo pants for men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Overshirt for men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Gurkha Trousers for men
                </a>
              </li>
            </ul>
          </div>

          {/* Orders Section */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">ORDERS</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  TRACK ORDER
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  RETURNS/EXCHANGE POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Sweaters for men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Hoodies for men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Sweatshirts for men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Accessories for men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  SNITCH LUXE
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
                  SNITCH PLUS
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">SIGN UP AND SAVE</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white text-black placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#d6ff00] rounded sm:rounded-none sm:rounded-l"
                  required
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#d6ff00] text-black font-semibold text-sm sm:text-base hover:bg-[#d6ff00] transition-colors duration-200 rounded sm:rounded-none sm:rounded-r cursor-pointer "
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>

            {/* Social Media Links */}
            <div className="pt-4 sm:pt-6">
              <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">CONNECT WITH US</h4>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://www.instagram.com/snitch.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-110"
                  title="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.facebook.com/snitch.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 transform hover:scale-110"
                  title="Follow us on Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.youtube.com/@SNITCH-IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-200 transform hover:scale-110"
                  title="Subscribe to our YouTube channel"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                <a
                  href="https://twitter.com/snitchindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-200 transform hover:scale-110 border border-gray-600"
                  title="Follow us on X (Twitter)"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <a
                  href="https://in.pinterest.com/snitchclothing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-200 transform hover:scale-110"
                  title="Follow us on Pinterest"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.166-1.498-.69-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.linkedin.com/company/snitch-co-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-200 transform hover:scale-110"
                  title="Connect with us on LinkedIn"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a
                  href="https://www.snapchat.com/add/snitchofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-200 transform hover:scale-110"
                  title="Follow us on Snapchat"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.166-1.498-.69-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@snitch.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-200 transform hover:scale-110 border border-gray-600"
                  title="Follow us on TikTok"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <p className="text-gray-300 text-xs sm:text-sm">© 2025 SNITCH</p>
              <span className="text-gray-300 text-xs sm:text-sm">Made in India, for the World 🌍</span>
            </div>
            
            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-300 text-xs sm:text-sm">We Accept:</span>
              <div className="flex space-x-2">
                <div className="w-6 h-4 sm:w-8 sm:h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-6 h-4 sm:w-8 sm:h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-6 h-4 sm:w-8 sm:h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
                <div className="w-6 h-4 sm:w-8 sm:h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  UPI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
