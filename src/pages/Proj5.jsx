import React from 'react';
import ProjLayout from '../layout/ProjLayout';
import proj5Image from '../assets/img/proj5.png';

function Proj5() {
  return (
    <ProjLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        
        {/* Text Section */}
        <div className="relative z-10 p-4">
          <h2 className="text-4xl font-extrabold mb-5 text-custom-green-dark drop-shadow-lg underline decoration-custom-green-light decoration-4">
            Unix Pipe Parsing
          </h2>
          <p className="text-lg mb-4">
            This project demonstrates the use of Unix pipes for inter-process communication. It features a C++ program that simulates data flow between processes using pipes. The project includes a parent-child process architecture where child processes perform computations and communicate results back to the parent process through pipes. This project showcases my understanding of low-level system programming and inter-process communication in Unix-like operating systems.
          </p>

          {/* Image Section */}
          <div className="flex justify-center py-2 mt-6">
            <img src={proj5Image} alt="Project 4 Screenshot" className="md:w-4/6 h-auto rounded-2xl shadow-lg border-2" />
          </div>

          {/* Two Column Grid */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>C++</li>
                <li>Unix</li>
                <li>Inter-process Communication</li>
                <li>System Programming</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Parent-Child Process Architecture</li>
                <li>Data Flow Simulation</li>
                <li>Pipe-based Communication</li>
                <li>Debugging Capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProjLayout>
  );
}

export default Proj5;