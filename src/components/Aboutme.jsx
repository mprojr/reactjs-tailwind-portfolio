import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

export default function Aboutme() {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] py-[200px] m-auto w-full h-screen text-center flex flex-col'>
        <h1 className='uppercase text-gray-950 font-bold sm:text-2xl md:text-3xl lg:text-4xl'>Martin Rodriguez</h1>
        <div className=' sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-bold p-2' style={{ height: '30px' }}>
          <Typewriter
            words={['Developer and Programmer']}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        <div className='content-evenly m-4 p-3'>
          <a href="https://www.linkedin.com/in/martin-rodriguez-jr/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin p-2 fa-3x mx-4 rounded-lg hover:bg-custom-green-light duration-300"></i>
          </a>
          <a href="https://github.com/mprojr" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-github p-2 fa-3x mx-4 rounded-lg hover:bg-custom-green-light duration-300"></i>
          </a>

        </div>
      </div>
    </div>
  )
}
