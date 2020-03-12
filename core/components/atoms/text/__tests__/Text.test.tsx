import * as React from 'react';
import { shallow } from 'enzyme';
import Text, { ITextProps as IProps } from '../Text';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['default', 'white', 'destructive', 'subtle', 'disabled'];
const weight = ['strong', 'medium'];
const BooleanValue = [true, false];
const StringValue = 'Sample String';

describe('Text component', () => {
  const mapper = {
    children: valueHelper(StringValue, { required: true }),
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Text
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Text component', () => {
  const mapper = {
    children: valueHelper(StringValue, { required: true }),
    weight: valueHelper(weight, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Text
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Text component', () => {
  const mapper = {
    children: valueHelper(StringValue, { required: true }),
    small: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Text
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
