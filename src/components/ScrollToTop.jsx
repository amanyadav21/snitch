import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Handle route changes
  useEffect(() => {
    // Instant scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Alternative with smooth scroll (uncomment if you prefer smooth animation)
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
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
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollToTop;