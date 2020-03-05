import * as React from 'react';
import { shallow } from 'enzyme';
import ModalHeader, { IModalHeaderProps as IProps } from '../ModalHeader';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const StringValue = ['events'];
const FunctionValue = jest.fn();

const Mapper = {
  icon: valueHelper(StringValue, { iterate: true }),
  heading: valueHelper(StringValue, { iterate: true }),
  onClose: valueHelper(FunctionValue, { required: true }),
  subHeading: valueHelper(StringValue, { iterate: true }),
};

describe('ModalHeader component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <ModalHeader
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
