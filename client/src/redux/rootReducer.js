import { combineReducers } from "redux";
import { horseRaceReducer } from "./horseRace/reducers";

export const rootReducer = combineReducers({ horseRace: horseRaceReducer });
