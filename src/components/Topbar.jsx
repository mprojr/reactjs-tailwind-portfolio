import React, { useState } from 'react'

export default function Topbar() {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-8" src="/logo.png" alt="Logo" />
            <span className="ml-2 text-xl font-bold">Brand</span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className='px-6 mx-auto py-2 rounded-md border-[2px] bg-slate-220 border-blue-650 border-solid blueShadow duration-200'>
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            </button>
            <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="block text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="block text-gray-800 hover:text-gray-600">Services</a>
          <a href="#" className="block text-gray-800 hover:text-gray-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}
