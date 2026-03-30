import { fireEvent, render } from '@testing-library/react';
import useAccessibilityProps from '../useAccessibilityProps';
import React from 'react';

const TestComponent = ({ ...props }) => {
  const propsFromHook = useAccessibilityProps(props);
  return <div {...propsFromHook} />;
};

describe('useAccessibilityProps', () => {
  test('calls onClick when element is clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<TestComponent onClick={onClick} role="button" />);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('calls onKeyDown when a key is pressed', () => {
    const onKeyDown = jest.fn();
    const onClick = jest.fn();

    const { getByRole } = render(<TestComponent onClick={onClick} onKeyDown={onKeyDown} role="button" tabIndex="0" />);
    const button = getByRole('button');
    button.focus(); // Focus the button before firing the keydown event
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  test.each([
    ['Enter', true],
    [' ', true],
    ['Spacebar', true],
    ['Escape', false],
  ])('only calls onClick for allowed keys (%s)', (key, shouldCallOnClick) => {
    const onClick = jest.fn();
    const { getByRole } = render(<TestComponent onClick={onClick} role="button" />);
    fireEvent.keyDown(getByRole('button'), { key });
    if (shouldCallOnClick) {
      expect(onClick).toHaveBeenCalledTimes(1);
    } else {
      expect(onClick).not.toHaveBeenCalled();
    }
  });

  test('role, tabIndex and aria-label are set correctly when onClick is provided', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <TestComponent onClick={onClick} role="button" tabIndex={-1} aria-label="test label" />
    );
    const element = getByRole('button');
    expect(element).toHaveAttribute('tabIndex', '-1');
    expect(element).toHaveAttribute('aria-label', 'test label');
  });

  test('does not add interactive props when onClick is not provided (avoids nested button/link)', () => {
    const { container } = render(<TestComponent role="button" tabIndex={-1} aria-label="test label" />);
    const element = container.firstChild as HTMLElement;
    expect(element).not.toHaveAttribute('role');
    expect(element).not.toHaveAttribute('tabindex');
  });

  test('preserves non-interactive ARIA props when onClick is not provided', () => {
    const { container } = render(<TestComponent aria-label="Message sent" aria-labelledby="id" aria-hidden={true} />);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveAttribute('aria-label', 'Message sent');
    expect(element).toHaveAttribute('aria-labelledby', 'id');
    expect(element).toHaveAttribute('aria-hidden', 'true');
  });

  test('No trigger for callback on event of not allowed aria roles', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<TestComponent onClick={onClick} role="tooltip" aria-label="test label" />);
    fireEvent.keyDown(getByRole('tooltip'), { key: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('trigger for callback on event when default role', () => {
    const onClick = jest.fn();
    const element = render(<TestComponent onClick={onClick} id="button" aria-label="test label" />);
    const button = element.container.querySelector('#button');
    if (button) {
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(onClick).toHaveBeenCalledTimes(1);
    }
  });

  test('warns in dev when onClick is provided without aria-label', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const onClick = jest.fn();

    render(<TestComponent onClick={onClick} />);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Interactive element (onClick) without an accessible label')
    );

    warnSpy.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  test('does not warn when onClick is provided with aria-label', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const onClick = jest.fn();

    render(<TestComponent onClick={onClick} aria-label="Close dialog" />);
    expect(warnSpy).not.toHaveBeenCalled();

    warnSpy.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });
});
