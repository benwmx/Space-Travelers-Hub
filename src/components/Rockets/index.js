import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './rocket';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(await getRockets());
  }, []);

  const rockets = useSelector((state) => state.rockets);

  const rocketsList = rockets.map((rocket) => <Rocket key={rocket.id} id="jj" name={rocket.rocket_name} description={rocket.description} image={rocket.flickr_images[0]} />);

  return (
    <div className="container">
      {rocketsList}
    </div>
  );
};

export default Rockets;
