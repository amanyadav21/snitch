import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import { PageSkeleton } from './components/ui/SkeletonLoader'
import ErrorBoundary from './components/ui/ErrorBoundary'
import ToastContainer from './components/ui/ToastNotification'
import ScrollToTop from './components/layout/ScrollToTop'

// Lazy load page components
const HomePage = React.lazy(() => import('./pages/HomePage'))
const SalePage = React.lazy(() => import('./pages/SalePage'))
const TopPage = React.lazy(() => import('./pages/TopPage'))
const BottomPage = React.lazy(() => import('./pages/BottomPage'))
const AccessoriesPage = React.lazy(() => import('./pages/AccessoriesPage'))
const UpcomingPage = React.lazy(() => import('./pages/UpcomingPage'))
const WishlistPage = React.lazy(() => import('./pages/WishlistPage'))
const CartPage = React.lazy(() => import('./pages/CartPage'))
const AccountPage = React.lazy(() => import('./pages/AccountPage'))
const ProductDetailsPage = React.lazy(() => import('./pages/ProductDetailsPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

// Lazy load layout components
const Footer = React.lazy(() => import('./components/layout/Footer'))

// Component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  
  // Check if current path doesn't match any defined routes (404 page)
  const definedRoutes = ['/', '/sale', '/top', '/bottom', '/accessories', '/upcoming', '/wishlist', '/bag', '/account'];
  const isNotFoundPage = !definedRoutes.includes(location.pathname) && !location.pathname.startsWith('/product/');

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<PageSkeleton />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/sale" element={
            <Suspense fallback={<PageSkeleton />}>
              <SalePage />
            </Suspense>
          } />
          <Route path="/top" element={
            <Suspense fallback={<PageSkeleton />}>
              <TopPage />
            </Suspense>
          } />
          <Route path="/bottom" element={
            <Suspense fallback={<PageSkeleton />}>
              <BottomPage />
            </Suspense>
          } />
          <Route path="/accessories" element={
            <Suspense fallback={<PageSkeleton />}>
              <AccessoriesPage />
            </Suspense>
          } />
          <Route path="/upcoming" element={
            <Suspense fallback={<PageSkeleton />}>
              <UpcomingPage />
            </Suspense>
          } />
          <Route path="/wishlist" element={
            <Suspense fallback={<PageSkeleton />}>
              <WishlistPage />
            </Suspense>
          } />
          <Route path="/bag" element={
            <Suspense fallback={<PageSkeleton />}>
              <CartPage />
            </Suspense>
          } />
          <Route path="/account" element={
            <Suspense fallback={<PageSkeleton />}>
              <AccountPage />
            </Suspense>
          } />
          <Route path="/product/:productId" element={
            <Suspense fallback={<PageSkeleton />}>
              <ProductDetailsPage />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<PageSkeleton />}>
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