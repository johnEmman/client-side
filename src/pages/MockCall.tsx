// src/pages/MeetingRoom.tsx
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RoomInfo from "../components/RoomInfo";
import UserList from "../components/UserList";
import { Outlet } from "react-router-dom";

const MeetingRoom: React.FC = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="mx-[15rem]  border-2 rounded-lg border-gray-100">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
