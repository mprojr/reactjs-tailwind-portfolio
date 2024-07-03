import React from 'react'
import MainLayout from '../layout/MainLayout'

function AboutPage() {
  return (
    <MainLayout>
      <h1 className='uppercase py-2 text-gray-950 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-2xl'>About Me</h1>
      <div className='text-left'>
        <p className='text-lg mb-4'>
          Hello, I am Martin Rodriguez, a passionate Web Developer and Programmer from Houston, TX. With a background in Computer Science, I have honed my skills in various programming languages and technologies to build robust and scalable applications.
        </p>
        <p className='text-lg mb-4'>
          I specialize in front-end development using React.js and Tailwind CSS, and have experience in back-end development with Node.js and Express. My projects reflect my dedication to continuous learning and improvement in the field of web development.
        </p>
        <p className='text-lg mb-4'>
          Outside of coding, I enjoy exploring new technologies, reading tech blogs, and contributing to open-source projects. I am always eager to take on new challenges and collaborate with like-minded professionals.
        </p>
      </div>
    </MainLayout>
  )
}

export default AboutPage