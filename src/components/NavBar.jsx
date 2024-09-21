import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'; // Importa los estilos

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi Tienda</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#categoria1">Categoría 1</a></li>
        <li className="navbar-item"><a href="#categoria2">Categoría 2</a></li>
        <li className="navbar-item"><a href="#categoria3">Categoría 3</a></li>
      </ul>
      <CartWidget /> {/* Incluye el CartWidget aquí */}
    </nav>
  );
};

export default NavBar;
