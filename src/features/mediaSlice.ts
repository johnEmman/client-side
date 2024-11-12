// src/features/mediaSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MediaState {
  localStream: MediaStream | null;
  peerConnection: RTCPeerConnection | null;
  remoteStream: MediaStream | null;
}

const initialState: MediaState = {
  localStream: null,
  peerConnection: null,
  remoteStream: null,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setLocalStream: (state, action: PayloadAction<MediaStream | null>) => {
      state.localStream = action.payload;
    },
    setRemoteStream: (state, action: PayloadAction<MediaStream | null>) => {
      state.remoteStream = action.payload;
    },
    setPeerConnection: (
      state,
      action: PayloadAction<RTCPeerConnection | null>
    ) => {
      state.peerConnection = action.payload;
    },
    resetMediaState: (state) => {
      state.localStream = null;
      state.remoteStream = null;
      state.peerConnection = null;
    },
  },
});

export const {
  setLocalStream,
  setRemoteStream,
  setPeerConnection,
  resetMediaState,
} = mediaSlice.actions;

export default mediaSlice.reducer;
