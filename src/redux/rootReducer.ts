import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "app/app-slice";
import { appApi } from "./services/useAppService";

const reducers = {
  app: appReducer,
  [appApi.reducerPath]: appApi.reducer,
};

const rootReducer = combineReducers(reducers);

export type ReduxState = ReturnType<typeof rootReducer>;

export default rootReducer;
