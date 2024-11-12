// src/components/UserList.tsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { connectSocket, disconnectSocket } from "../services/socketService";

const UserList: React.FC = () => {
  const { users } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    connectSocket();
    return () => {
      disconnectSocket();
    };
  }, []);
  // const users = useSelector((state: RootState) => state.connection.users);
  const startCall = (targetId: string) => {
    // Implement the start call logic with peer connection setup...
  };

  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="w-full max-w-xs mx-auto bg-white text-sm">
      <div className="p-2">
        <h2 className="text-base font-semibold text-center text-gray-900 mb-2"></h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-2 py-1 text-xs placeholder-gray-400 text-gray-900 border border-gray-200 focus:outline-none focus:border-gray-400"
        />
      </div>
      <div>
        <div className="max-h-[150px] overflow-y-auto">
          {filteredUsers.length > 0 ? (
            <ul className="px-2">
              {filteredUsers.map((user) => (
                <li key={user} className="px-2 py-1 hover:bg-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                        {user.charAt(0).toUpperCase()}
                      </span>
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        {user}
                      </span>
                    </div>
                    <button
                      onClick={() => startCall(user)}
                      className="text-gray-600 hover:text-gray-900 focus:outline-none"
                      aria-label={`Call ${user}`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center py-2 text-xs text-gray-400">
              No users found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
