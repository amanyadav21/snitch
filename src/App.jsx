import React from 'react'
import Hero from './components/hero'
import Categories from './components/categories'
import Footer from './components/Footer'
import Collection from './components/collection'
const App = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Collection />
      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App