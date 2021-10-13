const TOGGLE_MESSION_RESERVATION = 'TOGGLE_MESSION_RESERVATION';
const ADD_LIST_OF_MISSIONS_TO_STORE = 'ADD_LIST_OF_MISSIONS_TO_STORE';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const toggleMissionReservation = (payload) => ({
  type: TOGGLE_MESSION_RESERVATION,
  payload,
});

const addListOfMissionsToStore = (payload) => ({
  type: ADD_LIST_OF_MISSIONS_TO_STORE,
  payload,
});

const filterMissionsData = (data) => data.map((mission) => ({
  id: mission.mission_id,
  name: mission.mission_name,
  description: mission.description,
}));

// redux thunks middlewares for adding/getting/removing books from the API.
const getListOfMissions = () => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const missions = filterMissionsData(data);
      dispatch(addListOfMissionsToStore(missions));
    });
};
//
const missionsReducer = (state = initialState, action) => {
  switch (state.type) {
    case TOGGLE_MESSION_RESERVATION: return state.map((mission) => {
      if (mission.id !== action.payload) return mission;
      return { ...mission, reserved: !mission.reserved };
    });
    case ADD_LIST_OF_MISSIONS_TO_STORE: return action.payload;
    default: return state;
  }
};

export {
  toggleMissionReservation,
  getListOfMissions,
  missionsReducer as default,
};
