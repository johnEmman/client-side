// src/components/RoomPage.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import { disconnectSocket, connectSocket } from "../services/socketService";
import {
  setRoomId,
  addUserToRoom,
  removeUserFromRoom,
  clearRoomState,
} from "../features/roomSlice";
import { RootState } from "../redux/store"; // Assuming you have RootState defined

const RoomPage: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const room = useSelector((state: RootState) => state.room);

  const [loading, setLoading] = useState<boolean>(true); // To handle loading state

  // Handle effect for joining/leaving room and socket event listeners
  useEffect(() => {
    if (!roomId) return;

    // Dispatch to set the room ID in Redux
    dispatch(setRoomId(roomId));

    // Join the room on the server

    // Listen for other users joining the room
    const socket = connectSocket(); // Ensure socket is connected before listening
    socket.on("user-joined-room", (userId: string) => {
      dispatch(addUserToRoom(userId));
    });

    // Listen for other users leaving the room
    socket.on("user-left-room", (userId: string) => {
      dispatch(removeUserFromRoom(userId));
    });

    // Set loading state to false after the room is set up
    setLoading(false);

    // Cleanup socket event listeners on component unmount
    return () => {
      socket.off("user-joined-room");
      socket.off("user-left-room");
      // Disconnect socket when leaving the room
      disconnectSocket();
    };
  }, [roomId, dispatch]);

  const handleLeaveRoom = () => {
    if (!roomId) return;

    // Leave the room on the server

    // Clear room state in Redux
    dispatch(clearRoomState());

    // Redirect to a different page (e.g., Home) after leaving the room
    navigate("/mockcall"); // Or any other route
  };

  // Render loading state while the socket is setting up
  if (loading) {
    return <div>Loading room...</div>;
  }

  return (
    <div>
      <h2>Room: {roomId}</h2>
      {room.creatorId && <p>Room created by: {room.creatorId}</p>}
      <p>Users in this room:</p>
      <ul>
        {room.users.length > 0 ? (
          room.users.map((userId: string) => <li key={userId}>{userId}</li>)
        ) : (
          <p>No users in the room</p>
        )}
      </ul>
      <button onClick={handleLeaveRoom}>Leave Room</button>
    </div>
  );
};

export default RoomPage;
