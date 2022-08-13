import { UPDATE_STATS, TOGGLE_IS_START, TOGGLE_IS_FINISH, SET_START_TIME, UPDATE_RACE_TIME } from "./actionTypes";

export const updateStats = (payload) => ({
  type: UPDATE_STATS,
  payload,
});

export const toggleIsStart = (payload) => ({
  type: TOGGLE_IS_START,
  payload,
});

export const toggleIsFinish = (payload) => ({
  type: TOGGLE_IS_FINISH,
  payload,
});

export const setStartTime = (payload) => ({
  type: SET_START_TIME,
  payload,
});

export const updateRaceTime = (payload) => ({
  type: UPDATE_RACE_TIME,
  payload,
});
