import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
