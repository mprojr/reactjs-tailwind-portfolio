import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Proj1 from './pages/Proj1.jsx';
import Proj2 from './pages/Proj2.jsx';
import Proj3 from './pages/Proj3.jsx';
import Proj4 from './pages/Proj4.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Aboutme from './components/Aboutme.jsx';
import MidSkipper from './components/MidSkipper.jsx'
import Projects from './components/Projects.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Footer from './components/Footer.jsx';
import Roshni from './pages/Roshni.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import ProjectsPage from './pages/ProjectsPage.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: 
        <>
        <Aboutme/>
        <MidSkipper />
        <Projects />
        <Footer />
        </>,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'projects-list',
        element: <ProjectsPage />,
      },
      {
        path: 'project1',
        element: <Proj1 />,
      },
      {
        path: 'project2',
        element: <Proj2 />,
      },
      {
        path: 'project3',
        element: <Proj3 />,
      },
      {
        path: 'project4',
        element: <Proj4 />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'roshni',
        element: <Roshni />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);