import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
});
