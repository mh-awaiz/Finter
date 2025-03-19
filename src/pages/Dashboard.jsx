import React, { useState } from 'react';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages([
      ...messages,
      newMessage,
      { text: `You said: ${input}`, sender: "bot" },
    ]);
    setInput("");
  };
  return (
    <div className="min-h-screen  text-white flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Chat Interface</h1>
        <div className="h-96 overflow-y-auto p-4 bg-gray-700 rounded-lg mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === "user" ? "bg-blue-600" : "bg-gray-600"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
