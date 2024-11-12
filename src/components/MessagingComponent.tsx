import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { sendMessage } from "../services/socketService";
import { addMessage } from "../features/messagesSlice";

const MessagingComponent: React.FC = () => {
  const dispatch = useDispatch();

  const currentUserId = useSelector(
    (state: RootState) => state.users.currentUserId
  );
  const users = useSelector((state: RootState) => state.users.users);
  const messages = useSelector((state: RootState) => state.messages.messages);

  const [newMessage, setNewMessage] = useState<string>("");
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    console.log("Current User ID:", currentUserId); // Ensure it's set correctly
  }, [currentUserId]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedUserId) return;

    const messageData = {
      senderId: currentUserId!,
      message: newMessage,
    };

    // Dispatch the message to Redux store
    dispatch(addMessage(messageData));

    // Send the message via socket
    sendMessage(messageData, selectedUserId);

    // Clear the input field after sending the message
    setNewMessage("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h3>Messaging</h3>

      <div>
        <h4>Select User to Message:</h4>
        <div>
          {users.map((user) => (
            <button
              key={user}
              onClick={() => setSelectedUserId(user)}
              style={{
                margin: "5px",
                backgroundColor:
                  selectedUserId === user ? "#008CBA" : "lightgray",
              }}
            >
              {user}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Messages</h4>
        <div
          style={{
            height: "200px",
            overflowY: "scroll",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <strong>
                {msg.senderId === currentUserId ? "You" : msg.senderId}::
              </strong>
              <span>{msg.message}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          rows={3}
          style={{ width: "100%", padding: "10px" }}
          placeholder="Type your message..."
        />
      </div>

      <button
        onClick={handleSendMessage}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#008CBA",
          color: "white",
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default MessagingComponent;
