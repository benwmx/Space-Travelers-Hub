/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { getListOfMissions } from '../../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfMissions());
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td>Mission</td>
          <td>Description</td>
          <td>Status</td>
          <td>Are you Joined</td>
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
