import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
              <h2 className="text-3xl font-semibold mb-6">Something went wrong</h2>
              <p className="text-gray-400 text-lg mb-8">
                We're sorry, but something unexpected happened. Please try refreshing the page or go back to home.
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 mr-4"
              >
                Refresh Page
              </button>
              
              <Link
                to="/"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20 hover:border-white/40 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
              >
                Go to Home
              </Link>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left bg-gray-900/50 p-4 rounded-lg">
                <summary className="cursor-pointer text-gray-300 mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-red-400 text-sm overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
