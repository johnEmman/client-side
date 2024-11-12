// src/features/socketService.ts
import { io, Socket } from "socket.io-client";
import { setUsers, addUser, removeUser } from "../features/usersSlice";
import {
  setIncomingCall,
  acceptCall,
  rejectCall,
  setCallData,
  resetSignalingState,
} from "../features/signalingSlice";
import {
  setLocalStream,
  setRemoteStream,
  setPeerConnection,
  resetMediaState,
} from "../features/mediaSlice";
import { store } from "../redux/store";

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

  socket.on(
    "callIncoming",
    (data: { from: string; signal: RTCSessionDescriptionInit }) => {
      store.dispatch(setIncomingCall(data));
    }
  );

  socket.on("callAccepted", (signal: RTCSessionDescriptionInit) => {
    store.dispatch(setCallData(signal));
    store.dispatch(acceptCall());
  });

  socket.on("newICECandidate", (candidate: RTCIceCandidateInit) => {
    const peerConnection = store.getState().media.peerConnection;
    if (peerConnection) {
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    }
  });

  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    store.dispatch(resetSignalingState());
    store.dispatch(resetMediaState());
  }
};

export const sendOffer = (
  offer: RTCSessionDescriptionInit,
  targetId: string
) => {
  socket.emit("callUser", targetId, offer);
};

export const sendAnswer = (
  answer: RTCSessionDescriptionInit,
  targetId: string
) => {
  socket.emit("answerCall", targetId, answer);
};

export const sendICECandidate = (
  candidate: RTCIceCandidateInit,
  targetId: string
) => {
  socket.emit("sendCandidate", targetId, candidate);
};
//