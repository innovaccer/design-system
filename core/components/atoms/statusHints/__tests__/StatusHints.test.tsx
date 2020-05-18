import * as React from 'react';
import { shallow } from 'enzyme';
import StatusHints, { StatusHintsProps as IProps } from '../StatusHints';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const label = 'StatusHints';
const appearance = ['default', 'alert', 'info', 'warning', 'success'];

describe('StatusHints component', () => {
  const mapper = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <StatusHints {...attr}>
          {label}
        </StatusHints>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
