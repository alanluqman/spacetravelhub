/* eslint-disable arrow-body-style */
import { Link, NavLink } from 'react-router-dom';
import './navigation.css';
import logo from './logo.png';

export default function Navigation() {
  const activeStyle = ({ isActive }) => {
    return ({
      textDecoration: isActive ? 'underline' : 'none',
    });
  };
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
          <NavLink className="nav-links" style={activeStyle} to="/">Rockets</NavLink>
          <NavLink className="nav-links" style={activeStyle} to="/missions">Missions</NavLink>
          <NavLink className="nav-links my-profile" style={activeStyle} to="/myprofile">My Profile</NavLink>
        </div>
      </div>
    </div>
  );
}
