export const positionMentionPopup = (
  textareaRef: React.RefObject<HTMLDivElement>,
  setMentionPosition: React.Dispatch<React.SetStateAction<{ top: number; left: number }>>
) => {
  if (!textareaRef.current) return;

  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const rects = range.getClientRects();
  const rect = rects[rects.length - 1];
  const editorRect = textareaRef.current.getBoundingClientRect();

  let top = rect.bottom + window.scrollY;
  let left = rect.left + window.scrollX;

  if (top + 150 > window.innerHeight) {
    top = rect.top + window.scrollY - 150;
  }
  if (left + 200 > window.innerWidth) {
    left = window.innerWidth - 200;
  }

  top -= editorRect.top + window.scrollY - 12;
  left -= editorRect.left + window.scrollX - 8;

  setMentionPosition({ top, left });
};

export const extractMessageData = (content: (string | { type: 'mention'; id: string })[]) => {
  return content.map((item: any) =>
    typeof item === 'string'
      ? { type: 'text', content: item }
      : { type: 'mention', content: `@${item.id}`, id: item.id }
  );
};
