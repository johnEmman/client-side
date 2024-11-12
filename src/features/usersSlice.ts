// src/features/usersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  [x: string]: any;
  users: string[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentUserId(state, action: PayloadAction<string>) {
      state.currentUserId = action.payload;
    },
    setUsers: (state, action: PayloadAction<string[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<string>) => {
      if (!state.users.includes(action.payload)) {
        state.users.push(action.payload);
      }
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user !== action.payload);
    },
  },
});

export const { setUsers, addUser, setCurrentUserId, removeUser } =
  usersSlice.actions;

export default usersSlice.reducer;
