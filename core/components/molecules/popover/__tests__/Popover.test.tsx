import * as React from 'react';
import { shallow } from 'enzyme';
import Popover, { IPopoverProps as IProps } from '../Popover';
import Button from '@/components/atoms/button';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const position = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];
const BooleanValue = [true, false];
const NumberValue = 10;
const Style = {
  width: valueHelper('150px', { required: true }),
  height: valueHelper('150px', { required: true })
};
const ReactElementValue = <Button appearance="basic">Open Popup</Button>;

describe('Popover component', () => {
  const mapper = {
    verticalOffset: valueHelper(NumberValue, { required: true }),
    trigger: valueHelper(ReactElementValue, { required: true }),
    dark: valueHelper(BooleanValue, { required: true, iterate: true }),
    closeOnBackdropClick: valueHelper(BooleanValue, { required: true, iterate: true }),
    style: valueHelper(Style, { required: true }),
  };

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

  testHelper(mapper, testFunc);
});

describe('Popover component', () => {
  const mapper = {
    position: valueHelper(position, { required: true, iterate: true }),
    verticalOffset: valueHelper(NumberValue, { required: true }),
    trigger: valueHelper(ReactElementValue, { required: true }),
    closeOnBackdropClick: valueHelper(BooleanValue, { required: true, iterate: true }),
    style: valueHelper(Style, { required: true }),
  };

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

  testHelper(mapper, testFunc);
});
