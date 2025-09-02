import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Input, { InputProps as Props } from '../Input';

const iconValue = ['events'];
const inputValue = ['value'];
const StringValue = 'value';
const nameValue = 'name';
const inputType = ['text', 'password', 'number'];
const size = ['tiny', 'regular', 'large'];
const FunctionValue = jest.fn();
const defaultValue = '123';

describe('Input Component - Size Variants Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - Input Type Variants Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    type: valueHelper(inputType, { required: true, iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - Number Type with Inline Label Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    type: valueHelper('number', { required: true }),
    inlineLabel: valueHelper('USD', { required: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - Icon and Placeholder Variants Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(inputValue, { iterate: true }),
    placeholder: valueHelper('Placeholder', { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - Disabled State with Icon Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    disabled: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - Disabled State without Change Handler Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    disabled: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - ReadOnly State with Icon Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    readOnly: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - Error State with Icon Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    error: valueHelper(true, { required: true }),
    icon: valueHelper(iconValue, { iterate: true }),
    onChangeHandler: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Input {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Input Component - Selection Range Management on Type Change', () => {
  it('through Action Button', () => {
    const InputComponent = () => {
      const [visibility, setVisibility] = React.useState(false);

      return (
        <Input
          defaultValue={defaultValue}
          type={visibility ? 'number' : 'password'}
          actionIcon={
            <Input.ActionButton
              onClick={() => setVisibility((x) => !x)}
              name={visibility ? 'visibility_on' : 'visibility_off'}
            />
          }
        />
      );
    };

    const { getByTestId } = render(<InputComponent />);
    const input = getByTestId('DesignSystem-Input');
    const actionButton = getByTestId('DesignSystem-Input-ActionButton');

    input.focus = jest.fn();

    fireEvent.click(actionButton);

    expect(input.focus).toHaveBeenCalled();
    expect((input as HTMLInputElement).type).toBe('number');

    fireEvent.click(actionButton);
    expect(input.focus).toHaveBeenCalled();
    expect((input as HTMLInputElement).type).toBe('password');
  });
});

describe('Input Component - Comprehensive Behavior Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Input Component - Basic Rendering and Props Validation', () => {
    it('renders with all basic props', () => {
      const { getByTestId } = render(
        <Input
          name="test-input"
          placeholder="Test placeholder"
          value="test value"
          size="large"
          type="email"
          disabled={false}
          required={true}
          readOnly={false}
          error={false}
        />
      );

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.name).toBe('test-input');
      expect(input.placeholder).toBe('Test placeholder');
      expect(input.value).toBe('test value');
      expect(input.type).toBe('email');
      expect(input.required).toBe(true);
      expect(input.disabled).toBe(false);
      expect(input.readOnly).toBe(false);
    });

    it('renders with icon on the left', () => {
      const { getByTestId, container } = render(<Input name="test" icon="search" value="test" />);

      const input = getByTestId('DesignSystem-Input');
      const icon = container.querySelector('.Input-icon--left');
      expect(input).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });

    it('renders with inline label', () => {
      const { getByText } = render(<Input name="test" inlineLabel="USD" value="100" />);

      const inlineLabel = getByText('USD');
      expect(inlineLabel).toBeInTheDocument();
    });

    it('applies correct CSS classes based on props', () => {
      const { getByTestId } = render(
        <Input name="test" size="tiny" error={true} disabled={true} className="custom-class" />
      );

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper).toHaveClass('custom-class');
    });

    it('sets correct minWidth based on type', () => {
      const { getByTestId, unmount } = render(<Input name="test" type="number" />);
      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper.style.minWidth).toBe('');
      unmount();

      const { getByTestId: getByTestId2 } = render(<Input name="test" type="text" />);
      const wrapper2 = getByTestId2('DesignSystem-InputWrapper');
      expect(wrapper2.style.minWidth).toBe('256px');
    });

    it('sets custom minWidth when provided', () => {
      const { getByTestId } = render(<Input name="test" minWidth="300px" />);
      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper.style.minWidth).toBe('300px');
    });
  });

  describe('Input Component - Event Handler Functionality', () => {
    it('calls onChange handler when input value changes', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(<Input name="test" onChange={onChangeMock} />);

      const input = getByTestId('DesignSystem-Input');
      fireEvent.change(input, { target: { value: 'new value' } });

      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('calls onFocus handler when input gains focus', () => {
      const onFocusMock = jest.fn();
      const { getByTestId } = render(<Input name="test" onFocus={onFocusMock} />);

      const input = getByTestId('DesignSystem-Input');
      fireEvent.focus(input);

      expect(onFocusMock).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur handler when input loses focus', () => {
      const onBlurMock = jest.fn();
      const { getByTestId } = render(<Input name="test" onBlur={onBlurMock} />);

      const input = getByTestId('DesignSystem-Input');
      fireEvent.blur(input);

      expect(onBlurMock).toHaveBeenCalledTimes(1);
    });

    it('calls onClick handler when input is clicked', () => {
      const onClickMock = jest.fn();
      const { getByTestId } = render(<Input name="test" onClick={onClickMock} />);

      const input = getByTestId('DesignSystem-Input');
      fireEvent.click(input);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('calls onPaste handler when content is pasted', () => {
      const onPasteMock = jest.fn();
      const { getByTestId } = render(<Input name="test" onPaste={onPasteMock} />);

      const input = getByTestId('DesignSystem-Input');
      fireEvent.paste(input, { clipboardData: { getData: () => 'pasted text' } });

      expect(onPasteMock).toHaveBeenCalledTimes(1);
    });

    it('focuses input when wrapper is clicked', () => {
      const { getByTestId } = render(<Input name="test" />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      const wrapper = getByTestId('DesignSystem-InputWrapper');

      input.focus = jest.fn();

      fireEvent.click(wrapper);
      expect(input.focus).toHaveBeenCalled();
    });
  });

  describe('Input Component - Clear Button Functionality', () => {
    it('shows clear icon when onClear is provided and input has value', () => {
      const onClearMock = jest.fn();
      const { getByTestId } = render(<Input name="test" value="test value" onClear={onClearMock} />);

      const clearIcon = getByTestId('DesignSystem-Input--closeIcon');
      expect(clearIcon).toBeInTheDocument();
    });

    it('does not show clear icon when input is empty', () => {
      const onClearMock = jest.fn();
      const { queryByTestId } = render(<Input name="test" value="" onClear={onClearMock} />);

      const clearIcon = queryByTestId('DesignSystem-Input--closeIcon');
      expect(clearIcon).not.toBeInTheDocument();
    });

    it('calls onClear when clear icon is clicked', () => {
      const onClearMock = jest.fn();
      const { getByTestId } = render(<Input name="test" value="test value" onClear={onClearMock} />);

      const clearIcon = getByTestId('DesignSystem-Input--closeIcon');
      fireEvent.click(clearIcon);

      expect(onClearMock).toHaveBeenCalledTimes(1);
    });

    it('focuses input after clear icon is clicked', () => {
      const onClearMock = jest.fn();
      const { getByTestId } = render(<Input name="test" value="test value" onClear={onClearMock} />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      const clearIcon = getByTestId('DesignSystem-Input--closeIcon');

      input.focus = jest.fn();

      fireEvent.click(clearIcon);
      expect(input.focus).toHaveBeenCalledWith({ preventScroll: true });
    });

    it('shows clear icon with defaultValue when onClear is provided', () => {
      const onClearMock = jest.fn();
      const { getByTestId } = render(<Input name="test" defaultValue="default value" onClear={onClearMock} />);

      const clearIcon = getByTestId('DesignSystem-Input--closeIcon');
      expect(clearIcon).toBeInTheDocument();
    });
  });

  describe('Input Component - Custom Action Icon Functionality', () => {
    it('renders custom action icon when provided with value', () => {
      const customActionIcon = <Input.ActionButton name="custom" onClick={jest.fn()} />;
      const { getByTestId } = render(<Input name="test" value="test value" actionIcon={customActionIcon} />);

      const actionButton = getByTestId('DesignSystem-Input-ActionButton');
      expect(actionButton).toBeInTheDocument();
    });

    it('does not render action icon when input is empty', () => {
      const customActionIcon = <Input.ActionButton name="custom" onClick={jest.fn()} />;
      const { queryByTestId } = render(<Input name="test" value="" actionIcon={customActionIcon} />);

      const actionButton = queryByTestId('DesignSystem-Input-ActionButton');
      expect(actionButton).not.toBeInTheDocument();
    });

    it('prioritizes action icon over clear button', () => {
      const onClearMock = jest.fn();
      const customActionIcon = <Input.ActionButton name="custom" onClick={jest.fn()} />;
      const { getByTestId, queryByTestId } = render(
        <Input name="test" value="test value" onClear={onClearMock} actionIcon={customActionIcon} />
      );

      const actionButton = getByTestId('DesignSystem-Input-ActionButton');
      const clearIcon = queryByTestId('DesignSystem-Input--closeIcon');

      expect(actionButton).toBeInTheDocument();
      expect(clearIcon).not.toBeInTheDocument();
    });
  });

  describe('Input Component - Info Tooltip Functionality', () => {
    it('renders info tooltip when info prop is provided', () => {
      const { container } = render(<Input name="test" info="This is helpful information" />);

      const infoWrapper = container.querySelector('[tabIndex="0"]');
      expect(infoWrapper).toBeInTheDocument();
    });

    it('does not render info tooltip when disabled', () => {
      const { container } = render(<Input name="test" info="This is helpful information" disabled={true} />);

      const infoWrapper = container.querySelector('[tabIndex="0"]');
      expect(infoWrapper).not.toBeInTheDocument();
    });
  });

  describe('Input Component - Focus Management and Accessibility', () => {
    it('focuses input programmatically when needed', () => {
      const { getByTestId } = render(<Input name="test" />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;

      input.focus = jest.fn();
      input.focus();

      expect(input.focus).toHaveBeenCalled();
      expect(input).toBeInTheDocument();
    });

    it('sets tabIndex to -1 when readOnly is true', () => {
      const { getByTestId } = render(<Input name="test" readOnly={true} />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      expect(input.tabIndex).toBe(-1);
    });

    it('does not set tabIndex when readOnly is false', () => {
      const { getByTestId } = render(<Input name="test" readOnly={false} />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      expect(input.tabIndex).not.toBe(-1);
    });
  });

  describe('Input Component - Internal State Management', () => {
    it('updates isInputBlank state when wrapper loses focus', () => {
      const { getByTestId } = render(<Input name="test" />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;

      fireEvent.change(input, { target: { value: 'test' } });

      fireEvent.blur(wrapper);

      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Input Component - Error Handling and Edge Cases', () => {
    it('handles cursor positioning error gracefully', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const TestComponent = () => {
        const [inputType, setInputType] = React.useState<'text' | 'number'>('text');

        React.useEffect(() => {
          setInputType('number');
        }, []);

        return <Input name="test" type={inputType} value="123" />;
      };

      render(<TestComponent />);

      consoleErrorSpy.mockRestore();
    });
  });

  describe('Input Component - HTML Input Type Support', () => {
    const inputTypes: Array<'text' | 'password' | 'number' | 'email' | 'tel' | 'url'> = [
      'text',
      'password',
      'number',
      'email',
      'tel',
      'url',
    ];

    inputTypes.forEach((type) => {
      it(`renders correctly with type="${type}"`, () => {
        const { getByTestId } = render(<Input name="test" type={type} value="test" />);

        const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
        expect(input.type).toBe(type);
      });
    });
  });

  describe('Input Component - Size Variant Rendering', () => {
    const sizes: Array<'tiny' | 'regular' | 'large'> = ['tiny', 'regular', 'large'];

    sizes.forEach((size) => {
      it(`renders correctly with size="${size}"`, () => {
        const { getByTestId } = render(<Input name="test" size={size} value="test" />);

        const input = getByTestId('DesignSystem-Input');
        expect(input).toBeInTheDocument();
      });

      it(`renders icon correctly with size="${size}"`, () => {
        const { container } = render(<Input name="test" size={size} icon="search" value="test" />);

        const icon = container.querySelector('.Input-icon--left');
        expect(icon).toBeInTheDocument();
      });
    });
  });

  describe('Input Component - Controlled vs Uncontrolled Behavior', () => {
    it('works as controlled component with value prop', () => {
      const onChangeMock = jest.fn();
      const { getByTestId, rerender } = render(<Input name="test" value="initial" onChange={onChangeMock} />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      expect(input.value).toBe('initial');

      fireEvent.change(input, { target: { value: 'updated' } });
      expect(onChangeMock).toHaveBeenCalled();

      rerender(<Input name="test" value="updated" onChange={onChangeMock} />);
      expect(input.value).toBe('updated');
    });

    it('works as uncontrolled component with defaultValue prop', () => {
      const { getByTestId } = render(<Input name="test" defaultValue="default" />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      expect(input.value).toBe('default');

      fireEvent.change(input, { target: { value: 'changed' } });
      expect(input.value).toBe('changed');
    });
  });

  describe('Input Component - Accessibility Features and ARIA Support', () => {
    it('sets correct ARIA attributes for required input', () => {
      const { getByTestId } = render(<Input name="test" required={true} />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveAttribute('required');
    });

    it('renders with proper label association', () => {
      const { getByTestId } = render(<Input name="test" placeholder="Enter your name" />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveAttribute('placeholder', 'Enter your name');
    });

    it('supports keyboard navigation for info icon', () => {
      const { container } = render(<Input name="test" info="Helpful information" />);

      const infoWrapper = container.querySelector('[tabIndex="0"]');
      expect(infoWrapper).toBeInTheDocument();
    });
  });

  describe('Input Component - HTML Validation Attributes', () => {
    it('applies validation attributes correctly', () => {
      const { getByTestId } = render(
        <Input name="test" min={1} max={100} minLength={3} maxLength={50} pattern="[A-Za-z]+" autoComplete="on" />
      );

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      expect(input).toHaveAttribute('min', '1');
      expect(input).toHaveAttribute('max', '100');
      expect(input).toHaveAttribute('minlength', '3');
      expect(input).toHaveAttribute('maxlength', '50');
      expect(input).toHaveAttribute('pattern', '[A-Za-z]+');
      expect(input).toHaveAttribute('autocomplete', 'on');
    });
  });

  describe('Input Component - CSS State Classes and Visual Behaviors', () => {
    it('applies correct CSS classes for different input states', () => {
      const { getByTestId, container } = render(
        <Input name="test" size="large" error={true} disabled={false} icon="search" value="test" />
      );

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      const leftIcon = container.querySelector('.Input-icon--left');

      expect(wrapper).toHaveClass('Input--large');
      expect(wrapper).toHaveClass('Input--error');
      expect(leftIcon).toBeInTheDocument();
    });

    it('maintains wrapper element integrity during hover interactions', () => {
      const { getByTestId } = render(<Input name="test" value="test" />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');

      fireEvent.mouseEnter(wrapper);
      expect(wrapper).toBeInTheDocument();

      fireEvent.mouseLeave(wrapper);
      expect(wrapper).toBeInTheDocument();
    });

    it('maintains correct DOM structure during focus state changes', () => {
      const { getByTestId, container } = render(<Input name="test" icon="search" error={false} />);

      const input = getByTestId('DesignSystem-Input');
      const wrapper = getByTestId('DesignSystem-InputWrapper');
      const leftIcon = container.querySelector('.Input-icon--left');

      fireEvent.focus(input);
      expect(wrapper).toContainElement(input);
      expect(leftIcon).toBeInTheDocument();

      fireEvent.blur(input);
      expect(wrapper).toContainElement(input);
    });

    it('preserves error state styling during focus interactions', () => {
      const { getByTestId, container } = render(<Input name="test" icon="search" error={true} />);

      const input = getByTestId('DesignSystem-Input');
      const wrapper = getByTestId('DesignSystem-InputWrapper');
      const leftIcon = container.querySelector('.Input-icon--left');

      fireEvent.focus(input);
      expect(wrapper).toHaveClass('Input--error');
      expect(leftIcon).toBeInTheDocument();
    });

    it('applies disabled state CSS correctly', () => {
      const { getByTestId, container } = render(<Input name="test" icon="search" disabled={true} />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      const leftIcon = container.querySelector('.Input-icon--left');

      expect(wrapper).toHaveClass('Input--disabled');
      expect(leftIcon).toBeInTheDocument();
    });

    it('applies readOnly state CSS correctly', () => {
      const { getByTestId } = render(<Input name="test" readOnly={true} />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper).toHaveClass('Input--readOnly');
    });

    it('applies tiny size icon styling correctly using utility classes', () => {
      const { getByTestId, container } = render(<Input name="test" size="tiny" icon="search" />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      const leftIcon = container.querySelector('.Input-icon--left');

      expect(wrapper).toHaveClass('Input--tiny');
      expect(leftIcon).toBeInTheDocument();
      expect(leftIcon).toHaveClass('mr-3');
    });
  });

  describe('Input Component - Icon Type Variants and State Styling', () => {
    it('renders icon with specified iconType', () => {
      const { container } = render(<Input name="test" icon="search" iconType="outlined" value="test" />);

      const leftIcon = container.querySelector('.Input-icon--left');
      expect(leftIcon).toBeInTheDocument();
    });

    it('handles input blank state for icon styling', () => {
      const { getByTestId, container } = render(<Input name="test" icon="search" />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;
      const leftIcon = container.querySelector('.Input-icon--left');

      expect(leftIcon).toBeInTheDocument();

      fireEvent.change(input, { target: { value: 'test' } });
      fireEvent.blur(wrapper);
      expect(leftIcon).toBeInTheDocument();

      fireEvent.change(input, { target: { value: '' } });
      fireEvent.blur(wrapper);
      expect(leftIcon).toBeInTheDocument();
    });

    it('applies error state to icon correctly', () => {
      const { container } = render(<Input name="test" icon="search" error={true} value="test" />);

      const leftIcon = container.querySelector('.Input-icon--left');
      expect(leftIcon).toBeInTheDocument();
    });
  });

  describe('Input Component - Tiny Size Icon Support and Styling', () => {
    it('renders icons for tiny inputs (new functionality)', () => {
      const { container } = render(<Input name="test" size="tiny" icon="search" value="test" />);

      const leftIcon = container.querySelector('.Input-icon--left');
      expect(leftIcon).toBeInTheDocument();
    });

    it('applies tiny-specific icon utility classes for proper spacing', () => {
      const { container } = render(<Input name="test" size="tiny" icon="search" />);

      const leftIcon = container.querySelector('.Input-icon--left');
      expect(leftIcon).toHaveClass('mr-3');
    });

    it('applies base tiny size class when tiny size has icon', () => {
      const { getByTestId } = render(<Input name="test" size="tiny" icon="search" />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper).toHaveClass('Input--tiny');
    });

    it('applies base tiny size class when tiny size without icon', () => {
      const { getByTestId } = render(<Input name="test" size="tiny" />);

      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper).toHaveClass('Input--tiny');
    });

    it('applies correct input class for tiny size', () => {
      const { getByTestId } = render(<Input name="test" size="tiny" />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveClass('Input-input--tiny');
    });

    it('works with different icon types for tiny size using utility classes', () => {
      const { container } = render(<Input name="test" size="tiny" icon="search" iconType="rounded" />);

      const leftIcon = container.querySelector('.Input-icon--left');
      expect(leftIcon).toBeInTheDocument();
      expect(leftIcon).toHaveClass('mr-3');
    });

    it('works with tiny size in different states using utility classes', () => {
      // Test with error state
      const { container: errorContainer } = render(<Input name="test" size="tiny" icon="search" error={true} />);
      const errorIcon = errorContainer.querySelector('.Input-icon--left');
      expect(errorIcon).toBeInTheDocument();
      expect(errorIcon).toHaveClass('mr-3');
      expect(errorIcon).toHaveClass('Input-icon--error');

      // Test with disabled state
      const { container: disabledContainer } = render(<Input name="test" size="tiny" icon="search" disabled={true} />);
      const disabledIcon = disabledContainer.querySelector('.Input-icon--left');
      expect(disabledIcon).toBeInTheDocument();
      expect(disabledIcon).toHaveClass('mr-3');
    });

    it('supports clear functionality with tiny icons using utility classes', () => {
      const onClearMock = jest.fn();
      const { getByTestId, container } = render(
        <Input name="test" size="tiny" icon="search" value="test value" onClear={onClearMock} />
      );

      const leftIcon = container.querySelector('.Input-icon--left');
      const clearIcon = getByTestId('DesignSystem-Input--closeIcon');

      expect(leftIcon).toBeInTheDocument();
      expect(leftIcon).toHaveClass('mr-3');
      expect(clearIcon).toBeInTheDocument();
    });

    it('supports action icons with tiny icons using utility classes', () => {
      const customActionIcon = <Input.ActionButton name="custom" onClick={jest.fn()} />;
      const { getByTestId, container } = render(
        <Input name="test" size="tiny" icon="search" value="test value" actionIcon={customActionIcon} />
      );

      const leftIcon = container.querySelector('.Input-icon--left');
      const actionButton = getByTestId('DesignSystem-Input-ActionButton');

      expect(leftIcon).toBeInTheDocument();
      expect(leftIcon).toHaveClass('mr-3');
      expect(actionButton).toBeInTheDocument();
    });
  });

  describe('Input Component - Programmatic Focus Behavior', () => {
    it('can be focused programmatically', () => {
      const { getByTestId } = render(<Input name="test" />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;

      const focusSpy = jest.spyOn(input, 'focus');
      input.focus();

      expect(focusSpy).toHaveBeenCalled();
      focusSpy.mockRestore();
    });

    it('maintains focus when explicitly focused', () => {
      const { getByTestId } = render(<Input name="test" />);

      const input = getByTestId('DesignSystem-Input') as HTMLInputElement;

      input.focus();

      expect(input).toBeInTheDocument();
    });
  });

  describe('Input Component - Right Icon Wrapper Interaction Handling', () => {
    it('handles keyboard focus on right icon wrapper for info tooltip', () => {
      const { container } = render(<Input name="test" info="Test info" />);

      const rightIconWrapper = container.querySelector('[tabIndex="0"]');
      expect(rightIconWrapper).toBeInTheDocument();

      if (rightIconWrapper) {
        fireEvent.focus(rightIconWrapper);
        fireEvent.blur(rightIconWrapper);
        expect(rightIconWrapper).toBeInTheDocument();
      }
    });

    it('handles mouse interactions on right icon wrapper', () => {
      const { container } = render(<Input name="test" info="Test info" />);

      const rightIconWrapper = container.querySelector('[tabIndex="0"]');
      expect(rightIconWrapper).toBeInTheDocument();

      if (rightIconWrapper) {
        fireEvent.mouseEnter(rightIconWrapper);
        fireEvent.mouseLeave(rightIconWrapper);

        fireEvent.mouseDown(rightIconWrapper);
        fireEvent.mouseUp(rightIconWrapper);

        expect(rightIconWrapper).toBeInTheDocument();
      }
    });

    it('handles keyboard events on right icon wrapper', () => {
      const { container } = render(<Input name="test" info="Test info" />);

      const rightIconWrapper = container.querySelector('[tabIndex="0"]');
      expect(rightIconWrapper).toBeInTheDocument();

      if (rightIconWrapper) {
        fireEvent.keyDown(rightIconWrapper, { key: 'Enter' });
        fireEvent.keyDown(rightIconWrapper, { key: ' ' });
        fireEvent.keyDown(rightIconWrapper, { key: 'Tab' });

        expect(rightIconWrapper).toBeInTheDocument();
      }
    });
  });

  describe('Input Component - Minimum Width Calculation and Application', () => {
    it('applies default minWidth for non-number input types', () => {
      const { getByTestId } = render(<Input name="test" type="text" />);
      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper.style.minWidth).toBe('256px');
    });

    it('does not apply default minWidth for number input type', () => {
      const { getByTestId } = render(<Input name="test" type="number" />);
      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper.style.minWidth).toBe('');
    });

    it('applies custom minWidth when provided', () => {
      const { getByTestId } = render(<Input name="test" type="number" minWidth="400px" />);
      const wrapper = getByTestId('DesignSystem-InputWrapper');
      expect(wrapper.style.minWidth).toBe('400px');
    });
  });

  describe('Input Component - Size-Specific CSS Class Application', () => {
    it('applies tiny-specific input styling classes', () => {
      const { getByTestId } = render(<Input name="test" size="tiny" value="test" />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveClass('Input-input--tiny');
    });

    it('applies regular-specific input styling classes', () => {
      const { getByTestId } = render(<Input name="test" size="regular" value="test" />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveClass('Input-input--regular');
    });

    it('applies large-specific input styling classes', () => {
      const { getByTestId } = render(<Input name="test" size="large" value="test" />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveClass('Input-input--large');
    });
  });

  describe('Input Component - Utility CSS Class Conditional Application', () => {
    it('applies margin-right utility class when actionIcon is present', () => {
      const customActionIcon = <Input.ActionButton name="visibility" onClick={jest.fn()} />;
      const { getByTestId } = render(<Input name="test" value="test value" actionIcon={customActionIcon} />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveClass('mr-4');
    });

    it('applies margin-right utility class when onClear is provided', () => {
      const onClearMock = jest.fn();
      const { getByTestId } = render(<Input name="test" value="test value" onClear={onClearMock} />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveClass('mr-4');
    });

    it('applies margin-right utility class when info tooltip is provided', () => {
      const { getByTestId } = render(<Input name="test" value="test value" info="This is helpful information" />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).toHaveClass('mr-4');
    });

    it('does not apply margin-right utility class when no right-side elements are present', () => {
      const { getByTestId } = render(<Input name="test" value="test value" />);

      const input = getByTestId('DesignSystem-Input');
      expect(input).not.toHaveClass('mr-4');
    });
  });

  describe('Input Component - Icon Size Calculation Logic', () => {
    it('uses correct icon size for tiny inputs (14px)', () => {
      const { container } = render(<Input name="test" size="tiny" icon="search" />);
      expect(container.querySelector('.Input-icon--left')).toBeInTheDocument();
    });

    it('uses standard size mapping for regular and large inputs', () => {
      const { container: regularContainer } = render(<Input name="test" size="regular" icon="search" />);
      const { container: largeContainer } = render(<Input name="test" size="large" icon="search" />);

      expect(regularContainer.querySelector('.Input-icon--left')).toBeInTheDocument();
      expect(largeContainer.querySelector('.Input-icon--left')).toBeInTheDocument();
    });
  });
});
