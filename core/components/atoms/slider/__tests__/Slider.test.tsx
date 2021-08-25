import * as React from 'react';
import { render } from '@testing-library/react';
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
