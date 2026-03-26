import * as React from 'react';
import { handleKeyDown } from '../utils';

function mountListbox(optionCount: number) {
  const list = document.createElement('ul');
  list.setAttribute('role', 'listbox');
  const items: HTMLElement[] = [];
  for (let i = 0; i < optionCount; i++) {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('tabindex', '-1');
    const inner = document.createElement('div');
    inner.setAttribute('data-test', 'DesignSystem-Listbox-ItemWrapper');
    li.appendChild(inner);
    list.appendChild(li);
    items.push(li);
  }
  document.body.appendChild(list);
  return { list, items };
}

describe('handleKeyDown function', () => {
  let inputTriggerRef: { current: { focus: jest.Mock } };
  let focusedOption: HTMLElement;
  let setFocusedOption: jest.Mock;
  let setOpenPopover: jest.Mock;
  let setHighlightFirstItem: jest.Mock;
  let setHighlightLastItem: jest.Mock;
  let listRef: { current: HTMLElement };

  beforeEach(() => {
    setFocusedOption = jest.fn();
    setOpenPopover = jest.fn();
    setHighlightFirstItem = jest.fn();
    setHighlightLastItem = jest.fn();
    inputTriggerRef = { current: { focus: jest.fn() } };
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should navigate up when ArrowUp is pressed', () => {
    const { list, items } = mountListbox(2);
    listRef = { current: list };
    focusedOption = items[0];
    const focusSpy = jest.spyOn(items[1], 'focus');

    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' }) as unknown as React.KeyboardEvent<Element>;
    jest.spyOn(event, 'preventDefault');

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

    expect(event.preventDefault).toHaveBeenCalled();
    expect(focusSpy).toHaveBeenCalled();
    expect(setFocusedOption).toHaveBeenCalledWith(items[1]);
  });

  it('should navigate down when ArrowDown is pressed', () => {
    const { list, items } = mountListbox(2);
    listRef = { current: list };
    focusedOption = items[0];
    const focusSpy = jest.spyOn(items[1], 'focus');

    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' }) as unknown as React.KeyboardEvent<Element>;
    jest.spyOn(event, 'preventDefault');

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

    expect(event.preventDefault).toHaveBeenCalled();
    expect(focusSpy).toHaveBeenCalled();
    expect(setFocusedOption).toHaveBeenCalledWith(items[1]);
  });

  it('should call handleEnterKey and reset highlights when Enter is pressed', () => {
    const { list, items } = mountListbox(2);
    listRef = { current: list };
    focusedOption = items[0];
    const clickSpy = jest.spyOn(focusedOption, 'click');

    const event = new KeyboardEvent('keydown', { key: 'Enter' }) as unknown as React.KeyboardEvent<Element>;

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

    expect(clickSpy).toHaveBeenCalled();
    expect(setHighlightFirstItem).toHaveBeenCalledWith(false);
    expect(setHighlightLastItem).toHaveBeenCalledWith(false);
  });

  it('should close popover and clear focused option when Escape is pressed', () => {
    const { list, items } = mountListbox(1);
    listRef = { current: list };
    focusedOption = items[0];

    const event = new KeyboardEvent('keydown', { key: 'Escape' }) as unknown as React.KeyboardEvent<Element>;

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

  it('should close popover and focus input when Tab is pressed', () => {
    const { list, items } = mountListbox(1);
    listRef = { current: list };
    focusedOption = items[0];

    const event = new KeyboardEvent('keydown', { key: 'Tab' }) as unknown as React.KeyboardEvent<Element>;
    jest.spyOn(event, 'preventDefault');

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

    expect(event.preventDefault).toHaveBeenCalled();
    expect(setOpenPopover).toHaveBeenCalledWith(false);
    expect(inputTriggerRef.current.focus).toHaveBeenCalled();
  });
});
