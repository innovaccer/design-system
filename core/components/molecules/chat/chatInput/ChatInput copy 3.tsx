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

  // const handleInput = () => {
  //   const selection = window.getSelection();
  //   if (!selection) return;

  //   const text = selection.anchorNode?.textContent || '';
  //   const lastChar = text[text.length - 1];

  //   console.log(
  //     'text',
  //     text,
  //     'lastChar',
  //     lastChar,
  //     'showMention',
  //     showMention,
  //     'enableMention',
  //     enableMention,
  //     'mentionList',
  //     mentionList
  //   );

  //   // if (lastChar === trigger && enableMention && mentionList && mentionList.length > 0) {
  //   //   setFilteredMentions(mentionList);
  //   //   setShowMention(true);
  //   //   positionMentionPopup(textareaRef, setMentionPosition);
  //   // } else if (showMention && enableMention && mentionList) {
  //   //   const query = text.split(trigger).pop() || '';
  //   //   const updatedList = mentionList.filter((item) => item.label.toLowerCase().startsWith(query.toLowerCase()));
  //   //   console.log('updatedList', updatedList);
  //   //   setFilteredMentions(updatedList);
  //   // }

  //   // if (textareaRef.current) {
  //   //   setText(textareaRef.current.textContent);
  //   // }

  //   if (lastChar === trigger && enableMention && mentionList && mentionList.length > 0) {
  //     const selection = window.getSelection();
  //     if (selection && selection.rangeCount > 0) {
  //       setMentionRange(selection.getRangeAt(0).cloneRange());
  //     }

  //     setFilteredMentions(mentionList);
  //     setShowMention(true);
  //     positionMentionPopup(textareaRef, setMentionPosition);
  //   } else if (showMention && enableMention && mentionList) {
  //     const query = text.split(trigger).pop() || '';
  //     const updatedList = mentionList.filter((item) => item.label.toLowerCase().startsWith(query.toLowerCase()));
  //     setFilteredMentions(updatedList);

  //     const selection = window.getSelection();
  //     if (selection && selection.rangeCount > 0) {
  //       const range = selection.getRangeAt(0);
  //       const node = range.startContainer;
  //       const text = node.textContent || '';
  //       const atIndex = text.lastIndexOf(trigger);

  //       if (atIndex !== -1) {
  //         const mentionTextRange = range.cloneRange();
  //         mentionTextRange.setStart(node, atIndex);
  //         mentionTextRange.setEnd(node, text.length);
  //         setMentionRange(mentionTextRange);
  //       }
  //     }
  //   }

  //   if (textareaRef.current) {
  //     setText(textareaRef.current.textContent);
  //   }

  //   resizeTextarea(text);
  // };

  // const clearChatInput = () => {
  //   setContent([]);
  //   setText('');

  //   if (textareaRef.current) {
  //     textareaRef.current.innerHTML = '';
  //   }
  // };

  // const handleInput = () => {
  //   const selection = window.getSelection();
  //   if (!selection || !selection.rangeCount) return;

  //   const range = selection.getRangeAt(0);
  //   const node = range.startContainer;
  //   const text = node.textContent || '';
  //   const atIndex = text.lastIndexOf(trigger);

  //   if (atIndex !== -1) {
  //     const query = text.slice(atIndex + 1);
  //     const mentionTextRange = range.cloneRange();
  //     mentionTextRange.setStart(node, atIndex);
  //     mentionTextRange.setEnd(node, text.length);
  //     setMentionRange(mentionTextRange);
  //     const updatedList = mentionList?.filter((item) => item.label.toLowerCase().startsWith(query.toLowerCase())) || [];
  //     setFilteredMentions(updatedList);
  //     setShowMention(true);
  //     positionMentionPopup(textareaRef, setMentionPosition);
  //   } else {
  //     setShowMention(false);
  //   }

  //   if (textareaRef.current) {
  //     setText(textareaRef.current.textContent);
  //   }

  //   resizeTextarea(text);
  // };

  // const handleInput = () => {
  //   // debugger;
  //   const selection = window.getSelection();
  //   if (!selection || !selection.anchorNode) return;

  //   const anchorNode = selection.anchorNode;
  //   const focusOffset = selection.focusOffset;
  //   const text = anchorNode.textContent || '';

  //   const lastAtIndex = text.lastIndexOf(trigger);
  //   if (lastAtIndex !== -1) {
  //     const query = text.slice(lastAtIndex + 1, focusOffset);
  //     const updatedList = mentionList?.filter((item) => item.label.toLowerCase().startsWith(query.toLowerCase())) || [];
  //     setFilteredMentions(updatedList);
  //     // setShowMention(true);

  //     if (updatedList.length === 0) {
  //       // setShowMention(false);
  //     } else {
  //       setShowMention(true);
  //       positionMentionPopup(textareaRef, setMentionPosition);
  //     }
  //     // Create and store mention range
  //     const range = document.createRange();
  //     range.setStart(anchorNode, lastAtIndex);
  //     range.setEnd(anchorNode, focusOffset);
  //     mentionRangeRef.current = range;
  //   } else {
  //     // setShowMention(false);
  //     mentionRangeRef.current = null;
  //   }

  //   if (textareaRef.current) {
  //     setText(textareaRef.current.textContent);
  //   }

  //   resizeTextarea(text);
  // };

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

      if (updatedList.length === 0) {
        showMention && setShowMention(false);
      } else {
        setShowMention(true);
        positionMentionPopup(textareaRef, setMentionPosition);
      }

      // Create and store mention range
      const range = document.createRange();
      range.setStart(anchorNode, lastAtIndex);
      range.setEnd(anchorNode, focusOffset);
      mentionRangeRef.current = range;
    } else {
      // Reset mention state when "@" is deleted
      showMention && setShowMention(false);
      mentionRangeRef.current = null;

      // Check if "@" is typed again
      if (text.endsWith(trigger)) {
        setFilteredMentions(mentionList || []);
        setShowMention(true);
        positionMentionPopup(textareaRef, setMentionPosition);
      }
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

    // clearChatInput();
  };

  const mentionRenderer = (mention: MentionItemType) => {
    if (customMentionRenderer) {
      return customMentionRenderer(mention);
    }
    return <Chip name={mention.value} label={mention.label} />;
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
            {mentionRenderer(item.data)}
          </span>
        ))}
        {/* <> */}
        {showMention && enableMention && (
          // <>
          <MentionPopup
            setContent={setContent}
            setShowMention={setShowMention}
            mentionPosition={mentionPosition}
            filteredMentions={filteredMentions}
            textareaRef={textareaRef}
            showMention={showMention}
            // mentionRange={mentionRange}
            mentionRangeRef={mentionRangeRef}
            {...mentionProps}
          />
          // </>
        )}
        {/* </> */}
      </div>

      <div className={actionsClassNames}>
        {actionRenderer && actionRenderer()}
        {sendButtonRenderer()}
      </div>
    </div>
  );
};

export default ChatInput;

// NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
