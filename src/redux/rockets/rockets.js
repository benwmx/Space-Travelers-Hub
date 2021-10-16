/* eslint-disable no-case-declarations */
const ADD_ROCKETS_TO_STORE = 'space/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'space/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space/rockets/CANCEL_RESERVATION';
const GET_RESERVED_ROCKETS = 'space/rockets/GET_RESERVED_ROCKETS';

const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [{
  id: '',
  name: '',
  description: '',
  image: '',
  reserved: false,
}];

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

const getReservedRockets = () => ({
  type: GET_RESERVED_ROCKETS,
});

const addRocketsToStore = (payload) => ({
  type: ADD_ROCKETS_TO_STORE,
  payload,
});

const filterRocketsData = (data) => data.map((rocket) => ({
  id: rocket.rocket_id,
  name: rocket.rocket_name,
  description: rocket.description,
  image: rocket.flickr_images[0],
  reserved: false,
}));

const getRockets = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const rockets = filterRocketsData(data);
  dispatch(addRocketsToStore(rockets));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKETS_TO_STORE:
      return action.payload;
    case RESERVE_ROCKET:
      const newSt = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newSt;
    case CANCEL_RESERVATION:
      const afetrCancelState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return afetrCancelState;
    case GET_RESERVED_ROCKETS:
      return state.filter((rocket) => rocket.reserved);
    default: return state;
  }
};

export {
  getRockets, reserveRocket, cancelReservation, getReservedRockets,
};

export default rocketsReducer;
