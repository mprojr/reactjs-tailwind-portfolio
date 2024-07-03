import proj1Thumbnail from '../assets/img/thumbnail1.png';
import proj2Thumbnail from '../assets/img/thumbnail2.png'
import proj3Thumbnail from '../assets/img/thumbnail3.png'
import proj4Thumbnail from '../assets/img/thumbnail4.png'

export const projects = [
  {
    id: 1,
    title: 'Web Chrome App',
    image: proj1Thumbnail,
    detailsPage: '/project1',
    githubLink: '/lead-chrome-ext',
    tags: ['JavaScript', 'HTML/CSS']
  },
  {
    id: 2,
    title: 'Portfolio Website',
    image: proj2Thumbnail,
    detailsPage: '/project2',
    githubLink: '/reactjs-tailwind-portfolio',
    tags: ['React.js', 'HTML/CSS', 'JavaScript']
  },
  {
    id: 3,
    title: 'Year % Tracker',
    image: proj3Thumbnail,
    detailsPage: '/project3',
    githubLink: '/Current-Year-Progress',
    tags: ['C#', '.NET', 'XAML']
  },
  {
    id: 4,
    title: 'Unix Pipe Parsing',
    image: proj4Thumbnail,
    detailsPage: '/project4',
    githubLink: '/Unix-Pipe-Parsing',
    tags: ['C++', 'Unix', 'System Programming']
  }
];