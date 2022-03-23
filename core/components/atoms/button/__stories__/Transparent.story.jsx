import * as React from 'react';
import Button from '../Button';

export const transparentButton = () => (
  <Button appearance="transparent" aria-label="Re-evaluate">
    Re-evaluate
  </Button>
);

export default {
  title: 'Components/Button/Transparent Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Transparent button.',
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Re-evaluate'\` to describe the action of button 
         `,
      },
    },
  },
};
