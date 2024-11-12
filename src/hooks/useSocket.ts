// src/hooks/useSocket.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { addUser, removeUser } from "../features/webrtcSlice";

const useSocket = () => {
  const dispatch = useDispatch();
  const socket = io("https://192.168.212.126:443"); // Replace with your server URL

  useEffect(() => {
    console.log(1);
    // Listen for "user-joined" event
    socket.on("user-joined", (user: { id: string; name: string }) => {
      dispatch(addUser(user)); // Add user to Redux when they join
    });

    // Listen for "user-left" event
    socket.on("user-left", (userId: string) => {
      dispatch(removeUser(userId)); // Remove user from Redux when they leave
    });

    // Cleanup on unmount to prevent memory leaks
    return () => {
      socket.off("user-joined");
      socket.off("user-left");
    };
  }, [dispatch, socket]);

  return socket;
};

export default useSocket;
