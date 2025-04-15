import { MessageType } from './ChatInput';

export const positionMentionPopup = (
  textareaRef: React.RefObject<HTMLDivElement>,
  setMentionPosition: React.Dispatch<React.SetStateAction<{ top: number; left: number }>>
) => {
  if (!textareaRef.current) return;

  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  const editorRect = textareaRef.current.getBoundingClientRect();

  // Calculate position based on the cursor position
  let top = rect.bottom + window.scrollY;
  let left = rect.left + window.scrollX;

  // Adjust position if it would go off-screen
  if (top + 150 > window.innerHeight) {
    top = rect.top + window.scrollY - 150;
  }
  if (left + 200 > window.innerWidth) {
    left = window.innerWidth - 200;
  }

  // Adjust position relative to the editor
  top -= editorRect.top + window.scrollY - 12;
  left -= editorRect.left + window.scrollX - 8;

  setMentionPosition({ top, left });
};

export const extractMessageData = (textareaRef: React.RefObject<HTMLDivElement>): MessageType[] => {
  const elements = textareaRef.current?.childNodes;

  return Array.from(elements || []).map((item: any) => {
    if (item?.dataset?.type === 'mention') {
      const mentionValue = JSON.parse(item.dataset.content);
      return { type: 'mention', content: mentionValue?.data, nodeName: item.nodeName };
    }

    // handles new line by pressing enter
    else if (item.innerText === '\n' && item.nodeName === 'DIV') {
      return { type: 'newline', content: '\n', nodeName: item.nodeName };
    }

    // handles line break by pressing shift + enter
    else if (item.nodeName === 'BR') {
      return { type: 'linebreak', content: '<br>', nodeName: item.nodeName };
    }

    return { type: 'text', content: item.innerText || item.textContent, nodeName: item.nodeName };
  });
};
