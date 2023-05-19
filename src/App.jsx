import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
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
import Redline from './components/pages/infosec/Redline';

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
      <Route path='/infosec/WindowsChecklist' element={<WindowsChecklist />} />
      <Route path='/infosec/LinuxChecklist' element={<LinuxChecklist />} />
      <Route path='/infosec/IncidentResponsePlan' element={<IncidentResponsePlan />} />
      <Route path='/infosec/RansomwareIncidentResponsePlan' element={<RansomwareIRP />} />
      <Route path='/infosec/WritingMalware' element={<Malware />} />
      <Route path='/infosec/Redline' element={<Redline />} />
      <Route path='/infosec/VerizonDBIR' element={<VerizonDBR />} />
      <Route path='/projects/server' element={<Server />} />
      <Route path='/essays/porn' element={<Porn />} />
      <Route path='/essays/StoppingPorn' element={<StopPorn />} />
      <Route path='/essays/RoleOfGenerativeLanguageModelsInEducation' element={<ChatGPT />} />
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