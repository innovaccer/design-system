import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation, { NavigationProps as Props, Align, Menu } from '../Navigation';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const onClick = jest.fn();
const onToggle = jest.fn();
const align: Align[] = ['left', 'center'];

const menus: Menu[] = [
  {
    name: 'tab1',
    label: 'Tab #1',
    count: 1,
    icon: 'event',
  },
  {
    name: 'tab2',
    label: 'Tab #2',
    count: 2,
    subMenu: [
      {
        name: 'tab2child1',
        label: 'tab2child1',
      },
      {
        name: 'tab2child2',
        label: 'tab2child2',
      },
    ],
  },
  {
    name: 'tab3',
    label: 'Tab #3',
    count: 3,
    subMenu: [
      {
        name: 'tab3child1',
        label: 'tab3child1',
      },
    ],
  },
];

describe('Navigation component', () => {
  const mapper = {
    type: valueHelper('horizontal', { required: true }),
    align: valueHelper(align, { required: true, iterate: true }),
    menus: valueHelper(menus, { required: true }),
    active: valueHelper(true, { required: true }),
    onClick: valueHelper(onClick, { required: true }),
    onToggle: valueHelper(onToggle, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<Navigation {...attr} />);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Navigation component', () => {
  const mapper = {
    type: valueHelper('vertical', { required: true }),
    menus: valueHelper(menus, { required: true }),
    autoCollapse: valueHelper(false, { required: true }),
    expanded: valueHelper(false, { required: true }),
    rounded: valueHelper(true, { required: true }),
    onClick: valueHelper(onClick, { required: true }),
    onToggle: valueHelper(onToggle, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<Navigation {...attr} />);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Navigation component', () => {
  it('render horizontal nav when no type is passed', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} />);
    expect(getAllByTestId('DesignSystem-HorizontalNav')[0]).toHaveClass('HorizontalNav-menu');
  });

  it('renders vertical nav when vertical type is passed', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} type="vertical" />);
    expect(getAllByTestId('DesignSystem-Navigation-VerticalNavigation--menuWrapper')).toBeTruthy();
  });
});

describe('Navigation component', () => {
  it('render vertical nav when active is true', () => {
    const { container } = render(<Navigation menus={menus} type="vertical" active={{ name: 'tab1' }} />);
    expect(container.getElementsByClassName('Navigation-menu--active').length).toBe(1);
  });
  it('render vertical nav when active is not passed', () => {
    const { container } = render(<Navigation menus={menus} type="vertical" />);
    expect(container.getElementsByClassName('Navigation-menu--active').length).toBe(0);
  });
});

describe('VerticalNavigation component', () => {
  it('render vertical nav when subMenu  is passed and menu tab is active', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} type="vertical" active={{ name: 'tab2' }} />);
    expect(getAllByTestId('DesignSystem-Navigation-VerticalNavigation--expandedSubMenuIcon')[0]).toHaveTextContent(
      'keyboard_arrow_up'
    );
    expect(getAllByTestId('DesignSystem-Navigation-VerticalNavigation--expandedSubMenuIcon')[1]).toHaveTextContent(
      'keyboard_arrow_down'
    );
  });

  it('render vertical nav when subMenu  is not passed and menu tab is active', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} type="vertical" active={{ name: 'tab1' }} />);
    expect(getAllByTestId('DesignSystem-Navigation-VerticalNavigation--menuItem')[0]).toHaveClass(
      'Navigation-menu--active'
    );
  });

  it('render vertical nav menu is expanded and rounded', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} type="vertical" rounded={true} />);
    expect(getAllByTestId('DesignSystem-Navigation-VerticalNavigation--menuItem')[0]).toHaveClass(
      'Navigation-menu--rounded'
    );
  });

  it('render vertical nav menu is has icon', () => {
    const { getByTestId } = render(<Navigation menus={menus} type="vertical" />);
    expect(getByTestId('DesignSystem-Navigation-VerticalNavigation--menuIcon')).toHaveClass('Navigation-menuIcon');
  });

  it('render vertical nav menu is has icon and menu is active', () => {
    const { getByTestId } = render(<Navigation menus={menus} type="vertical" active={{ name: 'tab1' }} />);
    expect(getByTestId('DesignSystem-Navigation-VerticalNavigation--menuIcon')).toHaveClass(
      'Navigation-menuIcon--active'
    );
  });
});

describe('Vertical Navigation component prop: onClick', () => {
  it('renders vertical nav  component with  onClick without submenu ', () => {
    const { getAllByTestId } = render(<Navigation onClick={onClick} menus={menus} type="vertical" />);
    const menuClicked = getAllByTestId('DesignSystem-Navigation-VerticalNavigation--menuItem')[0];
    fireEvent.click(menuClicked);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(menus[0]);
  });

  it('renders vertical nav  component with onClick with subMenu and expanded false', () => {
    const { getAllByTestId } = render(<Navigation onClick={onClick} menus={menus} type="vertical" expanded={false} />);
    const menuClicked = getAllByTestId('DesignSystem-Navigation-VerticalNavigation--menuItem')[2];
    fireEvent.click(menuClicked);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith({ label: 'tab3child1', name: 'tab3child1' });
  });

  it('renders vertical nav  component with onClick  on Submenu ', () => {
    const { getAllByTestId } = render(
      <Navigation onClick={onClick} menus={menus} type="vertical" active={{ name: 'tab3' }} autoCollapse={false} />
    );
    const menuClicked = getAllByTestId('DesignSystem-Navigation-VerticalNavigation--subMenu')[0];
    fireEvent.click(menuClicked);
    expect(onClick).toHaveBeenCalledWith({
      name: 'tab3child1',
      label: 'tab3child1',
    });
  });
});
