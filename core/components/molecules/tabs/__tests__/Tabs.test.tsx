import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Tabs } from '@/index';
import { TabsProps as Props, TabConfig } from '@/index.type';

const activeIndex = 0;
const FunctionValue = jest.fn();
const BooleanValue = [true, false];
const tabs = [
  {
    count: 10,
    label: 'Tab 1',
  },
  {
    icon: 'call_received',
    label: 'Tab 2',
  },
  {
    label: 'Tab 3',
    icon: 'call_received',
    count: 10,
    disabled: true,
  },
];

describe('Tabs component', () => {
  const Mapper: Record<string, any> = {
    activeIndex: valueHelper(activeIndex, { required: true }),
    onTabChange: valueHelper(FunctionValue, { required: true }),
    withSeparator: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<Tabs {...attr} tabs={tabs} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('Tabs component', () => {
  it('renders tab', () => {
    const activeTab = 0;
    const activeTabContent = tabs[activeTab].label;

    const { getAllByTestId } = render(<Tabs activeIndex={activeTab} onTabChange={FunctionValue} tabs={tabs} />);

    expect(getAllByTestId('DesignSystem-Tabs--Text')[activeTab].textContent).toMatch(activeTabContent);
  });

  it('renders tab with count', () => {
    const countValue = '10';

    const { getAllByTestId } = render(<Tabs tabs={tabs} />);

    expect(getAllByTestId('DesignSystem-Tabs--Pills')[0].textContent).toMatch(countValue);
  });

  it('renders tab with icon', () => {
    const iconName = 'call_received';

    const { getByTestId } = render(<Tabs tabs={tabs} />);

    expect(getByTestId('DesignSystem-Tabs--Icon').textContent).toMatch(iconName);
  });

  it('renders count if tab object has both icon and count', () => {
    const count = '10';

    const { getAllByTestId } = render(<Tabs tabs={tabs} />);

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

    const { getAllByTestId } = render(<Tabs onTabChange={FunctionValue} tabs={tabs} />);

    expect(getAllByTestId('DesignSystem-Tabs--Tab')[defaultTab]).toHaveClass('Tab--active');
  });

  it('default tab is 0 if activeTab > total tabs length', () => {
    const activeTab = 3;
    const defaultActiveTab = 0;

    const { getAllByTestId } = render(<Tabs onTabChange={FunctionValue} tabs={tabs} activeIndex={activeTab} />);

    expect(getAllByTestId('DesignSystem-Tabs--Tab')[defaultActiveTab]).toHaveClass('Tab--active');
  });

  it('renders disabled tab', () => {
    const activeTab = 2;
    const disabledTab = 2;

    const { getAllByTestId } = render(<Tabs onTabChange={FunctionValue} tabs={tabs} activeIndex={activeTab} />);

    expect(getAllByTestId('DesignSystem-Tabs--Tab')[activeTab]).not.toHaveClass('Tab--active');
    expect(getAllByTestId('DesignSystem-Tabs--Tab')[disabledTab]).toHaveClass('Tab--disabled');
    expect(getAllByTestId('DesignSystem-Tabs--Pills')[1]).toHaveClass('Tab-pills--disabled');
  });
});

describe('TabsWrapper component with prop: onTabChange', () => {
  afterEach(() => jest.clearAllMocks());
  const getTestTab = (index: number, testTabs: TabConfig[]) => (
    <Tabs activeIndex={index} tabs={testTabs} onTabChange={FunctionValue} />
  );

  it('TabsWrapper component with onTabChange callback', () => {
    const activeTab = 0;
    const clickedTab = 1;

    const { getAllByTestId, rerender } = render(getTestTab(activeTab, tabs));

    const tab = getAllByTestId('DesignSystem-Tabs--Tab')[clickedTab];
    fireEvent.click(tab);

    expect(FunctionValue).toHaveBeenCalledWith(clickedTab);
    rerender(getTestTab(clickedTab, tabs));
    expect(getAllByTestId('DesignSystem-Tabs--Tab')[clickedTab]).toHaveClass('Tab--active');
  });

  it('TabsWrapper component with onTabChange callback on enter press', () => {
    const activeTab = 0;
    const KeyedTab = 1;

    const { getAllByTestId, rerender } = render(getTestTab(activeTab, tabs));

    const tab = getAllByTestId('DesignSystem-Tabs--Tab');
    fireEvent.keyDown(tab[KeyedTab], { key: 'Enter', keyCode: 13 });

    expect(FunctionValue).toHaveBeenCalledWith(KeyedTab);
    rerender(getTestTab(KeyedTab, tabs));
    expect(tab[KeyedTab]).toHaveClass('Tab--active');
  });

  it('TabsWrapper component with onTabChange callback not called on any other key', () => {
    const activeTab = 0;
    const KeyedTab = 1;

    const { getAllByTestId, rerender } = render(getTestTab(activeTab, tabs));
    const tab = getAllByTestId('DesignSystem-Tabs--Tab');
    fireEvent.keyDown(tab[KeyedTab], { key: 'Space', keyCode: 32 });

    expect(FunctionValue).not.toHaveBeenCalledWith(KeyedTab);
    rerender(getTestTab(activeTab, tabs));
    expect(tab[KeyedTab]).not.toHaveClass('Tab--active');
  });

  it('TabsWrapper component changes tab right when ArrowRight is pressed', () => {
    const activeTab = 0;

    const { getAllByTestId } = render(getTestTab(activeTab, tabs));
    const tab = getAllByTestId('DesignSystem-Tabs--Tab');
    const firstLabel = tab[activeTab];
    const secondLabel = tab[1];

    fireEvent.focus(firstLabel);
    fireEvent.keyDown(firstLabel, { key: 'ArrowRight', keyCode: 39 });

    expect(document.activeElement).toContainElement(secondLabel);
  });

  it('TabsWrapper component changes tab left when ArrowLeft is pressed', () => {
    const activeTab = 1;

    const { getAllByTestId } = render(getTestTab(activeTab, tabs));
    const tab = getAllByTestId('DesignSystem-Tabs--Tab');
    const firstLabel = tab[0];
    const secondLabel = tab[1];

    fireEvent.focus(secondLabel);
    fireEvent.keyDown(secondLabel, { key: 'ArrowLeft', keyCode: 37 });

    expect(document.activeElement).toContainElement(firstLabel);
  });

  it('TabsWrapper component has only tabindex 0 for active tab and -1 for rest', () => {
    const activeTab = 0;
    const keyedTab = 1;

    const { getAllByTestId, rerender } = render(getTestTab(activeTab, tabs));
    const tab = getAllByTestId('DesignSystem-Tabs--Tab');
    const firstLabel = tab[activeTab];
    const secondLabel = tab[keyedTab];

    expect(firstLabel.tabIndex).toBe(0);
    expect(secondLabel.tabIndex).toBe(-1);

    fireEvent.focus(secondLabel);
    fireEvent.keyDown(secondLabel, { key: 'ArrowLeft', keyCode: 37 });

    rerender(getTestTab(keyedTab, tabs));

    expect(firstLabel.tabIndex).toBe(-1);
    expect(secondLabel.tabIndex).toBe(0);
    expect(document.activeElement).toContainElement(firstLabel);
  });
});
