import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NormalCalculator from './pages/NormalCalculator';
import ScientificCalculator from './pages/ScientificCalculator';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<NormalCalculator />} />
          <Route path="/scientific" element={<ScientificCalculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;