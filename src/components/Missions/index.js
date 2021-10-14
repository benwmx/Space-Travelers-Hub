/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Mission from './Mission';
import { getListOfMissions } from '../../redux/missions/missions';
import Styles from './mission.module.scss';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(getListOfMissions());
  }, []);
  return (
    <table className={Styles.missionsTable}>
      <thead className={Styles.headTable}>
        <tr>
          <td>Mission</td>
          <td>Description</td>
          <td>Status</td>
          <td>Join</td>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => (<Mission key={mission.id} missionInfo={mission} />))
        }
      </tbody>
    </table>
  );
};

export default Missions;
