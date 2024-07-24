import React from 'react';
import ProjLayout from '../layout/ProjLayout';
import proj4Image from '../assets/img/proj4.jpg';

function Proj4() {
  return (
    <ProjLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        
        {/* Text Section */}
        <div className="relative z-10 p-4">
          <h2 className="text-4xl font-extrabold mb-5 text-custom-green-dark drop-shadow-lg underline decoration-custom-green-light decoration-4">
            Current Year Progress Tracker
          </h2>
          <p className="text-lg mb-4">
            This project is a simple yet effective tool designed to track the progress of the current year. It calculates the percentage of the year that has passed and displays it in an easy-to-understand format. This application helps users visualize the passage of time throughout the year and can be a motivational tool to keep track of annual goals and milestones.
          </p>

          {/* Image Section */}
          <div className="flex justify-center py-2 mt-6">
            <img src={proj4Image} alt="Project 4 Screenshot" className="md:w-4/6 h-auto rounded-2xl shadow-lg border-2" />
          </div>

          {/* Two Column Grid */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>C#</li>
                <li>.NET Framework</li>
                <li>XAML</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Year Progress Calculation</li>
                <li>Simple and Intuitive UI</li>
                <li>Real-Time Updates</li>
                <li>Motivational Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProjLayout>
  );
}

export default Proj4;