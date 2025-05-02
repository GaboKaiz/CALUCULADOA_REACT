import { useState } from 'react';
import '../components/NormalCalculator.css';

function NormalCalculator() {
    const [input, setInput] = useState(''); // Guarda la entrada del usuario
  
    // Maneja los clics en los botones numéricos y de operaciones
    const handleClick = (value) => {
      setInput((prev) => prev + value);
    };
  
    // Limpia la pantalla
    const handleClear = () => {
      setInput('');
    };
  
    // Realiza el cálculo
    const handleCalculate = () => {
      try {
        // Usamos eval para calcular el resultado (aunque no es lo más seguro, funciona para una demo)
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    };
  
    return (
      <div className="container">
        <div className="calculator">
          <div className="display">
            {input || '0'} {/* Muestra el input o '0' si está vacío */}
          </div>
          <div className="buttons">
            <button className="btn-gray" onClick={() => handleClear()}>C</button>
            <button className="btn-gray" onClick={() => handleClick('7')}>7</button>
            <button className="btn-gray" onClick={() => handleClick('8')}>8</button>
            <button className="btn-gray" onClick={() => handleClick('9')}>9</button>
            <button className="btn-orange" onClick={() => handleClick('/')}>/</button>
            
            <button className="btn-gray" onClick={() => handleClick('4')}>4</button>
            <button className="btn-gray" onClick={() => handleClick('5')}>5</button>
            <button className="btn-gray" onClick={() => handleClick('6')}>6</button>
            <button className="btn-orange" onClick={() => handleClick('*')}>*</button>
            
            <button className="btn-gray" onClick={() => handleClick('1')}>1</button>
            <button className="btn-gray" onClick={() => handleClick('2')}>2</button>
            <button className="btn-gray" onClick={() => handleClick('3')}>3</button>
            <button className="btn-orange" onClick={() => handleClick('-')}>-</button>
  
            <button className="btn-gray" onClick={() => handleClick('0')}>0</button>
            <button className="btn-gray" onClick={() => handleClick('.')}>.</button>
            <button className="btn-green" onClick={handleCalculate}>=</button>
            <button className="btn-orange" onClick={() => handleClick('+')}>+</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default NormalCalculator;