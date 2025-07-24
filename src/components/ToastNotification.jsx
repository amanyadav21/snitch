import React, { useState, useEffect } from 'react';
import { FiCheck, FiHeart, FiShoppingBag, FiX, FiAlertCircle } from 'react-icons/fi';

const Toast = ({ message, type, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-500',
          icon: <FiCheck className="h-5 w-5" />,
          border: 'border-green-400'
        };
      case 'wishlist':
        return {
          bg: 'bg-pink-500',
          icon: <FiHeart className="h-5 w-5" />,
          border: 'border-pink-400'
        };
      case 'cart':
        return {
          bg: 'bg-blue-500',
          icon: <FiShoppingBag className="h-5 w-5" />,
          border: 'border-blue-400'
        };
      case 'error':
        return {
          bg: 'bg-red-500',
          icon: <FiAlertCircle className="h-5 w-5" />,
          border: 'border-red-400'
        };
      default:
        return {
          bg: 'bg-gray-500',
          icon: <FiCheck className="h-5 w-5" />,
          border: 'border-gray-400'
        };
    }
  };

  const styles = getToastStyles();

  if (!isVisible) return null;

  return (
    <div className={`fixed top-20 right-4 z-50 transform transition-all duration-300 ease-in-out ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`${styles.bg} text-white px-6 py-4 rounded-lg shadow-lg border-l-4 ${styles.border} flex items-center space-x-3 max-w-sm`}>
        <div className="flex-shrink-0">
          {styles.icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-white/80 hover:text-white transition-colors duration-200"
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now();
    const newToast = { id, message, type, isVisible: true };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Expose addToast function globally
  useEffect(() => {
    window.showToast = addToast;
    return () => {
      delete window.showToast;
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export { Toast, ToastContainer };
export default ToastContainer;
