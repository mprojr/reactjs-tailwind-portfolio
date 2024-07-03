import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <Topbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;