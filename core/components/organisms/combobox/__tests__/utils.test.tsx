import { focusListItem, handleKeyDown } from '../trigger/utils';

function mountListboxWithOptions(count: number) {
  const root = document.createElement('div');
  const ul = document.createElement('ul');
  ul.setAttribute('role', 'listbox');
  const options: HTMLElement[] = [];
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('tabindex', '-1');
    const inner = document.createElement('div');
    inner.setAttribute('data-test', 'DesignSystem-Listbox-ItemWrapper');
    inner.setAttribute('data-disabled', 'false');
    li.appendChild(inner);
    ul.appendChild(li);
    options.push(li);
  }
  root.appendChild(ul);
  document.body.appendChild(root);
  return { root, options };
}

describe('Combobox component focusListItem utility test', () => {
  let mockSetFocusedOption: jest.Mock;

  beforeEach(() => {
    mockSetFocusedOption = jest.fn();
    document.body.innerHTML = '';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should focus on the first option host when position is "down"', () => {
    const { root, options } = mountListboxWithOptions(2);
    const listRef = { current: root };
    const focusSpy = jest.spyOn(options[0], 'focus');

    focusListItem('down', mockSetFocusedOption, listRef);

    expect(mockSetFocusedOption).toHaveBeenCalledWith(options[0]);
    expect(focusSpy).toHaveBeenCalled();
  });

  it('should focus on the last option host when position is not "down"', () => {
    const { root, options } = mountListboxWithOptions(2);
    const listRef = { current: root };
    const focusSpy = jest.spyOn(options[1], 'focus');

    focusListItem('up', mockSetFocusedOption, listRef);

    expect(mockSetFocusedOption).toHaveBeenCalledWith(options[1]);
    expect(focusSpy).toHaveBeenCalled();
  });
});

describe('Combobox trigger handleKeyDown', () => {
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
