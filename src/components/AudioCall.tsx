// src/components/AudioCall.tsx
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  setLocalStream,
  setRemoteStream,
  setPeerConnection,
} from "../features/mediaSlice";
import {
  setIncomingCall,
  acceptCall,
  rejectCall,
} from "../features/signalingSlice";
import {
  connectSocket,
  disconnectSocket,
  sendOffer,
  sendICECandidate,
  sendAnswer,
} from "../services/socketService";

const AudioCall = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.users);
  const { callAccepted, incomingCall, signalData, caller } = useSelector(
    (state: RootState) => state.signaling
  );
  useSelector((state: RootState) => state.media);

  const userVideo = useRef<HTMLVideoElement>(null);
  const partnerVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    connectSocket();
    return () => {
      disconnectSocket();
    };
  }, []);

  const answerCall = () => {
    // Implement answer call logic...
  };

  return (
    <div>
      <h2>WebRTC Video Call</h2>
      <div>
        <video ref={userVideo} autoPlay muted />
        <video ref={partnerVideo} autoPlay />
      </div>
      <div>
        {incomingCall && (
          <div>
            <h3>Incoming call from {caller}</h3>
            <button onClick={answerCall}>Answer</button>
            <button onClick={() => dispatch(rejectCall())}>Reject</button>
          </div>
        )}
        {!callAccepted && <div></div>}
      </div>
    </div>
  );
};

export default AudioCall;
