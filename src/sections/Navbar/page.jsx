import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex items-center justify-between py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold text-indigo-900">
        MOHAMED KAIF D
      </div>
      <div className="flex items-center space-x-8">
        <a href="#home" className="text-gray-500 hover:text-gray-900">Home</a>
        <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
        <a href="#projects" className="text-gray-500 hover:text-gray-900">Projects</a>
        <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
        <button className="text-gray-500 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2H6m12 8a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
