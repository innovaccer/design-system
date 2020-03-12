import * as React from 'react';
import { shallow } from 'enzyme';
import Badge, { IBadgeProps as IProps } from '../Badge';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Appearance = ['primary', 'secondary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'];
const BooleanValue = [true, false];

const mapper = {
  appearance: valueHelper(Appearance, { required: true, iterate: true }),
  subtle: valueHelper(BooleanValue, { required: true, iterate: true }),
};

describe('Badge component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Badge
          {...attr}
        >
          Badge
        </Badge>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
