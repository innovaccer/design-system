const isDisabledElement = (element: HTMLElement) => {
  if (!element) return false;
  if (element.getAttribute('data-disabled') === 'true') return true;
  if (element.getAttribute('aria-disabled') === 'true') return true;
  return false;
};

const getOptionElement = (element: HTMLElement) => {
  return element.getAttribute('role') === 'option' ? element : (element.closest('[role="option"]') as HTMLElement);
};

const getNextOption = (element: HTMLElement) => {
  const option = getOptionElement(element);
  return option?.nextElementSibling as HTMLElement;
};

const getPrevOption = (element: HTMLElement) => {
  const option = getOptionElement(element);
  return option?.previousElementSibling as HTMLElement;
};

const focusOption = (element: HTMLElement, direction: string) => {
  const getNext = direction === 'down' ? getNextOption : getPrevOption;
  let iterateElement = getNext(element);

  while (iterateElement) {
    if (!isDisabledElement(iterateElement)) {
      iterateElement.focus();
      break;
    }
    iterateElement = getNext(iterateElement);
  }
};

export const onKeyDown = (event: React.KeyboardEvent) => {
  const sourceElement = event.target as HTMLElement;

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      focusOption(sourceElement, 'down');
      break;
    case 'ArrowUp':
      event.preventDefault();
      focusOption(sourceElement, 'up');
      break;
    default:
      break;
  }
};
