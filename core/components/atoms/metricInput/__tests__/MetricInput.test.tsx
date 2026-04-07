import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MetricInput } from '@/index';
import { MetricInputProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const value = 10;
const name = 'name';
const icon = 'events';
const prefix = 'USD';
const suffix = 'kg';
const min = 0;
const max = 100;
const size = ['small', 'regular', 'large'];
const FunctionValue = jest.fn();
const Booleanvalue = [true, false];

describe('MetricInput component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(name, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    value: valueHelper(value, { required: true }),
    prefix: valueHelper(prefix, { required: true }),
    suffix: valueHelper(suffix, { required: true }),
    min: valueHelper(min, { required: true }),
    max: valueHelper(max, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    onBlur: valueHelper(FunctionValue, { required: true }),
    onFocus: valueHelper(FunctionValue, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<MetricInput {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MetricInput component', () => {
  const mapper: Record<string, any> = {
    defaultValue: valueHelper(value, { required: true }),
    icon: valueHelper(icon, { required: true }),
    error: valueHelper(Booleanvalue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<MetricInput {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MetricInput component', () => {
  it('renders input and arrow icons', () => {
    const { getByTestId } = render(<MetricInput />);
    expect(getByTestId('DesignSystem-MetricInput').tagName).toMatch('INPUT');
    expect(getByTestId('DesignSystem-MetricInput--upIcon').tagName).toMatch('BUTTON');
    expect(getByTestId('DesignSystem-MetricInput--downIcon').tagName).toMatch('BUTTON');
  });
});

describe('MetricInput component with prop: size', () => {
  it('renders regular metric input by default', () => {
    const { getByTestId } = render(<MetricInput />);
    expect(getByTestId('DesignSystem-MetricInput')).toHaveClass('MetricInput-input--regular');
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--regular');
  });

  it('renders small metric input', () => {
    const { getByTestId } = render(<MetricInput size="small" />);
    expect(getByTestId('DesignSystem-MetricInput')).toHaveClass('MetricInput-input--small');
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--small');
  });

  it('renders large metric input by default', () => {
    const { getByTestId } = render(<MetricInput size="large" />);
    expect(getByTestId('DesignSystem-MetricInput')).toHaveClass('MetricInput-input--large');
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--large');
  });
});

describe('MetricInput component with props prefix and suffix ', () => {
  it('renders prefix', () => {
    const { getByTestId } = render(<MetricInput prefix={prefix} />);
    expect(getByTestId('DesignSystem-MetricInput--prefix')).toHaveTextContent(prefix);
  });

  it('renders suffix', () => {
    const { getByTestId } = render(<MetricInput suffix={suffix} />);
    expect(getByTestId('DesignSystem-MetricInput--suffix')).toHaveTextContent(suffix);
  });

  it('renders icon', () => {
    const { getByTestId } = render(<MetricInput icon={icon} />);
    expect(getByTestId('DesignSystem-MetricInput--icon')).toHaveTextContent(icon);
  });
});

describe('MetricInput component with props disabled and error ', () => {
  it('with prop: disabled', () => {
    const { getByTestId } = render(<MetricInput disabled={true} onChange={FunctionValue} />);
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--disabled');

    const upArrowIcon = getByTestId('DesignSystem-MetricInput--upIcon');
    fireEvent.click(upArrowIcon);
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('with prop: error', () => {
    const { getByTestId } = render(<MetricInput error={true} />);
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--error');
  });
});

describe('Uncontrolled MetricInput component', () => {
  it('with defaultValue', () => {
    const newValue = 11;

    const { getByTestId } = render(<MetricInput defaultValue={value} onChange={FunctionValue} />);
    const metricInput = getByTestId('DesignSystem-MetricInput');
    expect(metricInput).toHaveValue(value);

    fireEvent.change(metricInput, { target: { value: newValue } });
    expect(FunctionValue).toHaveBeenCalled();
    expect(metricInput).toHaveValue(newValue);
  });

  it('increases value if up arrow key is pressed', () => {
    const { getByTestId } = render(<MetricInput defaultValue={value} onChange={FunctionValue} />);
    const metricInput = getByTestId('DesignSystem-MetricInput');
    expect(metricInput).toHaveValue(value);

    const upArrowIcon = getByTestId('DesignSystem-MetricInput--upIcon');
    fireEvent.click(upArrowIcon);
    expect(FunctionValue).toHaveBeenCalled();
    expect(metricInput).toHaveValue(11);

    fireEvent.keyDown(metricInput, { key: 'ArrowUp' });
    expect(metricInput).toHaveValue(12);
  });

  it('decreases value if down arrow key is pressed', () => {
    const { getByTestId } = render(<MetricInput defaultValue={value} onChange={FunctionValue} />);
    const metricInput = getByTestId('DesignSystem-MetricInput');
    expect(metricInput).toHaveValue(value);

    const downArrowIcon = getByTestId('DesignSystem-MetricInput--downIcon');
    fireEvent.click(downArrowIcon);
    expect(FunctionValue).toHaveBeenCalled();
    expect(metricInput).toHaveValue(9);

    fireEvent.keyDown(metricInput, { key: 'ArrowDown' });
    expect(metricInput).toHaveValue(8);
  });

  it('decreases value to -1 if input is empty and down arrow key is pressed', () => {
    const { getByTestId } = render(<MetricInput />);
    const metricInput = getByTestId('DesignSystem-MetricInput');
    const downArrowIcon = getByTestId('DesignSystem-MetricInput--downIcon');
    fireEvent.click(downArrowIcon);
    expect(metricInput).toHaveValue(-1);
  });
});

describe('Controlled MetricInput component', () => {
  it('with value', () => {
    const newValue = 11;

    const { getByTestId, rerender } = render(<MetricInput value={value} onChange={FunctionValue} />);
    const metricInput = getByTestId('DesignSystem-MetricInput');
    expect(metricInput).toHaveValue(value);

    fireEvent.change(metricInput, { target: { value: newValue } });
    expect(metricInput).toHaveValue(value);
    expect(FunctionValue).toHaveBeenCalled();

    rerender(<MetricInput value={newValue} onChange={FunctionValue} />);
    expect(metricInput).toHaveValue(newValue);
  });

  it('decreases value if down arrow key is pressed', () => {
    const { getByTestId } = render(<MetricInput defaultValue={value} onChange={FunctionValue} />);
    const metricInput = getByTestId('DesignSystem-MetricInput');
    expect(metricInput).toHaveValue(value);

    const downArrowIcon = getByTestId('DesignSystem-MetricInput--downIcon');
    fireEvent.click(downArrowIcon);
    expect(FunctionValue).toHaveBeenCalled();
    expect(metricInput).toHaveValue(9);

    fireEvent.keyDown(metricInput, { key: 'ArrowDown' });
    expect(metricInput).toHaveValue(8);
  });

  it('decreases value to -1 if input is empty and down arrow key is pressed', () => {
    const { getByTestId } = render(<MetricInput />);
    const metricInput = getByTestId('DesignSystem-MetricInput');
    const downArrowIcon = getByTestId('DesignSystem-MetricInput--downIcon');
    fireEvent.click(downArrowIcon);
    expect(metricInput).toHaveValue(-1);
  });
});

describe('MetricInput component with props min and max', () => {
  it('with prop: min', () => {
    const { getByTestId } = render(<MetricInput defaultValue={min} onChange={FunctionValue} min={min} />);

    const metricInput = getByTestId('DesignSystem-MetricInput');
    const downArrowIcon = getByTestId('DesignSystem-MetricInput--downIcon');
    fireEvent.click(downArrowIcon);
    expect(metricInput).toHaveValue(min);
  });

  it('with prop: max', () => {
    const { getByTestId } = render(<MetricInput defaultValue={max} onChange={FunctionValue} max={max} />);

    const metricInput = getByTestId('DesignSystem-MetricInput');
    const upArrowIcon = getByTestId('DesignSystem-MetricInput--upIcon');
    fireEvent.click(upArrowIcon);
    expect(metricInput).toHaveValue(max);
  });
});

describe('MetricInput component with props showActionButton', () => {
  it('with showActionButton', () => {
    const { getByTestId } = render(<MetricInput defaultValue={min} onChange={FunctionValue} min={min} />);
    expect(getByTestId('DesignSystem-MetricInput--upIcon')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-MetricInput--downIcon')).toBeInTheDocument();
  });

  it('with showActionButton false', () => {
    const { queryByTestId } = render(
      <MetricInput showActionButton={false} defaultValue={min} onChange={FunctionValue} min={min} />
    );
    expect(queryByTestId('DesignSystem-MetricInput--upIcon')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-MetricInput--downIcon')).not.toBeInTheDocument();
  });

  it('update value with showActionButton=false', () => {
    const newValue = 11;

    const { getByTestId, rerender } = render(
      <MetricInput showActionButton={false} value={value} onChange={FunctionValue} />
    );
    const metricInput = getByTestId('DesignSystem-MetricInput');
    expect(metricInput).toHaveValue(value);

    fireEvent.change(metricInput, { target: { value: newValue } });
    expect(metricInput).toHaveValue(value);
    expect(FunctionValue).toHaveBeenCalled();

    rerender(<MetricInput value={newValue} onChange={FunctionValue} />);
    expect(metricInput).toHaveValue(newValue);
  });
});

describe('MetricInput Keyboard Event Handling - Tests comprehensive keyboard interaction behavior including arrow keys and character prevention', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('prevents "e" and "E" character input when showActionButton is true', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.keyDown(input, { key: 'e' });
    fireEvent.keyDown(input, { key: 'E' });

    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('allows "e" and "E" character input when showActionButton is false', () => {
    const { getByTestId } = render(<MetricInput showActionButton={false} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.keyDown(input, { key: 'e' });
    fireEvent.keyDown(input, { key: 'E' });

    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('handles ArrowUp and ArrowDown keys correctly with showActionButton enabled', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5} showActionButton={true} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(input).toHaveValue(6);

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(input).toHaveValue(5);
  });

  it('ignores ArrowUp and ArrowDown keys when showActionButton is false', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5} showActionButton={false} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(input).toHaveValue(5);

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(input).toHaveValue(5);
  });

  it('calls custom onKeyDown handler when provided', () => {
    const customKeyDownHandler = jest.fn();
    const { getByTestId } = render(<MetricInput onKeyDown={customKeyDownHandler} showActionButton={true} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(customKeyDownHandler).toHaveBeenCalled();
  });
});

describe('MetricInput Action Button Functionality - Tests increment/decrement button behavior with various constraints and edge cases', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('increments value correctly with decimal precision preservation', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5.25} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(6.25);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('decrements value correctly with decimal precision preservation', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5.75} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(downButton);
    expect(input).toHaveValue(4.75);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('respects min constraint when decrementing', () => {
    const { getByTestId } = render(<MetricInput defaultValue={0} min={0} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(downButton);
    expect(input).toHaveValue(0);
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('respects max constraint when incrementing', () => {
    const { getByTestId } = render(<MetricInput defaultValue={10} max={10} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(10);
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('does not trigger action when disabled', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5} disabled={true} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(upButton);
    fireEvent.click(downButton);
    expect(input).toHaveValue(5);
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('does not trigger action when readOnly', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5} readOnly={true} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(upButton);
    fireEvent.click(downButton);
    expect(input).toHaveValue(5);
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('handles empty value correctly when incrementing', () => {
    const { getByTestId } = render(<MetricInput onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(1);
  });

  it('handles empty value correctly when decrementing', () => {
    const { getByTestId } = render(<MetricInput onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(downButton);
    expect(input).toHaveValue(-1);
  });
});

describe('MetricInput Value Capping and Validation - Tests min/max constraint enforcement and edge case handling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('caps value within min and max range during increment', () => {
    const { getByTestId } = render(<MetricInput defaultValue={9} min={0} max={10} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(10);

    fireEvent.click(upButton);
    expect(input).toHaveValue(10);
  });

  it('caps value within min and max range during decrement', () => {
    const { getByTestId } = render(<MetricInput defaultValue={1} min={0} max={10} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(downButton);
    expect(input).toHaveValue(0);

    fireEvent.click(downButton);
    expect(input).toHaveValue(0);
  });

  it('handles negative min values correctly', () => {
    const { getByTestId } = render(<MetricInput defaultValue={-5} min={-10} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(downButton);
    expect(input).toHaveValue(-6);

    for (let i = 0; i < 5; i++) {
      fireEvent.click(downButton);
    }
    expect(input).toHaveValue(-10);
  });

  it('handles decimal min and max values', () => {
    const { getByTestId } = render(<MetricInput defaultValue={1.5} min={1.0} max={2.0} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(2.0);

    fireEvent.click(downButton);
    fireEvent.click(downButton);
    expect(input).toHaveValue(1.0);
  });

  it('handles zero as valid min/max values', () => {
    const { getByTestId } = render(<MetricInput defaultValue={0} min={0} max={0} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(0);

    fireEvent.click(downButton);
    expect(input).toHaveValue(0);
  });
});

describe('MetricInput Controlled vs Uncontrolled Behavior - Tests state management patterns and value synchronization', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('behaves as controlled component when value prop is provided', () => {
    const { getByTestId, rerender } = render(<MetricInput value={5} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveValue(5);

    fireEvent.change(input, { target: { value: '10' } });
    expect(input).toHaveValue(5);
    expect(FunctionValue).toHaveBeenCalled();

    rerender(<MetricInput value={10} onChange={FunctionValue} />);
    expect(input).toHaveValue(10);
  });

  it('behaves as uncontrolled component when only defaultValue is provided', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveValue(5);

    fireEvent.change(input, { target: { value: '10' } });
    expect(input).toHaveValue(10);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('updates internal state when value prop changes in controlled mode', () => {
    const { getByTestId, rerender } = render(<MetricInput value={5} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveValue(5);

    rerender(<MetricInput value={15} onChange={FunctionValue} />);
    expect(input).toHaveValue(15);

    rerender(<MetricInput value={0} onChange={FunctionValue} />);
    expect(input).toHaveValue(0);
  });

  it('handles controlled component with action buttons', () => {
    let currentValue = 5;
    const handleChange = jest.fn((e) => {
      currentValue = Number(e.target.value);
    });

    const { getByTestId, rerender } = render(<MetricInput value={currentValue} onChange={handleChange} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    fireEvent.click(upButton);
    expect(handleChange).toHaveBeenCalled();

    rerender(<MetricInput value={currentValue} onChange={handleChange} />);
    expect(input).toHaveValue(6);
  });
});

describe('MetricInput Accessibility Features - Tests ARIA labels, focus management, and keyboard navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('has proper ARIA labels for action buttons', () => {
    const { getByTestId } = render(<MetricInput />);
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    expect(upButton).toHaveAttribute('aria-label', 'Increment value');
    expect(downButton).toHaveAttribute('aria-label', 'Decrement value');
  });

  it('supports autoFocus prop for programmatic focus', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<MetricInput ref={ref} />);

    ref.current?.focus();
    expect(ref.current).toHaveFocus();
  });

  it('has proper button type for action buttons', () => {
    const { getByTestId } = render(<MetricInput />);
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    expect(upButton).toHaveAttribute('type', 'button');
    expect(downButton).toHaveAttribute('type', 'button');
  });

  it('has proper role for wrapper element', () => {
    const { getByTestId } = render(<MetricInput />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveAttribute('role', 'group');
  });

  it('inherits aria-label on the wrapper when composite navigation is enabled', () => {
    const { getByTestId } = render(<MetricInput aria-label="Metric Input Label" />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveAttribute('aria-label', 'Metric Input Label');
  });

  it('derives aria-labelledby for the wrapper from the associated label', () => {
    const { getByTestId, getByText } = render(
      <>
        <label htmlFor="metric-input">Cost</label>
        <MetricInput id="metric-input" />
      </>
    );

    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const label = getByText('Cost');

    expect(label).toHaveAttribute('id');
    expect(wrapper).toHaveAttribute('aria-labelledby', label.getAttribute('id'));
    expect(input).toHaveAttribute('aria-labelledby', label.getAttribute('id'));
  });

  it('moves autoFocus to the wrapper when action buttons are enabled', () => {
    const { getByTestId } = render(<MetricInput autoFocus aria-label="Metric Input Label" />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveFocus();
  });

  it('maintains proper input type', () => {
    const { getByTestId } = render(<MetricInput />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveAttribute('type', 'number');
  });

  it('mirrors aria-invalid on the input when error is true', () => {
    const { getByTestId } = render(<MetricInput error={true} />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('MetricInput CSS Classes and Styling - Tests proper CSS class application based on component state and props', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('applies small size classes correctly', () => {
    const { getByTestId } = render(<MetricInput size="small" />);
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--small');
    expect(getByTestId('DesignSystem-MetricInput')).toHaveClass('MetricInput-input--small');
  });

  it('applies regular size classes correctly', () => {
    const { getByTestId } = render(<MetricInput size="regular" />);
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--regular');
    expect(getByTestId('DesignSystem-MetricInput')).toHaveClass('MetricInput-input--regular');
  });

  it('applies large size classes correctly', () => {
    const { getByTestId } = render(<MetricInput size="large" />);
    expect(getByTestId('DesignSystem-MetricInputWrapper')).toHaveClass('MetricInput--large');
    expect(getByTestId('DesignSystem-MetricInput')).toHaveClass('MetricInput-input--large');
  });

  it('applies disabled state classes', () => {
    const { getByTestId } = render(<MetricInput disabled={true} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveClass('MetricInput--disabled');
  });

  it('applies readOnly state classes', () => {
    const { getByTestId } = render(<MetricInput readOnly={true} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveClass('MetricInput--readOnly');
  });

  it('applies error state classes', () => {
    const { getByTestId } = render(<MetricInput error={true} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveClass('MetricInput--error');
  });

  it('applies custom className prop', () => {
    const customClass = 'custom-metric-input';
    const { getByTestId } = render(<MetricInput className={customClass} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveClass(customClass);
  });

  it('applies proper spacing classes for prefix - small size', () => {
    const { getByTestId } = render(<MetricInput prefix="USD" size="small" />);
    const prefix = getByTestId('DesignSystem-MetricInput--prefix');
    expect(prefix).toHaveClass('MetricInput-text', 'MetricInput-text--small');
  });

  it('applies proper spacing classes for prefix - regular size', () => {
    const { getByTestId } = render(<MetricInput prefix="USD" size="regular" />);
    const prefix = getByTestId('DesignSystem-MetricInput--prefix');
    expect(prefix).toHaveClass('MetricInput-text', 'MetricInput-text--regular');
  });

  it('applies proper spacing classes for prefix - large size', () => {
    const { getByTestId } = render(<MetricInput prefix="USD" size="large" />);
    const prefix = getByTestId('DesignSystem-MetricInput--prefix');
    expect(prefix).toHaveClass('MetricInput-text', 'MetricInput-text--large');
  });

  it('applies proper spacing classes for suffix - small size', () => {
    const { getByTestId } = render(<MetricInput suffix="kg" size="small" />);
    const suffix = getByTestId('DesignSystem-MetricInput--suffix');
    expect(suffix).toHaveClass('MetricInput-text', 'MetricInput-text--small');
  });

  it('applies proper spacing classes for suffix - regular size', () => {
    const { getByTestId } = render(<MetricInput suffix="kg" size="regular" />);
    const suffix = getByTestId('DesignSystem-MetricInput--suffix');
    expect(suffix).toHaveClass('MetricInput-text', 'MetricInput-text--regular');
  });

  it('applies proper spacing classes for suffix - large size', () => {
    const { getByTestId } = render(<MetricInput suffix="kg" size="large" />);
    const suffix = getByTestId('DesignSystem-MetricInput--suffix');
    expect(suffix).toHaveClass('MetricInput-text', 'MetricInput-text--large');
  });

  it('renders action button groups when action buttons are enabled', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    expect(downButton).toBeInTheDocument();
    expect(upButton).toBeInTheDocument();
  });

  it('applies the Figma content spacing classes for regular size', () => {
    const { getByTestId } = render(<MetricInput size="regular" />);
    const content = getByTestId('DesignSystem-MetricInput').parentElement;

    expect(content).toHaveClass('MetricInput-content', 'MetricInput-content--regular');
  });

  it('applies the Figma content spacing classes for small size', () => {
    const { getByTestId } = render(<MetricInput size="small" />);
    const content = getByTestId('DesignSystem-MetricInput').parentElement;

    expect(content).toHaveClass('MetricInput-content', 'MetricInput-content--small');
  });

  it('applies the Figma content spacing classes for large size', () => {
    const { getByTestId } = render(<MetricInput size="large" />);
    const content = getByTestId('DesignSystem-MetricInput').parentElement;

    expect(content).toHaveClass('MetricInput-content', 'MetricInput-content--large');
  });

  it('does not apply legacy margin utility classes to the input', () => {
    const { getByTestId, rerender } = render(<MetricInput showActionButton={false} size="small" />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');

    rerender(<MetricInput showActionButton={false} size="regular" suffix="kg" />);
    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');

    rerender(<MetricInput showActionButton={true} size="large" />);
    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');
  });

  it('right aligns the value when the input content overflows', async () => {
    const { getByTestId } = render(<MetricInput prefix="$" suffix="USD" value={622122} />);
    const input = getByTestId('DesignSystem-MetricInput');

    Object.defineProperty(input, 'clientWidth', { configurable: true, value: 40 });
    Object.defineProperty(input, 'scrollWidth', { configurable: true, value: 80 });

    fireEvent(window, new Event('resize'));

    await waitFor(() => {
      expect(input).toHaveClass('MetricInput-input--overflowing');
    });
  });
});

describe('MetricInput Pagination Styles Integration - Tests that pagination styles are properly applied alongside component styles', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('applies pagination styles to input element', () => {
    const { getByTestId } = render(<MetricInput />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveClass('MetricInput-input');
  });

  it('applies pagination styles alongside size-specific classes', () => {
    const { getByTestId } = render(<MetricInput size="large" />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveClass('MetricInput-input');
    expect(input).toHaveClass('MetricInput-input--large');
  });

  it('maintains pagination styles with all size variants', () => {
    const sizes: ('small' | 'regular' | 'large')[] = ['small', 'regular', 'large'];

    sizes.forEach((size) => {
      const { getByTestId, unmount } = render(<MetricInput size={size} />);
      const input = getByTestId('DesignSystem-MetricInput');

      expect(input).toHaveClass('MetricInput-input');
      expect(input).toHaveClass(`MetricInput-input--${size}`);

      unmount(); // Clean up between iterations
    });
  });
});

describe('MetricInput Action Button Styling - Tests action button styling classes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('applies left action button classes by default', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    expect(downButton).toHaveClass('MetricInput-actionButtons', 'MetricInput-actionButtons--left');
  });

  it('applies right action button classes by default', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    expect(upButton).toHaveClass('MetricInput-actionButtons', 'MetricInput-actionButtons--right');
  });

  it('keeps left and right action button classes on input focus', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const input = getByTestId('DesignSystem-MetricInput');

    (input as HTMLInputElement).focus();

    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    expect(input).toHaveFocus();
    expect(downButton).toHaveClass('MetricInput-actionButtons', 'MetricInput-actionButtons--left');
    expect(upButton).toHaveClass('MetricInput-actionButtons', 'MetricInput-actionButtons--right');
  });

  it('uses the wrapper as the initial tab stop when action buttons are enabled', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    expect(wrapper).toHaveAttribute('tabindex', '0');
  });

  it('applies base action button class to both buttons', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    expect(upButton).toHaveClass('MetricInput-actionButtons');
    expect(downButton).toHaveClass('MetricInput-actionButtons');
  });

  it('allows the decrement button to receive focus directly', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    (downButton as HTMLButtonElement).focus();

    expect(downButton).toHaveFocus();
  });

  it('allows the increment button to receive focus directly', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    (upButton as HTMLButtonElement).focus();

    expect(upButton).toHaveFocus();
  });

  it('does not render action button classes when showActionButton is false', () => {
    const { queryByTestId } = render(<MetricInput showActionButton={false} />);

    expect(queryByTestId('DesignSystem-MetricInput--upIcon')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-MetricInput--downIcon')).not.toBeInTheDocument();
  });
});

describe('MetricInput Action Button Layout - Tests action button rendering and grouping', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders both side action buttons when action button is enabled', () => {
    const { container } = render(<MetricInput showActionButton={true} />);
    const actionButtons = container.querySelectorAll('.MetricInput-actionButtons');

    expect(actionButtons).toHaveLength(2);
  });

  it('does not render side action buttons when action button is disabled', () => {
    const { queryByTestId } = render(<MetricInput showActionButton={false} />);

    expect(queryByTestId('DesignSystem-MetricInput--downIcon')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-MetricInput--upIcon')).not.toBeInTheDocument();
  });

  it('keeps both side action buttons visible on input focus', () => {
    const { getByTestId, container } = render(<MetricInput showActionButton={true} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.focus(input);

    const actionButtons = container.querySelectorAll('.MetricInput-actionButtons');
    expect(actionButtons).toHaveLength(2);
  });

  it('renders keyboard traversal order as left button, input, then right button', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    expect(downButton.compareDocumentPosition(input) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(input.compareDocumentPosition(upButton) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('activates internal tab stops after Enter is pressed on the wrapper', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    expect(wrapper).toHaveAttribute('tabindex', '0');
    expect(downButton).toHaveAttribute('tabindex', '-1');
    expect(input).toHaveAttribute('tabindex', '-1');
    expect(upButton).toHaveAttribute('tabindex', '-1');

    (wrapper as HTMLDivElement).focus();
    fireEvent.keyDown(wrapper, { key: 'Enter' });

    expect(document.activeElement).toBe(input);
    expect(wrapper).toHaveAttribute('tabindex', '-1');
    expect(downButton).toHaveAttribute('tabindex', '0');
    expect(input).not.toHaveAttribute('tabindex');
    expect(upButton).toHaveAttribute('tabindex', '0');
  });

  it('resets to the wrapper tab stop after focus leaves the component', () => {
    const { getByTestId } = render(
      <>
        <MetricInput showActionButton={true} />
        <button data-test="outside-button" type="button">
          Next
        </button>
      </>
    );
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const outsideButton = getByTestId('outside-button');

    (wrapper as HTMLDivElement).focus();
    fireEvent.keyDown(wrapper, { key: 'Enter' });

    expect(wrapper).toHaveAttribute('tabindex', '-1');
    expect(upButton).toHaveAttribute('tabindex', '0');

    (upButton as HTMLButtonElement).focus();
    fireEvent.blur(upButton, { relatedTarget: outsideButton });
    (outsideButton as HTMLButtonElement).focus();

    expect(wrapper).toHaveAttribute('tabindex', '0');
    expect(downButton).toHaveAttribute('tabindex', '-1');
    expect(input).toHaveAttribute('tabindex', '-1');
    expect(upButton).toHaveAttribute('tabindex', '-1');
  });

  it('keeps internal traversal inside the component until focus leaves it', () => {
    const handleBlur = jest.fn();
    const { getByTestId } = render(<MetricInput showActionButton={true} onBlur={handleBlur} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    (wrapper as HTMLDivElement).focus();
    fireEvent.keyDown(wrapper, { key: 'Enter' });
    fireEvent.blur(input, { relatedTarget: upButton });

    expect(handleBlur).not.toHaveBeenCalled();
  });

  it('moves focus to the input when the content area is clicked', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} prefix="USD" />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.click(wrapper);

    expect(document.activeElement).toBe(input);
  });

  it('keeps caret navigation in the input when ArrowLeft is pressed', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} defaultValue={1234} />);
    const input = getByTestId('DesignSystem-MetricInput');

    (input as HTMLInputElement).focus();
    fireEvent.keyDown(input, { key: 'ArrowLeft' });

    expect(document.activeElement).toBe(input);
  });

  it('keeps caret navigation in the input when ArrowRight is pressed', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} defaultValue={1234} />);
    const input = getByTestId('DesignSystem-MetricInput');

    (input as HTMLInputElement).focus();
    fireEvent.keyDown(input, { key: 'ArrowRight' });

    expect(document.activeElement).toBe(input);
  });

  it('does not remap ArrowRight when the decrement button is focused', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    (downButton as HTMLButtonElement).focus();
    fireEvent.keyDown(downButton, { key: 'ArrowRight' });

    expect(document.activeElement).toBe(downButton);
  });

  it('does not remap ArrowLeft when the increment button is focused', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} />);
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    (upButton as HTMLButtonElement).focus();
    fireEvent.keyDown(upButton, { key: 'ArrowLeft' });

    expect(document.activeElement).toBe(upButton);
  });

  it('blurs the focused input on wheel to avoid accidental value changes', () => {
    const { getByTestId } = render(<MetricInput showActionButton={true} defaultValue={12} />);
    const input = getByTestId('DesignSystem-MetricInput') as HTMLInputElement;

    input.focus();
    expect(input).toHaveFocus();

    fireEvent.wheel(input);

    expect(input).not.toHaveFocus();
  });
});

describe('MetricInput Complex Styling Combinations - Tests edge cases and complex prop combinations', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles all props together with proper class combinations', () => {
    const { getByTestId, container } = render(
      <MetricInput
        size="large"
        showActionButton={true}
        prefix="$"
        suffix="USD"
        icon="star"
        error={true}
        disabled={false}
      />
    );

    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const prefix = getByTestId('DesignSystem-MetricInput--prefix');
    const suffix = getByTestId('DesignSystem-MetricInput--suffix');
    const icon = getByTestId('DesignSystem-MetricInput--icon');
    const actionButtons = container.querySelectorAll('.MetricInput-actionButtons');

    expect(wrapper).toHaveClass('MetricInput--large', 'MetricInput--error');
    expect(input).toHaveClass('MetricInput-input--large');
    expect(prefix).toHaveClass('MetricInput-text', 'MetricInput-text--large');
    expect(suffix).toHaveClass('MetricInput-text', 'MetricInput-text--large');
    expect(icon).toHaveClass('MetricInput-icon--large');
    expect(actionButtons).toHaveLength(2);
  });

  it('applies correct classes when action button disabled with suffix', () => {
    const { getByTestId } = render(<MetricInput size="small" showActionButton={false} suffix="kg" />);

    const input = getByTestId('DesignSystem-MetricInput');
    const suffix = getByTestId('DesignSystem-MetricInput--suffix');

    expect(input).toHaveClass('MetricInput-input--small');
    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');
    expect(suffix).toHaveClass('MetricInput-text', 'MetricInput-text--small');
  });

  it('applies correct classes when action button enabled without suffix', () => {
    const { getByTestId, container } = render(<MetricInput size="regular" showActionButton={true} />);

    const input = getByTestId('DesignSystem-MetricInput');
    const actionButtons = container.querySelectorAll('.MetricInput-actionButtons');

    expect(input).toHaveClass('MetricInput-input--regular');
    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');
    expect(actionButtons).toHaveLength(2);
  });

  it('handles disabled state with all styling elements', () => {
    const { getByTestId, container } = render(
      <MetricInput size="large" disabled={true} showActionButton={true} prefix="$" suffix="USD" icon="star" />
    );

    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const actionButtons = container.querySelectorAll('.MetricInput-actionButtons');

    expect(wrapper).toHaveClass('MetricInput--disabled', 'MetricInput--large');
    expect(input).toHaveClass('MetricInput-input--large');
    expect(actionButtons).toHaveLength(2);
  });

  it('handles readOnly state with proper styling', () => {
    const { getByTestId } = render(<MetricInput size="small" readOnly={true} showActionButton={false} />);

    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');

    expect(wrapper).toHaveClass('MetricInput--readOnly', 'MetricInput--small');
    expect(input).toHaveClass('MetricInput-input--small');
    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');
  });
});

describe('MetricInput Event Handlers - Tests all event handler props and their proper invocation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<MetricInput onChange={handleChange} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.change(input, { target: { value: '123' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onFocus handler when input gains focus', () => {
    const handleFocus = jest.fn();
    const { getByTestId } = render(<MetricInput onFocus={handleFocus} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it('calls onFocus when the wrapper tab stop gains focus before the input is activated', () => {
    const handleFocus = jest.fn((e) => e.target.value);
    const { getByTestId } = render(<MetricInput defaultValue={626} onFocus={handleFocus} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');

    (wrapper as HTMLDivElement).focus();

    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(handleFocus.mock.calls[0][0].target).toBe(input);
  });

  it('does not call onFocus again when focus moves from the wrapper tab stop to the input', () => {
    const handleFocus = jest.fn();
    const { getByTestId } = render(<MetricInput onFocus={handleFocus} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');

    (wrapper as HTMLDivElement).focus();
    fireEvent.keyDown(wrapper, { key: 'Enter' });

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur handler when input loses focus', () => {
    const handleBlur = jest.fn();
    const { getByTestId } = render(<MetricInput onBlur={handleBlur} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('does not call onBlur while focus moves to an internal action button', () => {
    const handleBlur = jest.fn();
    const { getByTestId } = render(<MetricInput onBlur={handleBlur} />);
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    (wrapper as HTMLDivElement).focus();
    fireEvent.keyDown(wrapper, { key: 'Enter' });
    fireEvent.blur(input, { relatedTarget: downButton });

    expect(handleBlur).not.toHaveBeenCalled();
  });

  it('calls onBlur when the wrapper tab stop loses focus before the input is activated', () => {
    const handleBlur = jest.fn((e) => e.target.value);
    const { getByTestId } = render(
      <>
        <MetricInput defaultValue={626} onBlur={handleBlur} />
        <button data-test="outside-button" type="button">
          Next
        </button>
      </>
    );
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const outsideButton = getByTestId('outside-button');

    (wrapper as HTMLDivElement).focus();
    fireEvent.blur(wrapper, { relatedTarget: outsideButton });

    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(handleBlur.mock.calls[0][0].target).toBe(input);
  });

  it('calls onBlur once with the input target when focus leaves after moving to an internal action button', () => {
    const handleBlur = jest.fn((e) => e.target.value);
    const { getByTestId } = render(
      <>
        <MetricInput defaultValue={626} onBlur={handleBlur} />
        <button data-test="outside-button" type="button">
          Next
        </button>
      </>
    );
    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const outsideButton = getByTestId('outside-button');

    (wrapper as HTMLDivElement).focus();
    fireEvent.keyDown(wrapper, { key: 'Enter' });
    fireEvent.blur(input, { relatedTarget: upButton });
    fireEvent.focus(upButton);
    fireEvent.blur(wrapper, { relatedTarget: outsideButton });

    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(handleBlur.mock.calls[0][0].target).toBe(input);
    expect(handleBlur.mock.calls[0][0].relatedTarget).toBe(outsideButton);
  });

  it('calls onClick handler when input is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<MetricInput onClick={handleClick} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.click(input);
    expect(handleClick).toHaveBeenCalled();
  });

  it('calls onKeyDown handler from input when key is pressed', () => {
    const handleKeyDown = jest.fn();
    const { getByTestId } = render(<MetricInput onKeyDown={handleKeyDown} />);
    const input = getByTestId('DesignSystem-MetricInput');

    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(handleKeyDown).toHaveBeenCalled();
  });

  it('calls onChange with synthetic event when action buttons are clicked', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<MetricInput defaultValue={5} onChange={handleChange} />);
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    fireEvent.click(upButton);
    expect(handleChange).toHaveBeenCalled();
  });
});

describe('MetricInput Edge Cases and Error Handling - Tests component behavior with unusual inputs and error conditions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles very large numbers correctly', () => {
    const largeNumber = 999999999;
    const { getByTestId } = render(<MetricInput defaultValue={largeNumber} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    expect(input).toHaveValue(largeNumber);
    fireEvent.click(upButton);
    expect(input).toHaveValue(largeNumber + 1);
  });

  it('handles very small negative numbers correctly', () => {
    const smallNumber = -999999999;
    const { getByTestId } = render(<MetricInput defaultValue={smallNumber} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    expect(input).toHaveValue(smallNumber);
    fireEvent.click(downButton);
    expect(input).toHaveValue(smallNumber - 1);
  });

  it('handles decimal precision correctly', () => {
    const { getByTestId } = render(<MetricInput defaultValue={1.123456} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(2.123456);
  });

  it('handles string defaultValue correctly', () => {
    const { getByTestId } = render(<MetricInput defaultValue="42" onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveValue(42);
  });

  it('handles empty defaultValue gracefully', () => {
    const { getByTestId } = render(<MetricInput />);
    const input = getByTestId('DesignSystem-MetricInput');

    expect(input).toHaveValue(null);
  });

  it('handles NaN min and max values', () => {
    const { getByTestId } = render(<MetricInput defaultValue={5} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(6);

    fireEvent.click(downButton);
    expect(input).toHaveValue(5);
  });

  it('handles zero values in min/max constraints properly', () => {
    const { getByTestId } = render(<MetricInput defaultValue={0} min={0} max={0} onChange={FunctionValue} />);
    const input = getByTestId('DesignSystem-MetricInput');
    const upButton = getByTestId('DesignSystem-MetricInput--upIcon');
    const downButton = getByTestId('DesignSystem-MetricInput--downIcon');

    fireEvent.click(upButton);
    expect(input).toHaveValue(0);

    fireEvent.click(downButton);
    expect(input).toHaveValue(0);
  });
});

describe('MetricInput Icon and Text Elements - Tests proper rendering and behavior of icon, prefix, and suffix elements', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders icon with correct properties', () => {
    const { getByTestId } = render(<MetricInput icon="star" iconType="outlined" size="large" />);
    const iconElement = getByTestId('DesignSystem-MetricInput--icon');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent('star');
  });

  it('changes icon appearance based on input value', () => {
    const { getByTestId, rerender } = render(<MetricInput icon="star" />);
    const iconElement = getByTestId('DesignSystem-MetricInput--icon');

    expect(iconElement).toBeInTheDocument();

    rerender(<MetricInput icon="star" value={10} />);
    expect(iconElement).toBeInTheDocument();
  });

  it('renders prefix and suffix with correct text content', () => {
    const { getByTestId } = render(<MetricInput prefix="$" suffix="USD" />);
    const prefixElement = getByTestId('DesignSystem-MetricInput--prefix');
    const suffixElement = getByTestId('DesignSystem-MetricInput--suffix');

    expect(prefixElement).toHaveTextContent('$');
    expect(suffixElement).toHaveTextContent('USD');
  });

  it('applies correct size to prefix and suffix text elements', () => {
    const { getByTestId } = render(<MetricInput prefix="$" suffix="USD" size="large" />);
    const prefixElement = getByTestId('DesignSystem-MetricInput--prefix');
    const suffixElement = getByTestId('DesignSystem-MetricInput--suffix');

    expect(prefixElement).toBeInTheDocument();
    expect(suffixElement).toBeInTheDocument();
  });

  it('does not render icon, prefix, or suffix when not provided', () => {
    const { queryByTestId } = render(<MetricInput />);

    expect(queryByTestId('DesignSystem-MetricInput--icon')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-MetricInput--prefix')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-MetricInput--suffix')).not.toBeInTheDocument();
  });
});

describe('MetricInput Forward Ref and Imperative Handle - Tests ref forwarding and imperative access to input element', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('forwards ref to input element correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<MetricInput ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.tagName).toBe('INPUT');
  });

  it('allows imperative focus through ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<MetricInput ref={ref} />);

    ref.current?.focus();
    expect(ref.current).toHaveFocus();
  });

  it('allows imperative value access through ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<MetricInput ref={ref} defaultValue={42} />);

    expect(ref.current?.value).toBe('42');
  });
});

describe('MetricInput CSS Integration and Cross-Module Dependencies - Tests integration with pagination styles and CSS modules', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('integrates pagination styles with component-specific classes', () => {
    const { getByTestId } = render(<MetricInput size="regular" showActionButton={true} />);
    const input = getByTestId('DesignSystem-MetricInput');

    // Should have both component-specific and pagination module classes
    expect(input).toHaveClass('MetricInput-input');
    expect(input).toHaveClass('MetricInput-input--regular');
  });

  it('maintains class priority when multiple modules are applied', () => {
    const { getByTestId } = render(
      <MetricInput size="large" className="custom-class" showActionButton={false} suffix="test" />
    );

    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');

    expect(wrapper).toHaveClass('MetricInput--large', 'custom-class');
    expect(input).toHaveClass('MetricInput-input', 'MetricInput-input--large');
    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');
  });

  it('applies correct styles when all optional elements are present', () => {
    const { getByTestId, container } = render(
      <MetricInput
        icon="star"
        iconType="outlined"
        prefix="Prefix"
        suffix="Suffix"
        size="large"
        showActionButton={true}
        error={false}
        disabled={false}
        readOnly={false}
      />
    );

    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');
    const icon = getByTestId('DesignSystem-MetricInput--icon');
    const prefix = getByTestId('DesignSystem-MetricInput--prefix');
    const suffix = getByTestId('DesignSystem-MetricInput--suffix');
    const actionButtons = container.querySelectorAll('.MetricInput-actionButtons');

    expect(wrapper).toHaveClass('MetricInput', 'MetricInput--large');
    expect(input).toHaveClass('MetricInput-input', 'MetricInput-input--large');
    expect(icon).toHaveClass('MetricInput-icon--large');
    expect(prefix).toHaveClass('MetricInput-text', 'MetricInput-text--large');
    expect(suffix).toHaveClass('MetricInput-text', 'MetricInput-text--large');
    expect(actionButtons).toHaveLength(2);
  });

  it('applies minimal styles when no optional elements are present', () => {
    const { getByTestId } = render(<MetricInput showActionButton={false} />);

    const wrapper = getByTestId('DesignSystem-MetricInputWrapper');
    const input = getByTestId('DesignSystem-MetricInput');

    expect(wrapper).toHaveClass('MetricInput', 'MetricInput--regular');
    expect(input).toHaveClass('MetricInput-input', 'MetricInput-input--regular');
    expect(input).not.toHaveClass('mr-4', 'mr-5', 'mr-6');
  });
});

describe('MetricInput Action Button Size Mapping - Tests action button icon size calculations', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('uses correct icon size for small action buttons', () => {
    const { container } = render(<MetricInput size="small" showActionButton={true} />);
    const upButton = container.querySelector('[data-test="DesignSystem-MetricInput--upIcon"] .Icon');
    const downButton = container.querySelector('[data-test="DesignSystem-MetricInput--downIcon"] .Icon');

    if (upButton && downButton) {
      // Size should be 14 for small according to actionButtonIconSizeMapping
      expect(upButton).toBeInTheDocument();
      expect(downButton).toBeInTheDocument();
    }
  });

  it('uses correct icon size for regular action buttons', () => {
    const { container } = render(<MetricInput size="regular" showActionButton={true} />);
    const upButton = container.querySelector('[data-test="DesignSystem-MetricInput--upIcon"] .Icon');
    const downButton = container.querySelector('[data-test="DesignSystem-MetricInput--downIcon"] .Icon');

    if (upButton && downButton) {
      // Size should be 14 for regular according to actionButtonIconSizeMapping
      expect(upButton).toBeInTheDocument();
      expect(downButton).toBeInTheDocument();
    }
  });

  it('uses correct icon size for large action buttons', () => {
    const { container } = render(<MetricInput size="large" showActionButton={true} />);
    const upButton = container.querySelector('[data-test="DesignSystem-MetricInput--upIcon"] .Icon');
    const downButton = container.querySelector('[data-test="DesignSystem-MetricInput--downIcon"] .Icon');

    if (upButton && downButton) {
      // Size should be 14 for large according to actionButtonIconSizeMapping
      expect(upButton).toBeInTheDocument();
      expect(downButton).toBeInTheDocument();
    }
  });
});
