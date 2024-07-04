import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function ProjLayout({ children }) {
  return (
    <div className='text-black'>
      <div className='max-w-[750px] m-auto w-full h-screen text-center flex flex-col'>
        <main className="flex-grow container mx-auto p-2">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ProjLayout;