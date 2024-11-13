// src/components/RoomInfo.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Subtitle from "./Subtitle";
import RoomChatBox from "./RoomChatBox";
import { Outlet } from "react-router-dom";
// import { addMessage } from "../features/webrtcSlice";

const RoomInfo: React.FC = () => {
  return (
    <div className="rounded-lg border  p-4">
      <h2 className="text-xl font-semibold mb-4">Current Room: Team Sync</h2>
      <div>
        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-4xl text-gray-400" aria-hidden="true">
            📹
          </span>
          <span className="sr-only">Video placeholder</span>
        </div>
      </div>{" "}
      <div className="mt-4 flex space-x-4">
        <RoomChatBox />
        <Subtitle />
      </div>
    </div>
  );
};

export default RoomInfo;
