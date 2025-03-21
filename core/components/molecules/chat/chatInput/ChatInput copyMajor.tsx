import * as React from 'react';
import { Button } from '@/index';

export const ChatInput: React.FC = () => {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const [showMention, setShowMention] = React.useState(false);
  const [mentionList] = React.useState(['user1', 'user2', 'user3']);
  const [filteredMentions, setFilteredMentions] = React.useState<string[]>([]);

  const [mentionPosition, setMentionPosition] = React.useState({ top: 0, left: 0 });

  // Handle input event
  const handleInput = () => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const text = range.startContainer.textContent || '';
    const offset = range.startOffset;

    if (text[offset - 1] === '@') {
      setFilteredMentions(mentionList);
      setShowMention(true);
      positionMentionPopup();
    } else if (showMention) {
      const query = text.slice(0, offset).split('@').pop();
      setFilteredMentions(mentionList.filter((u) => u.startsWith(query)));
      positionMentionPopup();
    }
  };

  // Position the popover w.r.t the last "@" character
  const positionMentionPopup = () => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();
    const rect = rects[rects.length - 1]; // Get the last rect to handle multi-line text
    const editorRect = editorRef.current.getBoundingClientRect();

    // Calculate the position of the mention popover
    let top = rect.bottom + window.scrollY;
    let left = rect.left + window.scrollX;

    // Adjust position to prevent overflow
    if (top + 150 > window.innerHeight) {
      top = rect.top + window.scrollY - 150;
    }
    if (left + 200 > window.innerWidth) {
      left = window.innerWidth - 200;
    }

    // Adjust position relative to the editor
    top -= editorRect.top + window.scrollY;
    left -= editorRect.left + window.scrollX;

    setMentionPosition({ top, left });
  };

  // Insert selected mention at cursor position
  const handleMentionClick = (mention) => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    // Create a mention node
    const mentionNode = document.createElement('span');
    mentionNode.textContent = `@${mention} `;
    mentionNode.className = 'text-blue-500';
    mentionNode.setAttribute('data-type', 'mention');
    mentionNode.setAttribute('data-id', mention);

    range.insertNode(mentionNode);

    // Add a space after the mention
    const space = document.createTextNode('\u00A0');
    mentionNode.after(space);

    // Move the cursor after the inserted mention
    range.setStartAfter(space);
    range.setEndAfter(space);
    selection.removeAllRanges();
    selection.addRange(range);

    setShowMention(false);
  };

  // Extract message content to display in chat bubble
  const extractMessageData = () => {
    const elements = editorRef.current?.childNodes;
    const messageParts = [];

    elements?.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        messageParts.push({ type: 'text', content: node.textContent });
      } else if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute('data-type') === 'mention') {
        messageParts.push({
          type: 'mention',
          content: node.textContent.trim(),
          id: node.getAttribute('data-id'),
        });
      }
    });

    return messageParts;
  };

  // Handle send button click
  const handleSend = () => {
    const messageData = extractMessageData();
    console.log('messageData:', messageData);
    if (editorRef.current) editorRef.current.innerHTML = '';
  };

  return (
    <div className="p-4 border rounded-md w-96 position-relative ">
      <div
        ref={editorRef}
        contentEditable
        className="border p-2 min-h-[100px] outline-none "
        onInput={handleInput}
      ></div>

      {showMention && (
        <div
          className="border mt-2 p-2 bg-white shadow-md position-absolute z-10"
          style={{
            top: mentionPosition.top,
            left: mentionPosition.left,
            maxHeight: '150px',
            overflowY: 'auto',
          }}
        >
          {filteredMentions.map((mention) => (
            <div
              key={mention}
              className="p-1 cursor-pointer hover:bg-gray-200"
              onMouseDown={(e) => {
                e.preventDefault();
                handleMentionClick(mention);
              }}
            >
              @{mention}
            </div>
          ))}
        </div>
      )}

      <Button className="mt-2 w-full" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
