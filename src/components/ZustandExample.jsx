import React from 'react'
import { Button } from "./ui"
import { useCartStore, useUIStore, useUserStore } from '../stores'

// Example component showing how to use Zustand stores
// This is just for reference - not used in the app yet
const ZustandExample = () => {
  // How to use the stores
  const { items, totalItems, addItem, removeItem } = useCartStore()
  const { isMobileMenuOpen, toggleMobileMenu } = useUIStore()
  const { user, isAuthenticated, login, logout } = useUserStore()

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-heading font-bold mb-4">Zustand Usage Examples</h2>
      
      <div className="space-y-4">
        {/* Cart Example */}
        <div className="p-4 bg-white rounded">
          <h3 className="font-semibold">Cart Store:</h3>
          <p>Items in cart: {totalItems}</p>
          <p>Cart items: {JSON.stringify(items)}</p>
        </div>

        {/* UI Example */}
        <div className="p-4 bg-white rounded">
          <h3 className="font-semibold">UI Store:</h3>
          <p>Mobile menu open: {isMobileMenuOpen ? 'Yes' : 'No'}</p>
          <Button 
            onClick={toggleMobileMenu}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Toggle Mobile Menu
          </Button>
        </div>

        {/* User Example */}
        <div className="p-4 bg-white rounded">
          <h3 className="font-semibold">User Store:</h3>
          <p>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
          <p>User: {user ? JSON.stringify(user) : 'Not logged in'}</p>
          {!isAuthenticated ? (
            <Button 
              onClick={() => login({ name: 'John Doe', email: 'john@example.com' })}
              className="bg-green-500 hover:bg-green-600 text-white mr-2"
            >
              Login
            </Button>
          ) : (
            <Button 
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Logout
            </Button>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-100 rounded">
        <h4 className="font-semibold">How to use in your components:</h4>
        <pre className="text-sm mt-2">
{`// Import the store
import { useCartStore } from '../stores'

// Use in component
const { items, addItem } = useCartStore()

// Use the state and actions
addItem(product)
console.log(items)`}
        </pre>
      </div>
    </div>
  )
}

export default ZustandExample
