import React from 'react';

const players = [
  { name: 'Sachin Tendulkar', score: 100 },
  { name: 'Virat Kohli', score: 85 },
  { name: 'MS Dhoni', score: 65 },
  { name: 'Rohit Sharma', score: 120 },
  { name: 'Yuvraj Singh', score: 55 },
  { name: 'Shikhar Dhawan', score: 45 },
  { name: 'KL Rahul', score: 80 },
  { name: 'Suresh Raina', score: 75 },
  { name: 'Hardik Pandya', score: 40 },
  { name: 'Ravindra Jadeja', score: 35 },
  { name: 'Rishabh Pant', score: 60 }
];

function ListofPlayers() {
  const below70 = players.filter(player => player.score < 70);

  return (
    <div style={{ margin: '20px' }}>
      <h1>List of All Players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h1>Players with Score below 70</h1>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
