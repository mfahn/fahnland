import { createBrowserRoute, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import ReactDOM from 'react-dom/client';
import {  } from 'eact-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Minnesota from './components/pages/camp/Minnesota';
import WindowsChecklist from './components/pages/checklist/WindowsChecklist';
import LinuxChecklist from './components/pages/checklist/LinuxChecklist';
import IncidentResponse from './components/pages/project/IncidentResponse';
import Server from './components/pages/project/Server';
import Religion from './components/pages/religion/Religion';
import Glacier from './components/pages/camp/Glacier';
import Porn from './components/pages/essay/PornsEffectOnRelationships';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App;