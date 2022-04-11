import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import rootReducer, { ReduxState } from "./rootReducer";
import { rtkQueryErrorLogger } from "./apiResponseMiddleware";
import { appApi } from "./services/useAppService";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultModdleware) =>
    getDefaultMiddleware()
      .concat(rtkQueryErrorLogger)
      .concat(appApi.middleware),
});

// if (process.env.NODE_ENV === "development" && module.hot) {
//   module.hot.accept("./rootReducer", () => {
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const newRootReducer = require("./rootReducer").default;

//     store.replaceReducer(newRootReducer);
//   });
// }

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<ReduxState, void, AnyAction>;

export default store;

/**
 
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

 */
