// src/features/signalingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignalingState {
  caller: string | null;
  signalData: RTCSessionDescriptionInit | null;
  callAccepted: boolean;
  incomingCall: boolean;
}

const initialState: SignalingState = {
  caller: null,
  signalData: null,
  callAccepted: false,
  incomingCall: false,
};

const signalingSlice = createSlice({
  name: "signaling",
  initialState,
  reducers: {
    setIncomingCall: (
      state,
      action: PayloadAction<{ from: string; signal: RTCSessionDescriptionInit }>
    ) => {
      state.caller = action.payload.from;
      state.signalData = action.payload.signal;
      state.incomingCall = true;
    },
    acceptCall: (state) => {
      state.callAccepted = true;
      state.incomingCall = false;
    },
    rejectCall: (state) => {
      state.incomingCall = false;
    },
    setCallData: (state, action: PayloadAction<RTCSessionDescriptionInit>) => {
      state.signalData = action.payload;
    },
    resetSignalingState: (state) => {
      state.caller = null;
      state.signalData = null;
      state.callAccepted = false;
      state.incomingCall = false;
    },
  },
});

export const {
  setIncomingCall,
  acceptCall,
  rejectCall,
  setCallData,
  resetSignalingState,
} = signalingSlice.actions;

export default signalingSlice.reducer;
