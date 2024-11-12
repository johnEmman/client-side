import React, { useState } from "react";

export default function RoomChatBox() {
  const [message, setMessage] = useState("");

  return (
    <div>
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
    </div>
  );
}
