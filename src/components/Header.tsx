import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

  const isActive = (path: string) => {
    return location.pathname === path 
      ? `text-blue-600 dark:text-blue-400` 
      : `text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 w-full">
      <nav className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Marine Services</Link>
        </div>
        
        <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
          <Link to="/" className={`${isActive('/')} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
            Home
          </Link>
          <Link to="/services" className={`${isActive('/services')} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
            Services
          </Link>
          <Link to="/about" className={`${isActive('/about')} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
            About
          </Link>
          <Link to="/contact" className={`${isActive('/contact')} inline-flex items-center px-1 pt-1 text-sm font-medium`}>
            Contact
          </Link>
          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>

          <Link
            to="/provider/signup" 
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Become a Provider
          </Link>
        </div>

        <div className="sm:hidden flex items-center space-x-4"> 
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-all duration-300 ease-in-out z-50 sm:hidden`}
      >
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl font-medium text-blue-600 dark:text-blue-400">Menu</div>
            <button
              onClick={toggleMobileMenu}
              className="rounded-md p-2 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className={`${isActive('/')} px-3 py-2 rounded-md text-base font-medium`}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={toggleMobileMenu}
              className={`${isActive('/services')} px-3 py-2 rounded-md text-base font-medium`}
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className={`${isActive('/about')} px-3 py-2 rounded-md text-base font-medium`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className={`${isActive('/contact')} px-3 py-2 rounded-md text-base font-medium`}
            >
              Contact
            </Link>
            <Link
              to="/provider/signup"
              onClick={toggleMobileMenu} 
              className={`block px-3 py-2 rounded-md text-base font-medium text-white ${theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-50 z-40 sm:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;