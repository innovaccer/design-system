import * as React from 'react';
import { shallow } from 'enzyme';
import ModalDescription, { IModalDescriptionProps as IProps } from '../ModalDescription';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];
const StringValue = ['Sample String'];

const Mapper = {
  title: valueHelper(StringValue, { iterate: true }),
  description: valueHelper(StringValue, { iterate: true }),
  removePadding: valueHelper(BooleanValue, { iterate: true }),
};

describe('ModalDescription component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <ModalDescription
          {...attr}
        />
      );

      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
