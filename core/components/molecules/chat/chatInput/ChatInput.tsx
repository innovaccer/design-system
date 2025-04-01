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

export type MentionItemType = { label: string; value: string };
export type MessageType = { type: string; content: string | null | MentionItemType; nodeName?: string };

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
    { label: 'John Doe', value: 'John Doe' },
    { label: 'Jane Doe', value: 'Jane Doe' },
    { label: 'John Smith', value: 'John Smith' },
    { label: 'Jane Smith', value: 'Jane Smith' },
    { label: 'John', value: 'John' },
    { label: 'Jane', value: 'Jane' },
  ]);
  const [filteredMentions, setFilteredMentions] = React.useState<MentionItemType[]>([]);
  const [mentionPosition, setMentionPosition] = React.useState({ top: 0, left: 0 });
  const [content, setContent] = React.useState<{ type: 'mention'; data: MentionItemType }[]>([]);

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

    console.log('text', text, 'lastChar', lastChar);

    if (lastChar === '@') {
      setFilteredMentions(mentionList);
      setShowMention(true);
      positionMentionPopup(textareaRef, setMentionPosition);
    } else if (showMention) {
      const query = text.split('@').pop() || '';
      setFilteredMentions(mentionList.filter((item) => item.label.startsWith(query)));
    }

    if (textareaRef.current) {
      setText(textareaRef.current.textContent);
    }

    resizeTextarea(text);
  };

  const handleMentionClick = (mention: MentionItemType) => {
    setContent((prev) => [...prev, { type: 'mention', data: mention }]);
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

  const clearChatInput = () => {
    setContent([]);
    setText('');

    if (textareaRef.current) {
      textareaRef.current.innerHTML = '';
    }
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const messageData = extractMessageData(textareaRef);

    console.log('messageData>>>', messageData);
    onSend && onSend(e, messageData);

    // clearChatInput();
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
        {content.map((item, index) => (
          <span key={index} contentEditable="false" data-type="mention" data-content={JSON.stringify(item)}>
            <Chip name={item.data.value} key={index} label={item.data.label} />
          </span>
        ))}
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
                  key={mention.value}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleMentionClick(mention);
                  }}
                >
                  {mention.label}
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
