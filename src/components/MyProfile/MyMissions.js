import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  return (
    <div className="myMissionsContainer">
      <ul>
        {
          myMissions.map((mission) => (
            <li key={mission.id}>
              {mission.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MyMissions;
