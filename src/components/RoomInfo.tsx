// src/components/RoomInfo.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Subtitle from "./Subtitle";
import RoomChatBox from "./RoomChatBox";
import Media from "./Media";
// import { addMessage } from "../features/webrtcSlice";

const RoomInfo: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-lg border  p-4">
      <h2 className="text-xl font-semibold mb-4">Current Room: Team Sync</h2>
      <Media />
      <div className="mt-4 flex space-x-4">
        <RoomChatBox />
        <Subtitle />
      </div>
    </div>
  );
};

export default RoomInfo;
