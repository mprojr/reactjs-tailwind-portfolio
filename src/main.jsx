import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Proj1 from './pages/Proj1.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Proj1",
    element: <Proj1 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
