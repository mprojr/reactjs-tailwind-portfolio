import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Aboutme from './components/Aboutme';
import MidSkipper from './components/MidSkipper';
import Projects from './components/Projects';

function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project');

  return (
    <div>
      <Topbar />
      <main>
        {isProjectPage ? (
          <Outlet />
        ) : (
          <>
            <Aboutme />
            <MidSkipper />
            <Projects />
          </>
        )}
      </main>
    </div>
  );
}

export default App;