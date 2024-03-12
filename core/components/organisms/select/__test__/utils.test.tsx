import {
  mapInitialValue,
  elementExist,
  removeOrAddToList,
  computeValue,
  handleKeyDownTrigger,
  focusListItem,
  handleKeyDown,
  handleEnterKey,
  navigateOptions,
  handleInputKeyDown,
} from '../utils';
import { OptionType } from '@/common.type';

const dummyOption: OptionType = { label: 'Option 1', value: '1' };
const dummyOption2: OptionType = { label: 'Option 2', value: '2' };
const dummyOptionsArray: OptionType[] = [dummyOption, dummyOption2];

describe('mapInitialValue function', () => {
  it('should return array when multiSelect is true and selectedValue is an object', () => {
    expect(mapInitialValue(true, dummyOption)).toEqual([dummyOption]);
  });

  it('should return empty array when multiSelect is true and selectedValue is undefined', () => {
    expect(mapInitialValue(true, undefined)).toEqual([]);
  });

  it('should return the array unchanged when multiSelect is true and selectedValue is an array', () => {
    expect(mapInitialValue(true, dummyOptionsArray)).toEqual(dummyOptionsArray);
  });

  it('should return a default object when multiSelect is false and selectedValue is undefined', () => {
    expect(mapInitialValue(false, undefined)).toEqual({ label: '', value: '' });
  });

  it('should return selectedValue as-is when multiSelect is false and selectedValue is object', () => {
    expect(mapInitialValue(false, dummyOption)).toEqual(dummyOption);
  });
});

describe('elementExist function', () => {
  it('should find element and return its index when targetObject exists in mainList', () => {
    expect(elementExist(dummyOption, dummyOptionsArray)).toBe(0);
  });

  it('should return -1 if targetObject does not exist in mainList', () => {
    const newOption = { label: 'Option 3', value: '3' };
    expect(elementExist(newOption, dummyOptionsArray)).toBe(-1);
  });

  it('should return 0 if targetObject matches the single mainList object', () => {
    expect(elementExist(dummyOption, dummyOption)).toBe(0);
  });

  it('should return -1 if targetObject does not match the single mainList object', () => {
    const newOption = { label: 'Option 3', value: '3' };
    expect(elementExist(newOption, dummyOption)).toBe(-1);
  });
});

describe('removeOrAddToList function', () => {
  it('should remove targetObject from prevList if it exists', () => {
    expect(removeOrAddToList(dummyOption, dummyOptionsArray)).toEqual([dummyOption2]);
  });

  it('should add targetObject to prevList if it does not exist', () => {
    const newOption = { label: 'Option 3', value: '3' };
    expect(removeOrAddToList(newOption, dummyOptionsArray)).toEqual([...dummyOptionsArray, newOption]);
  });
});

describe('computeValue function', () => {
  it('should return custom labels if multiSelect is true and selectValue is an array of length <= 2', () => {
    const multiSelect = true;
    const setLabelHandler = (count: number) => `${count} custom label`;
    const selectValue = [
      { value: 'value1', label: 'Label 1' },
      { value: 'value2', label: 'Label 2' },
    ];
    expect(computeValue(multiSelect, selectValue, setLabelHandler)).toEqual('2 custom label');
  });

  it('should return comma-separated labels if multiSelect is true and selectValue is an array of length <= 2', () => {
    const multiSelect = true;
    const selectValue = [
      { value: 'value1', label: 'Label 1' },
      { value: 'value2', label: 'Label 2' },
    ];
    expect(computeValue(multiSelect, selectValue, undefined)).toEqual('Label 1, Label 2');
  });

  it('should return the custom label if multiSelect is true and selectValue is an array of length > 2', () => {
    const multiSelect = true;
    const setLabelHandler = (count: number) => `${count} custom label`;
    const selectValue = [
      { value: 'value1', label: 'Label 1' },
      { value: 'value2', label: 'Label 2' },
      { value: 'value3', label: 'Label 3' },
    ];
    expect(computeValue(multiSelect, selectValue, setLabelHandler)).toEqual('3 custom label');
  });

  it('should return the trimmed label if multiSelect is false and custom label is not passed', () => {
    const multiSelect = false;
    const selectValue = { value: 'value', label: ' Label ' };
    expect(computeValue(multiSelect, selectValue, undefined)).toEqual('Label');
  });

  it('should return empty string if selectValue.label is an empty string', () => {
    const multiSelect = true;
    const selectValue = [{ value: 'value', label: '' }];
    expect(computeValue(multiSelect, selectValue, undefined)).toEqual('');
  });

  it('should return the label if multiSelect is undefined and selectValue.label has leading/trailing spaces', () => {
    const multiSelect = undefined;
    const selectValue = { value: 'value', label: ' Label ' };
    expect(computeValue(multiSelect, selectValue, undefined)).toEqual('Label');
  });
});

describe('handleKeyDownTrigger function', () => {
  let setOpenPopoverMock: jest.Mock;
  let setHighlightFirstItemMock: jest.Mock;
  let setHighlightLastItemMock: jest.Mock;

  beforeEach(() => {
    setOpenPopoverMock = jest.fn();
    setHighlightFirstItemMock = jest.fn();
    setHighlightLastItemMock = jest.fn();
  });

  it('should call setOpenPopover(true) and setHighlightFirstItem(true) when "Enter" key is pressed', () => {
    const event: React.KeyboardEvent = { key: 'Enter', preventDefault: jest.fn() } as unknown as React.KeyboardEvent;
    handleKeyDownTrigger(event, setOpenPopoverMock, setHighlightFirstItemMock);
    expect(setOpenPopoverMock).toHaveBeenCalledWith(true);
    expect(setHighlightFirstItemMock).toHaveBeenCalledWith(true);
  });

  it('should call setOpenPopover(true) and setHighlightFirstItem(true) when "ArrowDown" key is pressed', () => {
    const event: React.KeyboardEvent = { key: 'ArrowDown' } as React.KeyboardEvent;
    handleKeyDownTrigger(event, setOpenPopoverMock, setHighlightFirstItemMock);
    expect(setOpenPopoverMock).toHaveBeenCalledWith(true);
    expect(setHighlightFirstItemMock).toHaveBeenCalledWith(true);
  });

  it('should call setOpenPopover(true) and setHighlightLastItem(true) when "ArrowUp" key is pressed', () => {
    const event: React.KeyboardEvent = { key: 'ArrowUp' } as React.KeyboardEvent;
    handleKeyDownTrigger(event, setOpenPopoverMock, undefined, setHighlightLastItemMock);
    expect(setOpenPopoverMock).toHaveBeenCalledWith(true);
    expect(setHighlightLastItemMock).toHaveBeenCalledWith(true);
  });

  it('should not call any setter functions when an unrecognized key is pressed', () => {
    const event: React.KeyboardEvent = { key: 'Escape' } as React.KeyboardEvent; // Unrecognized key
    handleKeyDownTrigger(event, setOpenPopoverMock, setHighlightFirstItemMock, setHighlightLastItemMock);
    expect(setOpenPopoverMock).not.toHaveBeenCalled();
    expect(setHighlightFirstItemMock).not.toHaveBeenCalled();
    expect(setHighlightLastItemMock).not.toHaveBeenCalled();
  });

  it('should not call any setter functions when they are not provided as arguments', () => {
    const event: React.KeyboardEvent = { key: 'Enter', preventDefault: jest.fn() } as unknown as React.KeyboardEvent;
    handleKeyDownTrigger(event);
    // No assertion for this test case as it's checking for absence of function calls
  });
});

describe('handleKeyDown function', () => {
  let setFocusedOptionMock: jest.Mock;
  let setHighlightFirstItemMock: jest.Mock;
  let setHighlightLastItemMock: jest.Mock;
  let preventDefaultMock: jest.Mock;
  let listRefMock: { current: HTMLElement | null };
  let triggerRefMock: { current: HTMLElement | null };

  beforeEach(() => {
    setFocusedOptionMock = jest.fn();
    setHighlightFirstItemMock = jest.fn();
    setHighlightLastItemMock = jest.fn();
    preventDefaultMock = jest.fn();
    listRefMock = { current: document.createElement('div') };
    triggerRefMock = { current: document.createElement('input') };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate options upwards when "ArrowUp" key is pressed', () => {
    const focusedOption = document.createElement('div');
    const event: React.KeyboardEvent = {
      key: 'ArrowUp',
      preventDefault: preventDefaultMock,
    } as unknown as React.KeyboardEvent;
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOptionMock,
      setHighlightFirstItemMock,
      setHighlightLastItemMock,
      listRefMock,
      true
    );
    expect(preventDefaultMock).toHaveBeenCalled();
  });

  it('should navigate options downwards when "ArrowDown" key is pressed', () => {
    const focusedOption = document.createElement('div');
    const event: React.KeyboardEvent = {
      key: 'ArrowDown',
      preventDefault: preventDefaultMock,
    } as unknown as React.KeyboardEvent;
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOptionMock,
      setHighlightFirstItemMock,
      setHighlightLastItemMock,
      listRefMock,
      true
    );
    expect(preventDefaultMock).toHaveBeenCalled();
  });

  it('should handle "Enter" key press', () => {
    const event: React.KeyboardEvent = {
      key: 'Enter',
      preventDefault: preventDefaultMock,
    } as unknown as React.KeyboardEvent;
    handleKeyDown(
      event,
      document.createElement('div'),
      setFocusedOptionMock,
      setHighlightFirstItemMock,
      setHighlightLastItemMock,
      listRefMock,
      true
    );
    expect(setHighlightFirstItemMock).toHaveBeenCalledWith(false);
    expect(setHighlightLastItemMock).toHaveBeenCalledWith(false);
  });

  it('should not call any functions if an unrecognized key is pressed', () => {
    const event: React.KeyboardEvent = {
      key: 'UnknownKey',
      preventDefault: preventDefaultMock,
    } as unknown as React.KeyboardEvent;
    handleKeyDown(
      event,
      document.createElement('div'),
      setFocusedOptionMock,
      setHighlightFirstItemMock,
      setHighlightLastItemMock,
      listRefMock,
      true,
      jest.fn(),
      triggerRefMock
    );
    expect(preventDefaultMock).not.toHaveBeenCalled();
    expect(setFocusedOptionMock).not.toHaveBeenCalled();
    expect(setHighlightFirstItemMock).not.toHaveBeenCalled();
    expect(setHighlightLastItemMock).not.toHaveBeenCalled();
  });
});

describe('focusListItem function', () => {
  let setFocusedOptionMock: jest.Mock;
  let listRefMock: { current: HTMLElement | null };
  let searchInputMock: any;
  let listItemsMock: any;

  beforeEach(() => {
    setFocusedOptionMock = jest.fn();
    listRefMock = { current: document.createElement('div') };
    searchInputMock = [document.createElement('input')];
    listItemsMock = [document.createElement('div'), document.createElement('div'), document.createElement('div')];

    jest
      .spyOn(listRefMock.current!, 'querySelectorAll')
      .mockReturnValueOnce(searchInputMock)
      .mockReturnValueOnce(listItemsMock);

    searchInputMock[0].focus = jest.fn();
    searchInputMock[0].scrollIntoView = jest.fn();
    listItemsMock.forEach((item: any) => {
      item.focus = jest.fn();
      item.scrollIntoView = jest.fn();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should focus on the first item when position is "down"', () => {
    const focusMock = jest.fn();
    const scrollIntoViewMock = jest.fn();
    const targetOption = listItemsMock[0];
    targetOption.focus = focusMock;
    targetOption.scrollIntoView = scrollIntoViewMock;
    focusListItem('down', setFocusedOptionMock, listRefMock);
    expect(setFocusedOptionMock).toHaveBeenCalled();
  });

  it('should focus on the search input when position is "down" and no list items are available', () => {
    const focusMock = jest.fn();
    const scrollIntoViewMock = jest.fn();
    const targetOption = searchInputMock[0];
    targetOption.focus = focusMock;
    targetOption.scrollIntoView = scrollIntoViewMock;
    focusListItem('down', setFocusedOptionMock, listRefMock);
    expect(focusMock).toHaveBeenCalled();
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ block: 'center' });
    expect(setFocusedOptionMock).toHaveBeenCalledWith(targetOption);
  });

  it('should focus on the last item when position is not "down"', () => {
    const focusMock = jest.fn();
    const scrollIntoViewMock = jest.fn();
    const targetOption = listItemsMock[2];
    targetOption.focus = focusMock;
    targetOption.scrollIntoView = scrollIntoViewMock;
    focusListItem('up', setFocusedOptionMock, listRefMock);
    expect(focusMock).toHaveBeenCalled();
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ block: 'center' });
    expect(setFocusedOptionMock).toHaveBeenCalledWith(targetOption);
  });
});

describe('handleEnterKey function', () => {
  it('should call click on the focused option element', () => {
    const clickMock = jest.fn();
    const focusedOption = document.createElement('div');
    focusedOption.click = clickMock;
    handleEnterKey(focusedOption);
    expect(clickMock).toHaveBeenCalled();
  });

  it('should not throw an error if focusedOption is undefined', () => {
    expect(() => handleEnterKey(undefined)).not.toThrow();
  });
});

describe('navigateOptions function', () => {
  let setFocusedOptionMock: jest.Mock;
  let listRefMock: any;
  let listItemsMock: any;
  let searchInputMock: any;

  beforeEach(() => {
    setFocusedOptionMock = jest.fn();
    listItemsMock = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
    searchInputMock = document.createElement('input');
    listRefMock = {
      current: {
        querySelectorAll: jest.fn(() => listItemsMock),
        querySelector: jest.fn(() => searchInputMock),
      },
    };
    searchInputMock.focus = jest.fn();
    searchInputMock.scrollIntoView = jest.fn();
    listItemsMock.forEach((item: any) => {
      item.focus = jest.fn();
      item.scrollIntoView = jest.fn();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should focus on the previous option when direction is "up"', () => {
    const focusedOption = listItemsMock[1];
    navigateOptions('up', focusedOption, setFocusedOptionMock, listRefMock, true);
    expect(listItemsMock[0].focus).toHaveBeenCalled();
    expect(setFocusedOptionMock).toHaveBeenCalledWith(listItemsMock[0]);
    expect(listItemsMock[0].scrollIntoView).toHaveBeenCalledWith({ block: 'center' });
  });

  it('should focus on the next option when direction is "down"', () => {
    const focusedOption = listItemsMock[1];
    navigateOptions('down', focusedOption, setFocusedOptionMock, listRefMock, true);
    expect(listItemsMock[2].focus).toHaveBeenCalled();
    expect(setFocusedOptionMock).toHaveBeenCalledWith(listItemsMock[2]);
    expect(listItemsMock[2].scrollIntoView).toHaveBeenCalledWith({ block: 'center' });
  });

  it('should not focus on the search input when withSearch is false', () => {
    navigateOptions('up', undefined, setFocusedOptionMock, listRefMock, false);
    expect(searchInputMock.focus).not.toHaveBeenCalled();
    expect(setFocusedOptionMock).not.toHaveBeenCalled();
  });
});

describe('handleInputKeyDown function', () => {
  let setFocusedOptionMock: jest.Mock;
  let setOpenPopoverMock: jest.Mock;
  let listRefMock: any;
  let listItemsMock: HTMLElement[];
  let triggerRefMock: any;

  beforeEach(() => {
    setFocusedOptionMock = jest.fn();
    setOpenPopoverMock = jest.fn();
    listRefMock = {
      current: {
        querySelectorAll: jest.fn(() => listItemsMock),
      },
    };
    listItemsMock = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
    triggerRefMock = { current: { focus: jest.fn() } };
    listItemsMock.forEach((item) => {
      item.focus = jest.fn();
      item.scrollIntoView = jest.fn();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should focus on the last option when "ArrowUp" key is pressed', () => {
    const event: React.KeyboardEvent = { key: 'ArrowUp', preventDefault: jest.fn() } as unknown as React.KeyboardEvent;
    handleInputKeyDown(event, listRefMock, setFocusedOptionMock, setOpenPopoverMock, triggerRefMock);
    expect(listItemsMock[2].focus).toHaveBeenCalled();
    expect(setFocusedOptionMock).toHaveBeenCalledWith(listItemsMock[2]);
    expect(listItemsMock[2].scrollIntoView).toHaveBeenCalledWith({ block: 'center' });
  });

  it('should focus on the first option when "ArrowDown" key is pressed', () => {
    const event: React.KeyboardEvent = {
      key: 'ArrowDown',
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent;
    handleInputKeyDown(event, listRefMock, setFocusedOptionMock, setOpenPopoverMock, triggerRefMock);
    expect(listItemsMock[0].focus).toHaveBeenCalled();
    expect(setFocusedOptionMock).toHaveBeenCalledWith(listItemsMock[0]);
    expect(listItemsMock[0].scrollIntoView).toHaveBeenCalledWith({ block: 'center' });
  });

  it('should close popover, focus on triggerRef, and clear focused option when "Escape" key is pressed', () => {
    const event: React.KeyboardEvent = { key: 'Escape', preventDefault: jest.fn() } as unknown as React.KeyboardEvent;
    handleInputKeyDown(event, listRefMock, setFocusedOptionMock, setOpenPopoverMock, triggerRefMock);
    expect(setOpenPopoverMock).toHaveBeenCalledWith(false);
    expect(triggerRefMock.current.focus).toHaveBeenCalled();
    expect(setFocusedOptionMock).toHaveBeenCalledWith(undefined);
  });
});
