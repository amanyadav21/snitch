// Storage utility functions for localStorage operations

import { STORAGE_KEYS } from './constants.js';

/**
 * Generic localStorage utility functions
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage (${key}):`, error);
      return defaultValue;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      // Trigger storage event for components listening to storage changes
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error(`Error writing to localStorage (${key}):`, error);
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error(`Error removing from localStorage (${key}):`, error);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};

/**
 * Specific storage functions for app features
 */
export const wishlistStorage = {
  get: () => storage.get(STORAGE_KEYS.WISHLIST, []),
  set: (wishlist) => storage.set(STORAGE_KEYS.WISHLIST, wishlist),
  add: (product) => {
    const wishlist = wishlistStorage.get();
    const exists = wishlist.find(item => item.id === product.id);
    if (!exists) {
      wishlist.push(product);
      wishlistStorage.set(wishlist);
      return true;
    }
    return false;
  },
  remove: (productId) => {
    const wishlist = wishlistStorage.get();
    const filtered = wishlist.filter(item => item.id !== productId);
    wishlistStorage.set(filtered);
  },
  clear: () => storage.remove(STORAGE_KEYS.WISHLIST),
  count: () => wishlistStorage.get().length,
};

export const cartStorage = {
  get: () => storage.get(STORAGE_KEYS.SHOPPING_BAG, []),
  set: (cart) => storage.set(STORAGE_KEYS.SHOPPING_BAG, cart),
  add: (product, quantity = 1, selectedSize = 'M') => {
    const cart = cartStorage.get();
    const existingItemIndex = cart.findIndex(
      item => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity,
        selectedSize,
        addedAt: new Date().toISOString(),
      });
    }
    
    cartStorage.set(cart);
  },
  remove: (productId, selectedSize) => {
    const cart = cartStorage.get();
    const filtered = cart.filter(
      item => !(item.id === productId && item.selectedSize === selectedSize)
    );
    cartStorage.set(filtered);
  },
  updateQuantity: (productId, selectedSize, quantity) => {
    const cart = cartStorage.get();
    const itemIndex = cart.findIndex(
      item => item.id === productId && item.selectedSize === selectedSize
    );
    
    if (itemIndex !== -1) {
      if (quantity <= 0) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].quantity = quantity;
      }
      cartStorage.set(cart);
    }
  },
  clear: () => storage.remove(STORAGE_KEYS.SHOPPING_BAG),
  count: () => cartStorage.get().reduce((total, item) => total + item.quantity, 0),
  total: () => cartStorage.get().reduce((total, item) => total + (item.price * item.quantity), 0),
};
