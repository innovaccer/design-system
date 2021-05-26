import * as React from 'react';
import { Text, Button, Popover, Avatar } from '@/index';

// CSF format story
export const popoverWithMenu = () => {
  const trigger = (
  <div className="d-flex">
    <Avatar firstName="John" lastName="Doe" />
    <Text className="ml-4 mt-4" size="large">Hi James</Text>
    <Button appearance="transparent" icon="arrow_drop_down" />
  </div>
  );

  return (
    <div className="mb-12">
      <Popover
        position="bottom-start"
        on="click"
        trigger={trigger}
        open={true}
      >
        <div style={{ width: 'var(--spacing-9)' }} className=" mx-6 my-6">
          <div className="d-flex">
            <Avatar firstName="John" lastName="Doe" />
            <div  className="Option-label">
              <Text className="ml-4">James Donovan</Text>
              <Text className="ml-4" appearance="subtle">jdonovan @two.health</Text>
            </div>
          </div>
        <div className="Dropdown-wrapper">
          <div className="Option OptionWrapper">Account Overview</div>
          <div className="Option OptionWrapper">Sign Out</div>
        </div>
        </div>
      </Popover>
    </div>
  );
};

export default {
  title: 'Components/Popover/Popover With Menu',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        noHtml: true
      }
    }
  }
};
