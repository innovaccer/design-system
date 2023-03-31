const focusOption = (targetIndex: number, totalLength: number, direction: string) => {
  let startIndex = targetIndex;
  const endIndex = direction === 'down' ? totalLength : -1;

  while (startIndex !== endIndex) {
    const selectedElement = document.querySelector(`[data-list-item-index="${startIndex}"]`) as HTMLElement;

    if (selectedElement && selectedElement.getAttribute('data-disabled') !== 'true') {
      selectedElement && selectedElement.focus();
      break;
    }

    if (direction === 'down') {
      startIndex++;
    } else {
      startIndex--;
    }
  }
};

export const onKeyDown = (event: React.KeyboardEvent, totalLength: number) => {
  const sourceElement = event.target as HTMLElement;
  const sourceIndex = sourceElement.getAttribute('data-list-item-index');
  const targetIndex = (sourceIndex && parseInt(sourceIndex, 10)) || 0;

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      focusOption(targetIndex + 1, totalLength, 'down');
      break;
    case 'ArrowUp':
      event.preventDefault();
      focusOption(targetIndex - 1, totalLength, 'up');
      break;
    case 'Enter': {
      event.preventDefault();
      sourceElement.click();
      break;
    }
    default:
      break;
  }
};
