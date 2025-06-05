import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Servers from './pages/Servers.jsx'
import Events from './pages/Events.jsx'
import Rules from './pages/Rules.jsx'
import Battalions from './pages/Battalions.jsx'
import Battalion1stRecon from './pages/Battalion1stRecon.jsx'
import Battalion2ndRecon from './pages/Battalion2ndRecon.jsx'
import Battalion3rdRecon from './pages/Battalion3rdRecon.jsx'
import BattalionHQService from './pages/BattalionHQService.jsx'

function App() {
  return (
    <Router>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/servers">Servers</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/rules">Rules</Link></li>
          <li className="dropdown">
            <Link to="/battalions">Battalions</Link>
            <ul className="dropdown-menu">
              <li><Link to="/battalions/1st-recon">1st Recon Battalion</Link></li>
              <li><Link to="/battalions/2nd-recon">2nd Recon Battalion</Link></li>
              <li><Link to="/battalions/3rd-recon">3rd Recon Battalion</Link></li>
              <li><Link to="/battalions/hq-service">HQ &amp; Service</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/battalions" element={<Battalions />} />
        <Route path="/battalions/1st-recon" element={<Battalion1stRecon />} />
        <Route path="/battalions/2nd-recon" element={<Battalion2ndRecon />} />
        <Route path="/battalions/3rd-recon" element={<Battalion3rdRecon />} />
        <Route path="/battalions/hq-service" element={<BattalionHQService />} />
      </Routes>
    </Router>
  )
}

export default App
