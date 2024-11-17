// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import socketReducer from "../features/socketSlice";
// Create the Redux store
export const store = configureStore({
  reducer: {
    socket: socketReducer,
  },
});

// RootState is the type of the Redux store's state
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch is the type for dispatching actions in Redux
export type AppDispatch = typeof store.dispatch;
