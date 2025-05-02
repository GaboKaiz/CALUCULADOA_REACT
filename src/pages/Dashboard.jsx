import { Link } from 'react-router-dom';
import '../components/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Bienvenido a tu Calculadora</h1>
      <div className="dashboard-cards">
        <Link to="/calculator" className="dashboard-card">
          <h2>Calculadora</h2>
          <p>Realiza operaciones básicas con nuestra calculadora simple.</p>
        </Link>
        <Link to="/scientific" className="dashboard-card">
          <h2>Calculadora Científica</h2>
          <p>Funciones avanzadas para cálculos científicos.</p>
        </Link>
        <Link to="/about" className="dashboard-card">
          <h2>Nosotros</h2>
          <p>Conoce más sobre nuestro equipo y misión.</p>
        </Link>
        <Link to="/contact" className="dashboard-card">
          <h2>Contacto</h2>
          <p>Contáctanos para cualquier consulta o sugerencia.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;