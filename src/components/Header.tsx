import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">🌍</span>
            <span className="text-2xl font-bold text-earth-700">GreenEarth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-earth-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-earth-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/initiatives" className="text-gray-700 hover:text-earth-600 font-medium transition-colors">
              Initiatives
            </Link>
            <Link to="/articles" className="text-gray-700 hover:text-earth-600 font-medium transition-colors">
              Articles
            </Link>
            <Link to="/get-involved" className="text-gray-700 hover:text-earth-600 font-medium transition-colors">
              Get Involved
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-earth-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-earth-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-earth-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/initiatives"
              className="block py-2 text-gray-700 hover:text-earth-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Initiatives
            </Link>
            <Link
              to="/articles"
              className="block py-2 text-gray-700 hover:text-earth-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              to="/get-involved"
              className="block py-2 text-gray-700 hover:text-earth-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-earth-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
