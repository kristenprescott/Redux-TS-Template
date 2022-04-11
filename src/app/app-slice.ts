import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppStateModel } from "models/AppStateModel";
import { UserModel } from "models/UserModel";

const initialState: AppStateModel = {
  showLoader: false,
  application: null,
  user: null,
  accessToken: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showLoader(state, action: PayloadAction<boolean>): void {
      state.showLoader = action.payload;
    },
    setUser(state, action: PayloadAction<UserModel>): void {
      state.user = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
});

export const {
  showLoader: setLoader,
  setUser,
  setAccessToken,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
