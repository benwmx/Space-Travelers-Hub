/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './rocket';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const mRockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (mRockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div className="container">
      {
        mRockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.image}
            reserved={rocket.reserved}
          />
        ))
      }
    </div>
  );
};

export default Rockets;
