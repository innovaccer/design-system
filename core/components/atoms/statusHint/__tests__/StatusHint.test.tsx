import * as React from 'react';
import { shallow } from 'enzyme';
import StatusHint, { StatusHintProps as IProps } from '../StatusHint';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const label = 'StatusHint';
const appearance = ['default', 'alert', 'info', 'warning', 'success'];

describe('StatusHint component', () => {
  const mapper = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <StatusHint {...attr}>
          {label}
        </StatusHint>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
