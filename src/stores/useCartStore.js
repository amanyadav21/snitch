import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Cart store for e-commerce functionality
const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        // Cart state
        items: [],
        totalItems: 0,
        totalPrice: 0,
        isOpen: false,

        // Cart actions (will be implemented when needed)
        addItem: (product) => {
          // Implementation will be added later
          console.log('Add item functionality will be implemented')
        },

        removeItem: (productId) => {
          // Implementation will be added later
          console.log('Remove item functionality will be implemented')
        },

        updateQuantity: (productId, quantity) => {
          // Implementation will be added later
          console.log('Update quantity functionality will be implemented')
        },

        clearCart: () => {
          set({ items: [], totalItems: 0, totalPrice: 0 })
        },

        toggleCart: () => {
          set((state) => ({ isOpen: !state.isOpen }))
        },

        openCart: () => set({ isOpen: true }),
        closeCart: () => set({ isOpen: false }),
      }),
      {
        name: 'snitch-cart', // Persist cart in localStorage
        partialize: (state) => ({ 
          items: state.items, 
          totalItems: state.totalItems, 
          totalPrice: state.totalPrice 
        }),
      }
    ),
    {
      name: 'cart-store',
    }
  )
)

export default useCartStore
