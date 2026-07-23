import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setFlag(!flag)} style={{ padding: '10px', fontSize: '16px' }}>
        Toggle Flag (Current: {flag.toString()})
      </button>
      
      <hr />
      
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
