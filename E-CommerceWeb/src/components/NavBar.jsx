import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold tracking-wider">
              BrandLogo
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/about" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/projects" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </a>
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/about" className="hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/projects" className="hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </a>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium mt-4">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;