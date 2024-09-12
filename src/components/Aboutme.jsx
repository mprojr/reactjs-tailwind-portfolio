import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import pfp from '../assets/img/PFP.jpg'

export default function Aboutme() {
  return (
    <div className='text-black'>
      <div className='max-w-[700px] py-[20px] m-auto w-full min-h-screen text-center flex flex-col'>

        <div className='m-4 grid grid-col-6'> 
          <img src={pfp} alt='pfp' className='border-2 p-1 border-white col-span-4 w-56 h-56 rounded-full object-cover shadow-lg mx-auto hover:blur-sm duration-500' draggable="false"/>
        { /*           <span className='min-h-[100px] rounded-lg bg-black shadow sm:col-span-2'></span>
        */ }
        </div> 
        <h1 className='uppercase py-2 text-gray-950 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-2xl'>Martin Rodriguez</h1>
        <div className='sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-bold p-3 min-h-[40px]' style={{ height: '40px' }}>
          <Typewriter
            words={['Developer and Programmer.']}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </div>

        <div className='content-evenly m-3 p-3'>
          <a href="https://www.linkedin.com/in/martin-rodriguez-jr/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin p-2 fa-3x mx-4 rounded-lg hover:bg-custom-green-light duration-300"></i>
          </a>
          <a href="https://github.com/mprojr" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-github p-2 fa-3x mx-4 rounded-lg hover:bg-custom-green-light duration-300"></i>
          </a>

          <div className='py-8 grid grid-cols-12 gap-4'>
            <span className='group border-2 border-d bg-gradient-to-t from-[#a3bc8a] to-[#77915f] opacity-85 min-h-[100px] p-4 rounded-xl shadow sm:col-span-7 col-span-12'>
              <p className='text-md text-black text-center font-extrabold'>Hi, I am <span className=' text-gray-200'>Martin Rodriguez,</span> a passionate <span className=' text-gray-20'>Web Developer and Programmer</span> from <span className=' text-gray-200'>Houston, TX.</span> With a background in <span className=' text-gray-200'>Computer Science,</span> I have honed my skills in various <span className=' text-gray-200 text'>programming languages</span> and technologies to build <span className='text-gray-200 group-hover:text-gray-700 transition duration-300'>robust and scalable </span>applications.</p>
            </span>
            <span className='flex flex-center justify-center border-2 border-solid bg-gradient-to-t from-[#a3bc8a] to-[#77915f] min-h-[100px] rounded-xl bg-black shadow sm:col-span-5 col-span-12 p-4'>
              <ul className='grid grid-cols-2 gap-2 text-white text-center font-bold'>
                <li className='m-1 flex items-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>React.js
                </li>
                <li className='m-1 flex items-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>TailwindCSS
                </li>
                <li className='m-1 flex items-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>JavaScript
                </li>
                <li className='m-1 flex items-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>HTML
                </li>
                <li className='m-1 flex items-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>Python
                </li>
                <li className='m-1 flex items-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>C++
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}
