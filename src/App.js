import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
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
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/camp/glacier":
      component = <Glacier />
      break
    case "/camp/Minnesota":
      component = <Minnesota />
      break
    case "/checklist/WindowsChecklist":
      component = <WindowsChecklist />
      break
    case "/checklist/LinuxChecklist":
      component = <LinuxChecklist />
      break
    case "/projects/server":
      component = <Server />
      break
    case "/essays/porn":
      component = <Porn />
      break
    case "/religion":
      component = <Religion />
      break
    case "/projects/Incident-Response":
      component = <IncidentResponse />
      break
    default:
      component = <NotFound />
        break
  }

  return (
<>
<Router>
  <NavBar />
  <Routes>
    <Route Path='/' exact element={<Home />} />
    <Route Path='/camp/glacier' element={<Glacier />} />
    <Route Path='/camp/Minnesota' element={<Minnesota />} />
    <Route Path='/checklist/WindowsChecklist' element={<WindowsChecklist />} />
    <Route Path='/checklist/LinuxChecklist' element={<LinuxChecklist />} />
    <Route Path='/projects/server' element={<Server />} />
    <Route Path='/essays/porn' element={<Porn />} />
    <Route Path='/religion' element={<Religion />} />
    <Route Path='/projects/Incident-Response' element={<IncidentResponse />} />
    <Route Path='/error' element={<NotFound />} />
  </Routes>
</Router>
{component}
<Footer />
</>
    );
}

export default App;