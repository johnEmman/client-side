// // src/components/OngoingCalls.tsx
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { addRoom, removeRoom } from "../features/webrtcSlice";
// import { io } from "socket.io-client";

// Example socket client connection (make sure your backend URL is correct)
// const socket = io("https://your-server-url"); // Replace with your server URL

const OngoingCalls: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const rooms = useSelector((state: RootState) => state.webrtc.rooms); // Get rooms from Redux state

  //   useEffect(() => {
  //     // Listen for room creation event from the backend
  //     socket.on("room-created", (roomId: string) => {
  //       dispatch(addRoom(roomId)); // Add room to Redux when created
  //     });

  //     // Listen for room removal event from the backend
  //     socket.on("room-removed", (roomId: string) => {
  //       dispatch(removeRoom(roomId)); // Remove room from Redux when removed
  //     });

  //     return () => {
  //       socket.off("room-created");
  //       socket.off("room-removed");
  //     };
  //   }, [dispatch]);

  return (
    <div>
      <h2>Ongoing Rooms:</h2>
      <ul>
        {/* {rooms.length > 0 ? (
          rooms.map((room : any) => (
            <li key={room.roomId}>
              <h3>Room: {room.roomId}</h3>
              <ul>
                {room.users.map((user : any, index : any)  => (
                  <li key={index}>{user}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No rooms available.</p>
        )} */}
      </ul>
    </div>
  );
};

export default OngoingCalls;
