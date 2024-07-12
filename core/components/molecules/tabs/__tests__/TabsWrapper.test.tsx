import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Tab, TabsWrapper, Text } from '@/index';
import { TabsWrapperProps as Props } from '@/index.type';
import { TTabSize } from '@/common.type';

const TabValue = [0, 1];
const FunctionValue = jest.fn();
const Label = <Text>Tab(Recommended)</Text>;
const tabSize: TTabSize[] = ['regular', 'small'];

describe('TabsWrapper component', () => {
  const Mapper: Record<string, any> = {
    activeTab: valueHelper(TabValue, { required: true, iterate: true }),
    onTabChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <TabsWrapper {...attr}>
          <Tab label={Label}>Tab 1</Tab>
          <Tab label={Label} disabled={true}>
            Tab 2
          </Tab>
        </TabsWrapper>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('TabsWrapper component', () => {
  it('renders single tab', () => {
    const activeTab = 0;
    const activeTabContent = 'Tab 1';

    const { getByTestId, getAllByTestId } = render(
      <TabsWrapper active={activeTab} onTabChange={FunctionValue}>
        <Tab label={<></>}>Tab 1</Tab>
      </TabsWrapper>
    );

    expect(getByTestId('DesignSystem-Tabs--Content').textContent).toMatch(activeTabContent);
    expect(getAllByTestId('DesignSystem-Tabs--Header')[activeTab]).toHaveClass('Tab--active');
  });

  it('renders active tab and children', () => {
    const activeTab = 1;
    const activeTabContent = 'Tab 2';

    const { getByTestId, getAllByTestId } = render(
      <TabsWrapper active={activeTab} onTabChange={FunctionValue}>
        <Tab label={<></>}>Tab 1</Tab>
        <Tab label={<></>}>Tab 2</Tab>
      </TabsWrapper>
    );

    expect(getByTestId('DesignSystem-Tabs--Content').textContent).toMatch(activeTabContent);
    expect(getAllByTestId('DesignSystem-Tabs--Header')[activeTab]).toHaveClass('Tab--active');
  });

  it('renders default tab as 0', () => {
    const defaultTab = 0;
    const defaultTabContent = 'Tab 1';

    const { getByTestId, getAllByTestId } = render(
      <TabsWrapper onTabChange={FunctionValue}>
        <Tab label={<></>}>Tab 1</Tab>
        <Tab label={<></>}>Tab 2</Tab>
      </TabsWrapper>
    );

    expect(getByTestId('DesignSystem-Tabs--Content').textContent).toMatch(defaultTabContent);
    expect(getAllByTestId('DesignSystem-Tabs--Header')[defaultTab]).toHaveClass('Tab--active');
  });

  it('default tab is 0 if activeTab > total tabs length', () => {
    const activeTab = 3;
    const activeTabContent = 'Tab 1';
    const defaultActiveTab = 0;

    const { getByTestId, getAllByTestId } = render(
      <TabsWrapper active={activeTab} onTabChange={FunctionValue}>
        <Tab label={<></>}>Tab 1</Tab>
        <Tab label={<></>}>Tab 2</Tab>
      </TabsWrapper>
    );

    expect(getByTestId('DesignSystem-Tabs--Content').textContent).toMatch(activeTabContent);
    expect(getAllByTestId('DesignSystem-Tabs--Header')[defaultActiveTab]).toHaveClass('Tab--active');
  });

  it('renders disabled tab', () => {
    const activeTab = 1;
    const disabledTab = 1;

    const { getAllByTestId } = render(
      <TabsWrapper active={activeTab} onTabChange={FunctionValue}>
        <Tab label={<></>}>Tab 1</Tab>
        <Tab label={<></>} disabled={true}>
          Tab 2
        </Tab>
      </TabsWrapper>
    );

    expect(getAllByTestId('DesignSystem-Tabs--Header')[activeTab]).not.toHaveClass('Tab--active');
    expect(getAllByTestId('DesignSystem-Tabs--Header')[disabledTab]).toHaveClass('Tab--disabled');
  });
});

describe('TabsWrapper component with prop: onTabChange', () => {
  const tabs = (tab: number) => (
    <TabsWrapper active={tab} onTabChange={FunctionValue}>
      <Tab label={<div>Label 1</div>}>Tab 1</Tab>
      <Tab label={<div data-test="DesignSystem-TabLabel">Label 2</div>}>Tab 2</Tab>
    </TabsWrapper>
  );

  it('TabsWrapper component with onTabChange callback', () => {
    const activeTab = 0;
    const clickedTab = 1;

    const { getByTestId, getAllByTestId, rerender } = render(tabs(activeTab));

    const tab = getByTestId('DesignSystem-TabLabel');
    fireEvent.click(tab);

    expect(FunctionValue).toHaveBeenCalledWith(clickedTab);
    rerender(tabs(clickedTab));
    expect(getAllByTestId('DesignSystem-Tabs--Header')[clickedTab]).toHaveClass('Tab--active');
  });
});

describe('TabsWrapper component with prop:size', () => {
  tabSize.forEach((size) => {
    it(`should have the Tab--${size} class when size=${size}`, () => {
      const { getByTestId } = render(
        <TabsWrapper active={1} onTabChange={FunctionValue} size={size}>
          <Tab label={<></>}>Tab 1</Tab>
        </TabsWrapper>
      );
      expect(getByTestId('DesignSystem-Tabs--Header')).toHaveClass(`Tab--${size}`);
    });
  });
});
