import * as React from 'react';
import { Button, Menu } from '@/index';

export const splitButton = () => {
  return (
    <div className="d-flex">
      <Button className="mr-2" aria-label="Request review">
        Request review
      </Button>
      <div className="mb-10">
        <Menu trigger={<Menu.Trigger aria-label="Open options menu" />}>
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
        a11yPropsTable: [
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-disabled',
          'aria-expanded',
          'aria-pressed',
          'aria-haspopup',
          'aria-controls',
          'aria-hidden',
          'aria-busy',
          'role',
          'tabIndex',
          'id',
          'title',
        ],
        title: 'Button',
        description: 'Split button.',
        a11yProps: ` **aria-label:** Add \`aria-label='Request review'\` to describe the action of button `,
      },
    },
  },
};
