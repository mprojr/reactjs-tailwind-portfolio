import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Topbar() {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <nav className=" text-gray-200 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile Devices Hamburger Menu */}

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block px-2 py-1 hover:underline">Home</Link>
          <Link to="/about" className="block px-2 py-1 hover:underline">About</Link>
          <Link to="/projects" className="block px-2 py-1 hover:underline">Projects</Link>
          <Link to="/contact" className="block px-2 py-1 hover:underline">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Topbar;