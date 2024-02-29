import { USER_INFO_KEY } from "@constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import LocalStorage from "@utils/LocalStorage";
import { IUser } from "../../types/userTypes";

export interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: LocalStorage.get(USER_INFO_KEY) || null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      LocalStorage.set(USER_INFO_KEY, action.payload.user);
    },

    logout: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      LocalStorage.remove(USER_INFO_KEY);
    },
  },
});

export const { logout, setCredentials } = userReducer.actions;
