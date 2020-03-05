import * as React from 'react';
import { shallow } from 'enzyme';
import Popover, { IPopoverProps as IProps } from '../Popover';
import Button from '@/components/atoms/button';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const PositionType = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
const ActionType = ['click', 'hover'];
const BooleanValue = [true, false];
const NumberValue = [10];
const Style = [{
  width: valueHelper('150px', { required: true }),
  height: valueHelper('150px', { required: true })
}];
const ReactElementValue = <Button appearance="basic">Open Popup</Button>;

const Mapper = {
  position: valueHelper(PositionType, { iterate: true }),
  appendToBody: valueHelper(BooleanValue, { iterate: true }),
  verticalOffset: valueHelper(NumberValue, { iterate: true }),
  trigger: valueHelper(ReactElementValue, { required: true }),
  hoverable: valueHelper(BooleanValue, { iterate: true }),
  dark: valueHelper(BooleanValue, { iterate: true }),
  closeOnBackdropClick: valueHelper(BooleanValue, { iterate: true }),
  on: valueHelper(ActionType, { iterate: true }),
  style: valueHelper(Style, { iterate: true }),
};

describe('Popover component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Popover
          {...attr}
        >
          Popover
        </Popover>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
