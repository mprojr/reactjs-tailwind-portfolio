import React from 'react';
import ProjLayout from '../layout/ProjLayout';

function Proj6() {
  return (
    <ProjLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        <div className="relative z-10 p-4">
          <h2 className="text-4xl font-extrabold mb-5 text-custom-green-dark drop-shadow-lg underline decoration-custom-green-light decoration-4">
            Job Application Tracker
          </h2>
          <p className="text-lg mb-4">
            The Job Application Tracker connects to your Gmail account, searches for job-related emails, and extracts key information such as company names, email subjects, and dates. The extracted data is then saved into a CSV file, making it easier to track your job applications.
          </p>

          {/* Anonymized Terminal Output */}
          <div className="bg-black text-white p-3 rounded-lg shadow-inner mt-6 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-left break-words">
        {` /* EXAMPLE */
        
Companies applied to (most recent first):

Company: Job Board 1, Subject: Your application was viewed, Date: 2024-XX-XX 12:40:44

Company: Company 1, Subject: Your application was submitted | Company 1, Date: 2024-XX-XX 06:41:00

Company: Job Board 1, Subject: Application received, Date: 2024-XX-XX 06:40:47

Company: Application Platform 1, Subject: Thank you - we've received your job application, Date: 2024-XX-XX 10:15:10
        
Company: Job Board 2, Subject: Job Application: Front End Developer, Date: 2024-XX-XX 03:57:06`}
            </pre>
          </div>

          {/* Technologies Used */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Python</li>
                <li>Gmail API</li>
                <li>Google Cloud</li>
                <li>OAuth 2.0</li>
                <li>CSV File Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Automated Email Search and Data Extraction</li>
                <li>CSV Export for Application Tracking</li>
                <li>OAuth 2.0 Authentication</li>
                <li>Error Logging and Debugging</li>
                <li>Configurable Search Criteria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProjLayout>
  );
}

export default Proj6;
