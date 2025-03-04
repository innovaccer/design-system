import React, { useState, useRef } from 'react';

const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const ChatInput = () => {
  const [text, setText] = useState('');
  const [mentionList, setMentionList] = useState([]);
  const [mentionIndex, setMentionIndex] = useState(0);
  const [mentionPosition, setMentionPosition] = useState({ top: 0, left: 0 });
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    handleMentionDetection(value);
  };

  const handleMentionDetection = (value) => {
    const cursorPosition = inputRef.current.selectionStart;
    const mentionMatch = value.slice(0, cursorPosition).match(/(^|\s)@([\w]*)$/);
    if (mentionMatch) {
      const query = mentionMatch[2].toLowerCase();
      const filteredUsers = users.filter((user) => user.toLowerCase().startsWith(query));
      setMentionList(filteredUsers.length > 0 ? filteredUsers : users);
      setMentionIndex(0);
      updateMentionPosition(cursorPosition);
    } else {
      setMentionList([]);
    }
  };

  const handleKeyDown = (e) => {
    if (mentionList.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setMentionIndex((prev) => (prev + 1) % mentionList.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setMentionIndex((prev) => (prev - 1 + mentionList.length) % mentionList.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        insertMention(mentionList[mentionIndex]);
      }
    }
  };

  const insertMention = (mention) => {
    const newText = text.replace(/@([\w]*)$/, `@${mention} `);
    setText(newText);
    setMentionList([]);
  };

  const updateMentionPosition = (cursorPosition) => {
    if (inputRef.current) {
      const textBeforeCursor = text.slice(0, cursorPosition);
      const span = document.createElement('span');
      span.textContent = textBeforeCursor;
      span.style.visibility = 'hidden';
      span.style.whiteSpace = 'pre-wrap';
      document.body.appendChild(span);
      const rect = span.getBoundingClientRect();
      document.body.removeChild(span);
      setMentionPosition({
        top: rect.top + window.scrollY + 20,
        left: rect.left + window.scrollX,
      });
    }
  };

  return (
    <div className="chat-input-container">
      <textarea
        ref={inputRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="chat-input"
        placeholder="Type a message..."
      />
      {mentionList.length > 0 && (
        <ul className="mention-list" style={{ top: mentionPosition.top, left: mentionPosition.left }}>
          {mentionList.map((user, index) => (
            <li key={user} className={index === mentionIndex ? 'active' : ''} onMouseDown={() => insertMention(user)}>
              @{user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChatInput;
