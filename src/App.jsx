import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Categories from './components/categories'
import Footer from './components/Footer'
import Collection from './components/collection'
import Sale from './components/pages/Sale'
import Top from './components/pages/Top'
import Bottom from './components/pages/Bottom'
import Accessories from './components/pages/Accessories'
import Wishlist from './components/pages/Wishlist'
import AddToBag from './components/pages/Addtobag'
import NotFoundPage from './components/pages/Notfoundpage'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Categories />
              <Collection />
            </>
          } />
          <Route path="/sale" element={<Sale />} />
          <Route path="/top" element={<Top />} />
          <Route path="/bottom" element={<Bottom />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bag" element={<AddToBag />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App