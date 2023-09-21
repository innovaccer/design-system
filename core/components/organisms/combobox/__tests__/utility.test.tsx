import { handleKeyDown } from '../utils';

describe('handleKeyDown function', () => {
  let inputTriggerRef: any;
  let focusedOption: Element;
  let setFocusedOption: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  let setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>;
  let setHighlightFirstItem: React.Dispatch<React.SetStateAction<boolean>>;
  let setHighlightLastItem: React.Dispatch<React.SetStateAction<boolean>>;
  let listRef: any;

  const mockListItems = [document.createElement('div'), document.createElement('div')];
  mockListItems.forEach((item) => item.setAttribute('data-test', 'DesignSystem-Listbox-ItemWrapper'));

  beforeEach(() => {
    // Setup mock functions to track calls
    setFocusedOption = jest.fn();
    setOpenPopover = jest.fn();
    setHighlightFirstItem = jest.fn();
    setHighlightLastItem = jest.fn();
    inputTriggerRef = { current: { focus: jest.fn() } };
    listRef = {
      current: {
        querySelectorAll: jest.fn(() => mockListItems),
      },
    };
    focusedOption = document.createElement('div');
  });

  it('should navigate up when ArrowUp is pressed', () => {
    const event: React.KeyboardEvent<Element> = new KeyboardEvent('keydown', { key: 'ArrowUp' }) as any;
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      undefined,
      inputTriggerRef,
      undefined,
      undefined,
      undefined,
      listRef
    );
    expect(setFocusedOption).toHaveBeenCalled();
  });

  it('should navigate down when ArrowDown is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      undefined,
      inputTriggerRef,
      undefined,
      undefined,
      undefined,
      listRef
    );
    expect(setFocusedOption).toHaveBeenCalled();
  });

  it('should call handleEnterKey and reset highlights when Enter is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' }) as any;
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      inputTriggerRef,
      setHighlightFirstItem,
      setHighlightLastItem,
      true,
      listRef
    );
    expect(setHighlightFirstItem).toHaveBeenCalledWith(false);
    expect(setHighlightLastItem).toHaveBeenCalledWith(false);
  });

  it('should close popover and clear focused option when Escape is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Escape' }) as any;
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      inputTriggerRef,
      setHighlightFirstItem,
      setHighlightLastItem,
      true,
      listRef
    );
    expect(setOpenPopover).toHaveBeenCalledWith(false);
    expect(inputTriggerRef.current.focus).toHaveBeenCalled();
    expect(setFocusedOption).toHaveBeenCalledWith(undefined);
  });
});
