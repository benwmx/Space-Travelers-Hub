const TOGGLE_MESSION_RESERVATION = 'TOGGLE_MESSION_RESERVATION';

const initialState = [];

const toggleMissionReservation = (payload) => ({
  type: TOGGLE_MESSION_RESERVATION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (state.type) {
    case TOGGLE_MESSION_RESERVATION: return state.map((mission) => {
      let newMission = mission;
      if (mission.id === action.payload) newMission = { ...mission, reserved: !mission.reserved };
      return newMission;
    });
    default: return state;
  }
};

export {
  toggleMissionReservation,
  missionsReducer as default,
};
