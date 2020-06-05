import * as React from 'react';
import { shallow } from 'enzyme';
import ProgressRing, { ProgressRingProps as Props } from '../ProgressRing';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = ['small', 'regular'];

describe('ProgressRing component', () => {
  const mapper = {
    value: valueHelper(30, { required: true }),
    size: valueHelper(size, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <ProgressRing
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
