// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import roomReducer from "../features/roomSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    users: usersReducer,
    room: roomReducer,
  },
});

// RootState is the type of the Redux store's state
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch is the type for dispatching actions in Redux
export type AppDispatch = typeof store.dispatch;
