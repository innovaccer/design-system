import * as React from 'react';
import { action } from '@/utils/action';
import { Button } from '@/index';

// CSF format story
export const All = () => {
  const type = 'button';
  const children = 'Open';

  return (
    <Button type={type} onClick={action('button-clicked')} aria-label="Open">
      {children}
    </Button>
  );
};

export default {
  title: 'Components/Button/Button/All',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` **aria-label:** Add \`aria-label='Open'\` to describe the action of button `,
      },
    },
  },
};
