import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import UCBoulderLogo from '../assets/ucboulder-logo-circle-centered.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={UCBoulderLogo} alt="Logo" />
        </Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/join">Join</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={handleToggleMenu}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;

