import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ children }) {
  return (
    <div className="text-black flex flex-col min-h-screen">
      <div className="flex-grow max-w-[750px] m-auto w-full text-center flex flex-col">
        <main className="flex-grow container mx-auto p-2">
          {children}
        </main>
      </div>
      <footer className="bg-gradient-to-b from-[#2e3725] via-gray-950 to-black bg-opacity-70  text-white py-8 mt-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Developer Services?</h3>
            <p className="text-gray-400">
              Hi, thank you for visiting the portfolio! Don't hesitate to reach out.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-400">Email: martinprojcs@gmail.com</p>
            <p className="text-gray-400">Location: Houston, TX</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/martin-rodriguez-jr/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin text-3xl text-gray-400 hover:text-white"></i>
              </a>
              <a href="https://github.com/mprojr" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github text-3xl text-gray-400 hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; 2024 Martin Rodriguez. All rights reserved. <Link to="/hidden"><span className='flex justify-end px-3 text-[#010206]'>Roshni</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;