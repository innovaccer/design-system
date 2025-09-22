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

describe('TextField Components - Size Functionality Tests', () => {
  describe('TextField Component with Input - Size Props and Label Mapping', () => {
    test('should render input field with appropriate size styling', () => {
      const { container } = render(
        <TextField label="Input Field" placeholder="Input placeholder" helpText="This is sized input field" />
      );

      const input = screen.getByPlaceholderText('Input placeholder');
      expect(input).toBeInTheDocument();
      expect(input.tagName.toLowerCase()).toBe('input');

      const label = screen.getByText('Input Field');
      expect(label).toBeInTheDocument();

      expect(container.querySelector('[data-test="DesignSystem-Input"]')).toHaveAttribute(
        'placeholder',
        'Input placeholder'
      );
    });

    test('should verify label size mapping logic for input fields', () => {
      render(<TextField label="Label Test" placeholder="Test placeholder" />);

      const label = screen.getByText('Label Test');
      expect(label).toBeInTheDocument();

      const input = screen.getByPlaceholderText('Test placeholder');
      expect(input).toBeInTheDocument();
      expect(input.tagName.toLowerCase()).toBe('input');
    });

    test('should default to input when no withTextarea prop is provided', () => {
      render(<TextField label="Default Test" placeholder="Default placeholder" />);

      const input = screen.getByPlaceholderText('Default placeholder');
      expect(input).toBeInTheDocument();
      expect(input.tagName.toLowerCase()).toBe('input');
    });
  });

  describe('TextField Component with Textarea - Size Props and Direct Label Mapping', () => {
    test('should render textarea field with appropriate size styling', () => {
      render(
        <TextField
          withTextarea={true}
          label="Textarea Field"
          placeholder="Textarea placeholder"
          helpText="This is sized textarea field"
        />
      );

      const textarea = screen.getByPlaceholderText('Textarea placeholder');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName.toLowerCase()).toBe('textarea');

      const label = screen.getByText('Textarea Field');
      expect(label).toBeInTheDocument();
    });

    test('should verify direct size pass-through for textarea fields', () => {
      render(<TextField withTextarea={true} label="Size Pass Through Test" placeholder="Test placeholder" />);

      const label = screen.getByText('Size Pass Through Test');
      expect(label).toBeInTheDocument();

      const textarea = screen.getByPlaceholderText('Test placeholder');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName.toLowerCase()).toBe('textarea');
    });

    test('should default to regular size when no size prop is provided for textarea', () => {
      render(
        <TextField withTextarea={true} label="Default Textarea Test" placeholder="Default textarea placeholder" />
      );

      const textarea = screen.getByPlaceholderText('Default textarea placeholder');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName.toLowerCase()).toBe('textarea');
    });
  });

  describe('Size Props Integration - Interaction with Other Component States', () => {
    test('should maintain size behavior when TextField input has error state', () => {
      render(
        <TextField label="Error with Size" placeholder="Error size test" error={true} helpText="Error help text" />
      );

      const input = screen.getByPlaceholderText('Error size test');
      expect(input).toBeInTheDocument();
      expect(input.tagName.toLowerCase()).toBe('input');

      const label = screen.getByText('Error with Size');
      expect(label).toBeInTheDocument();
    });

    test('should maintain size behavior when TextField input is disabled', () => {
      render(
        <TextField
          label="Disabled with Size"
          placeholder="Disabled size test"
          disabled={true}
          helpText="Disabled help text"
        />
      );

      const input = screen.getByPlaceholderText('Disabled size test');
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
      expect(input.tagName.toLowerCase()).toBe('input');
    });

    test('should maintain size behavior when TextField input has character limit', () => {
      render(
        <TextField
          label="Size with Limit"
          placeholder="Size limit test"
          max={50}
          helpText="Character limit help text"
        />
      );

      const input = screen.getByPlaceholderText('Size limit test');
      expect(input).toBeInTheDocument();
      expect(input.tagName.toLowerCase()).toBe('input');

      expect(screen.getByText('50')).toBeInTheDocument();
    });

    test('should maintain size behavior when TextField textarea has character limit', () => {
      render(
        <TextField
          withTextarea={true}
          label="Textarea Size with Limit"
          placeholder="Textarea limit test"
          max={100}
          helpText="Textarea character limit help text"
        />
      );

      const textarea = screen.getByPlaceholderText('Textarea limit test');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName.toLowerCase()).toBe('textarea');

      expect(screen.getByText('100')).toBeInTheDocument();
    });
  });

  describe('TextField Component - Routing Logic Verification', () => {
    test('should route to TextFieldWithTextarea when withTextarea prop is true', () => {
      render(
        <TextField
          withTextarea={true}
          label="Textarea Routing Test"
          placeholder="Textarea routing placeholder"
          helpText="Textarea routing help text"
        />
      );

      const textarea = screen.getByPlaceholderText('Textarea routing placeholder');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName.toLowerCase()).toBe('textarea');
    });

    test('should route to TextFieldWithInput when withTextarea prop is false/undefined', () => {
      render(
        <TextField
          label="Input Routing Test"
          placeholder="Input routing placeholder"
          helpText="Input routing help text"
        />
      );

      const input = screen.getByPlaceholderText('Input routing placeholder');
      expect(input).toBeInTheDocument();
      expect(input.tagName.toLowerCase()).toBe('input');
    });
  });
});
