import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-[#1E3A8A] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Marine Services</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[#06B6D4] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#06B6D4] transition-colors">Services</a>
          <a href="#about" className="hover:text-[#06B6D4] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#06B6D4] transition-colors">Contact</a>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;