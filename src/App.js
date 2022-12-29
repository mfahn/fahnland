import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React } from 'react';
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
  return (
<>
<Router>
  <NavBar />
  <Routes>
    <Route Path='/' exact element={<Home />} />
    <Route Path='/glacier' element={<Glacier />} />
    <Route Path='/camp/Minnesota' element={<Minnesota />} />
    <Route Path='/checklist/WindowsChecklist' element={<WindowsChecklist />} />
    <Route Path='/checklist/LinuxChecklist' element={<LinuxChecklist />} />
    <Route Path='/projects/server' element={<Server />} />
    <Route Path='/essays/porn' element={<Porn />} />
    <Route Path='/religion' element={<Religion />} />
    <Route Path='/projects/Incident-Response' element={<IncidentResponse />} />
  </Routes>
</Router>
<hr />

<Outlet />
</>
    );
}

export default App;