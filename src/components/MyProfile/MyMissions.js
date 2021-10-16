import React from 'react';
import { useSelector } from 'react-redux';
import Styles from './myProfile.module.scss';

const MyMissions = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  return (
    <div className={Styles.listContainer}>
      <h2 className="d">My Missions</h2>
      {
        (myMissions.length === 0)
          ? <p className={Styles.emptyList}>Empty 😢 </p>
          : (
            <ul className={Styles.list}>
              {
                myMissions.map((mission) => (
                  <li key={mission.id}>
                    {mission.name}
                  </li>
                ))
              }
            </ul>
          )
      }
    </div>
  );
};

export default MyMissions;
