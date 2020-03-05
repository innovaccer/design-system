import * as React from 'react';
import { shallow } from 'enzyme';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';
import Tab from '../Tab';
import Tabs, { ITabsProps as IProps } from '../Tabs';

const TabValue = [0, 1, 2];
const FunctionValue = [jest.fn()];
const ReactNodeValue = (
  <>
    <Tab label={<></>} />
    <Tab label={<></>} />
  </>
);

const Mapper: Record<string, any> = {
  activeTab: valueHelper(TabValue, { iterate: true }),
  onTabChange: valueHelper(FunctionValue, { iterate: true }),
  children: valueHelper(ReactNodeValue, { required: true }),
};

describe('Tabs component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Tabs
          {...attr}
        >
          <Tab label={<></>} />
          <Tab label={<></>} />
        </Tabs>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  TestHelper(Mapper, testFunc);
});
