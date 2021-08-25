import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MultiSlider } from '@/index';
import { MultiSliderProps as Props } from '../index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const labelStepSize = 10;
const labelPrecision = 5;
const min = 0;
const max = 100;
const stepSize = 5;
const label = 'MultiSlider';
const FunctionValue = jest.fn();

describe('MultiSlider component', () => {
  const mapper: Record<string, any> = {
    labelStepSize: valueHelper(labelStepSize, { required: true }),
    labelPrecision: valueHelper(labelPrecision, { required: true }),
    stepSize: valueHelper(stepSize, { required: true }),
    label: valueHelper(label, { required: true }),
    min: valueHelper(min, { required: true }),
    max: valueHelper(max, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
    onRelease: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<MultiSlider {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('renders children with prop', () => {
  it('renders children', () => {
    const { getByTestId } = render(<MultiSlider />);
    expect(getByTestId('DesignSystem-MultiSlider')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-MultiSlider-Slider-Track')).toBeInTheDocument();
  });

  it('renders children with label prop', () => {
    const { getByTestId } = render(<MultiSlider label={label} />);
    expect(getByTestId('DesignSystem-MultiSlider')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-MultiSlider-Slider-Track')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label')).toBeInTheDocument();
  });

  it('renders label with expected label', () => {
    const { getByTestId } = render(<MultiSlider label={label} onChange={FunctionValue} />);
    expect(getByTestId('DesignSystem-Label').textContent).toMatch(label);
  });
});

describe('Calls slider event handlers', () => {
  const value = 5;
  it('calls mouseOver', () => {
    const { getByTestId, container } = render(
      <MultiSlider onRangeChange={FunctionValue} onChange={FunctionValue}>
        <MultiSlider.Handle value={value} onRelease={FunctionValue} fillBefore={true} />
      </MultiSlider>
    );
    const elem = getByTestId('DesignSystem-MultiSlider-Handle');
    fireEvent.mouseDown(elem);
    fireEvent.mouseUp(elem);
    expect(FunctionValue).toBeCalled();
    const labels = container.querySelectorAll('.Slider-label');
    fireEvent.click(labels[0]);
    expect(FunctionValue).toBeCalled();
  });

  it('calls multislider mouseDown', () => {
    const { getByTestId } = render(<MultiSlider onChange={FunctionValue} label={label} />);
    const elem = getByTestId('DesignSystem-MultiSlider-Slider-Track');
    fireEvent.mouseDown(elem);
    expect(FunctionValue).toBeCalled();
  });
});
