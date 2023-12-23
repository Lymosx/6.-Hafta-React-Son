// CelsiusConverter.js
import React from 'react';

const CelsiusConverter = ({ value, onChange, onConvert, unit }) => {
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

export default CelsiusConverter;
