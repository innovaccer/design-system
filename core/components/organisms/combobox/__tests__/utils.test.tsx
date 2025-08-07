import { focusListItem, handleKeyDown } from '../trigger/utils';

describe('Combobox component focusListItem utility test', () => {
  // Create reusable mock references to the list and the setState function
  const mockSetFocusedOption = jest.fn();
  const mockListItems = [document.createElement('div'), document.createElement('div')];
  mockListItems.forEach((item) => item.setAttribute('data-test', 'DesignSystem-Listbox-ItemWrapper'));

  const mockListRef = {
    current: {
      querySelectorAll: jest.fn(() => mockListItems),
    },
  };

  beforeEach(() => {
    mockSetFocusedOption.mockClear();
    mockListRef.current.querySelectorAll.mockClear();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should focus on the first item when position is "down"', () => {
    jest.spyOn(mockListItems[0], 'focus');

    focusListItem('down', mockSetFocusedOption, mockListRef);

    expect(mockListRef.current.querySelectorAll).toHaveBeenCalledWith('[data-test="DesignSystem-Listbox-ItemWrapper"]');
    expect(mockSetFocusedOption).toHaveBeenCalledWith(mockListItems[0]);
    expect(mockListItems[0].focus).toHaveBeenCalled();
  });

  it('should focus on the last item when position is not "down"', () => {
    jest.spyOn(mockListItems[1], 'focus');

    focusListItem('up', mockSetFocusedOption, mockListRef);

    expect(mockListRef.current.querySelectorAll).toHaveBeenCalledWith('[data-test="DesignSystem-Listbox-ItemWrapper"]');
    expect(mockSetFocusedOption).toHaveBeenCalledWith(mockListItems[1]);
    expect(mockListItems[1].focus).toHaveBeenCalled();
  });
});

describe('Combobox component focusListItem utility test', () => {
  let setOpenPopover: jest.Mock;
  let listRef: any;
  let setFocusedOption: jest.Mock;

  beforeEach(() => {
    setOpenPopover = jest.fn();
    setFocusedOption = jest.fn();
    listRef = { current: document.createElement('div') };
  });

  it('should set popover open and focus last item when "ArrowUp" is pressed', () => {
    const event: any = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    jest.useFakeTimers();

    handleKeyDown(event, setOpenPopover, listRef, setFocusedOption);

    expect(setOpenPopover).toHaveBeenCalledWith(true);
    jest.runAllTimers();
    expect(setFocusedOption).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it('should set popover open and focus first item when "ArrowDown" is pressed', () => {
    const event: any = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    jest.useFakeTimers();

    handleKeyDown(event, setOpenPopover, listRef, setFocusedOption);

    expect(setOpenPopover).toHaveBeenCalledWith(true);
    jest.runAllTimers();
    expect(setFocusedOption).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it('should close popover when "Escape" is pressed', () => {
    const event: any = new KeyboardEvent('keydown', { key: 'Escape' });
    handleKeyDown(event, setOpenPopover, listRef, setFocusedOption);

    expect(setOpenPopover).toHaveBeenCalledWith(false);
    expect(setFocusedOption).not.toHaveBeenCalled();
  });

  it('should not call any setters when a irrelevant key is pressed', () => {
    const event: any = new KeyboardEvent('keydown', { key: 'Enter' });
    handleKeyDown(event, setOpenPopover, listRef, setFocusedOption);

    expect(setOpenPopover).not.toHaveBeenCalled();
    expect(setFocusedOption).not.toHaveBeenCalled();
  });
});
