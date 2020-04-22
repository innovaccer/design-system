import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Tab from '../Tab';
import TabsWrapper, { TabsWrapperProps as Props } from '../TabsWrapper';

const TabValue = [0, 1, 2];
const FunctionValue = jest.fn();
const ReactNodeValue = (
  <>
    <Tab label={<></>}>Tab 1</Tab>
    <Tab label={<></>}>Tab 2</Tab>
  </>
);

const Mapper: Record<string, any> = {
  activeTab: valueHelper(TabValue, { required: true, iterate: true }),
  onTabChange: valueHelper(FunctionValue, { required: true }),
  children: valueHelper(ReactNodeValue, { required: true }),
};

describe('TabsWrapper component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <TabsWrapper
          {...attr}
        >
          <Tab label={<></>}>Tab 1</Tab>
          <Tab label={<></>}>Tab 2</Tab>
        </TabsWrapper>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
