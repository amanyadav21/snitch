import React from 'react'

const FontDemo = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div className="text-center">
        <h1 className="font-brand text-4xl font-bold text-blackbg mb-4">
          SNITCH Font Family Demo
        </h1>
        <p className="font-content text-lg text-gray-600">
          Here's how to use your custom fonts in Tailwind CSS
        </p>
      </div>

      {/* Poppins Examples */}
      <div className="space-y-6">
        <h2 className="font-heading text-2xl font-semibold text-blackbg border-b pb-2">
          Poppins Font (Headings & Brand)
        </h2>
        
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Usage: font-poppins</p>
            <h3 className="font-poppins text-xl font-bold">The quick brown fox jumps over the lazy dog</h3>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Usage: font-heading</p>
            <h3 className="font-heading text-xl font-semibold">Premium Fashion Collection 2025</h3>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Usage: font-brand</p>
            <h3 className="font-brand text-2xl font-black">SNITCH</h3>
          </div>
        </div>
      </div>

      {/* Titillium Web Examples */}
      <div className="space-y-6">
        <h2 className="font-heading text-2xl font-semibold text-blackbg border-b pb-2">
          Titillium Web Font (Body Text)
        </h2>
        
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Usage: font-titillium</p>
            <p className="font-titillium text-base">
              This is perfect for body text, descriptions, and content. It's clean, readable, and modern.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Usage: font-body</p>
            <p className="font-body text-base">
              Discover our premium collection of modern menswear designed for the contemporary gentleman.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Usage: font-content</p>
            <p className="font-content text-sm">
              Free shipping on orders above ₹999. Easy returns within 30 days.
            </p>
          </div>
        </div>
      </div>

      {/* Combined Usage Example */}
      <div className="space-y-6">
        <h2 className="font-heading text-2xl font-semibold text-blackbg border-b pb-2">
          Combined Usage Example
        </h2>
        
        <div className="p-6 bg-gradient-to-r from-blackbg to-gray-800 text-white rounded-lg">
          <h3 className="font-brand text-3xl font-bold mb-2">SNITCH</h3>
          <h4 className="font-heading text-xl font-semibold mb-4">Premium Men's Fashion</h4>
          <p className="font-content text-gray-300 leading-relaxed">
            Experience the perfect blend of contemporary style and classic elegance. 
            Our carefully curated collection features premium fabrics, impeccable tailoring, 
            and timeless designs that elevate your wardrobe.
          </p>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-accentcolor/10 p-6 rounded-lg">
        <h3 className="font-heading text-xl font-semibold mb-4">Quick Reference</h3>
        <div className="grid md:grid-cols-2 gap-4 font-content text-sm">
          <div>
            <h4 className="font-medium mb-2">Poppins (Headings):</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• <code>font-poppins</code></li>
              <li>• <code>font-heading</code></li>
              <li>• <code>font-brand</code></li>
              <li>• <code>font-headerfont</code> (legacy)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Titillium Web (Body):</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• <code>font-titillium</code></li>
              <li>• <code>font-body</code></li>
              <li>• <code>font-content</code></li>
              <li>• <code>font-parafont</code> (legacy)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FontDemo
