import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/ucboulder-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                  <img src={logo} alt="UCBoulder" className="logo-image"/>
                </Link>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

