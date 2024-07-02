import React from 'react';
import ProjLayout from '../layout/ProjLayout';
import proj1Image from '../assets/img/proj1.png';

function Proj1() {
  return (
    <ProjLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        
        {/* Text Section */}
        <div className="relative z-10 p-4">
        <h2 className="text-4xl font-extrabold mb-5 text-custom-green-dark drop-shadow-lg underline decoration-custom-green-light decoration-4">
            Chrome Extension - Lead Tracker
          </h2>
          <p className="text-lg mb-4">
            The Lead Tracker Chrome Extension is a simple and efficient tool designed to help users save and manage web links directly from their browser. The extension allows users to store URLs from the current tab, add custom URLs, and delete all saved links. This project demonstrates the integration of JavaScript with the Chrome API, local storage, and a responsive UI using basic HTML and CSS.
          </p>

        {/* Image Section */}
        <div className="flex justify-center py-2 mt-6">
          <img src={proj1Image} alt="Project 1 Screenshot" className=" w-4/6 h-auto rounded-2xl shadow-lg border-2"/>
        </div>

          {/* Two Column Grid */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Chrome API</li>
                <li>Local Storage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Store URLs from the Current Tab</li>
                <li>Add Custom URLs</li>
                <li>Delete All Saved URLs</li>
                <li>Local Storage Integration</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProjLayout>
  );
}

export default Proj1;