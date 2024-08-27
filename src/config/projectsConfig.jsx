import proj1Thumbnail from '../assets/img/thumbnail1.png';
import proj2Thumbnail from '../assets/img/thumbnail2.png'
import proj3Thumbnail from '../assets/img/thumbnail3.png'
import proj4Thumbnail from '../assets/img/thumbnail4.png'
import proj5Thumbnail from '../assets/img/thumbnail5.png'
import proj6Thumbnail from '../assets/img/thumbnail6.png'

export const projects = [
  {
    id: 7,
    title: 'DailyLog Journal',
/*     image: proj6Thumbnail,
 */    detailsPage: '/project7',
    githubLink: 'https://github.com/mprojr/nextjs13-journal',
    technologies: ['Next.js', 'React.js', 'TailwindCSS', 'Javascript', 'HTML', 'CSS']
  },
  {
    id: 6,
    title: 'Job Application Tracker',
    image: proj6Thumbnail,
    detailsPage: '/project6',
    githubLink: 'https://github.com/mprojr/Job-Application-Tracker',
    technologies: ['Python', 'Google API']
  },
  {
    id: 1,
    title: 'Jewelry Store',
    image: proj1Thumbnail,
    detailsPage: '/project1',
    githubLink: 'https://github.com/mprojr/nextjs13-store',
    technologies: ['Next.js', 'TailwindCSS', 'Stripe', 'Zustand', 'HTML', 'CSS']
  },
  {
    id: 2,
    title: 'Web Chrome App',
    image: proj2Thumbnail,
    detailsPage: '/project2',
    githubLink: 'https://github.com/mprojr/lead-chrome-ext',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 3,
    title: 'Portfolio Website',
    image: proj3Thumbnail,
    detailsPage: '/project3',
    githubLink: 'https://github.com/mprojr/reactjs-tailwind-portfolio',
    technologies: ['React.js', 'TailwindCSS',  'HTML', 'CSS']
  },
  {
    id: 4,
    title: 'Year % Tracker',
    image: proj4Thumbnail,
    detailsPage: '/project4',
    githubLink: 'https://github.com/mprojr/Current-Year-Progress',
    technologies: ['C#', '.NET', 'XAML']
  },
  {
    id: 5,
    title: 'Unix Pipe Parsing',
    image: proj5Thumbnail,
    detailsPage: '/project5',
    githubLink: 'https://github.com/mprojr/Unix-Pipe-Parsing',
    technologies: ['C++', 'Unix', 'System Programming']
  }
];