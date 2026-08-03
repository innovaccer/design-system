import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DraggableDropdown } from '@/components/organisms/table/DraggableDropdown';

const opts = [
  { label: 'Name', value: 'name', selected: true },
  { label: 'Created On', value: 'created', selected: true },
  { label: 'Description', value: 'desc', selected: false },
];

const setup = () => {
  const onChange = jest.fn();
  const utils = render(<DraggableDropdown options={opts} onChange={onChange} />);
  return { ...utils, onChange, trigger: utils.getByTestId('DesignSystem-Button') };
};

// jsdom + rAF: flush the frame the focus effect schedules
const flushFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

it('dialog has role and accessible name; haspopup matches', async () => {
  const { trigger, getByRole } = setup();
  expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  fireEvent.click(trigger);
  const dialog = getByRole('dialog', { name: 'Choose columns' });
  expect(dialog).toBeInTheDocument();
});

// The dialog confines Tab to its own controls, so it must also declare modality — otherwise a
// screen reader's virtual cursor can roam the table behind a popup the keyboard cannot leave.
it('declares aria-modal to match the focus trap', () => {
  const { trigger, getByRole } = setup();
  fireEvent.click(trigger);
  expect(getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
});

it('moves focus into the dialog when opened by click', async () => {
  const { trigger } = setup();
  fireEvent.click(trigger);
  await flushFrame();
  expect(document.activeElement).toBe(document.querySelectorAll('input[type="checkbox"]')[0]);
});

it('moves focus into the dialog when opened by ArrowDown', async () => {
  const { trigger } = setup();
  fireEvent.keyDown(trigger, { key: 'ArrowDown' });
  await flushFrame();
  expect((document.activeElement as HTMLElement).getAttribute('type')).toBe('checkbox');
});

it('wraps Tab from last focusable back to first', async () => {
  const { trigger, getByRole } = setup();
  fireEvent.click(trigger);
  await flushFrame();
  const dialog = getByRole('dialog');
  const focusable = dialog.querySelectorAll<HTMLElement>('input[type="checkbox"], button');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  expect(last).toHaveTextContent('Apply');
  last.focus();
  fireEvent.keyDown(last, { key: 'Tab' });
  expect(document.activeElement).toBe(first);
  fireEvent.keyDown(first, { key: 'Tab', shiftKey: true });
  expect(document.activeElement).toBe(last);
});

it('returns focus to trigger on Cancel, Apply and Escape', async () => {
  const { trigger, getByTestId, onChange } = setup();

  fireEvent.click(trigger);
  await flushFrame();
  fireEvent.click(getByTestId('DesignSystem-DraggableDropdown-cancelButton'));
  expect(document.activeElement).toBe(trigger);
  expect(onChange).not.toHaveBeenCalled();

  fireEvent.click(trigger);
  await flushFrame();
  fireEvent.click(getByTestId('DesignSystem-DraggableDropdown-applyButton'));
  expect(document.activeElement).toBe(trigger);
  expect(onChange).toHaveBeenCalled();

  fireEvent.click(trigger);
  await flushFrame();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(document.activeElement).toBe(trigger);
});
