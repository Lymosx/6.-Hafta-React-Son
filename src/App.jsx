// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [temperature, setTemperature] = useState(0);
  const [result, setResult] = useState(0);
  const [targetUnit, setTargetUnit] = useState('Kelvin');

  const handleConvert = () => {
    if (targetUnit === 'Kelvin') {
      setResult(parseFloat(temperature) + 273.15);
    } else if (targetUnit === 'Fahrenheit') {
      setResult((temperature * 9/5) + 32);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Sıcaklık Dönüştürücü</h1>
      <label>
        Temperature:
        <input 
          type="number" 
          value={temperature} 
          onChange={(e) => setTemperature(e.target.value)} 
        />
      </label>
      <button onClick={handleConvert}>Convert to {targetUnit}</button>

      <div>
        <label>
          Target Unit:
          <select value={targetUnit} onChange={(e) => setTargetUnit(e.target.value)}>
            <option value="Kelvin">Kelvin</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </label>
      </div>

      <p>Result: {result}</p>
    </div>
  );
};

export default App;
