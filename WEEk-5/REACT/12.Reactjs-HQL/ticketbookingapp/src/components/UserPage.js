import React, { useState } from 'react';
import './PageStyles.css';

const flights = [
  { id: 1, name: 'Sky Airline 101', destination: 'New York', price: '$200', time: '10:00 AM' },
  { id: 2, name: 'Oceanic 815', destination: 'Los Angeles', price: '$350', time: '02:00 PM' },
  { id: 3, name: 'EuroFly 303', destination: 'London', price: '$450', time: '06:30 PM' }
];

function UserPage() {
  const [bookedFlight, setBookedFlight] = useState(null);

  const handleBook = (flight) => {
    setBookedFlight(flight);
    // Auto clear the message after 3 seconds
    setTimeout(() => {
      setBookedFlight(null);
    }, 3000);
  };

  return (
    <div className="page-container">
      <h2>Book Your Tickets</h2>
      <p className="subtitle">Welcome Back! You can now book tickets.</p>
      
      {bookedFlight && (
        <div className="success-message">
          ✅ Successfully booked <strong>{bookedFlight.name}</strong> to <strong>{bookedFlight.destination}</strong>!
        </div>
      )}
      
      <div className="flight-list">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.name}</h3>
            <p><strong>Destination:</strong> {flight.destination}</p>
            <p><strong>Departure Time:</strong> {flight.time}</p>
            <p><strong>Price:</strong> {flight.price}</p>
            <button className="btn book-btn" onClick={() => handleBook(flight)}>Book Ticket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
