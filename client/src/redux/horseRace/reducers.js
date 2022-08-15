import {
  UPDATE_STATS,
  TOGGLE_IS_START,
  TOGGLE_IS_FINISH,
  UPDATE_RACE_TIME,
  SET_START_TIME,
  SET_BET,
} from "./action-types";

const initialState = {
  isStart: false,
  isFinish: false,
  startTime: 0,
  raceTime: 0,
  bet: null,
  stats: [],
};

export const horseRaceReducer = (state = initialState, action) => {
  if (!("type" in action)) {
    return state;
  }

  switch (action.type) {
    case UPDATE_STATS:
      return {
        ...state,
        stats: action.payload,
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

    case SET_BET:
      return {
        ...state,
        bet: action.payload,
      };

    default:
      return state;
  }
};
