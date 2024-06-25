import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import img2720 from '../assets/img/IMG_2720.jpg'

export default function Aboutme() {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] py-[150px] m-auto w-full h-screen text-center flex flex-col'>

        <div className='m-4 grid grid-col-6 '>
          <img src={img2720} alt='pfp' className='col-span-4 w-48 h-48 rounded-full object-cover shadow-lg mx-auto'/>
        { /*           <span className='min-h-[100px] rounded-lg bg-black shadow sm:col-span-2'></span>
        */ }
        </div> 
        <h1 className='uppercase py-2 text-gray-950 font-bold sm:text-2xl md:text-3xl lg:text-4xl'>Martin Rodriguez</h1>
        <div className=' sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-bold p-3' style={{ height: '30px' }}>
          <Typewriter
            words={['Developer and Programmer.']}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </div>
        <div className='content-evenly m-3 p-3'>
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
