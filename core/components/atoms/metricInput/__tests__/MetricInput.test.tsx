import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
const size = ['regular', 'large'];
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
