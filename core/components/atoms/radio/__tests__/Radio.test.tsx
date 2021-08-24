import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Radio, { RadioProps as Props } from '../Radio';

const size = ['tiny', 'regular'];
const BooleanValue = [true, false];
const label = 'Radio';
const FunctionValue = jest.fn();
const StringValue = 'Options';

describe('Radio component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    selected: valueHelper(true, { required: true }),
    label: valueHelper(label, { required: true }),
    helpText: valueHelper(label, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Radio {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Radio component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    selected: valueHelper(true, { required: true }),
    label: valueHelper(label, { required: true }),
    helpText: valueHelper(label, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Radio {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Radio component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Radio label={label} name={StringValue} value={StringValue}/>);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
  });

  it('renders children : input', () => {
    const { getByTestId } = render(<Radio label={label} name={StringValue} value={StringValue}/>);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
  });

  it('renders children with label prop', () => {
    const { getByTestId } = render(<Radio label={label} name={StringValue} value={StringValue}/>);
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Label')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Label').textContent).toMatch(label)
  });

  it('renders children with helpText prop', () => {
    const { getByTestId } = render(<Radio label={label} name={StringValue} value={StringValue} helpText={StringValue} />);
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Label')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-HelpText')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-HelpText').textContent).toMatch(StringValue);
  });

  it('calls onchange handler', () => {
    const { getByTestId } = render(<Radio onChange={FunctionValue} label={label} name={StringValue} value={StringValue} helpText={StringValue} />);
    const input = getByTestId('DesignSystem-Radio-Input');
    fireEvent.click(input);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onchange handler when box is checked ', () => {
    const { getByTestId } = render(<Radio onChange={FunctionValue} name={label} value={StringValue} label={StringValue} helpText={StringValue} />);
    const input = getByTestId('DesignSystem-Radio-Input');
    expect(input).not.toBeChecked();
    fireEvent.change(input, { target: { checked: true } });
    expect(input).toBeChecked();
  });
});
