import * as React from 'react';
import { shallow } from 'enzyme';
import ProgressBar, { ProgressBarProps as Props } from '../ProgressBar';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

describe('ProgressBar component', () => {
  const mapper = {
    value: valueHelper(10, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <ProgressBar
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
