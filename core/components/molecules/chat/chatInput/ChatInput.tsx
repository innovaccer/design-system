import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/chatInput.module.css';
import { Button, Chip } from '@/index';
import { positionMentionPopup, extractMessageData } from './utils';
import MentionPopup from './MentionPopup';

export type MentionItemType = { label: string; value: string };
export type MessageType = { type: string; content: string | null | MentionItemType; nodeName?: string };

export type MentionPopoverProps = {
  mentionList?: MentionItemType[];
  trigger?: string;
  customPopoverRenderer?: (mentionList: MentionItemType[]) => JSX.Element;
  customMentionRenderer?: (mention: MentionItemType) => JSX.Element;
  popoverMaxHeight?: number | string;
  popoverMinWidth?: number | string;
};

export interface ChatInputProps extends BaseProps {
  /**
   * Disables the `ChatInput`
   */
  disabled?: boolean;
  /**
   * Placeholder for the `ChatInput`
   */
  placeholder?: string;
  /**
   * Show stop generating button instead of send button
   */
  showStopButton?: boolean;
  /**
   * Value of the `ChatInput`
   */
  value?: string;
  /**
   * Enable mention in the `ChatInput`
   */
  enableMention?: boolean;
  /**
   * Props for the mention popover
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * MentionPopoverProps: {
   *   mentionList: { label: string; value: string }[];
   *   trigger?: string;
   *   customPopoverRenderer?: (mentionList: { label: string; value: string }[]) => JSX.Element;
   *   customMentionRenderer?: (mention: { label: string; value: string }) => JSX.Element;
   *   popoverMaxHeight?: number | string;
   *   popoverMinWidth?: number | string;
   * }
   * </pre>
   * <br />
   */
  mentionProps?: MentionPopoverProps;
  /**
   * Action renderer for the `ChatInput`
   */
  actionRenderer?: () => JSX.Element;
  /**
   * Callback function triggered when the value of `ChatInput` changes
   */
  onChange?: (e: React.ChangeEvent<HTMLDivElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` is blurred
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` is focused
   */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /**
   * Callback function triggered when a key is pressed in the `ChatInput`
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  /**
   * Callback function triggered when the `ChatInput` send button is clicked
   */
  onSend?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value?: MessageType[]) => void;
  /**
   * Callback function triggered when the `ChatInput` stop generating button is clicked
   */
  onStopGenerating?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ChatInput: React.FC<ChatInputProps> = (props: ChatInputProps) => {
  const {
    disabled,
    placeholder,
    showStopButton,
    value,
    className,
    actionRenderer,
    onSend,
    enableMention,
    mentionProps,
    onStopGenerating,
    onKeyDown,
    onChange,
    ...rest
  } = props;

  const { trigger = '@', mentionList, customMentionRenderer } = mentionProps || {};

  const [text, setText] = React.useState<string | null | undefined>(value);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showMention, setShowMention] = React.useState(false);
  const [wasMentionActive, setWasMentionActive] = React.useState(false);
  const [resetKey, setResetKey] = React.useState(0);

  const [filteredMentions, setFilteredMentions] = React.useState<MentionItemType[]>([]);
  const [mentionPosition, setMentionPosition] = React.useState({ top: 0, left: 0 });
  const [content, setContent] = React.useState<{ type: string; data: MentionItemType }[]>([]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLDivElement>(null);
  const mentionRangeRef = React.useRef<Range | null>(null);

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.innerHTML = value || '';
    }
  }, [value]);

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
    // [styles['ChatInput-textarea--expanded']]: isExpanded,
  });

  const actionsClassNames = classNames({
    [styles['ChatInput-actions']]: true,
    [styles['ChatInput-actions--expanded']]: isExpanded,
  });

  const resizeTextarea = (text: string) => {
    if (textareaRef && textareaRef.current && containerRef && containerRef.current) {
      const textarea = textareaRef.current;
      // const container = containerRef.current;

      // const containerWidth = container.offsetWidth;
      // const textareaWidth = textarea.offsetWidth;
      // const widthRatio = (textareaWidth / containerWidth) * 100;
      const textLineHeight = 24;

      requestAnimationFrame(() => {
        const newHeight = textarea.scrollHeight;

        setIsExpanded((prevIsExpanded) => {
          if (newHeight > textLineHeight && !prevIsExpanded) {
            return true;
          } else if (newHeight <= textLineHeight && prevIsExpanded && text === '') {
            // } else if (newHeight <= textLineHeight && prevIsExpanded && (widthRatio < 95 || text === '')) {
            return false;
          }
          return prevIsExpanded;
        });
      });
    }
  };

  const clearChatInput = () => {
    // Reset all state variables related to mentions
    setContent([]);
    setText('');
    setShowMention(false);
    setWasMentionActive(false);
    setFilteredMentions([]);
    setIsExpanded(false);
    mentionRangeRef.current = null;

    // Force a complete re-render by updating the resetKey
    setResetKey((prevKey) => prevKey + 1);

    // Focus will be handled after the re-render
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 0);
  };

  const handleInput = () => {
    const selection = window.getSelection();
    if (!selection || !selection.anchorNode) return;

    const anchorNode = selection.anchorNode;
    const focusOffset = selection.focusOffset;
    const text = anchorNode.textContent || '';

    const lastAtIndex = text.lastIndexOf(trigger);
    if (lastAtIndex !== -1) {
      const query = text.slice(lastAtIndex + 1, focusOffset);
      const updatedList = mentionList?.filter((item) => item.label.toLowerCase().startsWith(query.toLowerCase())) || [];
      setFilteredMentions(updatedList);
      setWasMentionActive(showMention);
      setShowMention(updatedList.length > 0);

      if (updatedList.length > 0) {
        positionMentionPopup(textareaRef, setMentionPosition);

        // Create and store mention range
        const range = document.createRange();
        range.setStart(anchorNode, lastAtIndex);
        range.setEnd(anchorNode, focusOffset);
        mentionRangeRef.current = range;
      } else {
        mentionRangeRef.current = null;
      }
    } else {
      setWasMentionActive(showMention);
      setShowMention(false);
      mentionRangeRef.current = null;
    }

    if (textareaRef.current) {
      const newText = textareaRef.current.textContent;
      setText(newText);

      // Manually trigger onChange event
      if (onChange) {
        const event = new Event('change', { bubbles: true }) as unknown as React.ChangeEvent<HTMLDivElement>;
        Object.defineProperty(event, 'target', { writable: false, value: textareaRef.current });
        onChange(event);
      }
    }

    resizeTextarea(text);
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const messageData = extractMessageData(textareaRef);

    onSend && onSend(e, messageData);

    clearChatInput();
  };

  const mentionRenderer = (mention: MentionItemType) => {
    if (customMentionRenderer) {
      return customMentionRenderer(mention);
    }
    return <Chip name={mention.value} label={mention.label} data-test="DesignSystem-ChatInput-MentionChip" />;
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
        disabled={!text}
        className={actionRenderer ? 'ml-3' : ''}
        onClick={handleSend}
      />
    );
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Backspace' && (showMention || wasMentionActive)) {
      // If mention popup is showing or was just active, handle carefully
      e.preventDefault();

      // Hide the mention popup
      setShowMention(false);
      setWasMentionActive(false);

      // Let the default backspace behavior happen after our custom handling
      setTimeout(() => {
        if (textareaRef.current) {
          // Focus the input to ensure the cursor is in the right place
          textareaRef.current.focus();

          // Manually trigger a backspace event to delete the character
          const selection = window.getSelection();
          if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            if (range.startOffset > 0) {
              range.setStart(range.startContainer, range.startOffset - 1);
              range.deleteContents();
            }
          }
        }
      }, 0);
    }

    onKeyDown && onKeyDown(e);
  };

  return (
    <div className={containerClassNames} ref={containerRef}>
      <div
        key={resetKey}
        ref={textareaRef}
        data-text={placeholder}
        contentEditable={!disabled}
        suppressContentEditableWarning
        className={textareaClassNames}
        role="textbox"
        tabIndex={0}
        spellCheck="true"
        onInput={handleInput}
        onKeyDown={onKeyDownHandler}
        data-test="DesignSystem-ChatInput"
        {...rest}
      >
        {content.map((item, index) => (
          <span key={index} contentEditable="false" data-type="mention" data-content={JSON.stringify(item)}>
            {mentionRenderer(item.data)}
          </span>
        ))}
        {showMention && enableMention && (
          <MentionPopup
            setContent={setContent}
            setShowMention={setShowMention}
            mentionPosition={mentionPosition}
            filteredMentions={filteredMentions}
            textareaRef={textareaRef}
            mentionRangeRef={mentionRangeRef}
            {...mentionProps}
          />
        )}
      </div>

      <div className={actionsClassNames}>
        {actionRenderer && actionRenderer()}
        {sendButtonRenderer()}
      </div>
    </div>
  );
};

export default ChatInput;
