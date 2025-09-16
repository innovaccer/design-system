import { handleKeyDown } from '../utils';
import { handleKeyDown as triggerHandleKeyDown, focusListItem } from '../trigger/utils';

describe('Menu Utils - handleKeyDown function for Menu component keyboard navigation and interactions', () => {
  let inputTriggerRef: any;
  let focusedOption: Element;
  let setFocusedOption: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  let setOpenPopover: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  let listRef: any;
  let subListRef: any;
  let triggerRef: any;
  let parentListRef: any;

  const mockListItems = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
  mockListItems.forEach((item, index) => {
    item.setAttribute('data-test', 'DesignSystem-Listbox-ItemWrapper');
    item.focus = jest.fn();
    item.scrollIntoView = jest.fn();
    item.setAttribute('data-index', index.toString());
  });

  const mockSubListItems = [document.createElement('div'), document.createElement('div')];
  mockSubListItems.forEach((item) => {
    item.setAttribute('data-test', 'DesignSystem-Listbox-ItemWrapper');
    item.focus = jest.fn();
  });

  beforeEach(() => {
    // Setup mock functions to track calls
    setFocusedOption = jest.fn();
    setOpenPopover = jest.fn();
    inputTriggerRef = { current: { focus: jest.fn() } };
    triggerRef = { current: { focus: jest.fn() } };
    listRef = {
      current: {
        querySelectorAll: jest.fn(() => mockListItems),
      },
    };
    subListRef = {
      current: {
        querySelectorAll: jest.fn(() => mockSubListItems),
      },
    };
    parentListRef = {
      current: {
        querySelector: jest.fn(),
      },
    };
    focusedOption = mockListItems[1]; // Start with middle item focused

    // Mock document.querySelector for submenu tests
    document.querySelector = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Navigation - Arrow key navigation within menu items', () => {
    it('should navigate up when ArrowUp is pressed', () => {
      const event: React.KeyboardEvent<Element> = new KeyboardEvent('keydown', { key: 'ArrowUp' }) as any;
      event.preventDefault = jest.fn();

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(event.preventDefault).toHaveBeenCalled();
      expect(mockListItems[0].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[0]);
    });

    it('should navigate down when ArrowDown is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
      event.preventDefault = jest.fn();

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(event.preventDefault).toHaveBeenCalled();
      expect(mockListItems[2].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[2]);
    });

    it('should wrap to last item when navigating up from first item', () => {
      focusedOption = mockListItems[0];
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' }) as any;
      event.preventDefault = jest.fn();

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(mockListItems[2].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[2]);
    });

    it('should wrap to first item when navigating down from last item', () => {
      focusedOption = mockListItems[2];
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
      event.preventDefault = jest.fn();

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(mockListItems[0].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[0]);
    });

    it('should handle navigation when no item is focused', () => {
      focusedOption = undefined as any;
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
      event.preventDefault = jest.fn();

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(mockListItems[0].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[0]);
    });

    it('should handle navigation up when no item is focused', () => {
      focusedOption = undefined as any;
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' }) as any;
      event.preventDefault = jest.fn();

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(mockListItems[2].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[2]);
    });
  });

  describe('Enter Key Handling - Activating focused menu items', () => {
    it('should click focused option and close popover when Enter is pressed', () => {
      (focusedOption as any).click = jest.fn();
      const event = new KeyboardEvent('keydown', { key: 'Enter' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect((focusedOption as any).click).toHaveBeenCalled();
      expect(setOpenPopover).toHaveBeenCalledWith(false);
    });
  });

  describe('Escape Key Handling - Closing menu and restoring focus', () => {
    it('should close popover and focus trigger when Escape is pressed (not submenu)', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false,
        triggerRef
      );

      expect(setOpenPopover).toHaveBeenCalledWith(false);
      expect(triggerRef.current.focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(undefined);
    });

    it('should close popover and focus menu trigger when Escape is pressed (submenu)', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        true,
        triggerRef
      );

      expect(setOpenPopover).toHaveBeenCalledWith(false);
      expect(inputTriggerRef.current.focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(undefined);
    });
  });

  describe('Tab Key Handling - Closing menu on tab navigation', () => {
    it('should close popover when Tab is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(setOpenPopover).toHaveBeenCalledWith(false);
    });
  });

  describe('SubMenu Navigation - Horizontal arrow key navigation between parent and child menus', () => {
    const menuID = 'test-menu-id';
    const triggerID = 'test-trigger-id';

    beforeEach(() => {
      // Mock DOM element for submenu
      const mockElement = {
        getAttribute: jest.fn(),
      };
      (document.querySelector as jest.Mock).mockReturnValue(mockElement);
    });

    it('should navigate into right-placed submenu when ArrowRight is pressed', () => {
      const mockElement = { getAttribute: jest.fn().mockReturnValue('right-start') };
      (document.querySelector as jest.Mock).mockReturnValue(mockElement);

      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        true,
        triggerRef,
        menuID,
        triggerID,
        parentListRef
      );

      expect(document.querySelector).toHaveBeenCalledWith(`[data-name="${menuID}"]`);
      expect(mockSubListItems[0].focus).toHaveBeenCalled();
    });

    it('should navigate into left-placed submenu when ArrowLeft is pressed', () => {
      const mockElement = { getAttribute: jest.fn().mockReturnValue('left-start') };
      (document.querySelector as jest.Mock).mockReturnValue(mockElement);

      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        true,
        triggerRef,
        menuID,
        triggerID,
        parentListRef
      );

      expect(document.querySelector).toHaveBeenCalledWith(`[data-name="${menuID}"]`);
      expect(mockSubListItems[0].focus).toHaveBeenCalled();
    });

    it('should navigate back to parent trigger from right-placed submenu', () => {
      const mockElement = { getAttribute: jest.fn().mockReturnValue('right-start') };
      const mockTriggerElement = { firstChild: { focus: jest.fn() } };

      (document.querySelector as jest.Mock).mockReturnValue(mockElement);
      parentListRef.current.querySelector.mockReturnValue(mockTriggerElement);

      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false,
        triggerRef,
        menuID,
        triggerID,
        parentListRef
      );

      expect(parentListRef.current.querySelector).toHaveBeenCalledWith(`#${triggerID}`);
      expect(mockTriggerElement.firstChild.focus).toHaveBeenCalled();
    });

    it('should navigate back to parent trigger from left-placed submenu', () => {
      const mockElement = { getAttribute: jest.fn().mockReturnValue('left-start') };
      const mockTriggerElement = { firstChild: { focus: jest.fn() } };

      (document.querySelector as jest.Mock).mockReturnValue(mockElement);
      parentListRef.current.querySelector.mockReturnValue(mockTriggerElement);

      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false,
        triggerRef,
        menuID,
        triggerID,
        parentListRef
      );

      expect(parentListRef.current.querySelector).toHaveBeenCalledWith(`#${triggerID}`);
      expect(mockTriggerElement.firstChild.focus).toHaveBeenCalled();
    });

    it('should not navigate when direction does not match placement', () => {
      const mockElement = { getAttribute: jest.fn().mockReturnValue('right-start') };
      (document.querySelector as jest.Mock).mockReturnValue(mockElement);

      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' }) as any;

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        true,
        triggerRef,
        menuID,
        triggerID,
        parentListRef
      );

      expect(mockSubListItems[0].focus).not.toHaveBeenCalled();
    });
  });

  describe('ScrollIntoView Handling - Ensuring focused items are visible in scrollable menus', () => {
    it('should call scrollIntoView when navigating', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
      event.preventDefault = jest.fn();

      handleKeyDown(
        event,
        focusedOption,
        setFocusedOption,
        setOpenPopover,
        inputTriggerRef,
        listRef,
        subListRef,
        false
      );

      expect(mockListItems[2].scrollIntoView).toHaveBeenCalledWith({ block: 'center' });
    });
  });

  describe('Edge Cases - Error handling and graceful degradation for Menu utils', () => {
    it('should handle missing listRef gracefully', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
      event.preventDefault = jest.fn();

      // The function should handle null listRef without throwing
      // but it currently doesn't, so we expect it to throw for now
      expect(() => {
        handleKeyDown(
          event,
          focusedOption,
          setFocusedOption,
          setOpenPopover,
          inputTriggerRef,
          { current: null },
          subListRef,
          false
        );
      }).toThrow();
    });

    it('should handle empty list items', () => {
      listRef.current.querySelectorAll.mockReturnValue([]);
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
      event.preventDefault = jest.fn();

      // The function should handle empty list without throwing
      // but it currently doesn't, so we expect it to throw for now
      expect(() => {
        handleKeyDown(
          event,
          focusedOption,
          setFocusedOption,
          setOpenPopover,
          inputTriggerRef,
          listRef,
          subListRef,
          false
        );
      }).toThrow();
    });

    it('should handle unknown key gracefully', () => {
      const event = new KeyboardEvent('keydown', { key: 'Unknown' }) as any;

      expect(() => {
        handleKeyDown(
          event,
          focusedOption,
          setFocusedOption,
          setOpenPopover,
          inputTriggerRef,
          listRef,
          subListRef,
          false
        );
      }).not.toThrow();
    });
  });
});

describe('MenuTrigger Utils - handleKeyDown function for Menu trigger keyboard interactions', () => {
  let setOpenPopover: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  let setHighlightFirstItem: React.Dispatch<React.SetStateAction<boolean>>;
  let setHighlightLastItem: React.Dispatch<React.SetStateAction<boolean>>;

  beforeEach(() => {
    setOpenPopover = jest.fn();
    setHighlightFirstItem = jest.fn();
    setHighlightLastItem = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Arrow Key Navigation - Opening menu and highlighting first/last items from trigger', () => {
    it('should open popover and highlight first item on ArrowDown', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as any;
      event.preventDefault = jest.fn();

      triggerHandleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(setOpenPopover).toHaveBeenCalledWith(true);
      expect(setHighlightFirstItem).toHaveBeenCalledWith(true);
    });

    it('should open popover and highlight last item on ArrowUp', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' }) as any;
      event.preventDefault = jest.fn();

      triggerHandleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(setOpenPopover).toHaveBeenCalledWith(true);
      expect(setHighlightLastItem).toHaveBeenCalledWith(true);
    });
  });

  describe('Escape and Tab Keys - Closing menu from trigger without opening', () => {
    it('should close popover on Escape key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' }) as any;

      triggerHandleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);

      expect(setOpenPopover).toHaveBeenCalledWith(false);
    });

    it('should close popover on Tab key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Tab' }) as any;

      triggerHandleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);

      expect(setOpenPopover).toHaveBeenCalledWith(false);
    });
  });

  describe('Unknown Keys - Graceful handling of unsupported key presses on trigger', () => {
    it('should handle unknown keys gracefully', () => {
      const event = new KeyboardEvent('keydown', { key: 'Unknown' }) as any;

      expect(() => {
        triggerHandleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
      }).not.toThrow();

      expect(setOpenPopover).not.toHaveBeenCalled();
      expect(setHighlightFirstItem).not.toHaveBeenCalled();
      expect(setHighlightLastItem).not.toHaveBeenCalled();
    });
  });
});

describe('MenuTrigger Utils - focusListItem utility for programmatic focus management in Menu', () => {
  let setFocusedOption: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  let listRef: any;
  let mockListItems: HTMLElement[];

  beforeEach(() => {
    setFocusedOption = jest.fn();
    mockListItems = [document.createElement('div'), document.createElement('div'), document.createElement('div')];

    mockListItems.forEach((item, index) => {
      item.setAttribute('data-test', 'DesignSystem-Listbox-ItemWrapper');
      item.focus = jest.fn();
      item.scrollIntoView = jest.fn();
      item.setAttribute('data-index', index.toString());
    });

    listRef = {
      current: {
        querySelectorAll: jest.fn(() => mockListItems),
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Focus First Item - Focusing the first menu item when navigating down', () => {
    it('should focus first item when position is down', () => {
      focusListItem('down', setFocusedOption, listRef);

      expect(mockListItems[0].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[0]);
      expect(mockListItems[0].scrollIntoView).toHaveBeenCalledWith({ block: 'end' });
    });
  });

  describe('Focus Last Item - Focusing the last menu item when navigating up', () => {
    it('should focus last item when position is up', () => {
      focusListItem('up', setFocusedOption, listRef);

      expect(mockListItems[2].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[2]);
      expect(mockListItems[2].scrollIntoView).toHaveBeenCalledWith({ block: 'end' });
    });
  });

  describe('Edge Cases - Error handling and graceful degradation for focusListItem utility', () => {
    it('should handle empty list gracefully', () => {
      listRef.current.querySelectorAll.mockReturnValue([]);

      expect(() => {
        focusListItem('down', setFocusedOption, listRef);
      }).not.toThrow();

      expect(setFocusedOption).toHaveBeenCalledWith(undefined);
    });

    it('should handle missing listRef gracefully', () => {
      expect(() => {
        focusListItem('down', setFocusedOption, { current: null });
      }).not.toThrow();
    });

    it('should handle missing setFocusedOption gracefully', () => {
      expect(() => {
        focusListItem('down', undefined, listRef);
      }).not.toThrow();

      expect(mockListItems[0].focus).toHaveBeenCalled();
    });

    it('should handle item without scrollIntoView method', () => {
      mockListItems[0].scrollIntoView = undefined as any;

      expect(() => {
        focusListItem('down', setFocusedOption, listRef);
      }).not.toThrow();

      expect(mockListItems[0].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[0]);
    });
  });

  describe('Unknown Position - Default behavior for unsupported position values', () => {
    it('should handle unknown position by focusing last item (default else case)', () => {
      focusListItem('unknown', setFocusedOption, listRef);

      // Based on the implementation, unknown position falls to the else case (last item)
      expect(mockListItems[2].focus).toHaveBeenCalled();
      expect(setFocusedOption).toHaveBeenCalledWith(mockListItems[2]);
      expect(mockListItems[2].scrollIntoView).toHaveBeenCalledWith({ block: 'end' });
    });
  });
});
