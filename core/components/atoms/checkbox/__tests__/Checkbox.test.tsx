import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox, { CheckboxProps as Props } from '../Checkbox';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = ['tiny', 'regular'];
const BooleanValue = [true, false];
const StringValue = 'Checkbox';

const FunctionValue = jest.fn();

describe('Checkbox component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    checked: valueHelper(true, { required: true }),
    label: valueHelper(StringValue, { required: true }),
    helpText: valueHelper(StringValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Checkbox {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Checkbox component', () => {
  const mapper: Record<string, any> = {
    checked: valueHelper(BooleanValue, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    label: valueHelper(StringValue, { required: true }),
    helpText: valueHelper(StringValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    error: valueHelper(BooleanValue, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Checkbox {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Checkbox component', () => {
  const mapper: Record<string, any> = {
    indeterminate: valueHelper(BooleanValue, { required: true, iterate: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    label: valueHelper(StringValue, { required: true }),
    helpText: valueHelper(StringValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    wrapLabel: valueHelper(BooleanValue, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Checkbox {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Checkbox component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} />);
    expect(getByTestId('DesignSystem-Checkbox')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Checkbox-OuterWrapper')).toBeInTheDocument();
  });

  it('renders children : input', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} />);
    expect(getByTestId('DesignSystem-Checkbox-InputBox')).toBeInTheDocument();
  });

  it('renders children with label prop', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} />);
    expect(getByTestId('DesignSystem-Checkbox-InputBox')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Checkbox-Label')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Checkbox-Label').textContent).toMatch(StringValue);
  });

  it('renders label with wrapLabel applied', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} wrapLabel={true} />);
    expect(getByTestId('DesignSystem-Checkbox-Label').querySelector('span')).toHaveClass('ellipsis');
  });

  it('renders label without wrapLabel applied', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} wrapLabel={false} />);
    expect(getByTestId('DesignSystem-Checkbox-Label').querySelector('span')).toHaveClass('ellipsis--noWrap');
  });

  it('renders children with helpText prop', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} helpText={StringValue} />);
    expect(getByTestId('DesignSystem-Checkbox-InputBox')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Checkbox-Label')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Checkbox-HelpText')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Checkbox-HelpText').textContent).toMatch(StringValue);
  });

  it('calls onchange handler', () => {
    const { getByTestId } = render(<Checkbox onChange={FunctionValue} label={StringValue} helpText={StringValue} />);
    const input = getByTestId('DesignSystem-Checkbox-InputBox');
    fireEvent.click(input);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onchange handler when box is checked', () => {
    const { getByTestId } = render(<Checkbox onChange={FunctionValue} label={StringValue} helpText={StringValue} />);
    const input = getByTestId('DesignSystem-Checkbox-InputBox');
    expect(input).not.toBeChecked();
    fireEvent.change(input, { target: { checked: true } });
    expect(input).toBeChecked();
  });

  it('renders checkbox with error state', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} error={true} />);
    const checkboxIcon = getByTestId('DesignSystem-Checkbox-Icon');
    expect(checkboxIcon).toHaveClass('Checkbox-wrapper--error');
  });

  it('renders checkbox with default state', () => {
    const { getByTestId } = render(<Checkbox label={StringValue} error={false} />);
    const checkboxIcon = getByTestId('DesignSystem-Checkbox-Icon');
    expect(checkboxIcon).toHaveClass('Checkbox-wrapper--default');
  });
});
