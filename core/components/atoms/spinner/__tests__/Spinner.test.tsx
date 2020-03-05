import * as React from 'react';
import { shallow } from 'enzyme';
import Spinner, { ISpinnerProps as IProps } from '../Spinner';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const Appearance = ['primary', 'secondary', 'white'];
const Size = ['small', 'medium', 'large'];

const Mapper = {
  size: valueHelper(Size, { iterate: true }),
  appearance: valueHelper(Appearance, { iterate: true }),
};

describe('Spinner component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Spinner
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
