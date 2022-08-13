import { combineReducers } from "redux";
import { horseRacingReducer } from "../components/HorseRacingStats/redux/reducers";

export const rootReducer = combineReducers({ horseRacingReducer });
