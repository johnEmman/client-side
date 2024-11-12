// src/features/usersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: string[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
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

export const { setUsers, addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
