import * as React from 'react';
import { shallow } from 'enzyme';
import Modal, { IModalProps as IProps } from '../Modal';
import ModalHeader from '@/components/molecules/modalHeader';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const FunctionValue = jest.fn();
const Dimension = ['small', 'medium', 'large'];
const BooleanValue = [true, false];
const modalHeaderOptions = {
  onClose: () => null,
  icon: 'pan_tool',
  heading: 'Heading',
  subHeading: 'Subheading'
};
const ReactNodeValue = [(<ModalHeader {...modalHeaderOptions} />)];

const Mapper = {
  onClose: valueHelper(FunctionValue, { required: true }),
  backdrop: valueHelper(BooleanValue, { iterate: true }),
  closeOnEscape: valueHelper(BooleanValue, { iterate: true }),
  dimension: valueHelper(Dimension, { iterate: true }),
  open: valueHelper(BooleanValue, { required: true, iterate: true }),
  children: valueHelper(ReactNodeValue, { iterate: true }),
};

describe('Modal component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Modal {...rest}>
          {children}
        </Modal>
      );

      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
  // TestHelper(Mapper, testFunc(true));
});
