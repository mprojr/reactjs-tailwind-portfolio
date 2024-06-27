import React from 'react';
import { Link } from 'react-router-dom';

function ProjLayout({ children }) {
  return (
    <div className="proj-layout flex flex-col min-h-screen bg-gradient-to-r from-[#77915f] to-[#a3bc8a]">
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Martin Rodriguez. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ProjLayout;