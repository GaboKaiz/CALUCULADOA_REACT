import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Asegúrate de tener tu logo en src/assets/

function Navbar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="sidebar-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? '▶' : '◀'}
      </button>
      <div className="sidebar-brand">
        {!isCollapsed && (
          <img src={logo} alt="Calculadora Logo" className="sidebar-logo" />
        )}
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/calculator" className={location.pathname === '/calculator' || location.pathname === '/' ? 'active' : ''}>
            {!isCollapsed && 'Calculadora'}
          </Link>
        </li>
        <li>
          <Link to="/scientific" className={location.pathname === '/scientific' ? 'active' : ''}>
            {!isCollapsed && 'Calculadora Científica'}
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            {!isCollapsed && 'Nosotros'}
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            {!isCollapsed && 'Contacto'}
          </Link>
        </li>
        <li>
          <Link to="/integrantes" className={location.pathname === '/integrantes' ? 'active' : ''}>
            {!isCollapsed && 'Integrantes'}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;