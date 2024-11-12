// src/components/Header.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { setRoomId } from "../features/webrtcSlice";

const Header: React.FC = () => {
  const [newRoomId, setNewRoomId] = useState("");
  const dispatch = useDispatch();

  const handleCreateRoom = () => {
    // if (newRoomId.trim()) {
    //   dispatch(setRoomId(newRoomId)); // Set the roomId in Redux
    // }
  };

  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <h1 className="text-2xl font-bold">Meeting Rooms</h1>
      <div>
        <button
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleCreateRoom}
        >
          <span className="mr-2" aria-hidden="true">
            +
          </span>
          <span>Create Room</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
