import * as React from 'react';
import { shallow } from 'enzyme';
import { TestHelper, filterUndefined, valueHelper, arrayHelper, testMessageHelper } from '@/utils/TestHelper';
import Toast, { IToastProps as IProps } from '../Toast';

const Appearance = ['default', 'info', 'success', 'alert', 'warning'];
const StringValue = ['Sample string'];
const FunctionValue = [jest.fn()];
const Actions = [
  {
    label: valueHelper('Action 1', { required: true }),
    onClick: valueHelper(FunctionValue, { required: true, iterate: true }),
  },
  {
    label: valueHelper('Action 2', { required: true }),
    onClick: valueHelper(FunctionValue, { required: true, iterate: true })
  }
];

const Mapper: Record<string, any> = {
  title: valueHelper('Sample Toast', { required: true }),
  appearance: valueHelper(Appearance, { iterate: true }),
  message: valueHelper(StringValue, { iterate: true }),
  actions: arrayHelper(Actions, { maxLen: 2, iterate: true }),
  onClose: valueHelper(FunctionValue, { iterate: true })
};

describe('Toast component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Toast
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
