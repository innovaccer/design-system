import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { Slider } from '@/index';
import { SliderProps as Props } from '../Slider';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const defaultValue = 10;
const value = 10;

describe('Slider component', () => {
  const mapper = {
    defaultValue: valueHelper(defaultValue, { required: true }),
  };

  const testFunc = (props: Record<number, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Slider {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Slider component', () => {
  const mapper = {
    value: valueHelper(value, { required: true }),
  };

  const testFunc = (props: Record<number, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Slider {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('slider component', () => {
  it('check for onChange function call', () => {
    const onChangeHandler = jest.fn();
    const { getByTestId } = render(<Slider label="Slider Label" onChange={onChangeHandler} value={4} />);
    const sliderHandle = getByTestId('DesignSystem-MultiSlider-Handle');
    fireEvent.click(sliderHandle);
    fireEvent.keyUp(sliderHandle, { keyCode: 37 });
    fireEvent.keyDown(sliderHandle, { keyCode: 37 });
    expect(onChangeHandler).toBeCalled();
    expect(onChangeHandler.mock.calls[0][0]).toBe(3);
  });

  it('Home jumps to minimum value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Slider label="Slider" value={50} min={0} max={100} stepSize={5} onChange={onChange} />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 36 });
    expect(onChange).toHaveBeenCalledWith(0);
  });

  it('End jumps to maximum value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Slider label="Slider" value={50} min={0} max={100} stepSize={5} onChange={onChange} />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 35 });
    expect(onChange).toHaveBeenCalledWith(100);
  });

  it('Page Up increases by 10× step', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Slider label="Slider" value={25} min={0} max={100} stepSize={5} onChange={onChange} />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 33 });
    expect(onChange).toHaveBeenCalledWith(75);
  });

  it('Page Down decreases by 10× step', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Slider label="Slider" value={75} min={0} max={100} stepSize={5} onChange={onChange} />
    );
    const handle = getByTestId('DesignSystem-MultiSlider-Handle');
    handle.focus();
    fireEvent.keyDown(handle, { keyCode: 34 });
    expect(onChange).toHaveBeenCalledWith(25);
  });
});

describe('Slider component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<Slider label="Volume" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
