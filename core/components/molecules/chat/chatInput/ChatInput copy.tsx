import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/chatInput.module.css';
import { Button, Listbox, Chip } from '@/index';

export interface ChatInputProps extends BaseProps {
  disabled?: boolean;
  placeholder?: string;
  showStopGeneratingButton?: boolean;
  value?: string;
  enableMention?: boolean;
  actionRenderer?: () => JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
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

  const [text, setText] = React.useState<string | null | undefined>(value);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showMention, setShowMention] = React.useState(false);
  const [mentionList] = React.useState(['user1', 'user2', 'user3']);
  const [filteredMentions, setFilteredMentions] = React.useState<string[]>([]);
  const [mentionPosition, setMentionPosition] = React.useState({ top: 0, left: 0 });
  const [content, setContent] = React.useState<(string | { type: 'mention'; id: string })[]>([]);

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

  const resizeTextarea = (text: string) => {
    if (textareaRef && textareaRef.current) {
      const textarea = textareaRef.current;

      requestAnimationFrame(() => {
        const newHeight = textarea.scrollHeight;

        setIsExpanded((prevIsExpanded) => {
          if (newHeight > 20 && !prevIsExpanded) {
            return true;
          } else if (newHeight <= 20 && prevIsExpanded && text === '') {
            return false;
          }
          return prevIsExpanded;
        });
      });
    }
  };

  // const handleInput = () => {
  //   const selection = window.getSelection();
  //   if (!selection || !selection.rangeCount) return;

  //   const range = selection.getRangeAt(0);
  //   const text = range.startContainer.textContent || '';
  //   const offset = range.startOffset;

  //   if (text[offset - 1] === '@') {
  //     setFilteredMentions(mentionList);
  //     setShowMention(true);
  //     positionMentionPopup();
  //   } else if (showMention) {
  //     const query = text.slice(0, offset).split('@').pop() || '';
  //     setFilteredMentions(mentionList.filter((u) => u.startsWith(query)));
  //     positionMentionPopup();
  //   }

  //   if (textareaRef.current) {
  //     setText(textareaRef.current.textContent);
  //   }

  //   resizeTextarea(text);
  // };

  const handleInput = () => {
    const selection = window.getSelection();
    if (!selection) return;

    const text = selection.anchorNode?.textContent || '';
    const lastChar = text[text.length - 1];

    if (lastChar === '@') {
      setFilteredMentions(mentionList);
      setShowMention(true);
      positionMentionPopup();
    } else if (showMention) {
      const query = text.split('@').pop() || '';
      setFilteredMentions(mentionList.filter((u) => u.startsWith(query)));
    }

    if (textareaRef.current) {
      setText(textareaRef.current.textContent);
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

    top -= editorRect.top + window.scrollY - 12;
    left -= editorRect.left + window.scrollX - 8;

    setMentionPosition({ top, left });
  };

  // const handleMentionClick = (mention: string) => {
  //   if (!textareaRef.current) return;

  //   const selection = window.getSelection();
  //   if (!selection || !selection.rangeCount) return;

  //   const range = selection.getRangeAt(0);
  //   range.deleteContents();

  //   const mentionNode = document.createElement('span');
  //   mentionNode.textContent = `${mention} `;
  //   // mentionNode.className = 'text-blue-500';
  //   mentionNode.setAttribute('data-type', 'mention');
  //   mentionNode.setAttribute('data-id', mention);

  //   range.insertNode(mentionNode);

  //   const space = document.createTextNode('\u00A0');
  //   mentionNode.after(space);

  //   range.setStartAfter(space);
  //   range.setEndAfter(space);
  //   selection.removeAllRanges();
  //   selection.addRange(range);

  //   setShowMention(false);
  // };

  const handleMentionClick = (mention) => {
    setContent((prev) => [...prev, { type: 'mention', id: mention }, ' ']);
    setShowMention(false);
  };

  const extractMessageData = () => {
    return content.map((item) =>
      typeof item === 'string'
        ? { type: 'text', content: item }
        : { type: 'mention', content: `@${item.id}`, id: item.id }
    );
  };

  // const extractMessageData = () => {
  //   const elements = textareaRef.current?.childNodes;
  //   const messageParts: MessageType[] = [];

  //   elements?.forEach((node) => {
  //     if (node.nodeType === Node.TEXT_NODE) {
  //       messageParts.push({ type: 'text', content: node.textContent });
  //     } else if (node.nodeType === Node.ELEMENT_NODE && (node as Element).getAttribute('data-type') === 'mention') {
  //       messageParts.push({
  //         type: 'mention',
  //         content: node.textContent?.trim() || null,
  //         id: (node as Element).getAttribute('data-id') || '',
  //       });
  //     }
  //   });

  //   return messageParts;
  // };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const messageData = extractMessageData();
    // if (textareaRef.current) textareaRef.current.innerHTML = '';

    if (onSend) {
      onSend(e, messageData);
    }
    setContent([]);
  };

  return (
    <div className={containerClassNames}>
      <div
        ref={textareaRef}
        data-text={placeholder}
        // contentEditable={!disabled}
        contentEditable={true} // Prevents direct editing of the content
        suppressContentEditableWarning
        className={textareaClassNames}
        role="textbox"
        spellCheck="true"
        onInput={handleInput}
        {...rest}
      >
        {/* {value} */}
        {content.map((item, index) =>
          typeof item === 'string' ? <span key={index}>{item}</span> : <Chip key={index} label={`@${item.id}`} />
        )}
        {showMention && (
          <Listbox
            contentEditable={false}
            className="border mt-2 p-2 bg-light position-absolute z-10"
            style={{
              top: mentionPosition.top,
              left: mentionPosition.left,
              maxHeight: '150px',
              overflowY: 'auto',
            }}
          >
            {filteredMentions.map((mention) => (
              <Listbox.Item
                key={mention}
                className="p-1 cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleMentionClick(mention);
                }}
              >
                {mention}
              </Listbox.Item>
            ))}
          </Listbox>
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
