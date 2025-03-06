import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/chatInput.module.css';
import { Button } from '@/index';

export interface ChatInputProps extends BaseProps {
  disabled?: boolean;
  placeholder?: string;
  showStopGeneratingButton?: boolean;
  value?: string;
  actionRenderer?: () => JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onSend?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value?: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = (props: ChatInputProps) => {
  const { disabled, placeholder, showStopGeneratingButton, value, className, actionRenderer, onSend, ...rest } = props;

  const editorRef = React.useRef<HTMLDivElement>(null);
  const [showMention, setShowMention] = React.useState(false);
  const [mentionList] = React.useState(['user1', 'user2', 'user3']);
  const [filteredMentions, setFilteredMentions] = React.useState<string[]>([]);
  const [mentionPosition, setMentionPosition] = React.useState({ top: 0, left: 0 });

  const handleInput = (e) => {
    const selection = window.getSelection();
    if (!selection) return;
    const text = selection.anchorNode?.textContent;
    const lastChar = text[text.length - 1];
    if (lastChar === '@') {
      setFilteredMentions(mentionList);
      setShowMention(true);
      positionMentionPopup();
    } else if (showMention) {
      const query = text.split('@').pop();
      setFilteredMentions(mentionList.filter((u) => u.startsWith(query)));
    }
  };

  const positionMentionPopup = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    setMentionPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
  };

  const handleMentionClick = (mention) => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    // Create mention span
    const mentionNode = document.createElement('span');
    mentionNode.textContent = `@${mention} `;
    mentionNode.className = 'bg-primary';
    mentionNode.setAttribute('data-type', 'mention');
    mentionNode.setAttribute('data-id', mention);

    // Insert mention node
    range.insertNode(mentionNode);

    // Move cursor after the mention
    const space = document.createTextNode(' '); // Regular space
    range.collapse(false); // Collapse the range to the end point
    range.insertNode(space);

    // Create a new range after the mention
    const newRange = document.createRange();
    newRange.setStartAfter(space);
    newRange.setEndAfter(space);
    selection.removeAllRanges();
    selection.addRange(newRange);

    setShowMention(false);
    editorRef.current?.focus(); // Keep focus on editor
  };

  const extractMessageData = () => {
    const elements = editorRef.current?.childNodes;
    const messageParts = [];
    elements?.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        messageParts.push({ type: 'text', content: node.textContent });
      } else if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute('data-type') === 'mention') {
        messageParts.push({ type: 'mention', content: node.textContent.trim(), id: node.getAttribute('data-id') });
      }
    });
    return messageParts;
  };

  const handleSend = () => {
    const messageData = extractMessageData();
    onSend?.(messageData);
    if (editorRef.current) {
      editorRef.current.innerHTML = '';
    }
  };

  return (
    <div className="p-4 border rounded-md w-96 relative">
      <div
        ref={editorRef}
        contentEditable
        className="border p-2 min-h-[100px] outline-none"
        onInput={handleInput}
      ></div>
      {showMention && (
        <div
          className="border mt-2 p-2 bg-white shadow-md absolute"
          style={{ top: mentionPosition.top, left: mentionPosition.left }}
        >
          {filteredMentions.map((mention) => (
            <div
              key={mention}
              className="p-1 cursor-pointer hover:bg-gray-200"
              onClick={() => handleMentionClick(mention)}
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
