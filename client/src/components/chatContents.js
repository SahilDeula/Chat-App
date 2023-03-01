import React, { useState, useEffect, useRef } from 'react';
// import './ChatApp.css';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, { username, message: inputValue }]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat-app">
      <div className="chat-header">
        <h1>Chat Application</h1>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.username === username ? 'sent' : 'received'}`}>
            <div className="message-username">{message.username}</div>
            <div className="message-text">{message.message}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-footer">
        <form onSubmit={handleMessageSubmit}>
          <input type="text" placeholder="Enter your message" value={inputValue} onChange={handleInputChange} />
          <input type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatApp;
