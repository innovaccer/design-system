import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VerticalMenuProps as Props } from '@/index.type';
import { VerticalMenu } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const onClick = jest.fn();
const onToggle = jest.fn();
const BooleanValue = [true, false];
const active = {
  name: 'care_management.timeline'
};

const menus = [
  {
    name: 'patient_360',
    label: 'Patient 360',
    icon: 'assignment_ind',
    link: '/patient360',
    count: 10,
    group: 'Section 1'
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
      }
    ]
  },
  {
    name: 'episodes',
    label: 'Episodes',
    disabled: true,
    icon: 'airline_seat_flat_angled',
    group: 'Section 2',
    count: 100
  },
  {
    name: 'risk',
    label: 'Risk',
    icon: 'favorite',
    group: 'Section 2',
    subMenu: [
      {
        name: 'risk.timeline',
        label: 'Timeline'
      },
      {
        name: 'risk.care_plans',
        label: 'Care Plans'
      }
    ]
  },
];

describe('Vertical Navigation component', () => {
  const mapper = {
    expanded: valueHelper(true, { required: true }),
    rounded: valueHelper(BooleanValue, { required: true }),
    menus: valueHelper(menus, { required: true }),
    active: valueHelper(active, { required: true }),
    onClick: valueHelper(onClick, { required: true }),
    onToggle: valueHelper(onToggle, { required: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <VerticalMenu {...attr} />
      );

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
    onToggle: valueHelper(onToggle, { required: true })
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <VerticalMenu {...attr} />
      );

      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Vertical Navigation component with prop: menus', () => {
  const disabledIndex = 2;

  it('renders menus', () => {
    const { getAllByTestId } = render(<VerticalMenu menus={menus} />);
    expect(getAllByTestId('DesignSystem-VerticalMenu--Item')).toHaveLength(menus.length);
  });

  it('renders icon of parent items in collapsed state ', () => {
    const currActive = { name: 'patient_360' };
    const { getAllByTestId } = render(
      <VerticalMenu
        menus={menus}
        expanded={false}
        active={currActive}
      />
    );

    expect(getAllByTestId('DesignSystem-VerticalMenu--Icon')).toHaveLength(menus.length);
  });

  it('renders icon of child items in collapsed state if the parent was initially expanded', () => {
    const childIconCount = 2;

    const { getAllByTestId } = render(
      <VerticalMenu
        menus={menus}
        active={active}
      />
    );

    expect(getAllByTestId('DesignSystem-VerticalMenu--Icon')).toHaveLength(menus.length + childIconCount);
  });

  it('renders menus with count', () => {
    const { getAllByTestId } = render(
      <VerticalMenu
        menus={menus}
        expanded={true}
      />
    );
    expect(getAllByTestId('DesignSystem-VerticalMenu--Pills')[0]).toHaveTextContent('10');
    expect(getAllByTestId('DesignSystem-VerticalMenu--Pills')[1]).toHaveTextContent('99+');
  });

  it('renders menus with sections', () => {
    const { getAllByTestId } = render(
      <VerticalMenu
        menus={menus}
        expanded={true}
      />
    );

    const sections = getAllByTestId('DesignSystem-VerticalMenu--Section');
    expect(sections).toHaveLength(2);
    expect(sections[0]).toHaveTextContent('Section 1');
    expect(sections[1]).toHaveTextContent('Section 2');
  });

  it('renders menus with disabled menu', () => {
    const { getAllByTestId } = render(
      <VerticalMenu
        menus={menus}
        expanded={true}
        active={{ name: 'patient_360' }}
      />
    );
    const disabledText = getAllByTestId('DesignSystem-VerticalMenu--Text')[disabledIndex];
    expect(disabledText).toHaveClass('Text--disabled');

    const disabledIcon = getAllByTestId('DesignSystem-VerticalMenu--Icon')[disabledIndex];
    expect(disabledIcon).toHaveClass('Icon--disabled');

    const disabledPill = getAllByTestId('DesignSystem-VerticalMenu--Pills')[1];
    expect(disabledPill).toHaveClass('Badge--subtle-secondary');
  });

  it('renders child items if parent item is clicked and panel is expanded', () => {
    const menuClicked = 1;
    const { getAllByTestId } = render(
      <VerticalMenu
        expanded={true}
        menus={menus}
        active={{ name: 'patient_360' }}
        onClick={onClick}
      />
    );

    const activeMenu = getAllByTestId('DesignSystem-VerticalMenu--Item')[menuClicked];
    fireEvent.click(activeMenu);

    const childItems = getAllByTestId('DesignSystem-VerticalMenu--Text');
    expect(childItems[2].textContent).toMatch('Timeline');
    expect(childItems[3].textContent).toMatch('Care Plans');
  });

});

describe('Vertical Navigation component active menu', () => {
  const activeIndex = 0;

  it('renders menus with active menu', () => {
    const currActive = { name: 'patient_360' };
    const { getAllByTestId } = render(
      <VerticalMenu
        expanded={true}
        menus={menus}
        active={currActive}
      />
    );
    const activeText = getAllByTestId('DesignSystem-VerticalMenu--Text')[activeIndex];
    expect(activeText).toHaveClass('Text--link');

    const activeIcon = getAllByTestId('DesignSystem-VerticalMenu--Icon')[activeIndex];
    expect(activeIcon).toHaveClass('Icon--info');

    const activePill = getAllByTestId('DesignSystem-VerticalMenu--Pills')[activeIndex];
    expect(activePill).toHaveClass('Badge--primary');
  });

  it('renders active menu with link', () => {
    const { getAllByTestId } = render(
      <VerticalMenu
        expanded={true}
        menus={menus}
        active={{ link: '/patient360' }}
      />
    );
    const activeMenu = getAllByTestId('DesignSystem-VerticalMenu--Text')[activeIndex];
    expect(activeMenu).toHaveClass('Text--link');
  });

  it('renders menu when parent item is active', () => {
    const { getAllByTestId } = render(
      <VerticalMenu
        expanded={true}
        menus={menus}
        active={active}
      />
    );

    const childIndex = 2;
    const activeMenu = getAllByTestId('DesignSystem-VerticalMenu--Text')[childIndex];
    expect(activeMenu).toHaveClass('Text--link');
  });

  it('renders menu when active prop is updated', () => {
    const { getAllByTestId, rerender } = render(
      <VerticalMenu
        expanded={true}
        menus={menus}
        active={{ name: 'patient_360' }}
      />
    );
    const activeMenu = getAllByTestId('DesignSystem-VerticalMenu--Text')[activeIndex];
    expect(activeMenu).toHaveClass('Text--link');

    rerender(
      <VerticalMenu
        expanded={true}
        menus={menus}
        active={active}
      />
    );

    const updatedActiveIndex = 2;
    const newActiveMenu = getAllByTestId('DesignSystem-VerticalMenu--Text');
    expect(newActiveMenu[updatedActiveIndex]).toHaveClass('Text--link');
    expect(newActiveMenu[activeIndex]).not.toHaveClass('Text--link');
  });

});

describe('Vertical Navigation component prop: onClick', () => {

  it('calls onClick callback', () => {
    const menuClicked = 0;
    const { getAllByTestId } = render(
      <VerticalMenu
        menus={menus}
        active={active}
        onClick={onClick}
      />
    );

    const activeMenu = getAllByTestId('DesignSystem-VerticalMenu--Item')[menuClicked];
    fireEvent.click(activeMenu);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(menus[menuClicked]);
  });

  it('calls onClick callback if parent item is clicked and panel is collapsed', () => {
    const menuClicked = 1;
    const { getAllByTestId } = render(
      <VerticalMenu
        expanded={false}
        menus={menus}
        active={{ name: 'patient_360' }}
        onClick={onClick}
      />
    );

    const activeMenu = getAllByTestId('DesignSystem-VerticalMenu--Item')[menuClicked];
    fireEvent.click(activeMenu);
    expect(onClick).toHaveBeenCalled();
    // @ts-ignore
    expect(onClick).toHaveBeenCalledWith(menus[menuClicked].subMenu[0]);
  });

});
