// FahrenheitConverter.js
import React from 'react';

const FahrenheitConverter = ({ value, onChange, onConvert, unit }) => {
  return (
    <div>
      <label>
        Celsius:
        <input type="number" value={value} onChange={onChange} />
      </label>
      <button onClick={onConvert}>Convert to {unit}</button>
    </div>
  );
};

export default FahrenheitConverter;
