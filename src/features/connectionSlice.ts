// src/redux/connectionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  status: "online" | "offline";
}

interface ConnectionState {
  isConnected: boolean;
  users: User[];
  signalingData: any;
}

const initialState: ConnectionState = {
  isConnected: false,
  users: [],
  signalingData: {},
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    connect(state) {
      state.isConnected = true;
    },
    disconnect(state) {
      state.isConnected = false;
      state.users = [];
    },
    addUser(state, action: PayloadAction<string>) {
      state.users.push({ id: action.payload, status: "online" });
    },
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setSignalingData(state, action: PayloadAction<any>) {
      state.signalingData = action.payload;
    },
  },
});

export const { connect, disconnect, addUser, removeUser, setSignalingData } =
  connectionSlice.actions;
export default connectionSlice.reducer;
