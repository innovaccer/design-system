import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, arrayHelper, testMessageHelper } from '@/utils/testHelper';
import Toast, { ToastProps as Props } from '../Toast';

const appearance = ['default', 'info', 'success', 'alert', 'warning'];
const StringValue = 'Sample string';
const FunctionValue = jest.fn();
const Actions = [
  {
    label: valueHelper('Action 1', { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
  }
];

describe('Toast component', () => {
  const mapper: Record<string, any> = {
    title: valueHelper('Sample Toast', { required: true }),
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    onClose: valueHelper(FunctionValue, { required: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Toast
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Toast component', () => {
  const mapper: Record<string, any> = {
    title: valueHelper('Sample Toast', { required: true }),
    message: valueHelper(StringValue, { required: true }),
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    actions: arrayHelper(Actions, { required: true, maxLen: 1, iterate: true }),
    onClose: valueHelper(FunctionValue, { required: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Toast
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
