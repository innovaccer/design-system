import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Tab from '../Tab';
import TabsWrapper, { ITabsWrapperProps as IProps } from '../TabsWrapper';

const TabValue = [0, 1, 2];
const FunctionValue = jest.fn();
const ReactNodeValue = (
  <>
    <Tab label={<></>} />
    <Tab label={<></>} />
  </>
);

const Mapper: Record<string, any> = {
  activeTab: valueHelper(TabValue, { required: true, iterate: true }),
  onTabChange: valueHelper(FunctionValue, { required: true }),
  children: valueHelper(ReactNodeValue, { required: true }),
};

describe('TabsWrapper component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <TabsWrapper
          {...attr}
        >
          <Tab label={<></>} />
          <Tab label={<></>} />
        </TabsWrapper>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});
