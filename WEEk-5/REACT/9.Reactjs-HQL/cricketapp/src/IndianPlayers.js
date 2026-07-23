import React from 'react';

const IndianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];
const T20players = ['Hardik', 'Bumrah', 'Suryakumar'];
const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Ashwin'];

function IndianPlayers() {
  const [first, second, third, fourth, fifth, sixth] = IndianTeam;
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={{ margin: '20px' }}>
      <h1>Indian Players (Destructuring)</h1>
      <p><b>Odd Team Players:</b> {first}, {third}, {fifth}</p>
      <p><b>Even Team Players:</b> {second}, {fourth}, {sixth}</p>
      
      <h1>Merged Players (T20 & Ranji)</h1>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
