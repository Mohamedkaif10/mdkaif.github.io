import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex items-center justify-between py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold text-indigo-900 sm:text-xl">
        MOHAMED KAIF D
      </div>
      <div className="flex items-center space-x-8 md:flex hidden">
        <Link to="landing" smooth={true} duration={500} className="text-gray-500 hover:text-gray-900 cursor-pointer">
          Home
        </Link>  
        <Link to="Intro" smooth={true} duration={500} className="text-gray-500 hover:text-gray-900 cursor-pointer">
          About
        </Link>  
        <Link to="Projects" smooth={true} duration={500} className="text-gray-500 hover:text-gray-900 cursor-pointer">
          Projects
        </Link> 
        <Link to="Contact" smooth={true} duration={500} className="text-gray-500 hover:text-gray-900 cursor-pointer">
          Contact
        </Link> 
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-900 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-8 w-40 bg-white shadow-md rounded-lg">
          <Link to="landing" smooth={true} duration={500} className="block px-4 py-2 text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link to="Intro" smooth={true} duration={500} className="block px-4 py-2 text-gray-500 hover:text-gray-900">
            About
          </Link>
          <Link to="Projects" smooth={true} duration={500} className="block px-4 py-2 text-gray-500 hover:text-gray-900">
            Projects
          </Link>
          <Link to="Contact" smooth={true} duration={500} className="block px-4 py-2 text-gray-500 hover:text-gray-900">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
