import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import TextField, { TextFieldProps as Props } from '../TextField';

declare global {
  interface Window {
    ResizeObserver: unknown;
  }
}

const error = [true, false];
const withTextarea = [true, false];
const FunctionValue = jest.fn();

const ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

window.ResizeObserver = ResizeObserver;

describe('textfield component', () => {
  const mapper: Record<string, any> = {
    label: valueHelper('description', { required: true }),
    name: valueHelper('name', { required: true }),
    max: valueHelper(50, { required: true }),
    helpText: valueHelper('i am the helptext', { required: true }),
    withTextarea: valueHelper(withTextarea, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TextField {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('textfield component', () => {
  const mapper: Record<string, any> = {
    label: valueHelper('description', { required: true }),
    name: valueHelper('name', { required: true }),
    max: valueHelper(50, { required: true }),
    row: valueHelper(4, { required: true }),
    helpText: valueHelper('i am the helptext', { required: true }),
    withTextarea: valueHelper(true, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TextField {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('textfield component', () => {
  const mapper: Record<string, any> = {
    label: valueHelper('description', { required: true }),
    name: valueHelper('name', { required: true }),
    max: valueHelper(50, { required: true }),
    placeholder: valueHelper('helptext', { required: true }),
    error: valueHelper(error, { required: true, iterate: true }),
    helpText: valueHelper('i am the helptext', { required: true }),
    withTextarea: valueHelper(true, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TextField {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('textfield component', () => {
  const mapper: Record<string, any> = {
    label: valueHelper('description', { required: true }),
    name: valueHelper('name', { required: true }),
    defaultValue: valueHelper('default value', { required: true }),
    disabled: valueHelper([true, false], { required: true, iterate: true }),
    helpText: valueHelper('i am the helptext', { required: true }),
    withTextarea: valueHelper(true, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TextField {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('TextField component', () => {
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
});

describe('TextField Component', () => {
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
    expect(onChangeMock).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onBlurMock).toHaveBeenCalled();
    fireEvent.focus(input);
    expect(onFocusMock).toHaveBeenCalled();
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
    expect(screen.getByText('200')).toBeInTheDocument();
  });

  test('input exceeds maximum character count', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <TextField
        label="Test Label"
        name="test-name"
        placeholder="Test Placeholder"
        value="Test Value"
        error={true}
        defaultValue="Default Value"
        max={298}
        helpText="here is the helptext"
        onChange={onChangeMock}
      />
    );
    const textarea = screen.getByPlaceholderText('Test Placeholder') as HTMLTextAreaElement;

    // Type more than the allowed character count
    fireEvent.change(textarea, { target: { value: 'a'.repeat(300) } });
    expect(screen.getByText('300')).toBeInTheDocument();

    const searchError = getByTestId('DesignSystem-InlineMessage--Icon');
    expect(searchError).toBeInTheDocument();
  });

  test('TextField has the "input" classNames', () => {
    const onChangeMock = jest.fn();
    render(
      <TextField
        label="Test Label"
        name="test-name"
        placeholder="Test Placeholder"
        value="Test Value"
        error={true}
        defaultValue="Default Value"
        max={298}
        helpText="here is the helptext"
        onChange={onChangeMock}
      />
    );

    const textarea = screen.getByPlaceholderText('Test Placeholder') as HTMLTextAreaElement;

    expect(textarea).toHaveClass('Input-input Input-input--regular');
  });

  test('dafault value passed exceeds maximum character count with input textfield', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <TextField
        label="Test Label"
        name="test-name"
        placeholder="Test Placeholder"
        value="Test Value"
        error={true}
        defaultValue="Default Value"
        max={5}
        helpText="here is the helptext"
        onChange={onChangeMock}
      />
    );

    const searchError = getByTestId('DesignSystem-InlineMessage--Icon');
    expect(searchError).toBeInTheDocument();
  });
  test('dafault value passed exceeds maximum character count with textarea textfield', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <TextField
        label="Test Label"
        name="test-name"
        placeholder="Test Placeholder"
        value="Test Value"
        error={true}
        withTextarea={true}
        defaultValue="Default Value"
        max={5}
        helpText="here is the helptext"
        onChange={onChangeMock}
      />
    );

    const searchError = getByTestId('DesignSystem-InlineMessage--Icon');
    expect(searchError).toBeInTheDocument();
  });
});
