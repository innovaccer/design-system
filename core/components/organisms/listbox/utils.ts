const isDisabledElement = (element: HTMLElement) => {
  return element && element.getAttribute('data-disabled') === 'true';
};

const getNextSibling = (element: HTMLElement) => {
  // element is now the outer wrapper (ListboxItem Tag), so nextSibling is the next wrapper
  return element?.nextSibling as HTMLElement;
};

const getPrevSibling = (element: HTMLElement) => {
  // element is now the outer wrapper (ListboxItem Tag), so previousSibling is the prev wrapper
  return element?.previousSibling as HTMLElement;
};

const focusOption = (element: HTMLElement, direction: string) => {
  let iterateElement = element;

  while (iterateElement) {
    // Check the inner div for disabled state
    const innerElement = iterateElement.querySelector('[data-test="DesignSystem-Listbox-ItemWrapper"]') as HTMLElement;
    if (!isDisabledElement(innerElement)) {
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
  // currentTarget is the Listbox.Item root (`li`/`div`); target may be inner row content.
  const sourceElement = event.currentTarget as HTMLElement;
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
