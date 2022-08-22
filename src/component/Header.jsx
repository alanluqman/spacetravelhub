import { Link } from 'react-router-dom';
import './navigation.css';
import logo from './logo.png';

export default function Navigation() {
  return (
    <div className="navigation-holder">
      <div className="nav-container">
        <Link className="nav-links" to="/">
          <div className="logo-holder">
            <img src={logo} alt="logo" className="logo" />
            <h1>Space Travelers Hub</h1>
          </div>
        </Link>
        <div>
          <Link className="nav-links" to="/">Rockets</Link>
          <Link className="nav-links" to="/missions">Missions</Link>
          <Link className="nav-links my-profile" to="/myprofile">My Profile</Link>
        </div>
      </div>
    </div>
  );
}
