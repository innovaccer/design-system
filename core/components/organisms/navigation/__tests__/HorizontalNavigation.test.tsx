import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NavigationProps as Props } from '@/index.type';
import { Navigation } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const onClick = jest.fn();
const active = { name: 'tab1' };

export const menus = [
  {
    name: 'tab1',
    label: 'Tab #1',
    icon: 'events',
    link: '/patient360'
  },
  {
    name: 'tab2',
    label: 'Tab #2',
    count: 10,
    link: '/outreach'
  },
  {
    name: 'tab3',
    label: 'Tab #3',
    disabled: true,
    link: '/innote'
  },
];

export const iconMenus = [
  {
    name: 'tab1',
    label: 'Tab #1',
    icon: 'events',
  },
  {
    name: 'tab2',
    label: 'Tab #2',
    icon: 'events',
  },
  {
    name: 'tab3',
    label: 'Tab #3',
    icon: 'events',
    disabled: true
  },
];

export const countMenus = [
  {
    name: 'tab1',
    label: 'Tab #1',
    icon: 'events',
    count: 10,
  },
  {
    name: 'tab2',
    label: 'Tab #2',
    count: 100,
  },
  {
    name: 'tab3',
    label: 'Tab #3',
    count: 100,
    disabled: true
  },
];

const HorizontalNavDataKey = 'DesignSystem-HorizontalNavigation';

const mapper = {
  type: valueHelper('horizontal', { required: true }),
  menus: valueHelper(menus, { required: true }),
  active: valueHelper(active, { required: true }),
  onClick: valueHelper(onClick, { required: true })
};

describe('Horizontal Navigation component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Navigation {...attr} />
      );

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Horizontal Navigation component with prop: menus', () => {
  const disabledIndex = 2;

  it('renders menus', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} />);
    expect(getAllByTestId(HorizontalNavDataKey)).toHaveLength(menus.length);
  });

  it('renders menus with icon', () => {
    const { getAllByTestId } = render(<Navigation menus={iconMenus} />);
    expect(getAllByTestId('DesignSystem-HorizontalNavigation--Icon')).toHaveLength(iconMenus.length);
  });

  it('renders menus with count', () => {
    const { getAllByTestId } = render(<Navigation menus={countMenus} />);
    expect(getAllByTestId('DesignSystem-HorizontalNavigation--Pills')).toHaveLength(countMenus.length);
  });

  it('renders menus with both icon and count', () => {
    const { getByTestId } = render(<Navigation menus={menus} />);
    expect(getByTestId('DesignSystem-HorizontalNavigation--Icon')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-HorizontalNavigation--Pills')).toBeInTheDocument();
  });

  it('renders count when menu is given both icon and count', () => {
    const { getAllByTestId, queryByTestId } = render(<Navigation menus={countMenus} />);
    expect(queryByTestId('DesignSystem-HorizontalNavigation--Icon')).not.toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-HorizontalNavigation--Pills')[0]).toBeInTheDocument();
  });

  it('renders menus with disabled menu', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNavigation--Text')[disabledIndex];
    expect(disabledMenu).toHaveClass('Text--disabled');
  });

  it('renders iconMenus with disabled menu', () => {
    const { getAllByTestId } = render(<Navigation menus={iconMenus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNavigation--Icon')[disabledIndex];
    expect(disabledMenu).toHaveClass('Icon--disabled');
  });

  it('renders countMenus with disabled menu', () => {
    const { getAllByTestId } = render(<Navigation menus={countMenus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNavigation--Pills')[disabledIndex];
    expect(disabledMenu).toHaveClass('Badge--subtle-secondary');
  });

});

describe('Horizontal Navigation component active menu', () => {
  const activeIndex = 0;

  it('renders menus with active menu', () => {
    const { getAllByTestId } = render(<Navigation menus={menus} active={active} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNavigation--Text')[activeIndex];
    expect(activeMenu).toHaveClass('Text--link');
  });

  it('renders iconMenus with active menu', () => {
    const { getAllByTestId } = render(<Navigation menus={iconMenus} active={active} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNavigation--Icon')[activeIndex];
    expect(activeMenu).toHaveClass('Icon--info');
  });

  it('renders countMenus with active menu', () => {
    const { getAllByTestId } = render(<Navigation menus={countMenus} active={active} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNavigation--Pills')[activeIndex];
    expect(activeMenu).toHaveClass('Badge--primary');
  });

  it('renders active menu with link', () => {
    const { getAllByTestId } = render(
      <Navigation
        menus={menus}
        active={{ link: '/patient360' }}
      />
    );
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNavigation--Text')[activeIndex];
    expect(activeMenu).toHaveClass('Text--link');
  });

});

describe('Horizontal Navigation component prop: onClick', () => {

  it('calls onClick callback', () => {
    const stepClicked = 1;
    const { getAllByTestId } = render(
      <Navigation
        menus={menus}
        active={active}
        onClick={onClick}
      />
    );

    const activeMenu = getAllByTestId('DesignSystem-HorizontalNavigation')[stepClicked];
    fireEvent.click(activeMenu);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(menus[stepClicked]);

  });

});
