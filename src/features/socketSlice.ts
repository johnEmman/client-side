import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../redux/store"; // Import AppDispatch type
import { connectSocket, connect, disconnect } from "../services/socketService";

interface SocketState {
  isConnected: boolean;
}

const initialState: SocketState = {
  isConnected: false,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export const { setConnected } = socketSlice.actions;

// Create thunk for initializing socket
export const initializeSocket = () => (dispatch: AppDispatch) => {
  connectSocket();
  connect();
  dispatch(setConnected(true));
};

// Create thunk for closing socket
export const closeSocket = () => (dispatch: AppDispatch) => {
  disconnect();
  dispatch(setConnected(false));
};

export default socketSlice.reducer;
