// src/pages/MeetingRoom.tsx
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RoomInfo from "../components/RoomInfo";
import UserList from "../components/UserList";

const MeetingRoom: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          <RoomInfo />
        </main>
        <Sidebar />
      </div>
    </div>
  );
};

export default MeetingRoom;
