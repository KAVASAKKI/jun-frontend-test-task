import { UPDATE_STATS, TOGGLE_IS_START, TOGGLE_IS_FINISH, UPDATE_RACE_TIME, SET_START_TIME } from "./actionTypes";

const initialState = {
  isStart: false,
  isFinish: false,
  startTime: 0,
  raceTime: 0,
  stats: [],
};

export const horseRacingReducer = (state = initialState, action) => {
  if (!("type" in action)) {
    return state;
  }

  switch (action.type) {
    case UPDATE_STATS:
      return {
        ...state,
        stats: [...action.payload],
      };

    case TOGGLE_IS_START:
      return {
        ...state,
        isStart: action.payload,
      };

    case TOGGLE_IS_FINISH:
      return {
        ...state,
        isFinish: action.payload,
      };

    case SET_START_TIME:
      return {
        ...state,
        startTime: action.payload,
      };

    case UPDATE_RACE_TIME:
      return {
        ...state,
        raceTime: action.payload,
      };

    default:
      return state;
  }
};
