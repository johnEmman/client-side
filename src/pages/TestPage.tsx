import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeSocket, closeSocket } from "../features/socketSlice";
import { RootState } from "../redux/store";

const TestPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isConnected } = useSelector((state: RootState) => state.socket);

  useEffect(() => {
    dispatch(initializeSocket());

    return () => {
      dispatch(closeSocket());
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Socket.IO Connection</h1>
      <p>Status: {isConnected ? "Connected" : "Disconnected"}</p>
    </div>
  );
};

export default TestPage;
