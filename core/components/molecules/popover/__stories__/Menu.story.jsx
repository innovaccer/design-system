import * as React from 'react';
import { Text, Button, Popover, Avatar } from '@/index';

// CSF format story
export const popoverWithMenu = () => {
  const trigger = (
    <div className="d-flex">
      <Avatar firstName="John" lastName="Doe" />
      <Button className="ml-3" appearance="transparent" icon="arrow_drop_down" iconAlign="right">
        Open Popover
      </Button>
    </div>
  );

  return (
    <div className="mb-12">
      <Popover position="bottom-start" on="click" trigger={trigger} open={false} className="w-25">
        <div className="pt-7 pb-4 pl-7">
          <div className="d-flex pr-7 pb-6">
            <Avatar firstName="John" lastName="Doe" />
            <div className="Option-label">
              <Text className="ml-5">James Donovan</Text>
              <Text className="ml-5" appearance="subtle">
                jdonovan @two.health
              </Text>
            </div>
          </div>
          <div>
            <div className="Option pl-0 pr-4">Account Overview</div>
            <div className="Option pl-0 pr-4">Sign Out</div>
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
        noHtml: true,
      },
    },
  },
};
