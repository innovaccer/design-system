import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Tab, TabsWrapper, Text } from '@/index';
import { TabsWrapperProps as Props } from '@/index.type';

const TabValue = [0, 1];
const FunctionValue = jest.fn();
const Label = <Text>Tab(Recommended)</Text>;

describe('TabsWrapper component', () => {
  const Mapper: Record<string, any> = {
    activeTab: valueHelper(TabValue, { required: true, iterate: true }),
    onTabChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <TabsWrapper
          {...attr}
        >
          <Tab label={Label}>Tab 1</Tab>
          <Tab label={Label} disabled={true}>Tab 2</Tab>
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
        <Tab label={<></>} disabled={true}>Tab 2</Tab>
      </TabsWrapper>
    );

    expect(getAllByTestId('DesignSystem-Tabs--Header')[activeTab]).not.toHaveClass('Tab--active');
    expect(getAllByTestId('DesignSystem-Tabs--Header')[disabledTab]).toHaveClass('Tab--disabled');
  });

});

describe('TabsWrapper component with prop: onTabChange', () => {
  const tabs = (tab: number) => (
    <TabsWrapper active={tab} onTabChange={FunctionValue}>
      <Tab label={<div data-test="DesignSystem-TabLabel-One">Label 1</div>}>Tab 1</Tab>
      <Tab label={<div data-test="DesignSystem-TabLabel-Two">Label 2</div>}>Tab 2</Tab>
    </TabsWrapper>
  );

  afterEach(() => jest.clearAllMocks());

  it('TabsWrapper component with onTabChange callback on click', () => {
    const activeTab = 0;
    const clickedTab = 1;

    const { getByTestId, getAllByTestId, rerender } = render(tabs(activeTab));

    const tab = getByTestId('DesignSystem-TabLabel-Two');
    fireEvent.click(tab);

    expect(FunctionValue).toHaveBeenCalledWith(clickedTab);
    rerender(tabs(clickedTab));
    expect(getAllByTestId('DesignSystem-Tabs--Header')[clickedTab]).toHaveClass('Tab--active');
  });

  it('TabsWrapper component with onTabChange callback on enter press', () => {
    const activeTab = 0;
    const KeyedTab = 1;

    const { getByTestId, getAllByTestId, rerender } = render(tabs(activeTab));

    const tab = getByTestId('DesignSystem-TabLabel-Two');
    fireEvent.keyDown(tab, { key: 'Enter', keyCode: 13 });

    expect(FunctionValue).toHaveBeenCalledWith(KeyedTab);
    rerender(tabs(KeyedTab));
    expect(getAllByTestId('DesignSystem-Tabs--Header')[KeyedTab]).toHaveClass('Tab--active');
  });

  it('TabsWrapper component with onTabChange callback not called on any other key', () => {
    const activeTab = 0;
    const KeyedTab = 1;

    const { getByTestId, getAllByTestId, rerender } = render(tabs(activeTab));
    const tab = getByTestId('DesignSystem-TabLabel-Two');
    fireEvent.keyDown(tab, { key: 'Space', keyCode: 32 });

    expect(FunctionValue).not.toHaveBeenCalledWith(KeyedTab);
    rerender(tabs(activeTab));
    expect(getAllByTestId('DesignSystem-Tabs--Header')[KeyedTab]).not.toHaveClass('Tab--active');
  });

  it('TabsWrapper component changes tab right when ArrowRight is pressed', () => {
    const activeTab = 0;

    const { getByTestId } = render(tabs(activeTab));
    const firstLabel = getByTestId('DesignSystem-TabLabel-One');
    const secondLabel = getByTestId('DesignSystem-TabLabel-Two');

    fireEvent.focus(firstLabel);
    fireEvent.keyDown(firstLabel, { key: 'ArrowRight', keyCode: 39 });

    expect(document.activeElement).toContainElement(secondLabel);
  });

  it('TabsWrapper component changes tab left when ArrowLeft is pressed', () => {
    const activeTab = 1;

    const { getByTestId } = render(tabs(activeTab));
    const firstLabel = getByTestId('DesignSystem-TabLabel-One');
    const secondLabel = getByTestId('DesignSystem-TabLabel-Two');

    fireEvent.focus(secondLabel);
    fireEvent.keyDown(secondLabel, { key: 'ArrowLeft', keyCode: 37 });

    expect(document.activeElement).toContainElement(firstLabel);
  });
});
