import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../config/projectsConfig';

export default function Projects() {
  return (
    <div className='h-[80vh] p-6 m-4'>
      <div className='h-[300px] w-full grid py-6 gap-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 row-span-10'>
        {projects.map(project => (
          <div key={project.id} className='group h-[100px] bg-black rounded-2xl'>
            <Link to={project.detailsPage} className='fill-transparent w-full p-2 m-2'>
              <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-2xl' />
{/*               <div className='absolute bottom-0 left-0 w-full text-white p-2 bg-black bg-opacity-50 rounded-b-2xl'>
                {project.title}
              </div> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}