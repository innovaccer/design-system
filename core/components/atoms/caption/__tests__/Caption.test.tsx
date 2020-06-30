import * as React from 'react';
import { shallow } from 'enzyme';
import Caption, { CaptionProps as Props } from '../Caption';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];

describe('Caption component', () => {
  const mapper = {
    error: valueHelper(BooleanValue, { required: true, iterate: true })
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Caption>{'Caption'}</Caption>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
