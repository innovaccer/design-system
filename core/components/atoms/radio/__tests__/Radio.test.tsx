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
    const { getByTestId } = render(<Radio label={label} name={StringValue} value={StringValue} />);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
  });

  it('renders children : input', () => {
    const { getByTestId } = render(<Radio label={label} name={StringValue} value={StringValue} />);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
  });

  it('renders radio input with error state as alert', () => {
    const { getByTestId } = render(<Radio error={true} label={label} name={StringValue} value={StringValue} />);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveClass('Radio-errorWrapper');
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveStyle(`border-color: var(--alert)`);
  });

  it('renders radio input with error state as alert-dark on hover', () => {
    const { getByTestId } = render(<Radio error={true} label={label} name={StringValue} value={StringValue} />);
    const radioElement = getByTestId('DesignSystem-Radio-OuterWrapper');
    fireEvent.mouseEnter(radioElement);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveClass('Radio-errorWrapper');
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveStyle(`border-color: var(--alert-dark)`);
  });

  it('renders radio input with error state as alert-darker on active', () => {
    const { getByTestId } = render(<Radio error={true} label={label} name={StringValue} value={StringValue} />);
    const radioElement = getByTestId('DesignSystem-Radio-OuterWrapper');
    fireEvent.pointerDown(radioElement);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveClass('Radio-errorWrapper');
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveStyle(`border-color: var(--alert-darker)`);
  });

  it('renders radio input with error state as alert when checked', () => {
    const { getByTestId } = render(<Radio error={true} label={label} name={StringValue} value={StringValue} />);
    const radioInputElement = getByTestId('DesignSystem-Radio-Input');
    fireEvent.change(radioInputElement, { target: { checked: true } });
    expect(radioInputElement).toBeChecked();
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveClass('Radio-errorWrapper');
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveStyle(`border-color: var(--alert)`);
  });

  it('renders radio input with error state as alert-dark on hover when checked', () => {
    const { getByTestId } = render(<Radio error={true} label={label} name={StringValue} value={StringValue} />);

    const radioInputElement = getByTestId('DesignSystem-Radio-Input');
    fireEvent.change(radioInputElement, { target: { checked: true } });
    expect(radioInputElement).toBeChecked();

    const radioElement = getByTestId('DesignSystem-Radio-OuterWrapper');
    fireEvent.mouseEnter(radioElement);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveClass('Radio-errorWrapper');
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveStyle(`border-color: var(--alert-dark)`);
  });

  it('renders radio input with error state as alert-darker on active when checked', () => {
    const { getByTestId } = render(<Radio error={true} label={label} name={StringValue} value={StringValue} />);

    const radioInputElement = getByTestId('DesignSystem-Radio-Input');
    fireEvent.change(radioInputElement, { target: { checked: true } });
    expect(radioInputElement).toBeChecked();

    const radioElement = getByTestId('DesignSystem-Radio-OuterWrapper');
    fireEvent.pointerDown(radioElement);
    expect(getByTestId('DesignSystem-Radio')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-OuterWrapper')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveClass('Radio-errorWrapper');
    expect(getByTestId('DesignSystem-Radio-wrapper')).toHaveStyle(`border-color: var(--alert-darker)`);
  });

  it('renders children with label prop', () => {
    const { getByTestId } = render(<Radio label={label} name={StringValue} value={StringValue} />);
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Label')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Label').textContent).toMatch(label);
  });

  it('renders children with helpText prop', () => {
    const { getByTestId } = render(
      <Radio label={label} name={StringValue} value={StringValue} helpText={StringValue} />
    );
    expect(getByTestId('DesignSystem-Radio-Input')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-Label')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-HelpText')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Radio-HelpText').textContent).toMatch(StringValue);
  });

  it('calls onchange handler', () => {
    const { getByTestId } = render(
      <Radio onChange={FunctionValue} label={label} name={StringValue} value={StringValue} helpText={StringValue} />
    );
    const input = getByTestId('DesignSystem-Radio-Input');
    fireEvent.click(input);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('calls onchange handler when box is checked ', () => {
    const { getByTestId } = render(
      <Radio onChange={FunctionValue} name={label} value={StringValue} label={StringValue} helpText={StringValue} />
    );
    const input = getByTestId('DesignSystem-Radio-Input');
    expect(input).not.toBeChecked();
    fireEvent.change(input, { target: { checked: true } });
    expect(input).toBeChecked();
  });

  it('checks for data-test attribute', () => {
    const testDataValue = 'DesignSystem-Radio-TestValue';
    const { getByTestId } = render(
      <Radio data-test={testDataValue} label={label} name={StringValue} value={StringValue} />
    );

    const radioElement = getByTestId('DesignSystem-Radio-TestValue');
    expect(radioElement.getAttribute('data-test')).toBe(testDataValue);
  });
});
