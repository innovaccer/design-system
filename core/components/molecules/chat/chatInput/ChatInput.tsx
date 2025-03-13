import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/chatInput.module.css';
import { Button } from '@/index';

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
  const { disabled, placeholder, showStopGeneratingButton, value, className, actionRenderer, onSend, ...rest } = props;

  const [text, setText] = React.useState(value);
  const [isExpanded, setIsExpanded] = React.useState(false);
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

  React.useEffect(() => {
    if (textareaRef && textareaRef.current && text) {
      setIsExpanded(textareaRef.current.scrollHeight > 20);
    } else {
      setIsExpanded(false);
    }
  }, [text]);

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

  return (
    <div className={containerClassNames}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={textareaClassNames}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
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
