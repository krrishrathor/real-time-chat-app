import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:5005');
    newSocket.onopen = () => console.log('WebSocket connected');
    newSocket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessages((prev) => [...prev, msg]);
    };
    newSocket.onerror = (error) => console.error('WebSocket error:', error);
    newSocket.onclose = () => console.log('WebSocket closed');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    if (input.trim() && socket && name.trim()) {
      const message = { name, text: input };
      socket.send(JSON.stringify(message));
      setInput('');
    }
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      setIsNameSet(true);
    }
  };

  if (!isNameSet) {
    return (
      <div className="App">
        <h2>Enter your name</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleNameSubmit()}
        />
        <button onClick={handleNameSubmit}>Join Chat</button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.name === name ? 'own' : 'other'}`}
          >
            <strong>{msg.name}</strong>
            <div>{msg.text}</div>
          </div>

        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
