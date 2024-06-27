import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: 'path/to/image1.jpg',
    detailsPage: '/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'path/to/image2.jpg',
    detailsPage: '/project2'
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'path/to/image3.jpg',
    detailsPage: '/project3'
  },
  {
    id: 4,
    title: 'Project 4',
    image: 'path/to/image4.jpg',
    detailsPage: '/project4'
  }
]

export default function Projects() {
  return (
    <div className='h-[80vh] p-6 m-4'>
      <div className='h-[300px] w-full grid
      py-6 gap-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 row-span-10'>
        {projects.map(project => (
          <span key={project.id} className='group h-[100px] bg-black rounded-2xl'>
          <Link to={project.detailsPage} className='fill-transparent w-full p-2 m-2'>
            <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-2xl' />
            {/* <div className='absolute bottom-0 left-0 w-full text-white p-2 bg-black bg-opacity-50 rounded-b-2xl'>
              {project.title}
            </div> */}
          </Link>
        </span>
      ))}
    </div>
  </div>
);
}
