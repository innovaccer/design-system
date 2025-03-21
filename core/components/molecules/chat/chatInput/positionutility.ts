const positionMentionPopup = () => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const text = editorRef.current.innerText;
    const lastAtIndex = text.lastIndexOf('@');
    if (lastAtIndex === -1) return;

    const node = editorRef.current.firstChild;
    let offset = lastAtIndex;
    let found = false;

    // Find the correct text node and offset for the last "@"
    const findNode = (node) => {
      while (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          if (offset <= node.textContent.length) {
            found = true;
            return node;
          }
          offset -= node.textContent.length;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const result = findNode(node.firstChild);
          if (result) return result;
        }
        node = node.nextSibling;
      }
      return null;
    };

    const targetNode = findNode(editorRef.current);

    if (found && targetNode) {
      const range = document.createRange();
      range.setStart(targetNode, offset);
      range.setEnd(targetNode, offset + 1);

      const rect = range.getBoundingClientRect();
      const editorRect = editorRef.current.getBoundingClientRect();

      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      let top;
      if (spaceBelow < 150 && spaceAbove > 150) {
        // If no space below and enough space above → open above
        top = rect.top + window.scrollY - 150;
      } else {
        // Otherwise, open below
        top = rect.bottom + window.scrollY;
      }

      // Adjust horizontal position to prevent overflow
      let left = Math.min(rect.left + window.scrollX, window.innerWidth - 200);

      // Adjust position relative to the editor
      top -= editorRect.top + window.scrollY;
      left -= editorRect.left + window.scrollX;

      setMentionPosition({ top, left });
    }
  };