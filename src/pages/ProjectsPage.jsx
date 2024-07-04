import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { projects } from '../config/projectsConfig';

function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(selectedFilter));

  return (
    <MainLayout>
      <div className="relative sm:p-6 max-w-5xl mx-auto mt-10 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <div className="relative z-10 p-6">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="flex justify-between items-center mb-6">
            <label htmlFor="filter" className="mr-2 font-medium">Filter by Technology:</label>
            <select
              id="filter"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md focus:ring-custom-green focus:border-custom-green"
            >
              <option value="All">All</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-custom-green-light text-white">
                  <th className="border border-gray-300 p-2">ID</th>
                  <th className="border border-gray-300 p-2">Title</th>
                  <th className="border border-gray-300 p-2">GitHub</th>
                  <th className="border border-gray-300 p-2">Technologies</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map(project => (
                  <tr key={project.id} className="even:bg-gray-100 hover:bg-custom-green-light">
                    <td className="p-2 text-center">{project.id}</td>
                    <td className="p-2">
                      <a href={project.detailsPage} className="text-black hover:text-custom-green-dark hover:underline">
                        {project.title}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <button
                        className="border border-gray-400 rounded-md p-[4px] bg-gradient-to-r from-custom-green-light to-custom-green text-white font-semibold transition duration-300 shadow-lg transform hover:scale-105"
                        onClick={() => handleGitHubClick(project.githubLink)}
                      >
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