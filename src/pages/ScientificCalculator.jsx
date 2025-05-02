import { useState } from 'react';
import '../components/ScientificCalculator.css';

function ScientificCalculator() {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState(null);
  const [angleMode, setAngleMode] = useState('Deg');

  const handleInput = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => setDisplay('');
  const clearEntry = () => setDisplay(display.slice(0, -1));
  const toggleSign = () => setDisplay((prev) => (prev ? String(-parseFloat(prev)) : ''));

  const calculateResult = () => {
    try {
      setDisplay(String(eval(display.replace('×', '*').replace('÷', '/'))));
    } catch {
      setDisplay('Error');
    }
  };

  const handleMemory = (action) => {
    if (action === 'M+') setMemory(parseFloat(display));
    if (action === 'M-') setMemory(null);
    if (action === 'MR') setDisplay(memory ? String(memory) : '');
    if (action === 'MC') setMemory(null);
  };

  const handleAdvancedFunctions = (func) => {
    try {
      const value = parseFloat(display);
      let result;
      switch (func) {
        case 'x²': result = Math.pow(value, 2); break;
        case 'x³': result = Math.pow(value, 3); break;
        case '√': result = Math.sqrt(value); break;
        case 'log': result = Math.log10(value); break;
        case 'ln': result = Math.log(value); break;
        case 'sin': result = Math.sin(angleMode === 'Deg' ? (value * Math.PI) / 180 : value); break;
        case 'cos': result = Math.cos(angleMode === 'Deg' ? (value * Math.PI) / 180 : value); break;
        case 'tan': result = Math.tan(angleMode === 'Deg' ? (value * Math.PI) / 180 : value); break;
        default: result = 'Error';
      }
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  };

  const toggleAngleMode = () => {
    setAngleMode((prev) => (prev === 'Deg' ? 'Rad' : 'Deg'));
  };

  return (
    <div className="scientific-calculator-container">
      <div className="scientific-calculator">
        <h2 className="calculator-title">Calculadora Científica</h2>
        <div className="display">{display || '0'}</div>
        <div className="buttons">
          {/* Funciones avanzadas */}
          <button className="btn-function" onClick={() => handleAdvancedFunctions('sin')}>sin</button>
          <button className="btn-function" onClick={() => handleAdvancedFunctions('cos')}>cos</button>
          <button className="btn-function" onClick={() => handleAdvancedFunctions('tan')}>tan</button>
          <button className="btn-function" onClick={() => handleAdvancedFunctions('log')}>log</button>
          <button className="btn-function" onClick={() => handleAdvancedFunctions('ln')}>ln</button>
          
          <button className="btn-function" onClick={() => handleAdvancedFunctions('x²')}>x²</button>
          <button className="btn-function" onClick={() => handleAdvancedFunctions('x³')}>x³</button>
          <button className="btn-function" onClick={() => handleAdvancedFunctions('√')}>√</button>
          <button className="btn-memory" onClick={() => handleMemory('M+')}>M+</button>
          <button className="btn-memory" onClick={() => handleMemory('MR')}>MR</button>
          
          <button className="btn-clear" onClick={clearDisplay}>C</button>
          <button className="btn-clear" onClick={clearEntry}>CE</button>
          <button className="btn-number" onClick={() => handleInput('7')}>7</button>
          <button className="btn-number" onClick={() => handleInput('8')}>8</button>
          <button className="btn-number" onClick={() => handleInput('9')}>9</button>
          
          <button className="btn-operator" onClick={() => handleInput('÷')}>÷</button>
          <button className="btn-number" onClick={() => handleInput('4')}>4</button>
          <button className="btn-number" onClick={() => handleInput('5')}>5</button>
          <button className="btn-number" onClick={() => handleInput('6')}>6</button>
          <button className="btn-operator" onClick={() => handleInput('×')}>×</button>
          
          <button className="btn-operator" onClick={() => handleInput('-')}>−</button>
          <button className="btn-number" onClick={() => handleInput('1')}>1</button>
          <button className="btn-number" onClick={() => handleInput('2')}>2</button>
          <button className="btn-number" onClick={() => handleInput('3')}>3</button>
          <button className="btn-operator" onClick={() => handleInput('+')}>+</button>
          
          <button className="btn-number btn-zero" onClick={() => handleInput('0')}>0</button>
          <button className="btn-number" onClick={() => handleInput('.')}>.</button>
          <button className="btn-number" onClick={toggleSign}>±</button>
          <button className="btn-equals" onClick={calculateResult}>=</button>
          <button className="btn-memory" onClick={() => handleMemory('MC')}>MC</button>
          
          <button className="btn-angle" onClick={toggleAngleMode}>{angleMode}</button>
          <button className="btn-operator" onClick={() => handleInput('%')}>%</button>
        </div>
      </div>
    </div>
  );
}

export default ScientificCalculator;