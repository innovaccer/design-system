import React from 'react';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';
import { Button } from '@/index';
import styles from '@css/components/chatInput.module.css';

export interface ChatInputProps extends BaseProps {
  /**
   * Placeholder for the `ChatInput`
   */
  placeholder?: string;
  /**
   * Value for the `ChatInput`
   */
  defaultValue?: string;
  /**
   * Disables the `ChatInput`
   */
  disabled?: boolean;
  /**
   * Show stop generating button instead of send button
   */
  showStopButton?: boolean;
  /**
   * Action renderer for the `ChatInput`
   */
  actionRenderer?: () => React.JSX.Element;
  /**
   * Callback function triggered when the value of `ChatInput` changes
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` is blurred
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` is focused
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Callback function triggered when a key is pressed in the `ChatInput`
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` send button is clicked
   */
  onSend?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value?: string) => void;
  /**
   * Callback function triggered when the `ChatInput` stop generating button is clicked
   */
  onStopGenerating?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ChatInput: React.FC<ChatInputProps> = (props) => {
  const {
    defaultValue,
    showStopButton,
    onChange,
    onSend,
    disabled,
    actionRenderer,
    onStopGenerating,
    className,
    placeholder = 'Start typing...',
    ...rest
  } = props;

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [value, setValue] = React.useState(defaultValue);
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    if (defaultValue) {
      resizeTextarea(defaultValue);
    }
  }, [defaultValue]);

  const containerClassNames = classNames(
    {
      [styles.ChatInput]: true,
      [styles['ChatInput--expanded']]: isExpanded,
      [styles['ChatInput--disabled']]: disabled,
    },
    className
  );

  const actionsClassNames = classNames({
    [styles['ChatInput-actions']]: true,
    [styles['ChatInput-actions--expanded']]: isExpanded,
  });

  const textareaClassNames = classNames({
    [styles['ChatInput-textarea']]: true,
  });

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onSend && onSend(e, value);

    clearChatInput();
  };

  const resizeTextarea = (text: string) => {
    if (textareaRef && textareaRef.current && containerRef && containerRef.current) {
      const textarea = textareaRef.current;

      const textLineHeight = 24;
      const newHeight = textarea.scrollHeight;

      requestAnimationFrame(() => {
        setIsExpanded((prevIsExpanded) => {
          if (newHeight > textLineHeight && !prevIsExpanded) {
            return true;
          } else if (newHeight <= textLineHeight && prevIsExpanded && text === '') {
            return false;
          } else if (text === '') {
            return false;
          }
          return prevIsExpanded;
        });
      });
    }
  };

  const clearChatInput = () => {
    setIsExpanded(false);
    setValue('');
  };

  const sendButtonRenderer = () => {
    if (showStopButton) {
      return (
        <Button
          size="tiny"
          appearance="alert"
          icon="stop"
          aria-label="Stop Generating"
          largeIcon={true}
          data-test="DesignSystem-StopButton"
          disabled={disabled}
          className={actionRenderer ? 'ml-3' : ''}
          onClick={onStopGenerating}
        />
      );
    }

    return (
      <Button
        size="tiny"
        appearance="primary"
        icon="arrow_upward_alt"
        aria-label="Send"
        largeIcon={true}
        data-test="DesignSystem-SendButton"
        disabled={value === '' || disabled}
        className={actionRenderer ? 'ml-3' : ''}
        onClick={handleSend}
      />
    );
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!disabled) {
      setValue(e.target.value);
      onChange && onChange(e);
      resizeTextarea(e.target.value);
    }
  };

  return (
    <div className={containerClassNames} ref={containerRef} data-test="DesignSystem-ChatInput">
      <textarea
        value={value}
        ref={textareaRef}
        onChange={onChangeHandler}
        className={textareaClassNames}
        disabled={disabled}
        data-test="DesignSystem-ChatInput-textarea"
        placeholder={placeholder}
        {...rest}
      />
      <div className={actionsClassNames} data-test="DesignSystem-ChatInput-actions">
        {actionRenderer && actionRenderer()}
        {sendButtonRenderer()}
      </div>
    </div>
  );
};

ChatInput.displayName = 'ChatInput';

export default ChatInput;
