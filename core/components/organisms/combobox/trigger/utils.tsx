import React from 'react';
import { getAllFocusableElements } from '@/utils/overlayHelper';

export const handleKeyDown = (
  event: React.KeyboardEvent,
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>,
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (event.key) {
    case 'ArrowUp':
      setOpenPopover?.(true);
      setHighlightLastItem?.(true);
      break;
    case 'ArrowDown':
      setOpenPopover?.(true);
      setHighlightFirstItem?.(true);
      break;
    case 'Escape':
    case 'Tab':
      setOpenPopover?.(false);
      break;
    default:
      break;
  }
};

export const focusListItem = (
  position: string,
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  listRef?: any
) => {
  const container = listRef?.current as HTMLElement | undefined;
  if (!container) return;

  // Match `navigateOptions` in combobox/utils.tsx: focus `[role="option"]` hosts, not the inner row
  // wrapper. Otherwise the first ArrowDown from an option hits index -1 and re-focuses the first element again.
  const options = getAllFocusableElements(container, 'listbox');
  if (options.length === 0) return;

  const targetOption = position === 'down' ? options[0] : options[options.length - 1];
  targetOption.focus({ preventScroll: true });
  if (typeof targetOption.scrollIntoView === 'function') {
    targetOption.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  setFocusedOption?.(targetOption);
};
