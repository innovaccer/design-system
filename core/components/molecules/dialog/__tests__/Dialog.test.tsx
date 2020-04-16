import * as React from 'react';
import { shallow } from 'enzyme';
import Dialog, { DialogProps as Props } from '../Dialog';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const FunctionValue = jest.fn();
const dimension = ['small', 'medium', 'large'];
const appearance = ['basic', 'primary', 'success', 'alert', 'transparent'];
const StringValue = 'Sample String';

describe('Dialog component', () => {
  const mapper = {
    onClose: valueHelper(FunctionValue, { required: true }),
    open: valueHelper(true, { required: true }),
    heading: valueHelper(StringValue, { required: true }),
    icon: valueHelper(StringValue, { required: true }),
    title: valueHelper(StringValue, { required: true }),
    description: valueHelper(StringValue, { required: true }),
    primaryButtonLabel: valueHelper(StringValue, { required: true }),
    primaryButtonAppearance: valueHelper(appearance, { required: true, iterate: true }),
    primaryButtonCallback: valueHelper(FunctionValue, { required: true }),
    secondaryButtonLabel: valueHelper(StringValue, { required: true }),
    secondaryButtonCallback: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dialog {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dialog component', () => {
  const mapper = {
    onClose: valueHelper(FunctionValue, { required: true }),
    open: valueHelper(true, { required: true }),
    heading: valueHelper(StringValue, { required: true }),
    icon: valueHelper(StringValue, { required: true }),
    title: valueHelper(StringValue, { required: true }),
    description: valueHelper(StringValue, { required: true }),
    primaryButtonLabel: valueHelper(StringValue, { required: true }),
    primaryButtonCallback: valueHelper(FunctionValue, { required: true }),
    secondaryButtonLabel: valueHelper(StringValue, { required: true }),
    secondaryButtonCallback: valueHelper(FunctionValue, { required: true }),
    secondaryButtonAppearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dialog {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dialog component', () => {
  const mapper = {
    onClose: valueHelper(FunctionValue, { required: true }),
    dimension: valueHelper(dimension, { required: true, iterate: true }),
    open: valueHelper(true, { required: true }),
    heading: valueHelper(StringValue, { required: true }),
    icon: valueHelper(StringValue, { required: true }),
    title: valueHelper(StringValue, { required: true }),
    description: valueHelper(StringValue, { required: true }),
    primaryButtonLabel: valueHelper(StringValue, { required: true }),
    primaryButtonCallback: valueHelper(FunctionValue, { required: true }),
    secondaryButtonLabel: valueHelper(StringValue, { required: true }),
    secondaryButtonCallback: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dialog {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
