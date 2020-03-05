import * as React from 'react';
import { shallow } from 'enzyme';
import Dialog, { IDialogProps as IProps } from '../Dialog';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const FunctionValue = jest.fn();
const Dimension = ['small', 'medium', 'large'];
const Appearance = ['basic', 'primary', 'success', 'alert', 'transparent'];
const BooleanValue = [true, false];
const StringValue = ['Sample String'];

const Mapper = {
  onClose: valueHelper(FunctionValue, { required: true }),
  closeOnEscape: valueHelper(BooleanValue, { iterate: true }),
  dimension: valueHelper(Dimension, { iterate: true }),
  open: valueHelper(BooleanValue, { required: true, iterate: true }),
  heading: valueHelper(StringValue, { iterate: true }),
  icon: valueHelper(StringValue, { iterate: true }),
  title: valueHelper(StringValue, { iterate: true }),
  description: valueHelper(StringValue, { iterate: true }),
  primaryButtonLabel: valueHelper(StringValue, { required: true, iterate: true }),
  primaryButtonAppearance: valueHelper(Appearance, { iterate: true }),
  primaryButtonCallback: valueHelper(FunctionValue, { required: true }),
  secondaryButtonLabel: valueHelper(StringValue, { required: true, iterate: true }),
  secondaryButtonAppearance: valueHelper(Appearance, { iterate: true }),
  secondaryButtonCallback: valueHelper(FunctionValue, { required: true }),
};

describe('Dialog component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dialog {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
