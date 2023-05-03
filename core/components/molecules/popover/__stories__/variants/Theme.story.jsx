import * as React from 'react';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const theme = () => {
  const trigger = <Button appearance="basic">Light Theme</Button>;
  const triggerDark = <Button appearance="basic">Dark Theme</Button>;

  const options = {
    open: true,
  };

  return (
    <div className="d-flex">
      <div className="mb-11 mr-14">
        <Popover trigger={triggerDark} dark={true} {...options}>
          <div className="m-6 pr-9">
            <Text appearance={'white'}>Popup</Text>
            <Button appearance="primary" className="mt-4">
              Click
            </Button>
          </div>
        </Popover>
      </div>
      <div>
        <Popover trigger={trigger} dark={false} {...options}>
          <div className="m-6 pr-9">
            <Text>Popup</Text>
            <Button appearance="primary" className="mt-4">
              Click
            </Button>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default {
  title: 'Overlays/Popover/Variants/Theme',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        title: 'Popover',
        noHtml: true,
      },
    },
  },
};
