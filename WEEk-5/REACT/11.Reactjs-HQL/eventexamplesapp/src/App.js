import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // Method 1: Handle Increment
  const handleIncrement = () => {
    setCounter(counter + 1);
    sayHello();
  };

  // Method 1b: Say Hello
  const sayHello = () => {
    alert("Hello! The counter was increased.");
  };

  // Method 2: Say Welcome
  const sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  // Method 3: OnPress Event
  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Event Examples App</h1>
      
      {/* 1. Counter */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Counter: {counter}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => setCounter(counter - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
      </div>

      {/* 2. Say Welcome */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      </div>

      {/* 3. Synthetic Event onPress */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={onPress}>Synthetic Event OnPress</button>
      </div>

      <hr />

      {/* 4. Currency Convertor */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
