import React from "react";
import RoomPage from "./RoomPage";
import { Outlet } from "react-router-dom";

export default function Media() {
  return (
    <div>
      <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
        <span className="text-4xl text-gray-400" aria-hidden="true">
          📹
          <Outlet />
        </span>
        <span className="sr-only">Video placeholder</span>
      </div>
    </div>
  );
}
