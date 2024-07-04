import React from 'react'

export default function MidSkipper() {
  return (
    <div className='grid grid-cols-1 w-full sm:h-[300px] h-[200px]'>
      <span className='bg-gradient-to-br from-[#2e3725] to-[black] w-full sm:min-h-[300px] min-h-[250px] flex items-center justify-center'>
        <div className='text-center text-white'>
          <h2 className='text-2xl font-bold mb-2'>Want to Learn More?</h2>
          <p className='mb-4'>Check out my latest projects and see what I've been working on!</p>
          <a 
            href="/projects-list"
            className='inline-block bg-custom-green hover:bg-custom-green-dark text-white font-bold py-2 px-4 rounded'
          >
            View Projects
          </a>
        </div>
      </span>
    </div>
  )
}