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
    mentionRangeRef,
  } = props;

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

  const handleMentionClick = (mention: MentionItemType) => {
    try {
      if (mentionRangeRef.current) {
        const range = mentionRangeRef.current;

        // Make sure the range is still valid and inside textareaRef
        if (textareaRef.current?.contains(range.startContainer) && textareaRef.current?.contains(range.endContainer)) {
          range.deleteContents();
        }

        mentionRangeRef.current = null;
      }
    } catch (err) {
      mentionRangeRef.current = null;
    }

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
        data-test="DesignSystem-MentionPopup-Listbox"
        className="bg-light position-absolute w-100 py-3 overflow-auto rounded-20"
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
      data-test="DesignSystem-MentionPopup"
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
