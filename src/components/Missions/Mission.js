import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMissionJoin } from '../../redux/missions/missions';

const Mission = (props) => {
  const { missionInfo } = props;
  const dispatch = useDispatch();

  const toggleJoin = () => {
    dispatch(toggleMissionJoin(missionInfo.id));
  };

  return (
    <tr>
      <td>{missionInfo.name}</td>
      <td>{missionInfo.description}</td>
      <td>
        {
          (missionInfo.joined) ? <p className="activeMember">Active Member</p> : <p className="notMemeber">Not A Member</p>
        }
      </td>
      <td>
        {
          (missionInfo.joined)
            ? <button type="button" className="leaveMission" onClick={toggleJoin}> Leave Mission </button>
            : <button type="button" className="joinMission" onClick={toggleJoin}> Join Mission </button>
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
