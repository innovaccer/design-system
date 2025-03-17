import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/chatInput.module.css';
import { Button } from '@/index';
import { Mention } from './Mention';

export interface ChatInputProps extends BaseProps {
  /**
   * Disables the `ChatInput`, making it unable to type
   */
  disabled?: boolean;
  /**
   * Text to display when `ChatInput` is empty
   */
  placeholder?: string;
  /**
   *
   */
  showStopGeneratingButton?: boolean;
  /**
   * Value of the `ChatInput`
   */
  value?: string;
  /**
   * Enable mention feature in `ChatInput`
   */
  enableMention?: boolean;
  /**
   *
   */
  actionRenderer?: () => JSX.Element;
  /**
   * Callback function when `ChatInput` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `ChatInput` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `ChatInput` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `ChatInput` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `ChatInput` send button is clicked
   */
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

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

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

  // React.useEffect(() => {
  //   if (textareaRef && textareaRef.current && text) {
  //     setIsExpanded(textareaRef.current.scrollHeight > 20);
  //   } else {
  //     setIsExpanded(false);
  //   }
  // }, [text]);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;

    if (textareaRef && textarea) {
      // textarea.style.height = 'auto'; // Reset the height

      console.log('wwwwwwwtrrrruuueeee', textareaRef.current.scrollHeight);
      setIsExpanded(textareaRef.scrollHeight > 20);
    }
    // else {
    //   console.log('wwwwwwwffff');
    //   setIsExpanded(false);
    // }
  };

  // Handle input event
  const handleInput = () => {
    // debugger;
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

    resizeTextarea();
  };

  // Position the popover w.r.t the last "@" character
  const positionMentionPopup = () => {
    if (!textareaRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();
    const rect = rects[rects.length - 1]; // Get the last rect to handle multi-line text
    const editorRect = textareaRef.current.getBoundingClientRect();

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
    if (!textareaRef.current) return;

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

  // const mentionOptions = {
  //   filteredMentions,
  //   showMention,
  //   setShowMention,
  //   textareaRef,
  // };

  return (
    <div className={containerClassNames}>
      {/* <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={textareaClassNames}
        contentEditable={true}
        placeholder={placeholder}
        onInput={handleInput}
        disabled={disabled}
        {...rest}
      /> */}

      <div
        ref={textareaRef}
        contentEditable
        className={textareaClassNames}
        // className="border p-2 min-h-[100px] outline-none w-100"
        onInput={handleInput}
      >
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
