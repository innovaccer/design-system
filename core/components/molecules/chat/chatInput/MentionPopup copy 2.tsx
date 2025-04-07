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
  showMention?: boolean;
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
    showMention,
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

  React.useEffect(() => {
    console.log(
      '111showMention',
      showMention,
      'mentionPosition',
      mentionPosition,
      'mentionRangeRef',
      mentionRangeRef,
      'textareaRef',
      textareaRef
    );
  }, [showMention]);

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
      if (mentionRangeRef.current && textareaRef.current) {
        const range = mentionRangeRef.current;
        const textarea = textareaRef.current;

        // Check if the range is still valid and inside textareaRef
        if (textarea.contains(range.startContainer) && textarea.contains(range.endContainer)) {
          // Create a new text node with a space to insert after the mention
          const spaceNode = document.createTextNode(' ');

          // Delete the mention text
          range.deleteContents();

          // Insert a space after the mention
          range.insertNode(spaceNode);

          // Move the cursor after the space
          range.setStartAfter(spaceNode);
          range.setEndAfter(spaceNode);

          // Update the selection
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
      }
    } catch (err) {
      console.error('Error handling mention click:', err);
    } finally {
      // Always clear the range reference and update state
      mentionRangeRef.current = null;
      setContent((prev) => [...prev, { type: 'mention', data: mention }]);
      setShowMention(false);

      // Focus the textarea after a short delay to ensure DOM updates are complete
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 0);
    }
  };

  const onToggleHandler = (open: boolean) => {
    if (!open) {
      setShowMention(false);
    }
    // setShowMention(open);
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
      open={showMention}
      position="bottom-start"
      onToggle={onToggleHandler}
      closeOnBackdropClick={false}
      hideOnReferenceEscape={false}
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
