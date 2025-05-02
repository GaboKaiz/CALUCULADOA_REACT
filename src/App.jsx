import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NormalCalculator from './pages/NormalCalculator';
import ScientificCalculator from './pages/ScientificCalculator';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Integrantes from './pages/Integrantes'; // Nueva importación
import './components/GlobalStyles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<NormalCalculator />} />
            <Route path="/calculator" element={<NormalCalculator />} />
            <Route path="/scientific" element={<ScientificCalculator />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/integrantes" element={<Integrantes />} /> {/* Nueva ruta */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;