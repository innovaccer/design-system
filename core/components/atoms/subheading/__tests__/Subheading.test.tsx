import * as React from 'react';
import { shallow } from 'enzyme';
import Subheading, { SubheadingProps as Props } from '../Subheading';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearance = ['default', 'subtle', 'disabled', 'white'];

const mapper = {
  appearance: valueHelper(appearance, { required: true, iterate: true }),
};

describe('Subheading component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Subheading
          {...attr}
        >
          Subheading
        </Subheading>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
