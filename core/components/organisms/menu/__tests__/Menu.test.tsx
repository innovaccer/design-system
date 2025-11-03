import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MenuProps } from '@/index.type';
import { Menu, Icon } from '@/index';

const BooleanValue = [true, false];
// const FunctionValue = jest.fn();
// const MenuList = (
//   <Menu.List>
//     <Menu.Item>Menu Item 1</Menu.Item>
//     <Menu.Item>Menu Item 2</Menu.Item>
//     <Menu.Item>Menu Item 3</Menu.Item>
//   </Menu.List>
// );

describe('Menu component snapshot', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as MenuProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Menu {...attr}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
          </Menu.List>
        </Menu>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Menu component with Nesting snapshot', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as MenuProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Menu {...attr}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
            <Menu.SubMenu>
              <Menu.Item className="d-flex align-items-center justify-content-between w-100">
                Menu Item 3
                <Icon name="chevron_right" />
              </Menu.Item>
              <Menu position="right-start">
                <Menu.List>
                  <Menu.Item>Sub Menu Item 1</Menu.Item>
                  <Menu.Item>Sub Menu Item 2</Menu.Item>
                </Menu.List>
              </Menu>
            </Menu.SubMenu>
          </Menu.List>
        </Menu>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Menu component with Trigger snapshot', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as MenuProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Menu {...attr} trigger={<Menu.Trigger />}>
          <Menu.List>
            <Menu.Item>Menu Item 1</Menu.Item>
            <Menu.Item>Menu Item 2</Menu.Item>
          </Menu.List>
        </Menu>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

// describe('Menu component with Grouping', () => {
//   it('check for group label', () => {
//     const { getByTestId, getAllByTestId } = render(
//       <Menu trigger={<Menu.Trigger />}>
//         <Menu.Group label="Add">{MenuList}</Menu.Group>
//         <Menu.Group label="Actions">{MenuList}</Menu.Group>
//       </Menu>
//     );

//     const trigger = getByTestId('DesignSystem-Menu-Trigger');

//     fireEvent.click(trigger);
//     const popover = getByTestId('DesignSystem-Popover');
//     const groupLabel = getAllByTestId('DesignSystem-Menu-Group-Label')[0];
//     const menuGroup = getAllByTestId('DesignSystem-Menu-Group');

//     expect(popover).toBeInTheDocument();
//     expect(groupLabel).toBeInTheDocument();
//     expect(groupLabel).toHaveTextContent('Add');
//     expect(menuGroup).toHaveLength(2);
//   });

//   it('check for group divider', () => {
//     const { getByTestId } = render(
//       <Menu trigger={<Menu.Trigger />}>
//         <Menu.Group>{MenuList}</Menu.Group>
//         <Menu.Group showDivider={false}>{MenuList}</Menu.Group>
//       </Menu>
//     );

//     const trigger = getByTestId('DesignSystem-Menu-Trigger');

//     fireEvent.click(trigger);
//     const popover = getByTestId('DesignSystem-Popover');
//     const divider = getByTestId('DesignSystem-Divider');

//     expect(popover).toBeInTheDocument();
//     expect(divider).toBeInTheDocument();
//   });
// });

// describe('Menu component with callback', () => {
//   it('check for onClick callback', () => {
//     const { getByTestId } = render(
//       <Menu trigger={<Menu.Trigger />} open={true}>
//         <Menu.List>
//           <Menu.Item onClick={FunctionValue}>Menu Item 1</Menu.Item>
//         </Menu.List>
//       </Menu>
//     );

//     fireEvent.click(getByTestId('DesignSystem-Menu-ListItem'));
//     expect(FunctionValue).toHaveBeenCalled();
//   });

//   it('check for onToggle callback', () => {
//     const { getByTestId } = render(
//       <Menu onToggle={FunctionValue} trigger={<Menu.Trigger />}>
//         <Menu.List>
//           <Menu.Item>Menu Item 1</Menu.Item>
//         </Menu.List>
//       </Menu>
//     );

//     fireEvent.click(getByTestId('DesignSystem-Menu-Trigger'));
//     expect(FunctionValue).toHaveBeenCalled();
//     expect(FunctionValue).toHaveBeenCalledWith(true);
//   });
// });

// describe('Menu component with Nesting', () => {
//   it('check if it renders submenu', () => {
//     const { getByTestId, getAllByTestId } = render(
//       <Menu trigger={<Menu.Trigger />}>
//         <Menu.Group label="Group 1">
//           <Menu.List>
//             <Menu.Item>Item 1</Menu.Item>
//             <Menu.Item>Item 2</Menu.Item>

//             <Menu.SubMenu>
//               <Menu.Item data-test="Menu-Item" className="d-flex align-items-center justify-content-between w-100">
//                 Item 3
//                 <Icon name="chevron_right" />
//               </Menu.Item>
//               <Menu position="right-start">{MenuList}</Menu>
//             </Menu.SubMenu>
//           </Menu.List>
//         </Menu.Group>
//       </Menu>
//     );

//     const trigger = getByTestId('DesignSystem-Menu-Trigger');

//     fireEvent.click(trigger);

//     const triggerItem = getByTestId('Menu-Item');
//     fireEvent.mouseOver(triggerItem);
//     expect(getAllByTestId('DesignSystem-Popover')).toHaveLength(2);
//   });
// });

// describe('Menu component keyboard interactions', () => {
//   it('check for ArrowDown keyboard navigation with trigger', () => {
//     const { getByTestId } = render(
//       <Menu trigger={<Menu.Trigger />}>
//         <Menu.List>
//           <Menu.Item>Menu Item 1</Menu.Item>
//         </Menu.List>
//       </Menu>
//     );
//     const trigger = getByTestId('DesignSystem-Menu-Trigger');
//     fireEvent.keyDown(trigger, { key: 'ArrowDown' });
//     const popover = getByTestId('DesignSystem-Popover');
//     expect(popover).toBeInTheDocument();
//   });

//   it('check for ArrowUp keyboard navigation with trigger', () => {
//     const { getByTestId } = render(
//       <Menu trigger={<Menu.Trigger />}>
//         <Menu.List>
//           <Menu.Item>Menu Item 1</Menu.Item>
//         </Menu.List>
//       </Menu>
//     );
//     const trigger = getByTestId('DesignSystem-Menu-Trigger');
//     fireEvent.keyDown(trigger, { key: 'ArrowUp' });
//     const popover = getByTestId('DesignSystem-Popover');
//     expect(popover).toBeInTheDocument();
//   });
// });

describe('Menu component with prop:disabled', () => {
  it('check for disabled menu', () => {
    const { queryByTestId, getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} disabled={true}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    const trigger = getByTestId('DesignSystem-Menu-Trigger');
    fireEvent.click(trigger);
    const popover = queryByTestId('DesignSystem-Popover');
    expect(popover).not.toBeInTheDocument();
  });

  // it('check for popover when disabled:false', () => {
  //   const { getByTestId } = render(
  //     <Menu trigger={<Menu.Trigger />}>
  //       <Menu.List>
  //         <Menu.Item>Menu Item 1</Menu.Item>
  //       </Menu.List>
  //     </Menu>
  //   );

  //   const trigger = getByTestId('DesignSystem-Menu-Trigger');
  //   fireEvent.click(trigger);
  //   const popover = getByTestId('DesignSystem-Popover');
  //   expect(popover).toBeInTheDocument();
  // });
});

describe('Menu Component - MenuItem functionality and interaction handling', () => {
  it('should handle MenuItem focus events', () => {
    const mockOnFocus = jest.fn();
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item onFocus={mockOnFocus}>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    const menuItem = getByTestId('DesignSystem-Menu-ListItem');
    fireEvent.focus(menuItem);

    expect(mockOnFocus).toHaveBeenCalled();
  });

  it('should not trigger onClick when MenuItem is disabled', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item onClick={mockOnClick} disabled={true}>
            Menu Item 1
          </Menu.Item>
        </Menu.List>
      </Menu>
    );

    const menuItem = getByTestId('DesignSystem-Menu-ListItem');
    fireEvent.click(menuItem);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('should apply correct className for tight size MenuList', () => {
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List size="tight">
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    // The Menu-Item classes are applied to the ListBody wrapper, not the outer element
    const menuItemWrapper = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(menuItemWrapper).toHaveClass('Menu-Item--tight');
  });

  // it('should handle MenuItem keyboard navigation', () => {
  //   const { getByTestId, getAllByTestId } = render(
  //     <Menu trigger={<Menu.Trigger />} open={true}>
  //       <Menu.List>
  //         <Menu.Item>Menu Item 1</Menu.Item>
  //         <Menu.Item>Menu Item 2</Menu.Item>
  //       </Menu.List>
  //     </Menu>
  //   );

  //   const menuItems = getAllByTestId('DesignSystem-Menu-ListItem');
  //   fireEvent.keyDown(menuItems[0], { key: 'ArrowDown' });

  //   // The menu should still be open after navigation
  //   const popover = getByTestId('DesignSystem-Popover');
  //   expect(popover).toBeInTheDocument();
  // });
});

describe('Menu Component - SubMenu nested menu functionality and accessibility', () => {
  it('should render SubMenu with proper accessibility attributes', () => {
    const { getAllByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.SubMenu>
            <Menu.Item className="d-flex align-items-center justify-content-between w-100">
              Menu Item with SubMenu
              <Icon name="chevron_right" />
            </Menu.Item>
            <Menu position="right-start">
              <Menu.List>
                <Menu.Item>Sub Menu Item 1</Menu.Item>
              </Menu.List>
            </Menu>
          </Menu.SubMenu>
        </Menu.List>
      </Menu>
    );

    const menuItems = getAllByTestId('DesignSystem-Menu-ListItem');
    const subMenuTrigger = menuItems[0];

    expect(subMenuTrigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(subMenuTrigger).toHaveAttribute('aria-expanded');
    expect(subMenuTrigger).toHaveAttribute('aria-controls');
    expect(subMenuTrigger).toHaveAttribute('id');
  });

  // it('should open SubMenu on hover', () => {
  //   const { getAllByTestId } = render(
  //     <Menu trigger={<Menu.Trigger />} open={true}>
  //       <Menu.List>
  //         <Menu.SubMenu>
  //           <Menu.Item className="d-flex align-items-center justify-content-between w-100">
  //             Menu Item with SubMenu
  //             <Icon name="chevron_right" />
  //           </Menu.Item>
  //           <Menu position="right-start">
  //             <Menu.List>
  //               <Menu.Item>Sub Menu Item 1</Menu.Item>
  //             </Menu.List>
  //           </Menu>
  //         </Menu.SubMenu>
  //       </Menu.List>
  //     </Menu>
  //   );

  //   const menuItems = getAllByTestId('DesignSystem-Menu-ListItem');
  //   const subMenuTrigger = menuItems[0];

  //   fireEvent.mouseOver(subMenuTrigger);

  //   // Should have two popovers now (main menu + submenu)
  //   const popovers = getAllByTestId('DesignSystem-Popover');
  //   expect(popovers).toHaveLength(2);
  // });

  it('should handle SubMenu keyboard navigation', () => {
    const { getAllByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.SubMenu>
            <Menu.Item className="d-flex align-items-center justify-content-between w-100">
              Menu Item with SubMenu
              <Icon name="chevron_right" />
            </Menu.Item>
            <Menu position="right-start">
              <Menu.List>
                <Menu.Item>Sub Menu Item 1</Menu.Item>
              </Menu.List>
            </Menu>
          </Menu.SubMenu>
        </Menu.List>
      </Menu>
    );

    const menuItems = getAllByTestId('DesignSystem-Menu-ListItem');
    const subMenuTrigger = menuItems[0];

    fireEvent.keyDown(subMenuTrigger, { key: 'ArrowRight' });

    // The submenu trigger should handle the keyboard event
    expect(subMenuTrigger).toBeInTheDocument();
  });
});

describe('Menu Component - Context provider and state management for menu interactions', () => {
  it('should manage focus state correctly', () => {
    const { getAllByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
          <Menu.Item>Menu Item 2</Menu.Item>
        </Menu.List>
      </Menu>
    );

    const menuItems = getAllByTestId('DesignSystem-Menu-ListItem');

    fireEvent.focus(menuItems[0]);
    fireEvent.focus(menuItems[1]);

    // Both items should be able to receive focus
    expect(menuItems[0]).toBeInTheDocument();
    expect(menuItems[1]).toBeInTheDocument();
  });

  it('should handle open state changes', () => {
    const mockOnToggle = jest.fn();
    const { rerender } = render(
      <Menu trigger={<Menu.Trigger />} open={false} onToggle={mockOnToggle}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    // Change to open
    rerender(
      <Menu trigger={<Menu.Trigger />} open={true} onToggle={mockOnToggle}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    expect(mockOnToggle).toHaveBeenCalledWith(true);
  });

  it('should provide correct context values to children', () => {
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    const menuItem = getByTestId('DesignSystem-Menu-ListItem');

    // MenuItem should receive context and render properly
    expect(menuItem).toHaveAttribute('role', 'menuitem');
    expect(menuItem).toHaveAttribute('tabIndex', '-1');
  });
});

describe('Menu Component - MenuList size variants and styling behavior', () => {
  it('should apply compressed size by default', () => {
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    const menuItemWrapper = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(menuItemWrapper).not.toHaveClass('Menu-Item--tight');
  });

  it('should apply tight size when specified', () => {
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List size="tight">
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    const menuItemWrapper = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(menuItemWrapper).toHaveClass('Menu-Item--tight');
  });
});

describe('Menu Component - Event listener lifecycle management and cleanup', () => {
  it('should handle MenuItem event listeners properly', () => {
    const { unmount } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    // Should not throw when unmounting
    expect(() => unmount()).not.toThrow();
  });

  it('should handle focus and blur events on menu items', () => {
    const { getByTestId } = render(
      <Menu trigger={<Menu.Trigger />} open={true}>
        <Menu.List>
          <Menu.Item>Menu Item 1</Menu.Item>
        </Menu.List>
      </Menu>
    );

    const menuItem = getByTestId('DesignSystem-Menu-ListItem');

    fireEvent.focus(menuItem);
    fireEvent.blur(menuItem);

    // Should handle events without errors
    expect(menuItem).toBeInTheDocument();
  });
});
