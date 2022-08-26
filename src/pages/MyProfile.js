import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Display.css';

export default function Display() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.mission);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className="container">
      <div className="display-section">
        <h1>My Missions</h1>
        <ul>
          {reservedMissions.map((element) => <li key={element.id}>{element.mission_name}</li>)}
        </ul>
      </div>
      <div className="display-section">
        <h1>My Rockets</h1>
        <ul>
          {reservedRockets.map((element) => <li key={element.id}>{element.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
