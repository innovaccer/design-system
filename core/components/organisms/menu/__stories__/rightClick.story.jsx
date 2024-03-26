import * as React from 'react';
import { Menu } from '@/index';

// CSF format story
export const rightClick = () => {
  const [popoverVisible, setPopoverVisible] = React.useState(false);
  const [popoverPosition, setPopoverPosition] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    setPopoverPosition({ x, y });
    setPopoverVisible(true);
  };

  const handleDocumentClick = () => {
    setPopoverVisible(false);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="bg-secondary p-10" onContextMenu={handleContextMenu} onClick={handleDocumentClick}>
      <Menu triggerCoordinates={popoverPosition} open={popoverVisible}>
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Export</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
};

const customCode = `() => {

  const [popoverVisible, setPopoverVisible] = React.useState(false);
  const [popoverPosition, setPopoverPosition] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    
    const x = event.clientX;
    const y = event.clientY;
    
    setPopoverPosition({ x, y });
    setPopoverVisible(true);
  };

  const handleDocumentClick = () => {
    setPopoverVisible(false);
  };

  return ( 
    <div className="bg-secondary p-10" onContextMenu={handleContextMenu} onClick={handleDocumentClick}>
      <Menu triggerCoordinates={popoverPosition} open={popoverVisible}>
        <Menu.List>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Export</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
        </Menu.List>
      </Menu>
    </div> 
  );
}
`;

export default {
  title: 'Components/Menu/Trigger/Right Click',
  component: Menu,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
        customCode,
      },
    },
  },
};
