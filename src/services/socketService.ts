import { io, Socket } from "socket.io-client";

const SOCKET_URL = "https://192.168.1.20:443"; // Replace with your backend URL
let socket: Socket;

export const connectSocket = () => {
  socket = io(SOCKET_URL, {
    autoConnect: false, // Prevent auto-connection
  });
};

export const connect = () => {
  if (socket) {
    socket.connect();
    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });
  } else {
    console.error("Socket is not initialized. Call `connectSocket` first.");
  }
};

export const disconnect = () => {
  if (socket) {
    socket.removeAllListeners(); // Remove all listeners before disconnecting
    socket.disconnect();
  } else {
    console.warn("Socket is not initialized or already disconnected.");
  }
};

export const onEvent = (event: string, callback: (data: any) => void) => {
  if (socket) {
    socket.off(event); // Remove any existing listener for this event
    socket.on(event, callback);
  } else {
    console.error("Socket is not initialized. Call `connectSocket` first.");
  }
};

export const emitEvent = (event: string, data: any) => {
  if (socket) {
    socket.emit(event, data);
  } else {
    console.error("Socket is not initialized. Call `connectSocket` first.");
  }
};
