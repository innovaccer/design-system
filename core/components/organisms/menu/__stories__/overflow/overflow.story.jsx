import React from 'react';
import { Menu, Text, Tooltip } from '@/index';

export const overflowBehaviorOfItems = () => {
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
        <Tooltip showOnTruncation={true} tooltip="Create a bug report here" open={showTooltip} elementRef={elementRef}>
          <Menu.Item onFocus={() => setShowTooltip(true)} onBlur={() => setShowTooltip(false)}>
            <Text ref={elementRef} className="ellipsis--noWrap">
              Create a bug report here
            </Text>
          </Menu.Item>
        </Tooltip>
      </Menu.List>
    </Menu>
  );
};

const customCode = `
() => {
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
        <Tooltip showOnTruncation={true} tooltip="Create a bug report here" open={showTooltip} elementRef={elementRef}>
          <Menu.Item onFocus={() => setShowTooltip(true)} onBlur={() => setShowTooltip(false)}>
            <Text ref={elementRef} className="ellipsis--noWrap">
              Create a bug report here
            </Text>
          </Menu.Item>
        </Tooltip>
      </Menu.List>
    </Menu>
  );
}
`;

export default {
  title: 'Components/Menu/Overflow Behavior Of Items',
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
