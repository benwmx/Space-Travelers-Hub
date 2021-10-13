import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { missionInfo } = props;
  return (
    <tr>
      <td>{missionInfo.name}</td>
      <td>{missionInfo.description}</td>
      <td>Active</td>
      <td>Joined</td>
    </tr>
  );
};

Mission.propTypes = {
  missionInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
