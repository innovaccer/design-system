import * as React from 'react';
import { Button, Menu } from '@/index';

export const splitButton = () => {
  return (
    <div className="d-flex">
      <Button className="mr-2" aria-label="Request review">
        Request review
      </Button>
      <div className="mb-10">
        <Menu trigger={<Menu.Trigger />}>
          <Menu.List>
            <Menu.Item>Download All</Menu.Item>
            <Menu.Item>Download Selected</Menu.Item>
          </Menu.List>
        </Menu>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Button/Split Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Split button.',
        a11yProps: ` **aria-label:** Add \`aria-label='Request review'\` to describe the action of button `,
      },
    },
  },
};
