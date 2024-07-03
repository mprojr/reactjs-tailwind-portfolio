import React from 'react'

function MainLayout({ children }) {
  return (
    <div className='text-black'>
      <div className='max-w-[750px] m-auto w-full h-screen text-center flex flex-col'>
        <main className="flex-grow container mx-auto p-2">
          {children}
        </main>
      </div>
{/*       <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Martin Rodriguez. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default MainLayout
