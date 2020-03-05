import * as React from 'react';
import { shallow } from 'enzyme';
import Label, { ILabelProps as IProps } from '../Label';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const StringValue = 'Label';
const BooleanValue = [true, false];
const Mapper = {
  children: valueHelper(StringValue, { required: true }),
  disabled: valueHelper(BooleanValue, { iterate: true })
};

describe('Label component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Label>{'Label'}</Label>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
