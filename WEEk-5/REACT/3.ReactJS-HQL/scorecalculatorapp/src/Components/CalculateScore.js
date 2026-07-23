import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.total / props.goal;
  return (
    <div className="student-card">
      <h2>Student Score Calculator</h2>
      <table border="1">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>School</td>
            <td>{props.school}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{props.total}</td>
          </tr>
          <tr>
            <td>Goal</td>
            <td>{props.goal}</td>
          </tr>
          <tr>
            <td>Average Score</td>
            <td>{average}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculateScore;
