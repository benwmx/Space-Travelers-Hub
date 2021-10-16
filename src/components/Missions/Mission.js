import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMissionJoin } from '../../redux/missions/missions';
import Styles from './mission.module.scss';

const Mission = (props) => {
  const { missionInfo } = props;
  const dispatch = useDispatch();

  const toggleJoin = () => {
    dispatch(toggleMissionJoin(missionInfo.id));
  };

  return (
    <tr className={(missionInfo.joined) ? Styles.joined : undefined}>
      <td><p className={Styles.missionName}>{missionInfo.name}</p></td>
      <td className={Styles.description}>{missionInfo.description}</td>
      <td>
        {
          (missionInfo.joined)
            ? <p className={Styles.activeMember}>Active Member</p>
            : <p className={Styles.notMember}>Not A Member</p>
        }
      </td>
      <td>
        {
          (missionInfo.joined)
            ? <button type="button" className={Styles.leaveMission} onClick={toggleJoin}> Leave Mission </button>
            : <button type="button" className={Styles.joinMission} onClick={toggleJoin}> Join Mission </button>
        }
      </td>
    </tr>
  );
};

Mission.propTypes = {
  missionInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
