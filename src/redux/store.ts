// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import signalingReducer from "../features/signalingSlice";
import mediaReducer from "../features/mediaSlice";
import messagesReducer from "../features/messagesSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    users: usersReducer,
    signaling: signalingReducer,
    media: mediaReducer,
    messages: messagesReducer,
  },
});

// RootState is the type of the Redux store's state
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch is the type for dispatching actions in Redux
export type AppDispatch = typeof store.dispatch;
