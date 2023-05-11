import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Medora from './components/pages/camp/Medora';
import WindowsChecklist from './components/pages/checklist/WindowsChecklist';
import LinuxChecklist from './components/pages/checklist/LinuxChecklist';
import IncidentResponse from './components/pages/project/IncidentResponse';
import Server from './components/pages/project/Server';
import Religion from './components/pages/religion/Religion';
import Glacier from './components/pages/camp/Glacier';
import Porn from './components/pages/essay/PornsEffectOnRelationships';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import WoodlandCarribou from './components/pages/camp/WoodlandCarribou';

function App() {

  return (
<React.StrictMode>
  <Router>
    <NavBar />
    <Routes>
      <Route path='/' index exact element={<Home />} />
      <Route path='/camp/glacier' exact element={<Glacier />} />
      <Route path='/camp/woodlandcarribou' exact element={<WoodlandCarribou />} />
      <Route path='/camp/Medora' element={<Medora />} />
      <Route path='/checklist/WindowsChecklist' element={<WindowsChecklist />} />
      <Route path='/checklist/LinuxChecklist' element={<LinuxChecklist />} />
      <Route path='/projects/server' element={<Server />} />
      <Route path='/essays/porn' element={<Porn />} />
      <Route path='/religion' element={<Religion />} />
      <Route path='/projects/Incident-Response' element={<IncidentResponse />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
  <Footer />
</React.StrictMode>
    );
}

export default App;