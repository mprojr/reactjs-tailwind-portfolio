import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../config/projectsConfig';

export default function Projects() {

  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='group1 sm:h-[15] min-h-[5vh] h-[30vh] p-6 m-4'>
      <h1 className='flex justify-center py-2 text-gray-950 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-2xl'> Personal Projects</h1>
      <div className='h-[300px] w-full grid py-6 gap-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
        {projects.map(project => (
          <div key={project.id} className='relative border border-spacing-1 h-[200px] transparent rounded-md overflow-hidden'>
            <Link to={project.detailsPage} className='fill-transparent w-full h-full group2'>
              <img src={project.image} alt={project.title} className='sm:blur-xs group1-hover:blur-0 duration-100 w-full h-full object-cover rounded-md' />
              <div 
                className='absolute bottom-2 right-2 sm:opacity-0 group2-hover:opacity-100 duration-200 cursor-default'
                onClick={() => handleGitHubClick(project.githubLink)}
              >
                  <i className="fa-brands fa-github text-3xl text-black"></i>
              </div>
              <div className='absolute w-full top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-70 text-center text-white text-lg font-bold sm:opacity-0 group2-hover:opacity-100 duration-200 rounded-md'>
                {project.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}