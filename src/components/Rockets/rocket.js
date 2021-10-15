// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, image,
}) => (
  <div className="grid" id={id}>
    <div className="col-3">
      <img alt="Rocket" src={image} />
    </div>
    <div className="col-9">
      <h3>{name}</h3>
      <p className="padding-y-sm">{description}</p>
      <button className="btn btn--lg" type="button">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Rocket.defaultProps = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Rocket;
