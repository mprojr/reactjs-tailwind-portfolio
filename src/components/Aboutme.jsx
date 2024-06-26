import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import img2720 from '../assets/img/IMG_2720.jpg'

export default function Aboutme() {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] py-[100px] m-auto w-full h-screen text-center flex flex-col'>

        <div className='m-4 grid grid-col-6 '>
          <img src={img2720} alt='pfp' className='border-2 p-1 border-white col-span-4 w-56 h-56 rounded-full object-cover shadow-lg mx-auto'/>
        { /*           <span className='min-h-[100px] rounded-lg bg-black shadow sm:col-span-2'></span>
        */ }
        </div> 
        <h1 className='uppercase py-2 text-gray-950 font-bold sm:text-2xl md:text-3xl lg:text-4xl'>Martin Rodriguez</h1>
        <div className='sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-bold p-3 min-h-[40px]' style={{ height: '40px' }}>
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

          <div className='py-8 grid grid-cols-6 gap-4'>
            <span className='border-2 border-solid bg-gradient-to-r from-[#a3bc8a] to-[#77915f] opacity-85 min-h-[100px] p-4 rounded-xl shadow sm:col-span-4 col-span-6'>
              <p className='text-md text-white text-center font-bold'>I am Martin Rodriguez, a passionate Web Developer and Programmer with the creativity to create dynamic and visually appealing web applications. With a background in Computer Science, I have honed my skills in various programming languages and technologies to build robust and scalable solutions.</p>
            </span>
            <span className='border-2 border-solid bg-gradient-to-l from-[#a3bc8a] to-[#77915f] min-h-[100px] rounded-xl bg-black shadow sm:col-span-2 col-span-6 p-6'>
              <ul className='grid grid-cols-2 gap-2 text-white text-center font-bold'>
                <li className='m-1 flex items-center justify-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>React.js
                </li>
                <li className='m-1 flex items-center justify-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>Tailwind
                </li>
                <li className='m-1 flex items-center justify-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>JavaScript
                </li>
                <li className='m-1 flex items-center justify-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>HTML
                </li>
                <li className='m-1 flex items-center justify-center'>
                  <i className="fa-solid fa-square-check text-black mr-2"></i>Python
                </li>
                <li className='m-1 flex items-center justify-center'>
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
