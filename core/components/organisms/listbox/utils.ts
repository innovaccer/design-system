const isDisabledElement = (element: HTMLElement) => {
  return element && element.getAttribute('data-disabled') === 'true';
};

const getNextSibling = (element: HTMLElement) => {
  return element?.parentNode?.nextSibling?.firstChild as HTMLElement;
};

const getPrevSibling = (element: HTMLElement) => {
  return element?.parentNode?.previousSibling?.firstChild as HTMLElement;
};

const focusOption = (element: HTMLElement, direction: string) => {
  let iterateElement = element;

  while (iterateElement) {
    if (!isDisabledElement(iterateElement)) {
      iterateElement.focus();
      break;
    }

    if (direction === 'down') {
      iterateElement = getNextSibling(iterateElement);
    } else {
      iterateElement = getPrevSibling(iterateElement);
    }
  }
};

export const onKeyDown = (event: React.KeyboardEvent) => {
  const sourceElement = event.target as HTMLElement;
  const nextElement = getNextSibling(sourceElement);
  const prevElement = getPrevSibling(sourceElement);

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      focusOption(nextElement, 'down');
      break;
    case 'ArrowUp':
      event.preventDefault();
      focusOption(prevElement, 'up');
      break;
    default:
      break;
  }
};
