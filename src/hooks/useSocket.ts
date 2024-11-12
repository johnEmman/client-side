// src/hooks/useSocket.ts
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import {
  connect,
  disconnect,
  addUser,
  removeUser,
  setSignalingData,
} from "../features/connectionSlice";
import { setCurrentUserId } from "../features/usersSlice"; // Action to set current user ID
import { store } from "../redux/store";

const SERVER_URL = "https://192.168.1.20:443"; // Your WebSocket server URL
const socket: Socket = io(SERVER_URL, { secure: true });

export const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");

      // Check if socket.id exists, then dispatch to set current user ID
      const socketId = socket.id;
      if (socketId) {
        dispatch(setCurrentUserId(socketId)); // Store the current user ID in Redux
      }

      dispatch(connect());
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
      dispatch(disconnect());
    });

    socket.on("user-connected", (userId: string) => {
      console.log("User connected:", userId);
      dispatch(addUser(userId));
    });

    socket.on("user-disconnected", (userId: string) => {
      console.log("User disconnected:", userId);
      dispatch(removeUser(userId));
    });

    // Signaling events for WebRTC
    socket.on("offer", (data) => dispatch(setSignalingData(data)));
    socket.on("answer", (data) => dispatch(setSignalingData(data)));
    socket.on("ice-candidate", (data) => dispatch(setSignalingData(data)));

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("user-connected");
      socket.off("user-disconnected");
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
      socket.disconnect();
    };
  }, [dispatch]);

  return socket;
};
