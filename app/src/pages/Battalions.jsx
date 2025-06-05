import { Link } from 'react-router-dom'
export default function Battalions() {
  return (
    <div>
      <h1>Division Battalions</h1>
      <p>Learn more about the battalions that make up the 1st Marine Division.</p>
<ul>
          <li><Link to="/battalions/1st-recon">1st Recon Battalion</Link></li>
          <li><Link to="/battalions/2nd-recon">2nd Recon Battalion</Link></li>
          <li><Link to="/battalions/3rd-recon">3rd Recon Battalion</Link></li>
          <li><Link to="/battalions/hq-service">HQ &amp; Service</Link></li>
        </ul>

    </div>
  );
}
