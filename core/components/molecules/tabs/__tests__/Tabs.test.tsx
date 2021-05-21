import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Tabs } from '@/index';
import { TabsProps as Props } from '@/index.type';

const activeIndex = 0;
const FunctionValue = jest.fn();
const BooleanValue = [true, false];
const tabs = [
  {
    count: 10,
    label: 'Tab 1'
  },
  {
    icon: 'call_received',
    label: 'Tab 2'
  },
  {
    label: 'Tab 3',
    icon: 'call_received',
    count: 10,
    disabled: true
  },
];

describe('Tabs component', () => {
  const Mapper: Record<string, any> = {
    activeIndex: valueHelper(activeIndex, { required: true }),
    onTabChange: valueHelper(FunctionValue, { required: true }),
    withSeperator: valueHelper(BooleanValue, { required: true, iterate: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Tabs
          {...attr}
          tabs={tabs}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('Tabs component', () => {
  it('renders tab', () => {
    const activeTab = 0;
    const activeTabContent = tabs[activeTab].label;

    const { getAllByTestId } = render(
      <Tabs activeIndex={activeTab} onTabChange={FunctionValue} tabs={tabs} />
    );

    expect(getAllByTestId('DesignSystem-Tabs--Text')[activeTab].textContent).toMatch(activeTabContent);
  });

  it('renders tab with count', () => {
    const countValue = '10';

    const { getAllByTestId } = render(
      <Tabs tabs={tabs} />
    );

    expect(getAllByTestId('DesignSystem-Tabs--Pills')[0].textContent).toMatch(countValue);
  });

  it('renders tab with icon', () => {
    const iconName = 'call_received';

    const { getByTestId } = render(
      <Tabs tabs={tabs} />
    );

    expect(getByTestId('DesignSystem-Tabs--Icon').textContent).toMatch(iconName);
  });

  it('renders count if tab object has both icon and count', () => {
    const count = '10';

    const { getAllByTestId } = render(
      <Tabs tabs={tabs} />
    );

    expect(getAllByTestId('DesignSystem-Tabs--Pills')).toHaveLength(2);
    expect(getAllByTestId('DesignSystem-Tabs--Pills')[1].textContent).toMatch(count);
  });

  it('renders active tab and children', () => {
    const activeTab = 1;

    const { getByTestId, getAllByTestId } = render(
      <Tabs activeIndex={activeTab} onTabChange={FunctionValue} tabs={tabs} />
    );

    expect(getAllByTestId('DesignSystem-Tabs--Tab')[activeTab]).toHaveClass('Tab--active');
    expect(getByTestId('DesignSystem-Tabs--Icon')).toHaveClass('Icon--info');
  });

  it('renders default tab as 0', () => {
    const defaultTab = 0;

    const { getAllByTestId } = render(
      <Tabs onTabChange={FunctionValue} tabs={tabs} />
    );

    expect(getAllByTestId('DesignSystem-Tabs--Tab')[defaultTab]).toHaveClass('Tab--active');
  });

  it('default tab is 0 if activeTab > total tabs length', () => {
    const activeTab = 3;
    const defaultActiveTab = 0;

    const { getAllByTestId } = render(
      <Tabs onTabChange={FunctionValue} tabs={tabs} activeIndex={activeTab} />
    );

    expect(getAllByTestId('DesignSystem-Tabs--Tab')[defaultActiveTab]).toHaveClass('Tab--active');
  });

  it('renders disabled tab', () => {
    const activeTab = 2;
    const disabledTab = 2;

    const { getAllByTestId } = render(
      <Tabs onTabChange={FunctionValue} tabs={tabs} activeIndex={activeTab} />
    );

    expect(getAllByTestId('DesignSystem-Tabs--Tab')[activeTab]).not.toHaveClass('Tab--active');
    expect(getAllByTestId('DesignSystem-Tabs--Tab')[disabledTab]).toHaveClass('Tab--disabled');
    expect(getAllByTestId('DesignSystem-Tabs--Pills')[1]).toHaveClass('Tabs-pills--disabled');
  });

});

describe('TabsWrapper component with prop: onTabChange', () => {

  it('TabsWrapper component with onTabChange callback', () => {
    const activeTab = 0;
    const clickedTab = 1;

    const { getAllByTestId, rerender } = render(
      <Tabs
        onTabChange={FunctionValue}
        tabs={tabs}
        activeIndex={activeTab}
      />
    );

    const tab = getAllByTestId('DesignSystem-Tabs--Tab')[clickedTab];
    fireEvent.click(tab);

    expect(FunctionValue).toHaveBeenCalledWith(clickedTab);
    rerender(
      <Tabs
        onTabChange={FunctionValue}
        tabs={tabs}
        activeIndex={clickedTab}
      />
    );
    expect(getAllByTestId('DesignSystem-Tabs--Tab')[clickedTab]).toHaveClass('Tab--active');
  });

});
