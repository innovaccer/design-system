import * as React from 'react';
import { shallow } from 'enzyme';
import Backdrop, { IBackdropProps as IProps } from '../Backdrop';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const BooleanValue = [true, false];
const Mapper = {
  open: valueHelper(BooleanValue, { required: true, iterate: true })
};

describe('Backdrop component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Backdrop
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
