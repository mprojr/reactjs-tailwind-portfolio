import React from 'react';
import ProjLayout from '../layout/ProjLayout';

function Proj7() {
  return (
    <ProjLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        <div className="relative z-10 p-4">
          <h2 className="text-4xl font-extrabold mb-5 text-custom-green-dark drop-shadow-lg underline decoration-custom-green-light decoration-4">
            MoodProgress Journal
          </h2>
          <p className="text-lg mb-4">
            The MoodProgress Journal is a full-stack web application that allows users to track their daily moods alongside journal entries. Built with Next.js and React.js, this app provides a seamless way for users to log their feelings, monitor their emotional progress over time, and reflect on their daily experiences. The integration with Firebase ensures secure authentication and real-time data management.
          </p>

          {/* Anonymized User Interface Example */}
          <div className="bg-black text-white p-3 rounded-lg shadow-inner mt-6 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-left break-words">
        {` /* EXAMPLE */
        
Date: 2024-08-21
Mood: 😌 (Awesome)
Journal: "Today was a great day! I managed to complete all my tasks and even had time for some relaxation."

Date: 2024-08-20
Mood: 🥲 (Sad)
Journal: "It was a tough day today. Things didn't go as planned, but I'm hopeful for tomorrow."

Date: 2024-08-19
Mood: 😐 (Meh)
Journal: "Today was okay. Not much happened, but I stayed productive."`}
            </pre>
          </div>

          {/* Technologies Used */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Next.js</li>
                <li>React.js</li>
                <li>Firebase</li>
                <li>Zustand</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Daily Mood and Journal Logging</li>
                <li>Real-time Data Sync with Firebase</li>
                <li>User Authentication and Security</li>
                <li>Responsive Design with Tailwind CSS</li>
                <li>State Management with Zustand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProjLayout>
  );
}

export default Proj7;
