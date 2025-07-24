import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'
import ToastContainer from './components/ToastNotification'
import ScrollToTop from './components/ScrollToTop'

// Lazy load heavy components for better performance
const Hero = React.lazy(() => import('./components/hero'))
const Categories = React.lazy(() => import('./components/Categories'))
const Footer = React.lazy(() => import('./components/Footer'))
const LifestyleSection = React.lazy(() => import('./components/LifestyleSection'))
const ProductShowcase = React.lazy(() => import('./components/ProductShowcase'))
const Collection = React.lazy(() => import('./components/collection'))

// Lazy load page components
const Sale = React.lazy(() => import('./components/pages/Sale'))
const Top = React.lazy(() => import('./components/pages/Top'))
const Bottom = React.lazy(() => import('./components/pages/Bottom'))
const Accessories = React.lazy(() => import('./components/pages/Accessories'))
const Wishlist = React.lazy(() => import('./components/pages/Wishlist'))
const AddToBag = React.lazy(() => import('./components/pages/Addtobag'))
const Account = React.lazy(() => import('./components/pages/Account'))
const ProductDetails = React.lazy(() => import('./components/pages/ProductDetails'))
const NotFoundPage = React.lazy(() => import('./components/pages/Notfoundpage'))

// Component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  
  // Check if current path doesn't match any defined routes (404 page)
  const definedRoutes = ['/', '/sale', '/top', '/bottom', '/accessories', '/wishlist', '/bag', '/account'];
  const isNotFoundPage = !definedRoutes.includes(location.pathname) && !location.pathname.startsWith('/product/');

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingSpinner message="Loading home..." />}>
              <Hero />
              <Categories />
              <ProductShowcase />
              <LifestyleSection />
              <Collection />
            </Suspense>
          } />
          <Route path="/sale" element={
            <Suspense fallback={<LoadingSpinner message="Loading sale products..." />}>
              <Sale />
            </Suspense>
          } />
          <Route path="/top" element={
            <Suspense fallback={<LoadingSpinner message="Loading top wear..." />}>
              <Top />
            </Suspense>
          } />
          <Route path="/bottom" element={
            <Suspense fallback={<LoadingSpinner message="Loading bottom wear..." />}>
              <Bottom />
            </Suspense>
          } />
          <Route path="/accessories" element={
            <Suspense fallback={<LoadingSpinner message="Loading accessories..." />}>
              <Accessories />
            </Suspense>
          } />
          <Route path="/wishlist" element={
            <Suspense fallback={<LoadingSpinner message="Loading wishlist..." />}>
              <Wishlist />
            </Suspense>
          } />
          <Route path="/bag" element={
            <Suspense fallback={<LoadingSpinner message="Loading shopping bag..." />}>
              <AddToBag />
            </Suspense>
          } />
          <Route path="/account" element={
            <Suspense fallback={<LoadingSpinner message="Loading account..." />}>
              <Account />
            </Suspense>
          } />
          <Route path="/product/:productId" element={
            <Suspense fallback={<LoadingSpinner message="Loading product..." />}>
              <ProductDetails />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner message="Page not found..." />}>
              <NotFoundPage />
            </Suspense>
          } />
        </Routes>
      </Suspense>
      {/* Conditionally render Footer with Suspense - hide on 404 page */}
      {!isNotFoundPage && (
        <Suspense fallback={<div className="bg-black h-20"></div>}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
        <ToastContainer />
      </Router>
    </ErrorBoundary>
  )
}

export default App