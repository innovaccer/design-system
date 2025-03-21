import * as React from 'react';

export const Mention = ({ filteredMentions, showMention, setShowMention, textareaRef }) => {
  const [mentionPosition, setMentionPosition] = React.useState({ top: 0, left: 0 });

  // Position the popover w.r.t the last "@" character
  const positionMentionPopup = () => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();
    const rect = rects[rects.length - 1]; // Get the last rect to handle multi-line text
    const editorRect = editorRef.current.getBoundingClientRect();

    // Calculate the position of the mention popover
    let top = rect.bottom + window.scrollY;
    let left = rect.left + window.scrollX;

    // Adjust position to prevent overflow
    if (top + 150 > window.innerHeight) {
      top = rect.top + window.scrollY - 150;
    }
    if (left + 200 > window.innerWidth) {
      left = window.innerWidth - 200;
    }

    // Adjust position relative to the editor
    top -= editorRect.top + window.scrollY;
    left -= editorRect.left + window.scrollX;

    setMentionPosition({ top, left });
  };

  // Insert selected mention at cursor position
  const handleMentionClick = (mention: string) => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    // Create a mention node
    const mentionNode = document.createElement('span');
    mentionNode.textContent = `@${mention} `;
    mentionNode.className = 'text-blue-500';
    mentionNode.setAttribute('data-type', 'mention');
    mentionNode.setAttribute('data-id', mention);

    range.insertNode(mentionNode);

    // Add a space after the mention
    const space = document.createTextNode('\u00A0');
    mentionNode.after(space);

    // Move the cursor after the inserted mention
    range.setStartAfter(space);
    range.setEndAfter(space);
    selection.removeAllRanges();
    selection.addRange(range);

    setShowMention(false);
  };

  return (
    <>
      {showMention && (
        <div
          className="border mt-2 p-2 bg-white shadow-md position-absolute z-10"
          style={{
            top: mentionPosition.top,
            left: mentionPosition.left,
            maxHeight: '150px',
            overflowY: 'auto',
          }}
        >
          {filteredMentions.map((mention) => (
            <div
              key={mention}
              className="p-1 cursor-pointer hover:bg-gray-200"
              onMouseDown={(e) => {
                e.preventDefault();
                handleMentionClick(mention);
              }}
            >
              @{mention}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
