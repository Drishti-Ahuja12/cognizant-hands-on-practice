import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState(0);
  const [euros, setEuros] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming 1 Euro = 90 Rupees for this example
    setEuros(rupees / 90);
  };

  return (
    <div style={{ border: '1px solid black', padding: '15px', marginTop: '20px' }}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees: 
          <input 
            type="number" 
            value={rupees} 
            onChange={(e) => setRupees(e.target.value)} 
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euros > 0 && <h3>Equivalent Euros: €{euros.toFixed(2)}</h3>}
    </div>
  );
}

export default CurrencyConvertor;
