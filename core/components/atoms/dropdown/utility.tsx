import { OptionSchema as Option } from './option';

export const getSearchedOptions = (options: any, searchTerm: string) => {
  const result = options.filter((option: Option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
  return result;
};

export const _isEqual = (arr1: Option[], arr2: Option[]) =>
  arr1.length === arr2.length &&
  arr1.every((option, index) => option.value === arr2[index].value || option.label === arr2[index].label);

export const _isControlled = (selected?: Option[]) => selected !== undefined;

export const _isOpenControlled = (open?: boolean) => open !== undefined;

export const _showSelectedItems = (bulk: boolean, searchTerm: string, withCheckbox?: boolean) =>
  bulk && withCheckbox && searchTerm === '';

export const _isSelectAllPresent = (
  searchTerm: string,
  bulkOptions: number,
  withSelectAll: boolean,
  withCheckbox?: boolean
) => withCheckbox && withSelectAll && bulkOptions === 0 && searchTerm === '';

export const scrollTo = (element: Element, top: number) => {
  element.scrollTo(0, top);
};

export const scrollIntoView = (menuElement: HTMLDivElement | null, focusedElement: HTMLElement) => {
  const menuRect = menuElement?.getBoundingClientRect();
  const focusedRect = focusedElement.getBoundingClientRect();
  const overscroll = focusedElement.offsetHeight;

  if (focusedRect.bottom > menuRect!.bottom && menuElement) {
    scrollTo(menuElement, focusedElement.offsetTop - menuRect!.height + overscroll);
  } else if (focusedRect.top < menuRect!.top && menuElement) {
    scrollTo(menuElement, focusedElement.offsetTop - overscroll);
  }
};

export const getSelectAll = (selected: Option[], optionsLength: number, disabledOptionsLength: number) => {
  if (selected.length) {
    if (selected.length > 0 && disabledOptionsLength > 0 && selected.length === optionsLength - disabledOptionsLength) {
      return { indeterminate: true, checked: true }; //
    }
    const indeterminate = selected.length > 0 && selected.length !== optionsLength;
    const checked = selected.length > 0 && selected.length === optionsLength;
    const obj = { checked, indeterminate };
    return obj;
  }
  return { indeterminate: false, checked: false };
};
