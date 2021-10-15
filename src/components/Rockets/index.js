/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './rocket';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(await getRockets());
  }, []);

  const mRockets = useSelector((state) => state.rockets);

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
            reserve={rocket.reserved}
          />
        ))
      }
    </div>
  );
};

export default Rockets;
