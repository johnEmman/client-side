import React, { useEffect, useState } from "react";
import { connectSocket, disconnect, onEvent } from "../services/socketService"; // Import necessary functions

const UserList: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-xs mx-auto bg-white text-sm">
      <div className="p-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-2 py-1 text-xs placeholder-gray-400 text-gray-900 border border-gray-200 focus:outline-none focus:border-gray-400"
        />
      </div>
      <div className="max-h-[150px] overflow-y-auto">
        {filteredUsers.length > 0 ? (
          <ul className="px-2">
            {filteredUsers.map((user) => (
              <li key={user} className="px-2 py-1 hover:bg-gray-200">
                <div className="flex items-center">
                  <span className="h-6 w-6 rounded-full bg-gray-100 text-gray-600 text-xs font-medium flex items-center justify-center">
                    {user.charAt(0).toUpperCase()}
                  </span>
                  <span className="ml-2 text-xs font-medium text-gray-900">
                    {user}
                  </span>
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
  );
};

export default UserList;
