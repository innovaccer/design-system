import * as React from 'react';
import { shallow } from 'enzyme';
import Tooltip, { ITooltipProps as IProps } from '../Tooltip';
import Button from '@/components/atoms/button';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Position = ['top', 'bottom', 'left', 'right'];
const StringValue = 'Sample string';
const BooleanValue = [true, false];
const ReactNodeValue = <Button>Button</Button>;

const Mapper = {
  position: valueHelper(Position, { iterate: true }),
  tooltip: valueHelper(StringValue, { required: true }),
  children: valueHelper(ReactNodeValue, { required: true }),
  appendToBody: valueHelper(BooleanValue, { iterate: true }),
};

describe('Tooltip component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Tooltip
          {...rest}
        >
          {children}
        </Tooltip>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
