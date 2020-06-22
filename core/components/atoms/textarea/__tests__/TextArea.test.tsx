import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import TextArea, { TextAreaProps as Props } from '../TextArea';

const nameValue = 'name';
const BooleanValue = [true, false];
const FunctionValue = jest.fn();

describe('TextArea component', () => {
  const mapper: Record<string, any> = {
    name: valueHelper(nameValue, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <TextArea
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
