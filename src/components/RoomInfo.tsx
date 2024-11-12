// src/components/RoomInfo.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addMessage } from "../features/webrtcSlice";

const RoomInfo: React.FC = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    // if (message.trim()) {
    //   dispatch(addMessage(message)); // Dispatch action to add message
    //   setMessage("");
    // }
  };

  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-xl font-semibold mb-4">Current Room: Team Sync</h2>
      <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
        <span className="text-4xl text-gray-400" aria-hidden="true">
          📹
        </span>
        <span className="sr-only">Video placeholder</span>
      </div>
      <div className="mt-4 flex space-x-4">
        <div className="flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message..."
            className="w-full h-20 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Enter message"
          />
        </div>
        <div className="flex-1 p-3 bg-gray-100 rounded-md flex items-start h-20 overflow-y-auto">
          <span className="text-gray-500 mr-2 flex-shrink-0" aria-hidden="true">
            🗨️
          </span>
          <p className="text-sm text-gray-700">
            <span className="sr-only">Subtitles:</span>
            Subtitles will appear here during the meeting.
          </p>
        </div>
      </div>
      <button
        onClick={handleSendMessage}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Send Message
      </button>
    </div>
  );
};

export default RoomInfo;
