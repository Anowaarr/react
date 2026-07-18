import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyApp
        </Link>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">Products</Link>
          </li>
          <li className="nav-item-search">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <i className="fas fa-search search-icon"></i>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;