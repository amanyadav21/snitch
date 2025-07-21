import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// User store for authentication and user data
const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        // User state
        user: null,
        isAuthenticated: false,
        wishlist: [],
        
        // User actions (to be implemented later)
        login: (userData) => {
          set({ user: userData, isAuthenticated: true })
        },
        
        logout: () => {
          set({ user: null, isAuthenticated: false, wishlist: [] })
        },
        
        updateUser: (userData) => {
          set((state) => ({ user: { ...state.user, ...userData } }))
        },
        
        addToWishlist: (productId) => {
          set((state) => ({
            wishlist: state.wishlist.includes(productId)
              ? state.wishlist
              : [...state.wishlist, productId]
          }))
        },
        
        removeFromWishlist: (productId) => {
          set((state) => ({
            wishlist: state.wishlist.filter(id => id !== productId)
          }))
        },
        
        clearWishlist: () => {
          set({ wishlist: [] })
        },
      }),
      {
        name: 'snitch-user',
        partialize: (state) => ({ 
          user: state.user, 
          isAuthenticated: state.isAuthenticated,
          wishlist: state.wishlist 
        }),
      }
    ),
    {
      name: 'user-store',
    }
  )
)

export default useUserStore
