// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import webrtcReducer from "../features/webrtcSlice";

export const store = configureStore({
  reducer: {
    webrtc: webrtcReducer, // Add webrtcReducer to the store
  },
});

// Export types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
