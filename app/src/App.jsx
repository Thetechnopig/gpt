import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Servers from './pages/Servers.jsx'
import Events from './pages/Events.jsx'
import Rules from './pages/Rules.jsx'
import Battalions from './pages/Battalions.jsx'

function App() {
  return (
    <Router>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/servers">Servers</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/rules">Rules</Link></li>
          <li><Link to="/battalions">Battalions</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/battalions" element={<Battalions />} />
      </Routes>
    </Router>
  )
}

export default App
