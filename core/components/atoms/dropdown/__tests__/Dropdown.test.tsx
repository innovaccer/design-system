import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';
import Dropdown, {IDropdownProps as IProps} from '../Dropdown';

const Mapper: Record<string, any> = {
 
};

describe('Dropdown component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown
          {...attr}
        >
          
        </Dropdown >
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
