import React, { useState, useRef, useEffect } from 'react';

const ChatInput = () => {
  const [text, setText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef(null);

  React.useEffect(() => {
    if (textareaRef.current && text) {
      requestAnimationFrame(() => {
        // Check if textarea has exceeded a certain height to trigger column layout
        setIsExpanded(textareaRef.current.scrollHeight > 32); // Adjust threshold as needed
      });
    } else {
      setIsExpanded(false);
    }
  }, [text]);

  return (
    <div className={`chat-container ${isExpanded ? 'expanded' : ''}`}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="chat-textarea"
        placeholder="Type a message..."
      />
      <div className="chat-actions">
        <button>➕</button>
        <button>📎</button>
        <button className="send">⬆️</button>
      </div>
    </div>
  );
};

export default ChatInput;
