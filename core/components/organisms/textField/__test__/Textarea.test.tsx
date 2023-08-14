import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../TextField';
// import ResizeObserver from './__mocks__/ResizeObserver.js';

declare global {
  interface Window {
    ResizeObserver: unknown;
  }
}

const ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

window.ResizeObserver = ResizeObserver;

describe('TextField', () => {
  test('matches snapshot with basic props', () => {
    const onChangeMock = jest.fn();
    const onBlurMock = jest.fn();
    const onFocusMock = jest.fn();

    const { container } = render(
      <TextField
        label="Test Label"
        withTextarea={true}
        name="test-name"
        placeholder="Test Placeholder"
        value="Test Value"
        defaultValue="Default Value"
        required
        error
        onChange={onChangeMock}
        onBlur={onBlurMock}
        onFocus={onFocusMock}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('matches snapshot without label and with minimum props', () => {
    const { container } = render(<TextField />);
    expect(container).toMatchSnapshot();
  });

  test('matches snapshot with help text and character count', () => {
    const { container } = render(<TextField helpText="Helpful text" />);
    expect(container).toMatchSnapshot();
  });

  test('matches snapshot when input exceeds maximum character count', () => {
    const onChangeMock = jest.fn();

    const { container } = render(
      <TextField
        label="Test Label"
        name="test-name"
        placeholder="Test Placeholder"
        value="Test Value"
        defaultValue="Default Value"
        max={298}
        onChange={onChangeMock}
      />
    );
    const textarea = screen.getByPlaceholderText('Test Placeholder') as HTMLTextAreaElement;
    // Type more than the allowed character count
    fireEvent.change(textarea, { target: { value: 'a'.repeat(300) } });

    expect(container).toMatchSnapshot();
  });

  test('matches snapshot for handling events and callbacks', () => {
    const onChangeMock = jest.fn();
    const onBlurMock = jest.fn();
    const onFocusMock = jest.fn();

    const { container } = render(
      <TextField onChange={onChangeMock} placeholder="Test Placeholder" onBlur={onBlurMock} onFocus={onFocusMock} />
    );

    const textarea = screen.getByPlaceholderText('Test Placeholder') as HTMLTextAreaElement;

    // Trigger events
    fireEvent.change(textarea, { target: { value: 'New Value' } });
    fireEvent.blur(textarea);
    fireEvent.focus(textarea);

    expect(container).toMatchSnapshot();
  });
});

describe('TextField', () => {
  test('renders with basic props', () => {
    const onChangeMock = jest.fn();
    const onBlurMock = jest.fn();
    const onFocusMock = jest.fn();
    const onClearMock = jest.fn();

    render(
      <TextField
        label="Test Label"
        name="test-name"
        placeholder="Test Placeholder"
        value="Test Value"
        defaultValue="Default Value"
        onChange={onChangeMock}
        onBlur={onBlurMock}
        onFocus={onFocusMock}
        onClear={onClearMock}
      />
    );

    // Check if the label is rendered
    expect(screen.getByText('Test Label')).toBeInTheDocument();

    // Check if the input has the correct props
    const input = screen.getByPlaceholderText('Test Placeholder') as HTMLInputElement;
    expect(input).toHaveAttribute('name', 'test-name');
    expect(input).toHaveValue('Test Value');

    // Trigger events and check if the callbacks are called
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(onChangeMock).toHaveBeenCalledWith(expect.anything());

    fireEvent.blur(input);
    expect(onBlurMock).toHaveBeenCalledWith(expect.anything());

    fireEvent.focus(input);
    expect(onFocusMock).toHaveBeenCalledWith(expect.anything());
  });

  test('renders with textarea', () => {
    render(<TextField withTextarea={true} placeholder="here is the placeholder" />);
    // Check if the component renders with textarea
    const textareaElement = screen.getByPlaceholderText('here is the placeholder');

    // Assert that the element is an exact <textarea> instance
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toBeInstanceOf(HTMLTextAreaElement);
    expect(textareaElement.tagName.toLowerCase()).toBe('textarea');
  });

  test('renders with help text and character count', () => {
    render(<TextField helpText="Helpful text" max={200} />);
    // Check if the help text is rendered
    expect(screen.getByText('Helpful text')).toBeInTheDocument();

    // Check if character count is initially 0/200
    expect(screen.getByText('/200')).toBeInTheDocument();
  });
});
