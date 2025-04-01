import * as React from 'react';
import { Listbox, Popover } from '@/index';
import { MentionItemType } from './ChatInput';

interface MentionPopupProps {
  mentionPosition: { top: number; left: number };
  textareaRef: React.RefObject<HTMLDivElement>;
  setShowMention: React.Dispatch<React.SetStateAction<boolean>>;
  filteredMentions: MentionItemType[];
  setContent: React.Dispatch<React.SetStateAction<{ type: string; data: MentionItemType }[]>>;
}

export const MentionPopup = (props: MentionPopupProps) => {
  const { mentionPosition, textareaRef, setShowMention, filteredMentions, setContent } = props;

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

  return (
    <Popover
      open={true}
      position="bottom-start"
      onToggle={onToggleHandler}
      appendToBody={true}
      className="overflow-visible"
      customStyle={{ minWidth: 176 }}
      computeStyles={defaultPopoverStyle}
    >
      <Listbox
        type="option"
        size="compressed"
        showDivider={false}
        contentEditable={false}
        className="bg-light position-absolute w-100 my-3 overflow-auto"
        style={{ maxHeight: 256 }}
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
    </Popover>
  );
};

export default MentionPopup;
