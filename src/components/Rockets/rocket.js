import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReservation } from '../../redux/rockets/rockets';

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
    <div className="grid gap-sm margin-bottom-sm bg-contrast-medium">
      <div className="col-3">
        <img alt="Rocket" src={image} />
      </div>
      <div className="col-9">
        <h3>{name}</h3>

        <p className="padding-y-sm">
          {
            (reserved)
              ? <span className="chip text-sm bg-success"><i className="chip__label">Chip</i></span>
              : <span />
          }
          {description}
        </p>

        {
          (reserved)
            ? <button id={id} className="btn btn--lg" type="button" onClick={cancelHandler}>Cancel Reservation</button>
            : <button id={id} className="btn btn--lg" type="button" onClick={reserveHandler}>Reserve Rocket</button>
        }
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};

export default Rocket;
