/* eslint-disable no-case-declarations */
const initState = [];
const GET_ROCKETS = 'space/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'space/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space/rockets/CANCEL_RESERVATION';
const GET_RESERVED_ROCKETS = 'space/rockets/GET_RESERVED_ROCKETS';

const rocketsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
    case RESERVE_ROCKET:
      const newSt = state.map((rocket) => {
        console.log(rocket);
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newSt;
    case CANCEL_RESERVATION:
      const afetrCancelState = state.map((rocket) => {
        console.log(rocket);
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return afetrCancelState;
    case GET_RESERVED_ROCKETS:
      return state.filter((rocket) => rocket.reserved);
    default: return state;
  }
};

const getRockets = async () => {
  const rocketsBag = [];
  const rockets = await fetch(
    'https://api.spacexdata.com/v3/rockets',
    {
      method: 'GET',
    },
  );

  const result = await rockets.json();

  Object.entries(result).forEach((rocket) => {
    const foo = rocket[1];
    rocketsBag.push({
      id: foo.id,
      name: foo.rocket_name,
      description: foo.description,
      image: foo.flickr_images[0],
      reserved: false,
    });
  });

  return {
    type: GET_ROCKETS,
    rockets: rocketsBag,
  };
};

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const fooBar = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

const getReservedRockets = () => ({
  type: GET_RESERVED_ROCKETS,
});

export {
  getRockets, reserveRocket, fooBar, getReservedRockets,
};

export default rocketsReducer;
