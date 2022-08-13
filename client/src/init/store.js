import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: { rootReducer },
  devTools: process.env.NODE_ENV === "development",
});
