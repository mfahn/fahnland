import Home from './components/Home'
import { BrowserRouter as Router} from 'react-router-dom'
import { React } from 'react'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
      <Home />
    </>
    );
}

export default App;