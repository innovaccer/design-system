import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HorizontalNavProps as Props } from '@/index.type';
import { HorizontalNav } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const onClick = jest.fn();
const active = { name: 'tab1' };

export const menus = [
  {
    name: 'tab1',
    label: 'Tab #1',
    icon: 'events',
    link: '/patient360',
  },
  {
    name: 'tab2',
    label: 'Tab #2',
    count: 10,
    link: '/outreach',
  },
  {
    name: 'tab3',
    label: 'Tab #3',
    disabled: true,
    link: '/innote',
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
    disabled: true,
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
    disabled: true,
  },
];

const HorizontalNavDataKey = 'DesignSystem-HorizontalNav';

const mapper = {
  menus: valueHelper(menus, { required: true }),
  active: valueHelper(active, { required: true }),
  onClick: valueHelper(onClick, { required: true }),
};

describe('Horizontal Navigation component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<HorizontalNav {...attr} />);

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Horizontal Navigation component with prop: menus', () => {
  const disabledIndex = 2;

  it('renders menus', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} />);
    expect(getAllByTestId(HorizontalNavDataKey)).toHaveLength(menus.length);
  });

  it('renders menus with icon', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={iconMenus} />);
    expect(getAllByTestId('DesignSystem-HorizontalNav--Icon')).toHaveLength(iconMenus.length);
  });

  it('renders menus with count', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={countMenus} />);
    expect(getAllByTestId('DesignSystem-HorizontalNav--Pills')).toHaveLength(countMenus.length);
  });

  it('renders menus with both icon and count', () => {
    const { getByTestId } = render(<HorizontalNav menus={menus} />);
    expect(getByTestId('DesignSystem-HorizontalNav--Icon')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-HorizontalNav--Pills')).toBeInTheDocument();
  });

  it('renders count when menu is given both icon and count', () => {
    const { getAllByTestId, queryByTestId } = render(<HorizontalNav menus={countMenus} />);
    expect(queryByTestId('DesignSystem-HorizontalNav--Icon')).not.toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-HorizontalNav--Pills')[0]).toBeInTheDocument();
  });

  it('renders disabled menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNav')[disabledIndex];
    expect(disabledMenu).toHaveClass('color-inverse-lightest');
  });

  it('renders menus with disabled menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNav--Text')[disabledIndex];
    expect(disabledMenu).toHaveClass('color-inverse-lightest');
  });

  it('renders iconMenus with disabled menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={iconMenus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNav--Icon')[disabledIndex];
    expect(disabledMenu).toHaveStyle('color: var(--inverse-lightest)');
  });

  it('renders countMenus with disabled menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={countMenus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNav--Pills')[disabledIndex];
    expect(disabledMenu).toHaveClass('Badge--subtle-secondary');
  });
});

describe('Horizontal Navigation component active menu', () => {
  const activeIndex = 0;

  it('renders active menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} active={active} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav')[activeIndex];
    expect(activeMenu).toHaveClass('color-primary-dark');
  });

  it('renders menus with active menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} active={active} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav--Text')[activeIndex];
    expect(activeMenu).toHaveClass('color-primary-dark');
  });

  it('renders iconMenus with active menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={iconMenus} active={active} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav--Icon')[activeIndex];
    expect(activeMenu).toHaveStyle('color: var(--primary-dark)');
  });

  it('renders countMenus with active menu', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={countMenus} active={active} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav--Pills')[activeIndex];
    expect(activeMenu).toHaveClass('Badge--primary');
  });

  it('renders active menu with link', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} active={{ link: '/patient360' }} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav--Text')[activeIndex];
    expect(activeMenu).toHaveClass('color-primary-dark');
  });
});

describe('Horizontal Navigation component prop: onClick', () => {
  it('calls onClick callback', () => {
    const stepClicked = 1;
    const { getAllByTestId } = render(<HorizontalNav menus={menus} active={active} onClick={onClick} />);

    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav')[stepClicked];
    fireEvent.click(activeMenu);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(menus[stepClicked]);
  });
});

describe('Horizontal Navigation component css classes', () => {
  it('renders text with disabled state ', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} />);
    const disabledMenu = getAllByTestId('DesignSystem-HorizontalNav--Text')[2];
    expect(disabledMenu).toHaveClass('color-inverse-lightest');
  });

  it('renders text with default state ', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} />);
    const defaultMenu = getAllByTestId('DesignSystem-HorizontalNav--Text')[0];
    expect(defaultMenu).toHaveClass('color-inverse');
  });

  it('renders text with active state ', () => {
    const { getAllByTestId } = render(<HorizontalNav menus={menus} active={{ link: '/patient360' }} />);
    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav--Text')[0];
    expect(activeMenu).toHaveClass('color-primary-dark');
  });
});

describe('Horizontal Navigation component keydown event handler', () => {
  it('calls onClick callback on keydown event', () => {
    jest.resetAllMocks();
    const stepFocused = 1;
    const { getAllByTestId } = render(<HorizontalNav menus={menus} active={active} onClick={onClick} />);

    const activeMenu = getAllByTestId('DesignSystem-HorizontalNav')[stepFocused];
    fireEvent.focus(activeMenu);
    fireEvent.keyDown(activeMenu, { key: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(menus[stepFocused]);
  });
});
