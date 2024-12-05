import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Home, Menu, Info, Phone } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Hadi-Events
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-blue-600 text-lg hover:text-blue-800 transition-colors">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <a href="#about" className="flex items-center space-x-1 text-blue-600 text-lg hover:text-blue-800 transition-colors">
              <Info className="w-5 h-5" />
              <span>About</span>
            </a>
            <Link to="/events" className="flex items-center space-x-1 text-blue-600 text-lg hover:text-blue-800 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </Link>
            <a href="#contact" className="flex items-center space-x-1 text-blue-600 text-lg hover:text-blue-800 transition-colors">
              <Phone className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
