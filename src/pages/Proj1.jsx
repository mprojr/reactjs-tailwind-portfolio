import React from 'react';
import ProjLayout from '../layout/ProjLayout';
import etsyTemplateImage from '../assets/img/proj1.png';

function Proj1() {
  return (
    <ProjLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        
        {/* Text Section */}
        <div className="relative z-10 p-4">
          <h2 className="text-4xl font-extrabold mb-5 text-custom-green-dark drop-shadow-lg underline decoration-custom-green-light decoration-4">
          <a href='https://timelessrose.netlify.app/' alt='Timeless Rose' target='_blank'>
              Etsy Website Template
            </a>
          </h2>
          <p className="text-lg mb-4">
            This Etsy Website Template is a stylish and functional web template designed specifically for Etsy sellers. It helps showcase your products in an elegant manner, making it easier for potential buyers to browse and purchase. The template features a clean design, user-friendly interface, and is fully responsive, ensuring a seamless experience on all devices.
          </p>

          {/* Image Section */}
          <div className="flex justify-center py-2 mt-6">
            <img src={etsyTemplateImage} alt="Etsy Website Template Screenshot" className="md:w-4/6 h-auto rounded-2xl shadow-lg border-2"/>
          </div>

          {/* Two Column Grid */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>Stripe</li>
                <li>Zustand</li>
                <li>HTML</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Elegant Product Showcase</li>
                <li>User-friendly Interface</li>
                <li>Fully Responsive Design</li>
                <li>Easy Customization</li>
                <li>Seamless Etsy Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProjLayout>
  );
}

export default Proj1;