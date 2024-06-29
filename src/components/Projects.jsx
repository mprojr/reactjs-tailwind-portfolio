import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../config/projectsConfig';

export default function Projects() {

  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className=' group1 h-[80vh] p-6 m-4'>
      <div className='h-[300px] w-full grid py-6 gap-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
        {projects.map(project => (
          <div key={project.id} className='relative border border-spacing-1 h-[200px] transparent rounded-xl overflow-hidden'>
            <Link to={project.detailsPage} className='fill-transparent w-full h-full group2'>
              <img src={project.image} alt={project.title} className='blur-xs group1-hover:blur-0 duration-100 w-full h-full object-cover rounded-xl' />
              <div 
                className='absolute bottom-2 right-2 opacity-0 group2-hover:opacity-100 duration-200 cursor-default'
                onClick={() => handleGitHubClick(`https://github.com/mprojr/${project.githubLink}`)}
              >
                  <i className="fa-brands fa-github text-3xl text-black"></i>
              </div>
              <div className='absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-40 text-center text-white text-lg font-bold opacity-0 group2-hover:opacity-100 delay-200 duration-200 rounded-2xl'>
                {project.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}