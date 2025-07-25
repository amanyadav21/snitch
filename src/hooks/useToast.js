// Custom hook for managing toast notifications
import { useState, useCallback } from 'react';

/**
 * Custom hook for toast notifications
 * @returns {object} - Toast state and control functions
 */
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = {
      id,
      message,
      type,
      duration,
      timestamp: Date.now(),
    };

    setToasts(prev => [...prev, newToast]);

    // Auto-remove toast after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);

    return id;
  }, [removeToast]);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    showToast,
    removeToast,
    clearAllToasts,
  };
};
