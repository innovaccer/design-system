import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Switch, { SwitchProps as Props } from '../Switch';

export const size = ['tiny', 'regular'];
const BooleanValue = [true, false];

describe('Switch component', () => {
  const mapper: Record<string, any> = {
    checked: valueHelper(true, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Switch {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Switch component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { iterate: true }),
    checked: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Switch {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});
