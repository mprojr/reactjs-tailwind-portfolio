import React from 'react'
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className='text-black'>
      <div className='max-w-[750px] m-auto w-full h-[70vh] text-center flex flex-col'>
        <main className="flex-grow container mx-auto p-2">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout
