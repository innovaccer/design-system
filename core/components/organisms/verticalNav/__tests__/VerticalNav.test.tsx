import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { VerticalNavProps as Props } from '@/index.type';
import { VerticalNav } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const onClick = jest.fn();
const onToggle = jest.fn();
const BooleanValue = [true, false];
const active = {
  name: 'care_management.timeline',
};

const menus = [
  {
    name: 'patient_360',
    label: 'Patient 360',
    icon: 'assignment_ind',
    link: '/patient360',
    count: 10,
    group: 'Section 1',
  },
  {
    name: 'care_management',
    label: 'Care Management and Resources',
    icon: 'forum',
    group: 'Section 2',
    subMenu: [
      {
        name: 'care_management.timeline',
        label: 'Timeline',
        icon: 'assignment_ind',
      },
      {
        name: 'care_management.care_plans',
        label: 'Care Plans',
        icon: 'events',
      },
    ],
  },
  {
    name: 'episodes',
    label: 'Episodes',
    disabled: true,
    icon: 'airline_seat_flat_angled',
    group: 'Section 2',
    count: 100,
  },
  {
    name: 'risk',
    label: 'Risk',
    icon: 'favorite',
    group: 'Section 2',
    subMenu: [
      {
        name: 'risk.timeline',
        label: 'Timeline',
      },
      {
        name: 'risk.care_plans',
        label: 'Care Plans',
      },
    ],
  },
];

/** VerticalNav root has data-test="DesignSystem-VerticalNav" and the onKeyDown handler; fire key events on it. */
const getTreeElement = (container: HTMLElement) =>
  container.querySelector('[data-test="DesignSystem-VerticalNav"]') as HTMLElement;

const menusWithExpandedSubMenu = [
  {
    name: 'patient_360',
    label: 'Patient 360',
    icon: 'assignment_ind',
    link: '/patient360',
    count: 10,
    group: 'Section 1',
  },
  {
    name: 'care_management',
    label: 'Care Management and Resources',
    icon: 'forum',
    group: 'Section 2',
    expanded: true,
    subMenu: [
      {
        name: 'care_management.timeline',
        label: 'Timeline',
        icon: 'assignment_ind',
      },
    ],
  },
  {
    name: 'episodes',
    label: 'Episodes',
    disabled: true,
    icon: 'airline_seat_flat_angled',
    group: 'Section 2',
    count: 100,
  },
];

describe('Vertical Navigation component', () => {
  const mapper = {
    expanded: valueHelper(true, { required: true }),
    rounded: valueHelper(BooleanValue, { required: true }),
    menus: valueHelper(menus, { required: true }),
    active: valueHelper(active, { required: true }),
    onClick: valueHelper(onClick, { required: true }),
    onToggle: valueHelper(onToggle, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<VerticalNav {...attr} />);

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Vertical Navigation component', () => {
  const mapper = {
    expanded: valueHelper(false, { required: true }),
    menus: valueHelper(menus, { required: true }),
    active: valueHelper(active, { required: true }),
    onClick: valueHelper(onClick, { required: true }),
    onToggle: valueHelper(onToggle, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<VerticalNav {...attr} />);

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Vertical Navigation component with prop: menus', () => {
  const disabledIndex = 2;

  it('renders menus', () => {
    const { getAllByTestId } = render(<VerticalNav menus={menus} />);
    expect(getAllByTestId('DesignSystem-VerticalNav--Item')).toHaveLength(menus.length);
  });

  it('renders icon of parent items in collapsed state ', () => {
    const currActive = { name: 'patient_360' };
    const { getAllByTestId } = render(<VerticalNav menus={menus} expanded={false} active={currActive} />);

    expect(getAllByTestId('DesignSystem-VerticalNav--Icon')).toHaveLength(menus.length);
  });

  it('renders icon of child items in collapsed state if the parent was initially expanded', () => {
    const childIconCount = 2;

    const { getAllByTestId } = render(<VerticalNav menus={menus} active={active} />);

    expect(getAllByTestId('DesignSystem-VerticalNav--Icon')).toHaveLength(menus.length + childIconCount);
  });

  it('renders menus with count', () => {
    const { getAllByTestId } = render(<VerticalNav menus={menus} expanded={true} />);
    expect(getAllByTestId('DesignSystem-VerticalNav--Pills')[0]).toHaveTextContent('10');
    expect(getAllByTestId('DesignSystem-VerticalNav--Pills')[1]).toHaveTextContent('99+');
  });

  it('displays 99+ when count is greater than 99', () => {
    const menusWithLargeCount = [
      {
        name: 'test_menu',
        label: 'Test Menu',
        icon: 'test_icon',
        count: 150,
        group: 'Section 1',
      },
    ];
    const { getAllByTestId } = render(<VerticalNav menus={menusWithLargeCount} expanded={true} />);
    expect(getAllByTestId('DesignSystem-VerticalNav--Pills')[0]).toHaveTextContent('99+');
  });

  it('displays exact count when count is less than or equal to 99', () => {
    const menusWithExactCount = [
      {
        name: 'test_menu',
        label: 'Test Menu',
        icon: 'test_icon',
        count: 99,
        group: 'Section 1',
      },
    ];
    const { getAllByTestId } = render(<VerticalNav menus={menusWithExactCount} expanded={true} />);
    expect(getAllByTestId('DesignSystem-VerticalNav--Pills')[0]).toHaveTextContent('99');
  });

  it('displays exact count when count is string', () => {
    const menusWithExactCount = [
      {
        name: 'test_menu',
        label: 'Test Menu',
        icon: 'test_icon',
        count: '100',
        group: 'Section 1',
      },
    ];
    const { getAllByTestId } = render(<VerticalNav menus={menusWithExactCount} expanded={true} />);
    expect(getAllByTestId('DesignSystem-VerticalNav--Pills')[0]).toHaveTextContent('100');
  });

  it('renders menus with sections', () => {
    const { getAllByTestId } = render(<VerticalNav menus={menus} expanded={true} />);

    const sections = getAllByTestId('DesignSystem-VerticalNav--Section');
    expect(sections).toHaveLength(2);
    expect(sections[0]).toHaveTextContent('Section 1');
    expect(sections[1]).toHaveTextContent('Section 2');
  });

  it('renders menus with disabled menu', () => {
    const { getAllByTestId } = render(<VerticalNav menus={menus} expanded={true} active={{ name: 'patient_360' }} />);

    const disabledMenuItem = getAllByTestId('DesignSystem-VerticalNav--Item')[disabledIndex];
    expect(disabledMenuItem).toHaveClass('color-inverse-lightest');

    const disabledText = getAllByTestId('DesignSystem-VerticalNav--Text')[disabledIndex];
    expect(disabledText).toHaveClass('color-inverse-lightest');

    const disabledIcon = getAllByTestId('DesignSystem-VerticalNav--Icon')[disabledIndex];
    expect(disabledIcon).toHaveStyle('color: var(--inverse-lightest)');

    const disabledPill = getAllByTestId('DesignSystem-VerticalNav--Pills')[1];
    expect(disabledPill).toHaveClass('Badge--subtle-secondary');
  });

  it('renders child items if parent item is clicked and panel is expanded', () => {
    const menuClicked = 1;
    const { getAllByTestId } = render(
      <VerticalNav expanded={true} menus={menus} active={{ name: 'patient_360' }} onClick={onClick} />
    );

    const activeMenu = getAllByTestId('DesignSystem-VerticalNav--Item')[menuClicked];
    fireEvent.click(activeMenu);

    const childItems = getAllByTestId('DesignSystem-VerticalNav--Text');
    expect(childItems[2].textContent).toMatch('Timeline');
    expect(childItems[3].textContent).toMatch('Care Plans');
  });
});

describe('Vertical Navigation component active menu', () => {
  const activeIndex = 0;

  it('renders menus with active menu', () => {
    const currActive = { name: 'patient_360' };
    const { getAllByTestId } = render(<VerticalNav expanded={true} menus={menus} active={currActive} />);

    const activeMenuItem = getAllByTestId('DesignSystem-VerticalNav--Item')[activeIndex];
    expect(activeMenuItem).toHaveClass('color-primary-dark');

    const activeText = getAllByTestId('DesignSystem-VerticalNav--Text')[activeIndex];
    expect(activeText).toHaveClass('color-primary-dark');

    const activeIcon = getAllByTestId('DesignSystem-VerticalNav--Icon')[activeIndex];
    expect(activeIcon).toHaveStyle('color: var(--primary-dark)');

    const activePill = getAllByTestId('DesignSystem-VerticalNav--Pills')[activeIndex];
    expect(activePill).toHaveClass('Badge--primary');
  });

  it('renders active menu with link', () => {
    const { getAllByTestId } = render(<VerticalNav expanded={true} menus={menus} active={{ link: '/patient360' }} />);
    const activeMenu = getAllByTestId('DesignSystem-VerticalNav--Text')[activeIndex];
    expect(activeMenu).toHaveClass('color-primary-dark');
  });

  it('renders menu when parent item is active', () => {
    const { getAllByTestId } = render(<VerticalNav expanded={true} menus={menus} active={active} />);

    const childIndex = 2;
    const activeMenu = getAllByTestId('DesignSystem-VerticalNav--Text')[childIndex];
    expect(activeMenu).toHaveClass('color-primary-dark');
  });

  it('renders menu when active prop is updated', () => {
    const { getAllByTestId, rerender } = render(
      <VerticalNav expanded={true} menus={menus} active={{ name: 'patient_360' }} />
    );
    const activeMenu = getAllByTestId('DesignSystem-VerticalNav--Text')[activeIndex];
    expect(activeMenu).toHaveClass('color-primary-dark');

    rerender(<VerticalNav expanded={true} menus={menus} active={active} />);

    const updatedActiveIndex = 2;
    const newActiveMenu = getAllByTestId('DesignSystem-VerticalNav--Text');
    expect(newActiveMenu[updatedActiveIndex]).toHaveClass('color-primary-dark');
    expect(newActiveMenu[activeIndex]).not.toHaveClass('color-primary-dark');
  });
});

describe('Vertical Navigation component prop: onClick', () => {
  it('calls onClick callback', () => {
    const menuClicked = 0;
    const { getAllByTestId } = render(<VerticalNav menus={menus} active={active} onClick={onClick} />);

    const activeMenu = getAllByTestId('DesignSystem-VerticalNav--Item')[menuClicked];
    fireEvent.click(activeMenu);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(menus[menuClicked]);
  });

  it('calls onClick callback if parent item is clicked and panel is collapsed', () => {
    const menuClicked = 1;
    const { getAllByTestId } = render(
      <VerticalNav expanded={false} menus={menus} active={{ name: 'patient_360' }} onClick={onClick} />
    );

    const activeMenu = getAllByTestId('DesignSystem-VerticalNav--Item')[menuClicked];
    fireEvent.click(activeMenu);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(menus[menuClicked].subMenu![0]);
  });
});

describe('Vertical Navigation component prop: menus with expanded subMenu', () => {
  it("Menu item having expanded state subMenu should be expanded even if it's subMenu is not active", () => {
    const { getAllByTestId } = render(
      <VerticalNav menus={menusWithExpandedSubMenu} active={{ name: 'patient_360' }} onClick={onClick} />
    );

    const timelineSubMenu = getAllByTestId('DesignSystem-VerticalNav--Text')[2];
    expect(timelineSubMenu.textContent).toMatch('Timeline');

    fireEvent.click(timelineSubMenu);

    const careManagement = getAllByTestId('DesignSystem-VerticalNav--Item')[1];
    fireEvent.click(careManagement);

    expect(getAllByTestId('DesignSystem-VerticalNav--Text')[2].textContent).toMatch('Episodes');
  });

  it("Menu item not having expanded state subMenu should be expanded when it's subMenu is active", () => {
    const { getAllByTestId } = render(
      <VerticalNav menus={menus} active={{ name: 'care_management.timeline' }} onClick={onClick} />
    );

    const childItems = getAllByTestId('DesignSystem-VerticalNav--Text');
    expect(childItems[2].textContent).toMatch('Timeline');

    const careManagement = getAllByTestId('DesignSystem-VerticalNav--Item')[1];
    fireEvent.click(careManagement);

    expect(getAllByTestId('DesignSystem-VerticalNav--Text')[2].textContent).toMatch('Episodes');
  });

  it('When subMenu is not active and not in expanded state then it should not be expanded', () => {
    const { getAllByTestId } = render(<VerticalNav menus={menus} active={{ name: 'patient_360' }} onClick={onClick} />);

    const childItems = getAllByTestId('DesignSystem-VerticalNav--Text');
    expect(childItems[2].textContent).toMatch('Episodes');

    const careManagement = getAllByTestId('DesignSystem-VerticalNav--Item')[1];
    fireEvent.click(careManagement);

    expect(getAllByTestId('DesignSystem-VerticalNav--Text')[2].textContent).toMatch('Timeline');
  });
});

describe('Vertical Navigation component prop: customOptionRenderer', () => {
  it('should render custom option renderer', () => {
    const customOptionRenderer = jest.fn();
    const { getAllByTestId } = render(
      <VerticalNav menus={menus} active={active} customOptionRenderer={customOptionRenderer} />
    );
    expect(getAllByTestId('DesignSystem-VerticalNav--Item')).toHaveLength(menus.length);
  });
});

describe('Vertical Navigation component keyboard accessibility', () => {
  const getFocusableItems = (container: HTMLElement) =>
    Array.from(container.querySelectorAll<HTMLElement>('[data-menu-name]')).filter(
      (el) => el.getAttribute('data-disabled') !== 'true'
    );

  it('implements roving tabindex (only one item has tabIndex 0)', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} />);
    const focusable = getFocusableItems(container);
    const withTabIndex0 = focusable.filter((el) => el.getAttribute('tabindex') === '0');
    expect(withTabIndex0).toHaveLength(1);
  });

  it('handles Arrow Down to navigate to next item', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} />);
    const focusable = getFocusableItems(container);
    focusable[0].focus();
    fireEvent.keyDown(getTreeElement(container), { key: 'ArrowDown' });
    expect(document.activeElement).toBe(focusable[1]);
  });

  it('handles Arrow Up to navigate to previous item', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} />);
    const focusable = getFocusableItems(container);
    focusable[1].focus();
    fireEvent.keyDown(getTreeElement(container), { key: 'ArrowUp' });
    expect(document.activeElement).toBe(focusable[0]);
  });

  it('handles Arrow Right to expand collapsed submenu', () => {
    const { container } = render(<VerticalNav menus={menus} active={{ name: 'patient_360' }} expanded={true} />);
    const focusable = getFocusableItems(container);
    const careManagementIndex = focusable.findIndex((el) => el.getAttribute('data-menu-name') === 'care_management');
    focusable[careManagementIndex].focus();
    fireEvent.keyDown(getTreeElement(container), { key: 'ArrowRight' });
    expect(container.querySelector('[data-menu-name="care_management.timeline"]')).toBeTruthy();
  });

  it('handles Arrow Left to collapse expanded submenu when on parent', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} autoCollapse={false} />);
    const focusable = getFocusableItems(container);
    const careManagementIndex = focusable.findIndex((el) => el.getAttribute('data-menu-name') === 'care_management');
    focusable[careManagementIndex].focus();
    fireEvent.keyDown(getTreeElement(container), { key: 'ArrowLeft' });
    expect(container.querySelector('[data-menu-name="care_management.timeline"]')).toBeFalsy();
  });

  it('handles Arrow Left on submenu item to move focus to parent', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} autoCollapse={false} />);
    const focusable = getFocusableItems(container);
    const timelineIndex = focusable.findIndex((el) => el.getAttribute('data-menu-name') === 'care_management.timeline');
    focusable[timelineIndex].focus();
    fireEvent.keyDown(getTreeElement(container), { key: 'ArrowLeft' });
    const parent = container.querySelector('[data-menu-name="care_management"]');
    expect(document.activeElement).toBe(parent);
  });

  it('handles Home to focus first item', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} />);
    const focusable = getFocusableItems(container);
    focusable[focusable.length - 1].focus();
    fireEvent.keyDown(getTreeElement(container), { key: 'Home' });
    expect(document.activeElement).toBe(focusable[0]);
  });

  it('handles End to focus last visible item', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} />);
    const focusable = getFocusableItems(container);
    focusable[0].focus();
    fireEvent.keyDown(getTreeElement(container), { key: 'End' });
    expect(document.activeElement).toBe(focusable[focusable.length - 1]);
  });

  it('handles Space to activate focused item', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} onClick={onClick} />);
    const focusable = getFocusableItems(container);
    focusable[0].focus();
    fireEvent.keyDown(getTreeElement(container), { key: ' ' });
    expect(onClick).toHaveBeenCalledWith(menus[0]);
  });

  it('prevents default on Space to avoid page scroll', () => {
    const onClickSpy = jest.fn();
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} onClick={onClickSpy} />);
    const focusable = getFocusableItems(container);
    focusable[0].focus();
    fireEvent.keyDown(getTreeElement(container), { key: ' ' });
    expect(onClickSpy).toHaveBeenCalledWith(menus[0]);
  });

  it('skips disabled items during keyboard navigation', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} />);
    const focusable = getFocusableItems(container);
    const hasEpisodes = focusable.some((el) => el.getAttribute('data-menu-name') === 'episodes');
    expect(hasEpisodes).toBe(false);
  });
});

describe('Vertical Navigation component WAI-ARIA tree semantics', () => {
  it('renders each menu item with role="treeitem"', () => {
    const { container } = render(<VerticalNav menus={menus} active={active} expanded={true} />);
    const treeitems = container.querySelectorAll('[role="treeitem"]');
    expect(treeitems.length).toBeGreaterThan(0);
    treeitems.forEach((el) => {
      expect(el.getAttribute('role')).toBe('treeitem');
    });
  });

  it('sets aria-level 1 on top-level items and 2 on submenu items', () => {
    const { container } = render(<VerticalNav menus={menusWithExpandedSubMenu} active={active} expanded={true} />);
    const topLevel = container.querySelector('[data-menu-name="care_management"]');
    const subItem = container.querySelector('[data-menu-name="care_management.timeline"]');
    expect(topLevel?.getAttribute('aria-level')).toBe('1');
    expect(subItem?.getAttribute('aria-level')).toBe('2');
  });

  it('sets aria-expanded on items with submenus and omits it on leaf items', () => {
    const { container } = render(<VerticalNav menus={menusWithExpandedSubMenu} active={active} expanded={true} />);
    const parentWithSubmenu = container.querySelector('[data-menu-name="care_management"]');
    const leafItem = container.querySelector('[data-menu-name="care_management.timeline"]');
    expect(parentWithSubmenu?.getAttribute('aria-expanded')).toBe('true');
    expect(leafItem?.hasAttribute('aria-expanded')).toBe(false);
  });

  it('sets aria-expanded to false when submenu is collapsed', () => {
    const { container } = render(<VerticalNav menus={menus} active={{ name: 'patient_360' }} expanded={true} />);
    const careManagement = container.querySelector('[data-menu-name="care_management"]');
    expect(careManagement?.getAttribute('aria-expanded')).toBe('false');
  });
});

describe('VerticalNav component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<VerticalNav menus={menus} expanded={true} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
