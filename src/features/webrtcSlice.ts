// src/features/webrtc/webrtcSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

interface WebRTCState {
  users: User[];
}

const initialState: WebRTCState = {
  users: [],
};

const webrtcSlice = createSlice({
  name: "webrtc",
  initialState,
  reducers: {
    // Add a user to the list, only if they're not already in the list
    addUser(state, action: PayloadAction<User>) {
      const userExists = state.users.some(
        (user) => user.id === action.payload.id
      );
      if (!userExists) {
        state.users.push(action.payload);
      }
    },
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const { addUser, removeUser, setUsers } = webrtcSlice.actions;

export default webrtcSlice.reducer;
