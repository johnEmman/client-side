// src/components/Sidebar.tsx
import React from "react";
import UserList from "./UserList";
import OngoingCalls from "./OngoingCalls";
const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 border-l overflow-hidden flex flex-col">
      <div className="p-4 border-b">
        <h3 className="font-semibold flex items-center">
          <span className="mr-2" aria-hidden="true">
            👥
          </span>
          <span>Users</span>
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        <UserList />
      </div>
      <div className="p-4 border-t">
        <h3 className="font-semibold mb-2 flex items-center">
          <span className="mr-2" aria-hidden="true">
            📞
          </span>
          <span>Ongoing Calls</span>
        </h3>
        <OngoingCalls />
      </div>
    </aside>
  );
};

export default Sidebar;
