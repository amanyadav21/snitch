import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Main application store
const useStore = create(
  devtools(
    (set) => ({
      // App state will be added here when needed
      isLoading: false,
      error: null,
      
      // Actions will be added here when needed
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'snitch-store', // Store name for devtools
    }
  )
)

export default useStore
