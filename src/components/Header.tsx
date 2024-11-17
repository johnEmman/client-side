// src/components/Header.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { setRoomId } from "../features/roomSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Header: React.FC = () => {
  const [roomId, setRoomIdState] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCreateRoom = () => {
    // Generate a random room ID (you can customize this part)
    const generatedRoomId = Math.random().toString(36).substring(2, 8); // Generates a short random ID
    setRoomIdState(generatedRoomId); // Update the local state with the new room ID

    // Dispatch the room ID to Redux
    // dispatch(setRoomId(generatedRoomId));

    // // Emit the room creation event to the server
    // createRoom(generatedRoomId); // Make sure this is emitting correctly

    // Optional: Redirect to the newly created room page
    navigate(`/mockcall/room/${generatedRoomId}`); // Navigate to the room page
    console.log("Room Created with ID:", generatedRoomId);
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
