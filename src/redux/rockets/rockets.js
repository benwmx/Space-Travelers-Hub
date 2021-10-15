const initState = [];
const GET_ROCKETS = 'space/rockets/GET_ROCKETS';

const rocketsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
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
    rocketsBag.push(rocket[1]);
  });

  return {
    type: GET_ROCKETS,
    rockets: rocketsBag,
  };
};

export { getRockets };
export default rocketsReducer;
