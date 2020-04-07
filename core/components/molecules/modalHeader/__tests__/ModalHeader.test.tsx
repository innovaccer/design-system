import * as React from 'react';
import { shallow } from 'enzyme';
import ModalHeader, { ModalHeaderProps as Props } from '../ModalHeader';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

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
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <ModalHeader
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
