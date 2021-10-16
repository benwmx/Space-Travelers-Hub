/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from 'react-spinners/HashLoader';
import Rocket from './Rocket';
import { getRockets } from '../../redux/rockets/rockets';
import Styles from './rocket.module.scss';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 1) {
      setLoading(true);
      dispatch(getRockets());
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);

  return (
    <div className={(loading) ? Styles.loadingRockets : Styles.rocketsContainer}>
      {
        (loading)
          ? <HashLoader color="#f32c03" loading={loading} size={150} className={Styles.loading} />
          : rockets.map((rocket) => (
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
