import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/chatInput.module.css';
import { Button, Listbox, Chip, Popover } from '@/index';
import { positionMentionPopup, extractMessageData } from './utils';

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
  const [mentionList] = React.useState([
    'user1',
    'user2',
    'user3',
    'user3',
    'user3',
    'user3',
    'user3',
    'user3',
    'user3',
  ]);
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
          if (newHeight > 24 && !prevIsExpanded) {
            return true;
          } else if (newHeight <= 24 && prevIsExpanded && text === '') {
            return false;
          }
          return prevIsExpanded;
        });
      });
    }
  };

  const handleInput = () => {
    const selection = window.getSelection();
    if (!selection) return;

    const text = selection.anchorNode?.textContent || '';
    const lastChar = text[text.length - 1];

    if (lastChar === '@') {
      setFilteredMentions(mentionList);
      setShowMention(true);
      positionMentionPopup(textareaRef, setMentionPosition);
    } else if (showMention) {
      const query = text.split('@').pop() || '';
      setFilteredMentions(mentionList.filter((u) => u.startsWith(query)));
    }

    if (textareaRef.current) {
      setText(textareaRef.current.textContent);
    }

    resizeTextarea(text);
  };

  const handleMentionClick = (mention: string) => {
    setContent((prev) => [...prev, { type: 'mention', id: mention }, ' ']);
    setShowMention(false);

    requestAnimationFrame(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(textareaRef.current);
        range.collapse(false);
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    });
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const messageData = extractMessageData(content);
    if (onSend) {
      onSend(e, messageData);
    }

    console.log('content', content, 'messageData', messageData);
    setContent([]);
  };

  const onToggleHandler = (open: boolean) => {
    if (!open) {
      setShowMention(false);
    }
  };

  const defaultPopoverStyle = {
    fn: (data: any) => {
      return {
        ...data,
        styles: {
          ...data.styles,
          top: mentionPosition.top,
          left: mentionPosition.left,
        },
      };
    },
  };

  return (
    <div className={containerClassNames}>
      <div
        ref={textareaRef}
        data-text={placeholder}
        contentEditable={!disabled}
        suppressContentEditableWarning
        className={textareaClassNames}
        role="textbox"
        spellCheck="true"
        onInput={handleInput}
        {...rest}
      >
        {content.map((item, index) =>
          typeof item === 'string' ? (
            <span key={index}>{item}</span>
          ) : (
            <span key={index} contentEditable="false">
              <Chip name={item.id} key={index} label={item.id} />
            </span>
          )
        )}
        {showMention && enableMention && (
          <Popover
            open={true}
            position="bottom-start"
            onToggle={onToggleHandler}
            appendToBody={true}
            customStyle={{ minWidth: 176, maxHeight: 256, minHeight: 32, height: '100%' }}
            computeStyles={defaultPopoverStyle}
          >
            <Listbox contentEditable={false} className="bg-light position-absolute w-100">
              {filteredMentions.map((mention) => (
                <Listbox.Item
                  key={mention}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleMentionClick(mention);
                  }}
                >
                  {mention}
                </Listbox.Item>
              ))}
            </Listbox>
          </Popover>
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
