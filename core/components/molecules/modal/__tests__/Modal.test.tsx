import * as React from 'react';
import { shallow } from 'enzyme';
import Modal, { ModalProps as Props } from '../Modal';
import ModalHeader from '@/components/molecules/modalHeader';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const FunctionValue = jest.fn();
const dimension = ['small', 'medium', 'large'];
const BooleanValue = [true, false];
const modalHeaderOptions = {
  onClose: () => null,
  icon: 'pan_tool',
  heading: 'Heading',
  subHeading: 'Subheading'
};

const mapper = {
  onClose: valueHelper(FunctionValue, { required: true }),
  backdrop: valueHelper(BooleanValue, { required: true, iterate: true }),
  dimension: valueHelper(dimension, { required: true, iterate: true }),
  open: valueHelper(true, { required: true }),

};

describe('Modal component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    const { children, ...rest } = attr;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Modal {...rest}>
          <ModalHeader {...modalHeaderOptions} />
        </Modal>
      );

      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
