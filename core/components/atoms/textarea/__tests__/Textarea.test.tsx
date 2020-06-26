import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Textarea, { TextareaProps as Props } from '../Textarea';

const nameValue = 'name';
const BooleanValue = [true, false];
const FunctionValue = jest.fn();

describe('Textarea component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Textarea
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
