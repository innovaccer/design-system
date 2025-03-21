import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/chatInput.module.css';
import { Button } from '@/index';
import { Mention } from './Mention';

export interface ChatInputProps extends BaseProps {
  disabled?: boolean;
  placeholder?: string;
  showStopGeneratingButton?: boolean;
  value?: string;
  enableMention?: boolean;
  actionRenderer?: () => JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onSend?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value?: MessageType[]) => void;
}

export type MessageType = { type: string; content: string | null; id?: string };

export const ChatInput: React.FC<ChatInputProps> = (props: ChatInputProps) => {
  const {
    disabled,
    placeholder,
    showStopGeneratingButton,
    value,
    className,
    actionRenderer,
    onSend,
    enableMention,
    ...rest
  } = props;

  const [text, setText] = React.useState(value);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showMention, setShowMention] = React.useState(false);
  const [mentionList] = React.useState(['user1', 'user2', 'user3']);
  const [filteredMentions, setFilteredMentions] = React.useState<string[]>([]);
  const [mentionPosition, setMentionPosition] = React.useState({ top: 0, left: 0 });

  const textareaRef = React.useRef<HTMLDivElement>(null);

  const containerClassNames = classNames(
    {
      [styles.ChatInput]: true,
      [styles['ChatInput--expanded']]: isExpanded,
      [styles['ChatInput--disabled']]: disabled,
    },
    className
  );

  const textareaClassNames = classNames({
    [styles['ChatInput-textarea']]: true,
  });

  const actionsClassNames = classNames({
    [styles['ChatInput-actions']]: true,
    [styles['ChatInput-actions--expanded']]: isExpanded,
  });

  const resizeTextarea = (text) => {
    if (textareaRef && textareaRef.current) {
      const textarea = textareaRef.current;
      // const newHeight = textarea.scrollHeight; // Get the correct scrollHeight
      // console.log('Updated scrollHeight:', newHeight);
      // setIsExpanded(newHeight > 20);
      // textarea.style.height = `${newHeight}px`; // Set the new height
      // requestAnimationFrame(() => {
      //   const newHeight = textarea.scrollHeight; // Get the correct scrollHeight
      //   console.log('Updated scrollHeight:', newHeight);
      //   setIsExpanded(newHeight > 20);
      //   textarea.style.height = `${newHeight}px`; // Set the new height
      // });

      requestAnimationFrame(() => {
        // textarea.style.height = 'auto'; // Reset the height

        const newHeight = textarea.scrollHeight; // Get the correct scrollHeight
        console.log(
          'text',
          text,
          'Updated scrollHeight:',
          newHeight,
          'textarea.clientHeight:',
          textarea.offsetHeight,
          'textarea.height',
          textarea.clientHeight,
          'expanded',
          isExpanded
        );

        setIsExpanded((prevIsExpanded) => {
          if (newHeight > 20 && !prevIsExpanded) {
            return true;
          } else if (newHeight <= 20 && prevIsExpanded && text === '') {
            return false;
          }
          return prevIsExpanded;
        });
        // if (newHeight > 20 && !isExpanded) {
        //   setIsExpanded(true);
        // } else if (newHeight <= 20 && isExpanded) {
        //   setIsExpanded(false);
        // }
        // textarea.style.height = `${newHeight}px`; // Set the new height
      });
    }
  };

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

    resizeTextarea(text);
  };

  const positionMentionPopup = () => {
    if (!textareaRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();
    const rect = rects[rects.length - 1]; // Get the last rect to handle multi-line text
    const editorRect = textareaRef.current.getBoundingClientRect();

    let top = rect.bottom + window.scrollY;
    let left = rect.left + window.scrollX;

    if (top + 150 > window.innerHeight) {
      top = rect.top + window.scrollY - 150;
    }
    if (left + 200 > window.innerWidth) {
      left = window.innerWidth - 200;
    }

    top -= editorRect.top + window.scrollY;
    left -= editorRect.left + window.scrollX;

    setMentionPosition({ top, left });
  };

  const handleMentionClick = (mention) => {
    if (!textareaRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const mentionNode = document.createElement('span');
    mentionNode.textContent = `@${mention} `;
    mentionNode.className = 'text-blue-500';
    mentionNode.setAttribute('data-type', 'mention');
    mentionNode.setAttribute('data-id', mention);

    range.insertNode(mentionNode);

    const space = document.createTextNode('\u00A0');
    mentionNode.after(space);

    range.setStartAfter(space);
    range.setEndAfter(space);
    selection.removeAllRanges();
    selection.addRange(range);

    setShowMention(false);
  };

  const extractMessageData = () => {
    const elements = textareaRef.current?.childNodes;
    const messageParts: MessageType[] = [];

    elements?.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        messageParts.push({ type: 'text', content: node.textContent });
      } else if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute('data-type') === 'mention') {
        messageParts.push({
          type: 'mention',
          content: node.textContent?.trim() || null,
          id: node.getAttribute('data-id'),
        });
      }
    });

    return messageParts;
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const messageData = extractMessageData();
    console.log('messageData:', messageData);
    if (textareaRef.current) textareaRef.current.innerHTML = '';

    if (onSend) {
      onSend(e, messageData);
    }
  };

  return (
    <div className={containerClassNames}>
      <div ref={textareaRef} contentEditable className={textareaClassNames} onInput={handleInput}>
        {/* {showMention && (
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
        )} */}
      </div>

      <div className={actionsClassNames}>
        {actionRenderer && actionRenderer()}
        <Button
          size="tiny"
          appearance="primary"
          icon="arrow_upward_alt"
          aria-label="Send"
          largeIcon={true}
          disabled={!text}
          className={actionRenderer ? 'ml-3' : ''}
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatInput;
