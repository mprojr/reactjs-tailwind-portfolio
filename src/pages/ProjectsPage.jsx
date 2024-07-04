import React from 'react';
import MainLayout from '../layout/MainLayout';
import { projects } from '../config/projectsConfig';

function ProjectsPage() {

  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <MainLayout>
      <div className="relative p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-55 rounded-lg shadow-lg">
        <div className="relative z-10 p-4">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">ID</th>
                  <th className="border border-gray-300 p-2">Title</th>
                  <th className="border border-gray-300 p-2">Description</th>
                  <th className="border border-gray-300 p-2">Technologies</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project.id} className="even:bg-gray-100">
                    <td className="p-2 text-center">{project.id}</td>
                    <td className="p-2">
                      <a href={project.detailsPage} className="text-black hover:text-custom-green-dark hover:underline">
                        {project.title}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <button className='border border-gray-400 rounded-md p-[4px] bg-gradient-to-r from-custom-green-light to-custom-green text-white font-semibold transition duration-300 shadow-lg transform hover:scale-105' onClick={() => handleGitHubClick(project.githubLink)}>
                        More Details
                      </button>
                    </td>
                    <td className="border border-gray-300 p-2">{Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProjectsPage;