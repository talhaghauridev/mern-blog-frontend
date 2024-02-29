import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    [userReducer.name]: userReducer.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof store.dispatch>;
