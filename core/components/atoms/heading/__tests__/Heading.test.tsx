import * as React from 'react';
import { shallow } from 'enzyme';
import Heading, { IHeadingProps as IProps } from '../Heading';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['default', 'subtle', 'disabled', 'white'];
const size = ['default', 'm', 'l', 'xl', 'xxl'];

describe('Heading component', () => {
  const mapper = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Heading
          {...attr}
        >
          Heading
        </Heading>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Heading component', () => {
  const mapper = {
    size: valueHelper(size, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Heading
          {...attr}
        >
          Heading
        </Heading>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
