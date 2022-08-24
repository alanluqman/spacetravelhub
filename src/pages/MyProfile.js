import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Display.css';

export default function Display() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="container">
      <div className="display-section">
        <h1>My Missions</h1>
        <table>
          <tbody>
            <tr>
              <td>Mission 1</td>
            </tr>
            <tr>
              <td>Mission 2</td>
            </tr>
            <tr>
              <td>Mission 3</td>
            </tr>
            <tr>
              <td>Mission 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rocket-container">
        <h2>My Rockets</h2>
        <ul className="rocket-list">
          {reservedRockets.map((element) => <li key={element.id}>{element.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
