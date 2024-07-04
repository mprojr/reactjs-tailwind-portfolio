import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function ProjLayout({ children }) {
  return (
    <div className='text-black'>
      <div className='max-w-[750px] m-auto  sm:max-h-full sm:h-[70vh] max-h-full text-center flex flex-col'>
        <main className="flex-grow container mx-auto p-2">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ProjLayout;