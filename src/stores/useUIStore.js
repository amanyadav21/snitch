import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// UI store for managing UI states
const useUIStore = create(
  devtools(
    (set) => ({
      // Mobile menu state
      isMobileMenuOpen: false,
      
      // Profile dropdown state
      isProfileOpen: false,
      
      // Modal states
      isLoginModalOpen: false,
      isRegisterModalOpen: false,
      
      // Loading states
      isPageLoading: false,
      
      // UI Actions
      toggleMobileMenu: () => 
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
      
      closeMobileMenu: () => 
        set({ isMobileMenuOpen: false }),
      
      toggleProfile: () => 
        set((state) => ({ isProfileOpen: !state.isProfileOpen })),
      
      closeProfile: () => 
        set({ isProfileOpen: false }),
      
      openLoginModal: () => 
        set({ isLoginModalOpen: true, isRegisterModalOpen: false }),
      
      openRegisterModal: () => 
        set({ isRegisterModalOpen: true, isLoginModalOpen: false }),
      
      closeModals: () => 
        set({ isLoginModalOpen: false, isRegisterModalOpen: false }),
      
      setPageLoading: (loading) => 
        set({ isPageLoading: loading }),
    }),
    {
      name: 'ui-store',
    }
  )
)

export default useUIStore
