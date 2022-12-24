import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React } from 'react';
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
<Router>
  <NavBar />
  <Routes>
    <Route Path='/' exact component={Home}/>
    <Route Path='/camp/glacier' component={Glacier} />
    <Route Path='/camp/Minnesota' component={Minnesota} />
    <Route Path='/checklist/WindowsChecklist' component={WindowsChecklist} />
    <Route Path='/checklist/LinuxChecklist' component={LinuxChecklist} />
    <Route Path='/projects/server' component={Server} />
    <Route Path='/essays/porn' component={Porn} />
    <Route Path='/religion' component={Religion} />
    <Route Path='/projects/Incident-Response' component={IncidentResponse} />
  </Routes>
</Router>
    );
}

export default App;