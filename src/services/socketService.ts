// src/features/socketService.ts
import { io, Socket } from "socket.io-client";
import { setUsers, addUser, removeUser } from "../features/usersSlice";
// import { resetMediaState } from "../features/mediaSlice";
import { store } from "../redux/store";
// import { resetSignalingState } from "../features/signalingSlice";

const SERVER_URL = "https://192.168.1.20:443"; // Replace with your backend URL
let socket: Socket;

export const connectSocket = () => {
  socket = io(SERVER_URL, {
    transports: ["websocket"],
    secure: true,
    rejectUnauthorized: false,
  });

  socket.on("connect", () => {
    console.log("Connected to signaling server:", socket.id);
  });

  socket.on("userList", (users: string[]) => {
    store.dispatch(setUsers(users));
  });

  socket.on("user-connected", (userId: string) => {
    store.dispatch(addUser(userId));
  });

  socket.on("user-disconnected", (userId: string) => {
    store.dispatch(removeUser(userId));
  });

  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    // store.dispatch(resetSignalingState());
  }
};
