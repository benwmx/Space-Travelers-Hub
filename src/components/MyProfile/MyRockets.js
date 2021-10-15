import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservedRockets } from '../../redux/rockets/rockets';

const MyRockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservedRockets());
  }, []);

  const mRockets = useSelector((state) => state.rockets);

  return (
    <div className="myMissionsContainer">
      <ul>
        {
          mRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MyRockets;
