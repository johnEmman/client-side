import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  connect,
  connectSocket,
  disconnect,
  emitEvent,
} from "../services/socketService"; // import socket service

function Auth() {
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      connectSocket();
      connect();
      emitEvent("register", name);
      // Emit the 'set-username' event to the server
      // setUsername(name);
      // Redirect to /mockcall
      navigate("/mockcall");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white border border-gray-400 shadow-sm max-w-xs w-full text-sm">
          <div className="bg-gray-200 text-gray-800 p-1 flex justify-between items-center text-xs">
            <span className="font-semibold">Name Input</span>
            <div className="flex">
              <button className="w-3 h-3 bg-white border border-gray-400 flex items-center justify-center text-gray-600 text-xs mr-1">
                -
              </button>
              <button className="w-3 h-3 bg-white border border-gray-400 flex items-center justify-center text-gray-600 text-xs">
                x
              </button>
            </div>
          </div>
          <div className="p-2">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-xs font-semibold"
                >
                  Enter your name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-1 py-0.5 text-xs bg-white border border-gray-300 focus:outline-none focus:border-gray-400"
                />
              </div>
              <button
                type="submit"
                className="px-2 py-0.5 text-xs bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none active:bg-gray-300"
              >
                OK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
