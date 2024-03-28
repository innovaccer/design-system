import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MenuProps } from '@/index.type';
import { Menu, Icon } from '@/index';

/**
 * check for data-test and className for all sub components
 * check for submenu
 * check for grouping label
 * check for grouping divider
 * check for trigger and click on it to open the popover
 *
 */
const BooleanValue = [true, false];

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
