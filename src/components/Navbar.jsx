import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Calculadora Normal</Link>
      <Link to="/scientific" className="nav-link">Calculadora Científica</Link>
    </nav>
  );
}

export default Navbar;