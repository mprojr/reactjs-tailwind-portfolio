import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Topbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;