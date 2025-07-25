import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Handle route changes
  useEffect(() => {
    // Use a small timeout to ensure DOM is ready
    const scrollTimeout = setTimeout(() => {
      // Force immediate scroll to top
      window.scrollTo(0, 0);
      
      // Additional scroll to top with smooth behavior for better UX
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 10);
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  // Handle page refresh/initial load
  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    // Ensure scroll position is reset even after DOM is fully loaded
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };
    
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    // Set scroll restoration to manual to prevent browser from remembering scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.addEventListener('load', handleLoad);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollToTop;