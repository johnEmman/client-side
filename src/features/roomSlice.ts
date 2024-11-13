// src/features/roomSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoomState {
  roomId: string | null;
  creatorId: string | null;
  users: string[]; // List of users currently in the room
}

const initialState: RoomState = {
  roomId: null,
  creatorId: null,
  users: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    // Set the room ID when the room is created or joined
    setRoomId(state, action: PayloadAction<string>) {
      state.roomId = action.payload;
    },

    // Set the creator ID of the room (who created the room)
    setCreatorId(state, action: PayloadAction<string>) {
      state.creatorId = action.payload;
    },

    // Add a user to the room (when they join)
    addUserToRoom(state, action: PayloadAction<string>) {
      // Avoid adding the same user twice
      if (!state.users.includes(action.payload)) {
        state.users.push(action.payload);
      }
    },

    // Remove a user from the room (when they leave or disconnect)
    removeUserFromRoom(state, action: PayloadAction<string>) {
      state.users = state.users.filter((userId) => userId !== action.payload);
    },

    // Clear the room state (e.g., when a user leaves the room)
    clearRoomState(state) {
      state.roomId = null;
      state.creatorId = null;
      state.users = [];
    },
  },
});

// Export actions so they can be dispatched
export const {
  setRoomId,
  setCreatorId,
  addUserToRoom,
  removeUserFromRoom,
  clearRoomState,
} = roomSlice.actions;

// Export the reducer to be included in the Redux store
export default roomSlice.reducer;
