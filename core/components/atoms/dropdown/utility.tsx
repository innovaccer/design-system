export const getSearchedOptions = (options: any, searchTerm: string) => {
  const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
  return result;
};

export const _isEqual = (arr1: any[], arr2: any[]) => (
  (arr1.length === arr2.length) && arr1.every((option, index) => (
    option.value === arr2[index].value || option.label === arr2[index].label
  ))
);

export const scrollTo = (element: Element, top: number) => {
  element.scrollTo(0, top);
};

export const scrollIntoView = (menuElement: HTMLDivElement | null, focusedElement: HTMLElement) => {
  const menuRect = menuElement?.getBoundingClientRect();
  const focusedRect = focusedElement.getBoundingClientRect();
  const overscroll = focusedElement.offsetHeight;

  if (focusedRect.bottom > menuRect!.bottom && menuElement) {
    scrollTo(
      menuElement,
      focusedElement.offsetTop - menuRect!.height + overscroll
    );
  } else if (focusedRect.top < menuRect!.top && menuElement) {
    scrollTo(
      menuElement,
      focusedElement.offsetTop - overscroll
    );
  }
};

export const getSelectAll = (selected: any[], optionsLength: number) => {
  if (selected.length) {
    const indeterminate = selected.length > 0 && selected.length !== optionsLength;
    const checked = selected.length > 0 && selected.length === optionsLength;
    const obj = { checked, indeterminate };
    return obj;
  }
  return { indeterminate: false, checked: false };
};
