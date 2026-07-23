import React from 'react';
import './PageStyles.css';

const flights = [
  { id: 1, name: 'Sky Airline 101', destination: 'New York', price: '$200', time: '10:00 AM' },
  { id: 2, name: 'Oceanic 815', destination: 'Los Angeles', price: '$350', time: '02:00 PM' },
  { id: 3, name: 'EuroFly 303', destination: 'London', price: '$450', time: '06:30 PM' }
];

function GuestPage() {
  return (
    <div className="page-container">
      <h2>Flight Details</h2>
      <p className="subtitle">Welcome Guest! Please log in to book your tickets.</p>
      <div className="flight-list">
        {flights.map(flight => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.name}</h3>
            <p><strong>Destination:</strong> {flight.destination}</p>
            <p><strong>Departure Time:</strong> {flight.time}</p>
            <p><strong>Price:</strong> {flight.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestPage;
