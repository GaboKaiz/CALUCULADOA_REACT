import { useState, useEffect } from 'react';
import '../components/ScientificCalculator.css';

function ScientificCalculator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [animateDisplay, setAnimateDisplay] = useState(false);

  useEffect(() => {
    // Activa la animación del display cada vez que cambia el valor de input
    setAnimateDisplay(true);
  }, [input]);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      const now = new Date();
      const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setHistory((prev) => [...prev, { operation: `${input} = ${result}`, timestamp }]);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="scientific-calculator-container">
      <div className="calculator-wrapper">
        <div className="scientific-calculator">
          <h2 className="calculator-title">Calculadora Científica</h2>
          <div className={`display ${animateDisplay ? 'animate-display' : ''}`}>
            {input || '0'}
          </div>
          <div className="buttons">
            <button className="btn-clear" onClick={handleClear}>C</button>
            <button className="btn-function" onClick={() => handleClick('Math.sin(')}>sin</button>
            <button className="btn-function" onClick={() => handleClick('Math.cos(')}>cos</button>
            <button className="btn-function" onClick={() => handleClick('Math.tan(')}>tan</button>
            <button className="btn-memory" onClick={() => handleClick('M+')}>M+</button>

            <button className="btn-number" onClick={() => handleClick('7')}>7</button>
            <button className="btn-number" onClick={() => handleClick('8')}>8</button>
            <button className="btn-number" onClick={() => handleClick('9')}>9</button>
            <button className="btn-operator" onClick={() => handleClick('/')}>÷</button>
            <button className="btn-memory" onClick={() => handleClick('MR')}>MR</button>

            <button className="btn-number" onClick={() => handleClick('4')}>4</button>
            <button className="btn-number" onClick={() => handleClick('5')}>5</button>
            <button className="btn-number" onClick={() => handleClick('6')}>6</button>
            <button className="btn-operator" onClick={() => handleClick('*')}>×</button>
            <button className="btn-function" onClick={() => handleClick('Math.sqrt(')}>√</button>

            <button className="btn-number" onClick={() => handleClick('1')}>1</button>
            <button className="btn-number" onClick={() => handleClick('2')}>2</button>
            <button className="btn-number" onClick={() => handleClick('3')}>3</button>
            <button className="btn-operator" onClick={() => handleClick('-')}>−</button>
            <button className="btn-function" onClick={() => handleClick('Math.pow(')}>x²</button>

            <button className="btn-number btn-zero" onClick={() => handleClick('0')}>0</button>
            <button className="btn-number" onClick={() => handleClick('.')}>.</button>
            <button className="btn-equals" onClick={handleCalculate}>=</button>
            <button className="btn-operator" onClick={() => handleClick('+')}>+</button>
            <button className="btn-angle" onClick={() => handleClick('Math.PI')}>π</button>
          </div>
        </div>
        <div className="history-panel">
          <h3>Historial</h3>
          {history.length === 0 ? (
            <p>No hay operaciones en el historial.</p>
          ) : (
            <ul>
              {history.map((entry, index) => (
                <li key={index} className="history-item">
                  <span>{entry.operation}</span>
                  <span className="timestamp">{entry.timestamp}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScientificCalculator;