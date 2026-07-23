import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ticket Booking App</h1>
        <div className="auth-buttons">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn logout-btn">Logout</button>
          ) : (
            <button onClick={handleLogin} className="btn login-btn">Login</button>
          )}
        </div>
      </header>
      <main className="App-main">
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

export default App;
