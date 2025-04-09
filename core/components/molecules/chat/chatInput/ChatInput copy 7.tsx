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
   * Show stop generating button
   */
  showStopGeneratingButton?: boolean;
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
    showStopGeneratingButton,
    value,
    className,
    actionRenderer,
    onSend,
    enableMention,
    mentionProps,
    onStopGenerating,
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
  // const [mentionRange, setMentionRange] = React.useState<Range | null>(null);

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

      // Track if mention was active before this update
      setWasMentionActive(showMention);

      // Update showMention based on whether there are any matches
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
      // Track if mention was active before this update
      setWasMentionActive(showMention);
      setShowMention(false);
      mentionRangeRef.current = null;
    }

    if (textareaRef.current) {
      setText(textareaRef.current.textContent);
    }

    resizeTextarea(text);
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const messageData = extractMessageData(textareaRef);

    console.log('messageData>>>', messageData);
    onSend && onSend(e, messageData);

    clearChatInput();
  };

  const onCloseHandler = (mentionValue: string) => {
    // Find and remove the mention chip with the matching value
    setContent((prevContent) => {
      // Create a deep copy of the content array to avoid mutation
      const newContent = [...prevContent];

      // Find the index of the mention to remove
      const indexToRemove = newContent.findIndex((item) => item.type === 'mention' && item.data.value === mentionValue);

      if (indexToRemove === -1) return prevContent;

      // Remove the mention at the found index
      newContent.splice(indexToRemove, 1);

      // Focus the input after removing the mention
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();

          // Set cursor position after the removed mention
          const selection = window.getSelection();
          if (selection && textareaRef.current.childNodes.length > 0) {
            const range = document.createRange();

            // If there are nodes after the removed mention, place cursor after the next node
            if (indexToRemove < newContent.length) {
              const nextNode = textareaRef.current.childNodes[indexToRemove];
              if (nextNode) {
                range.setStartAfter(nextNode);
                range.collapse(true);
                selection.removeAllRanges();
                selection.addRange(range);
              }
            }
            // Otherwise place cursor at the end of the content
            else if (textareaRef.current.childNodes.length > 0) {
              const lastNode = textareaRef.current.childNodes[textareaRef.current.childNodes.length - 1];
              range.setStartAfter(lastNode);
              range.collapse(true);
              selection.removeAllRanges();
              selection.addRange(range);
            }
          }
        }
      }, 0);

      return newContent;
    });
  };

  const mentionRenderer = (mention: MentionItemType) => {
    if (customMentionRenderer) {
      return customMentionRenderer(mention);
    }
    return (
      <Chip
        name={mention.value}
        label={mention.label}
        clearButton={true}
        onClose={() => onCloseHandler(mention.value)}
      />
    );
  };

  const sendButtonRenderer = () => {
    if (showStopGeneratingButton) {
      return (
        <Button
          size="tiny"
          appearance="alert"
          icon="stop"
          aria-label="Stop Generating"
          largeIcon={true}
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
        disabled={!text}
        className={actionRenderer ? 'ml-3' : ''}
        onClick={handleSend}
      />
    );
  };

  return (
    <div className={containerClassNames}>
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
        onKeyDown={(e) => {
          // Handle backspace key specifically
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

          // Call the original onKeyDown handler if it exists
          rest.onKeyDown && rest.onKeyDown(e);
        }}
        {...rest}
      >
        {content.map((item, index) => (
          <span
            key={`${item.type}-${index}-${item.type === 'mention' ? item.data.value : ''}`}
            contentEditable="false"
            data-type={item.type}
            data-content={JSON.stringify(item)}
          >
            {item.type === 'mention' ? mentionRenderer(item.data) : item.data}
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
