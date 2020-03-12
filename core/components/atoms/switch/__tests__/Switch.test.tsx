import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Switch, { ISwitchProps as IProps } from '../Switch';

export const size = ['tiny', 'regular'];
export const appearance = ['primary', 'alert', 'success', 'warning'];
const BooleanValue = [true, false];

describe('Switch component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    checked: valueHelper(true, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Switch
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
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
    const attr = filterUndefined(props) as IProps;
    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Switch
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});
