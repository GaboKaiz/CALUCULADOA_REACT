import { useState, useEffect } from 'react';
import '../components/NormalCalculator.css';

function NormalCalculator() {
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
      let result;
      if (input.includes('√')) {
        const num = parseFloat(input.replace('√', ''));
        result = Math.sqrt(num);
      } else if (input.includes('1/')) {
        const num = parseFloat(input.replace('1/', ''));
        result = 1 / num;
      } else {
        result = eval(input.replace('%', '/100'));
      }
      const now = new Date();
      const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setHistory((prev) => [...prev, { operation: `${input} = ${result}`, timestamp }]);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1) || '');
  };

  const handleToggleSign = () => {
    setInput((prev) => (prev ? String(-parseFloat(prev)) : ''));
  };

  const handleInverse = () => {
    setInput((prev) => (prev ? `1/${prev}` : ''));
  };

  const handleSquareRoot = () => {
    setInput((prev) => (prev ? `√${prev}` : ''));
  };

  return (
    <div className="normal-calculator-container">
      <div className="calculator-wrapper">
        <div className="normal-calculator">
          <h2 className="calculator-title">Calculadora</h2>
          <div className={`display ${animateDisplay ? 'animate-display' : ''}`}>
            {input || '0'}
          </div>
          <div className="buttons">
            {/* Fila 1 */}
            <button className="btn-clear" onClick={handleClear}>C</button>
            <button className="btn-operator" onClick={handleToggleSign}>±</button>
            <button className="btn-operator" onClick={() => handleClick('/')}>÷</button>
            <button className="btn-operator" onClick={handleBackspace}>⌫</button>
            <button className="btn-operator" onClick={handleInverse}>1/x</button>
            
            {/* Fila 2 */}
            <button className="btn-number" onClick={() => handleClick('7')}>7</button>
            <button className="btn-number" onClick={() => handleClick('8')}>8</button>
            <button className="btn-number" onClick={() => handleClick('9')}>9</button>
            <button className="btn-operator" onClick={() => handleClick('*')}>×</button>
            <button className="btn-operator" onClick={handleSquareRoot}>√</button>
            
            {/* Fila 3 */}
            <button className="btn-number" onClick={() => handleClick('4')}>4</button>
            <button className="btn-number" onClick={() => handleClick('5')}>5</button>
            <button className="btn-number" onClick={() => handleClick('6')}>6</button>
            <button className="btn-operator" onClick={() => handleClick('-')}>−</button>
            <button className="btn-empty"></button>
            
            {/* Fila 4 */}
            <button className="btn-number" onClick={() => handleClick('1')}>1</button>
            <button className="btn-number" onClick={() => handleClick('2')}>2</button>
            <button className="btn-number" onClick={() => handleClick('3')}>3</button>
            <button className="btn-operator" onClick={() => handleClick('+')}>+</button>
            <button className="btn-empty"></button>
            
            {/* Fila 5 */}
            <button className="btn-number" onClick={() => handleClick('0')}>0</button>
            <button className="btn-number" onClick={() => handleClick('.')}>.</button>
            <button className="btn-equals" onClick={handleCalculate}>=</button>
            <button className="btn-empty"></button>
            <button className="btn-empty"></button>
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

export default NormalCalculator;