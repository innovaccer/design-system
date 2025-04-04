import * as React from 'react';
import { Listbox, Popover } from '@/index';
import { MentionItemType, MentionPopoverProps } from './ChatInput';

interface MentionPopupProps extends MentionPopoverProps {
  mentionPosition: { top: number; left: number };
  textareaRef: React.RefObject<HTMLDivElement>;
  setShowMention: React.Dispatch<React.SetStateAction<boolean>>;
  filteredMentions: MentionItemType[];
  setContent: React.Dispatch<React.SetStateAction<{ type: string; data: MentionItemType }[]>>;
  mentionRangeRef: React.MutableRefObject<Range | null>;
}

export const MentionPopup = (props: MentionPopupProps) => {
  const {
    mentionPosition,
    textareaRef,
    setShowMention,
    filteredMentions,
    setContent,
    customPopoverRenderer,
    popoverMaxHeight,
    popoverMinWidth,
    // mentionRange,
    mentionRangeRef,
  } = props;

  // const mentionRangeRef = React.useRef<Range | null>(null);

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

  // const handleMentionClick = (mention: MentionItemType) => {
  //   setContent((prev) => [...prev, { type: 'mention', data: mention }]);
  //   setShowMention(false);

  //   requestAnimationFrame(() => {
  //     if (textareaRef.current) {
  //       textareaRef.current.focus();
  //       const range = document.createRange();
  //       const sel = window.getSelection();
  //       range.selectNodeContents(textareaRef.current);
  //       range.collapse(false);
  //       sel?.removeAllRanges();
  //       sel?.addRange(range);
  //     }
  //   });
  // };

  // const handleMentionClick = (mention: MentionItemType) => {
  //   if (mentionRange) {
  //     const sel = window.getSelection();
  //     sel?.removeAllRanges();
  //     sel?.addRange(mentionRange);

  //     // Remove the "@mentionText"
  //     mentionRange.deleteContents();

  //     // Insert a placeholder span for the Chip
  //     // const chipWrapper = document.createElement('span');
  //     // chipWrapper.contentEditable = 'false';
  //     // // chipWrapper.className = styles['ChatInput-chipWrapper']; // style it as needed
  //     // chipWrapper.innerText = `@${mention} `;

  //     // mentionRange.insertNode(chipWrapper);

  //     // Update content state
  //     setContent((prev) => [...prev, { type: 'mention', data: mention }]);
  //     // Move cursor after inserted chip
  //     const newRange = document.createRange();
  //     // newRange.setStartAfter(chipWrapper);
  //     newRange.collapse(true);
  //     sel?.removeAllRanges();
  //     sel?.addRange(newRange);
  //   }

  //   setShowMention(false);

  //   requestAnimationFrame(() => {
  //     textareaRef.current?.focus();
  //   });
  // };

  // const handleMentionClick = (mention: MentionItemType) => {
  //   if (!mentionRange || !textareaRef.current) return;

  //   const sel = window.getSelection();
  //   sel?.removeAllRanges();
  //   sel?.addRange(mentionRange);

  //   // Step 1: Delete the `@mention` typed text from DOM
  //   mentionRange.deleteContents();

  //   // Step 2: Update state with Chip and re-render
  //   setContent((prev) => [...prev, { type: 'mention', data: mention }]);

  //   setShowMention(false);

  //   // Step 3: Move cursor to the end
  //   requestAnimationFrame(() => {
  //     if (textareaRef.current) {
  //       textareaRef.current?.focus();

  //       const range = document.createRange();
  //       const selection = window.getSelection();

  //       range.selectNodeContents(textareaRef.current);
  //       range.collapse(false);
  //       selection?.removeAllRanges();
  //       selection?.addRange(range);
  //     }
  //   });
  // };

  const handleMentionClick = (mention: MentionItemType) => {
    try {
      if (mentionRangeRef.current) {
        const range = mentionRangeRef.current;

        // Make sure the range is still valid and inside textareaRef
        if (textareaRef.current?.contains(range.startContainer) && textareaRef.current?.contains(range.endContainer)) {
          range.deleteContents();
        }

        mentionRangeRef.current = null; // Clear after use
      }
    } catch (err) {
      console.error('Error deleting mention range:', err);
      mentionRangeRef.current = null; // Clean up anyway
    }

    // Insert chip and a space
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

  const onToggleHandler = (open: boolean) => {
    if (!open) {
      setShowMention(false);
    }
  };

  const optionRenderer = () => {
    if (customPopoverRenderer) {
      return customPopoverRenderer(filteredMentions);
    }

    return (
      <Listbox
        type="option"
        size="compressed"
        showDivider={false}
        contentEditable={false}
        className="bg-light position-absolute w-100 my-3 overflow-auto"
        style={{ maxHeight: popoverMaxHeight }}
      >
        {filteredMentions.map((mention: MentionItemType) => (
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
    );
  };

  return (
    <Popover
      open={true}
      position="bottom-start"
      onToggle={onToggleHandler}
      closeOnBackdropClick={false}
      appendToBody={true}
      className="overflow-visible"
      customStyle={{ minWidth: popoverMinWidth }}
      computeStyles={defaultPopoverStyle}
    >
      {optionRenderer()}
    </Popover>
  );
};

export default MentionPopup;

MentionPopup.defaultProps = {
  popoverMaxHeight: 256,
  popoverMinWidth: 176,
};
MentionPopup.displayName = 'MentionPopup';
