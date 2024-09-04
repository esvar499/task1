import React from 'react';
import './Header.css';
import logo from './Logo.jpg'; // Adjust the path if needed

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="logo-text">Sai Esvar P</span>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
