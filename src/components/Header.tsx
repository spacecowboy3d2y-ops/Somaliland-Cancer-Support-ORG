import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo';

interface HeaderProps {
  onDonateClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDonateClick }) => {
  const linkClasses = "text-gray-600 hover:text-brand-purple transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClasses = "text-brand-purple bg-brand-light-purple";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <Logo className="h-16 w-auto" />
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/goals" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              Our Goals
            </NavLink>
            <NavLink to="/get-involved" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              Get Involved
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
              Contact Us
            </NavLink>
          </nav>
          <div className="flex items-center">
            <button
              onClick={onDonateClick}
              className="bg-brand-purple text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
