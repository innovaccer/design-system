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
    // Restore focus to the contenteditable before modifying content
    editorRef.current.focus();

    const selection = window.getSelection();
    if (!selection) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    // Create mention node
    const mentionNode = document.createElement('span');
    mentionNode.textContent = `${mention} `;
    mentionNode.className = 'text-blue-500';
    mentionNode.setAttribute('data-type', 'mention');
    mentionNode.setAttribute('data-id', mention);

    // Insert mention at current cursor position
    range.insertNode(mentionNode);

    // Add a space after the mention to allow further typing
    const space = document.createTextNode('\u00A0');
    mentionNode.after(space);

    // Move cursor after the mention
    range.setStartAfter(space);
    range.setEndAfter(space);
    selection.removeAllRanges();
    selection.addRange(range);

    setShowMention(false);
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

    console.log('messageParts>>', messageParts);
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
            // <div
            //   key={mention}
            //   className="p-1 cursor-pointer hover:bg-gray-200"
            //   onClick={() => handleMentionClick(mention)}
            // >F
            //   @{mention}
            // </div>
            <div
              key={mention}
              className="p-1 cursor-pointer hover:bg-gray-200"
              onMouseDown={(e) => {
                e.preventDefault(); // Prevent focus loss
                handleMentionClick(mention);
              }}
            >
              {mention}
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
