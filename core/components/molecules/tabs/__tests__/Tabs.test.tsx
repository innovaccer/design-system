import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Tabs, Tab } from '@/index';
import { TabsProps as Props, TabConfig } from '@/index.type';
import { TTabSize } from '@/common.type';

const activeIndex = 0;
const FunctionValue = jest.fn();
const BooleanValue = [true, false];
const tabSize: TTabSize[] = ['regular', 'small'];
const tabs = [
  {
    count: 10,
    label: 'Tab 1',
    isDismissible: true,
    onDismiss: FunctionValue,
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
    size: valueHelper(tabSize, { required: true, iterate: true }),
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

  it('renders dismissible tab component in active state', () => {
    const activeTab = 0;
    const { getByTestId } = render(<Tabs activeIndex={activeTab} onTabChange={FunctionValue} tabs={tabs} />);
    expect(getByTestId('DesignSystem-DismissibleTabs--Icon')).toHaveClass('DismissibleTab-icon--selected');
  });

  it('renders dismissible tab component', () => {
    const activeTab = 1;
    const { getByTestId } = render(<Tabs activeIndex={activeTab} onTabChange={FunctionValue} tabs={tabs} />);
    expect(getByTestId('DesignSystem-DismissibleTabs--Icon')).toHaveClass('DismissibleTab-icon--default');
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

  it('TabsWrapper component has only tabindex 0 for all tabs', () => {
    const activeTab = 0;
    const keyedTab = 1;

    const { getAllByTestId, rerender } = render(getTestTab(activeTab, tabs));
    const tab = getAllByTestId('DesignSystem-Tabs--Tab');
    const firstLabel = tab[activeTab];
    const secondLabel = tab[keyedTab];

    expect(firstLabel.tabIndex).toBe(0);
    expect(secondLabel.tabIndex).toBe(0);

    fireEvent.focus(secondLabel);
    fireEvent.keyDown(secondLabel, { key: 'ArrowLeft', keyCode: 37 });

    rerender(getTestTab(keyedTab, tabs));

    expect(firstLabel.tabIndex).toBe(0);
    expect(secondLabel.tabIndex).toBe(0);
    expect(document.activeElement).toContainElement(firstLabel);
  });

  it('renders tab component with isDismissible prop:true', () => {
    const { getAllByTestId } = render(<Tabs tabs={tabs} />);
    expect(getAllByTestId('DesignSystem-DismissibleTabs--Icon')[0]).toBeInTheDocument();
  });

  it('renders tab component with isDismissible prop:true and calls onDismiss', () => {
    const { getAllByTestId } = render(<Tabs tabs={tabs} />);
    const tab = getAllByTestId('DesignSystem-DismissibleTabs--Icon')[0];
    fireEvent.click(tab);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('render tab component with custom class', () => {
    const { getAllByTestId } = render(
      <Tabs activeIndex={0}>
        <Tab label="Tab(Recommended)" isDismissible={true} className="custom-class" onDismiss={FunctionValue}></Tab>
      </Tabs>
    );
    expect(getAllByTestId('DesignSystem-Tabs--Content')[0]).toHaveClass('custom-class');
  });

  it('renders tab component with remaining tab after onDismiss call ', () => {
    const tabList = [
      {
        count: 10,
        label: 'Tab 1',
        icon: 'call_received',
      },
      {
        count: 10,
        label: 'Tab 2',
        isDismissible: true,
        onDismiss: FunctionValue,
      },
    ];

    const { getAllByTestId } = render(<Tabs tabs={tabList} />);
    const activeTab = getAllByTestId('DesignSystem-Tabs--Tab')[1];
    fireEvent.click(activeTab);

    const clearIcon = getAllByTestId('DesignSystem-DismissibleTabs--Icon')[0];
    fireEvent.click(clearIcon);

    expect(FunctionValue).toHaveBeenCalled();
    expect(getAllByTestId('DesignSystem-Tabs--Tab')[0]).toBeInTheDocument();
  });
});

describe('Tabs Wrapper component header class', () => {
  it('render tab component header with custom class', () => {
    const { getByTestId } = render(
      <Tabs activeIndex={0} headerClassName="header-class">
        <Tab label="Tab(Recommended)" isDismissible={true} onDismiss={FunctionValue}></Tab>
      </Tabs>
    );
    expect(getByTestId('DesignSystem-Tabs--Header')).toHaveClass('header-class');
  });
});

describe('Tabs component with prop:size', () => {
  tabSize.forEach((size) => {
    it(`should have the Tab--${size} class when size=${size}`, () => {
      const { getByTestId } = render(
        <Tabs activeIndex={0} size={size}>
          <Tab label="Tab(Recommended)" isDismissible={true} onDismiss={FunctionValue}></Tab>
        </Tabs>
      );
      expect(getByTestId('DesignSystem-Tabs--TextWrapper')).toHaveClass(`Tab--${size}`);
    });
  });
});

describe('Tabs Wrapper component custom max-width', () => {
  it('render tab component header with custom max-width', () => {
    const { getByTestId } = render(
      <Tabs activeIndex={0} maxWidth={100}>
        <Tab label="Tab(Recommended)" isDismissible={true} onDismiss={FunctionValue}></Tab>
      </Tabs>
    );
    expect(getByTestId('DesignSystem-Tabs--TextWrapper')).toHaveStyle('max-width: 100px;');
  });
});
