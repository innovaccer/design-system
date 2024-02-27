import { focusListItem, handleKeyDown } from '../avatarsSelection/utils';

describe('AvatarSelection component focusListItem utility test', () => {
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

describe('AvatarSelection component focusListItem utility test', () => {
  let setOpenPopover: jest.Mock;
  let setHighlightFirstItem: jest.Mock;
  let setHighlightLastItem: jest.Mock;

  beforeEach(() => {
    setOpenPopover = jest.fn();
    setHighlightFirstItem = jest.fn();
    setHighlightLastItem = jest.fn();
  });

  it('should set popover open and highlight last item when "ArrowUp" is pressed', () => {
    const event: any = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);

    expect(setOpenPopover).toHaveBeenCalledWith(true);
    expect(setHighlightLastItem).toHaveBeenCalledWith(true);
    expect(setHighlightFirstItem).not.toHaveBeenCalled();
  });

  it('should set popover open and highlight first item when "ArrowDown" is pressed', () => {
    const event: any = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);

    expect(setOpenPopover).toHaveBeenCalledWith(true);
    expect(setHighlightFirstItem).toHaveBeenCalledWith(true);
    expect(setHighlightLastItem).not.toHaveBeenCalled();
  });

  it('should set popover open and highlight first item when "Enter" is pressed', () => {
    const event: any = new KeyboardEvent('keydown', { key: 'Enter' });
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);

    expect(setOpenPopover).toHaveBeenCalled();
    expect(setHighlightFirstItem).toHaveBeenCalled();
    expect(setHighlightLastItem).not.toHaveBeenCalled();
  });
});
