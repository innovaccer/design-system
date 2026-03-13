import * as React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { useFocusOutside } from '../overlayHelper';

describe('useFocusOutside', () => {
  afterEach(() => {
    cleanup();
  });

  const triggerFocusIn = (element: HTMLElement) => {
    element.focus();
    fireEvent.focusIn(element, { bubbles: true });
  };

  it('calls onFocusOutside when focus moves outside all containers', async () => {
    const onFocusOutside = jest.fn();

    const TestComponent = () => {
      const triggerRef = React.useRef<HTMLButtonElement>(null);
      const popoverRef = React.useRef<HTMLDivElement>(null);

      useFocusOutside([triggerRef, popoverRef], onFocusOutside);

      return (
        <div>
          <button ref={triggerRef} data-test="trigger">
            Trigger
          </button>
          <div ref={popoverRef} data-test="popover">
            <button data-test="inside-button">Inside</button>
          </div>
          <button data-test="outside-button">Outside</button>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    triggerFocusIn(getByTestId('trigger'));
    await waitFor(() => expect(onFocusOutside).not.toHaveBeenCalled());

    triggerFocusIn(getByTestId('inside-button'));
    await waitFor(() => expect(onFocusOutside).not.toHaveBeenCalled());

    triggerFocusIn(getByTestId('outside-button'));
    await waitFor(() => expect(onFocusOutside).toHaveBeenCalledTimes(1));
  });

  it('does not call onFocusOutside when focus moves between containers', async () => {
    const onFocusOutside = jest.fn();

    const TestComponent = () => {
      const triggerRef = React.useRef<HTMLButtonElement>(null);
      const popoverRef = React.useRef<HTMLDivElement>(null);

      useFocusOutside([triggerRef, popoverRef], onFocusOutside);

      return (
        <div>
          <button ref={triggerRef} data-test="trigger">
            Trigger
          </button>
          <div ref={popoverRef} data-test="popover">
            <button data-test="inside-button">Inside</button>
          </div>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    triggerFocusIn(getByTestId('trigger'));
    await waitFor(() => expect(onFocusOutside).not.toHaveBeenCalled());

    triggerFocusIn(getByTestId('inside-button'));
    await waitFor(() => expect(onFocusOutside).not.toHaveBeenCalled());

    triggerFocusIn(getByTestId('trigger'));
    await waitFor(() => expect(onFocusOutside).not.toHaveBeenCalled());
  });

  it('respects enabled flag', async () => {
    const onFocusOutside = jest.fn();

    const TestComponent = ({ enabled }: { enabled: boolean }) => {
      const triggerRef = React.useRef<HTMLButtonElement>(null);
      const popoverRef = React.useRef<HTMLDivElement>(null);

      useFocusOutside([triggerRef, popoverRef], onFocusOutside, enabled);

      return (
        <div>
          <button ref={triggerRef} data-test="trigger">
            Trigger
          </button>
          <div ref={popoverRef} data-test="popover">
            <button data-test="inside-button">Inside</button>
          </div>
          <button data-test="outside-button">Outside</button>
        </div>
      );
    };

    const { getByTestId, rerender } = render(<TestComponent enabled={false} />);

    triggerFocusIn(getByTestId('outside-button'));
    await waitFor(() => expect(onFocusOutside).not.toHaveBeenCalled());

    rerender(<TestComponent enabled={true} />);
    triggerFocusIn(getByTestId('trigger'));
    await waitFor(() => expect(onFocusOutside).not.toHaveBeenCalled());

    triggerFocusIn(getByTestId('outside-button'));
    await waitFor(() => expect(onFocusOutside).toHaveBeenCalledTimes(1));
  });

  it('handles empty refs array', async () => {
    const onFocusOutside = jest.fn();

    const TestComponent = () => {
      useFocusOutside([], onFocusOutside);

      return (
        <div>
          <button data-test="button">Button</button>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    triggerFocusIn(getByTestId('button'));
    await waitFor(() => expect(onFocusOutside).toHaveBeenCalledTimes(1));
  });

  it('respects custom delay parameter', async () => {
    const onFocusOutside = jest.fn();

    const TestComponent = () => {
      const triggerRef = React.useRef<HTMLButtonElement>(null);

      useFocusOutside([triggerRef], onFocusOutside, true, 50);

      return (
        <div>
          <button ref={triggerRef} data-test="trigger">
            Trigger
          </button>
          <button data-test="outside">Outside</button>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    triggerFocusIn(getByTestId('outside'));

    expect(onFocusOutside).not.toHaveBeenCalled();

    await waitFor(
      () => {
        expect(onFocusOutside).toHaveBeenCalledTimes(1);
      },
      { timeout: 100 }
    );
  });

  it('cleans up event listener on unmount', () => {
    const onFocusOutside = jest.fn();
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    const TestComponent = () => {
      const triggerRef = React.useRef<HTMLButtonElement>(null);
      useFocusOutside([triggerRef], onFocusOutside);

      return <button ref={triggerRef}>Trigger</button>;
    };

    const { unmount } = render(<TestComponent />);
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('focusin', expect.any(Function), true);
    removeEventListenerSpy.mockRestore();
  });
});
