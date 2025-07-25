// Custom hook for localStorage operations
import { useState, useEffect } from 'react';

/**
 * Custom hook for managing localStorage state
 * @param {string} key - The localStorage key
 * @param {any} initialValue - Initial value if key doesn't exist
 * @returns {[value, setValue]} - Current value and setter function
 */
export const useLocalStorage = (key, initialValue) => {
  // Get initial value from localStorage or use provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage whenever storedValue changes
  const setValue = (value) => {
    try {
      // Allow value to be a function for functional updates
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      
      // Save to localStorage
      if (valueToStore === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
      
      // Trigger storage event for other components
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Listen for storage changes from other tabs/components
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        try {
          const newValue = e.newValue ? JSON.parse(e.newValue) : initialValue;
          setStoredValue(newValue);
        } catch (error) {
          console.error(`Error parsing localStorage value for key "${key}":`, error);
        }
      }
    };

    // Listen for changes from other tabs
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for changes from current tab
    const handleCustomStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        const newValue = item ? JSON.parse(item) : initialValue;
        setStoredValue(newValue);
      } catch (error) {
        console.error(`Error reading localStorage key "${key}" during change:`, error);
      }
    };
    
    window.addEventListener('storage', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('storage', handleCustomStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
};
