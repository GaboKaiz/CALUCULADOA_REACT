// jhan.jsx
import React from 'react';
import './NormalCalculator.css';

const NormalCalculator = () => {
  const buttons = [
    { label: 'C', className: 'btn-red' },
    { label: '%', className: 'btn-gray' },
    { label: '.', className: 'btn-gray' },
    { label: '÷', className: 'btn-orange' },
    { label: '7', className: 'btn-gray' },
    { label: '8', className: 'btn-gray' },
    { label: '9', className: 'btn-gray' },
    { label: '×', className: 'btn-orange' },
    { label: '4', className: 'btn-gray' },
    { label: '5', className: 'btn-gray' },
    { label: '6', className: 'btn-gray' },
    { label: '−', className: 'btn-orange' },
    { label: '1', className: 'btn-gray' },
    { label: '2', className: 'btn-gray' },
    { label: '3', className: 'btn-gray' },
    { label: '+', className: 'btn-orange' },
    { label: '00', className: 'btn-gray' },
    { label: '0', className: 'btn-gray' },
    { label: '−', className: 'btn-gray' },
    { label: '=', className: 'btn-green' },
  ];

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">459-78</div>
        <div className="buttons">
          {buttons.map((button, index) => (
            <button key={index} className={button.className}>
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NormalCalculator;