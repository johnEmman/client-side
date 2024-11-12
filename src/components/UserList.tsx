// src/components/UserList.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useSocket from "../hooks/useSocket";

const UserList: React.FC = () => {
  // Get active users from Redux store
  const users = useSelector((state: RootState) => state.webrtc.users);

  // Call the custom hook to set up the socket listeners
  useSocket();

  return (
    <div className="p-4 space-y-2">
      <h2 className="font-semibold">Active Users</h2>
      {users.length > 0 ? (
        users.map((user: any) => (
          <div key={user.id} className="flex items-center space-x-2">
            <div
              className="w-2 h-2 rounded-full bg-green-500"
              aria-hidden="true"
            />
            <span>{user.name}</span>
          </div>
        ))
      ) : (
        <p>No active users.</p>
      )}
    </div>
  );
};

export default UserList;
