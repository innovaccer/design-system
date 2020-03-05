import * as React from 'react';
import { shallow } from 'enzyme';
import Text, { ITextProps as IProps } from '../Text';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['default', 'white', 'destructive', 'subtle', 'disabled'];
const Weight = ['strong', 'medium'];
const BooleanValue = [true, false];
const StringValue = 'Sample String';

const Mapper = {
  children: valueHelper(StringValue, { required: true }),
  weight: valueHelper(Weight, { iterate: true }),
  small: valueHelper(BooleanValue, { iterate: true }),
  appearance: valueHelper(Appearance, { iterate: true }),
};

describe('Text component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Text
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
