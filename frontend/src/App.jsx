import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import "./index.css";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Medora from './components/pages/camp/Medora';
import WindowsChecklist from './components/pages/infosec/WindowsChecklist';
import LinuxChecklist from './components/pages/infosec/LinuxChecklist';
import IncidentResponse from './components/pages/project/IncidentResponse';
import Server from './components/pages/project/Server';
import Religion from './components/pages/religion/Religion';
import Glacier from './components/pages/camp/Glacier';
import Porn from './components/pages/essay/PornsEffectOnRelationships';
import StopPorn from './components/pages/essay/Recover';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import WoodlandCarribou from './components/pages/camp/WoodlandCarribou';
import IncidentResponsePlan from './components/pages/infosec/IncidentResponsePlan';
import Malware from './components/pages/infosec/Malware';
import RansomwareIRP from './components/pages/infosec/RansomwarePlaybook';
import VerizonDBR from './components/pages/infosec/VerizonDBR';
import ChatGPT from './components/pages/essay/ChatGPT';
import Redline from './components/pages/infosec/Redline'
import Nefarious from './components/pages/essay/Nefarious';
import PussInBoots from './components/pages/essay/PussInBoots';

function App() {

  return (
<React.StrictMode>
  <Router>
    <NavBar />
    <Routes>
      <Route path='/' index exact element={<Home />} />
      <Route path='/camp/Glacier' exact element={<Glacier />} />
      <Route path='/camp/woodland-carribou' exact element={<WoodlandCarribou />} />
      <Route path='/camp/Medora' element={<Medora />} />
      <Route path='/infosec/Windows-Checklist' element={<WindowsChecklist />} />
      <Route path='/infosec/Linux-Checklist' element={<LinuxChecklist />} />
      <Route path='/infosec/Incident-Response-Plan' element={<IncidentResponsePlan />} />
      <Route path='/infosec/Ransomware-Incident-Response-Playbook' element={<RansomwareIRP />} />
      <Route path='/infosec/Making-Malware' element={<Malware />} />
      <Route path='/infosec/Redline-Investigation' element={<Redline />} />
      <Route path='/infosec/Verizon-DBIR' element={<VerizonDBR />} />
      <Route path='/projects/Server' element={<Server />} />
      <Route path='/essays/Porn' element={<Porn />} />
      <Route path='/essays/Recover' element={<StopPorn />} />
      <Route path='/essays/ChatGPT' element={<ChatGPT />} />
      <Route path='/essays/Nefarious' element={<Nefarious />} />
      <Route path='/essays/PussInBoots' element={<PussInBoots />} />
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