import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import UCBoulderLogo from '/ucboulder-logo-circle-centered.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemCLick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={UCBoulderLogo} alt="Logo" />
        </Link>
      </div>
      <ul className={isMenuOpen ? "nav-links-mobile" : "nav-links"}>
        <li><Link to="/events" onClick={handleMenuItemCLick}>Events</Link></li>
        <li><Link to="/team" onClick={handleMenuItemCLick}>Team</Link></li>
        <li><Link to="/join" onClick={handleMenuItemCLick}>Join</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={handleToggleMenu}>
        {isMenuOpen ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;

