import React from 'react';
import { Menu, Text, Tooltip, Icon } from '@/index';
import '../style.css';

export const overflowBehaviorOfNestedItems = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef(null);

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item>
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Export</Text>
        </Menu.Item>
        <Menu.SubMenu>
          <Menu.Item
            onFocus={() => {
              setShowTooltip(true);
            }}
            onBlur={() => {
              setShowTooltip(false);
            }}
          >
            <Tooltip showOnTruncation={true} tooltip="User Admin Settings" open={showTooltip} elementRef={elementRef}>
              <div className="justify-space-between d-flex align-items-center w-100">
                <Text ref={elementRef} className="ellipsis--noWrap SubMenu-Text">
                  User Admin Settings
                </Text>
                <Icon name="chevron_right" />
              </div>
            </Tooltip>
          </Menu.Item>
          <Menu position="right-start">
            <Menu.List>
              <Menu.Item>Users</Menu.Item>
              <Menu.Item>Groups</Menu.Item>
              <Menu.Item>Roles</Menu.Item>
            </Menu.List>
          </Menu>
        </Menu.SubMenu>
      </Menu.List>
    </Menu>
  );
};

const customCode = `
() => {

  /*
    .SubMenu-Text {
      width: var(--spacing-320);
    }
  */
  const [showTooltip, setShowTooltip] = React.useState(false);
  const elementRef = React.useRef(null);

  return (
    <Menu trigger={<Menu.Trigger />}>
      <Menu.List>
        <Menu.Item>
          <Text>Edit</Text>
        </Menu.Item>
        <Menu.Item>
          <Text>Export</Text>
        </Menu.Item>
        <Menu.SubMenu>
          <Menu.Item
            onFocus={() => {
              setShowTooltip(true);
            }}
            onBlur={() => {
              setShowTooltip(false);
            }}
          >
            <Tooltip showOnTruncation={true} tooltip="User Admin Settings" open={showTooltip} elementRef={elementRef}>
              <div className="justify-space-between d-flex align-items-center w-100">
                <Text ref={elementRef} className="ellipsis--noWrap SubMenu-Text">
                  User Admin Settings
                </Text>
                <Icon name="chevron_right" />
              </div>
            </Tooltip>
          </Menu.Item>
          <Menu position="right-start">
            <Menu.List>
              <Menu.Item>Users</Menu.Item>
              <Menu.Item>Groups</Menu.Item>
              <Menu.Item>Roles</Menu.Item>
            </Menu.List>
          </Menu>
        </Menu.SubMenu>
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Overflow Behavior Of Nested Items',
  component: Menu,
  subcomponents: {
    'Menu.Trigger': Menu.Trigger,
    'Menu.Group': Menu.Group,
    'Menu.List': Menu.List,
    'Menu.Item': Menu.Item,
    'Menu.SubMenu': Menu.SubMenu,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'Menu',
        customCode,
      },
    },
  },
};
