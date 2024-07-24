import React from 'react';
import ProjLayout from '../layout/ProjLayout';
import proj3Image from '../assets/img/proj3.png';

function Proj3() {
  return (
    <ProjLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        
        {/* Text Section */}
        <div className="relative z-10 p-4">
          <h2 className="text-4xl font-extrabold mb-5 text-custom-green-dark drop-shadow-lg underline decoration-custom-green-light decoration-4">
            Personal Portfolio Website
          </h2>
          <p className="text-lg mb-4">
            This project is a comprehensive portfolio website designed to showcase my skills, experiences, and projects. The website includes detailed information about myself, my background in computer science, and the various personal projects I have worked on. It serves as a professional platform where potential employers and collaborators can learn more about my capabilities and the work I have accomplished. This portfolio is an essential tool in my job search, helping to demonstrate my expertise and passion for development.
          </p>

          {/* Image Section */}
          <div className="flex justify-center py-2 mt-6">
            <img src={proj3Image} alt="Project 3 Screenshot" className="md:w-4/6 h-auto rounded-2xl shadow-lg border-2"/>
          </div>

          {/* Two Column Grid */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Personal Information</li>
                <li>Project Showcase</li>
                <li>Responsive Design</li>
                <li>Interactive UI</li>
                <li>Easy Navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProjLayout>
  );
}

export default Proj3;