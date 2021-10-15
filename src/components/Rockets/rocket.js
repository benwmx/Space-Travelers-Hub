/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReservation } from '../../redux/rockets/rockets';
import Styles from './rocket.module.scss';

const Rocket = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();

  const reserveHandler = () => {
    dispatch(reserveRocket(id));
  };

  const cancelHandler = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className={(reserved) ? Styles.reserved : Styles.rocket}>
      <div>
        <img className={Styles.image} alt="Rocket" src={image} />
      </div>
      <div className={Styles.info}>
        <h2>{name}</h2>

        <p className={Styles.description}>
          {
            (reserved)
              ? <span className={Styles.badge}>Reserved</span>
              : <span />
          }
          {description}
        </p>

        {
          (reserved)
            ? <button id={id} className={Styles.cancelReservation} type="button" onClick={cancelHandler}>Cancel Reservation</button>
            : <button id={id} className={Styles.reserveRocket} type="button" onClick={reserveHandler}>Reserve Rocket</button>
        }
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
