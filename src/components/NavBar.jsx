import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Game Play</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#categoria1">Pc</a></li>
        <li className="navbar-item"><a href="#categoria2">Xbox</a></li>
        <li className="navbar-item"><a href="#categoria3">PLayStation</a></li>
        <li className="navbar-item"><a href="#categoria3">Ranking</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
