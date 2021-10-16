import React, { useEffect, useState } from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import HashLoader from 'react-spinners/HashLoader';
import Mission from './Mission';
import { getListOfMissions } from '../../redux/missions/missions';
import Styles from './mission.module.scss';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 1) {
      setLoading(true);
      dispatch(getListOfMissions());
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
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
      <tbody className={(loading) ? Styles.loadingTable : undefined}>
        {
        (loading)
          ? <tr><td colSpan="4" className={Styles.loadingTd}><HashLoader color="#f32c03" loading={loading} size={150} className={Styles.loading} /></td></tr>
          : missions.map((mission) => (<Mission key={mission.id} missionInfo={mission} />))
        }
      </tbody>
    </table>
  );
};

export default Missions;
