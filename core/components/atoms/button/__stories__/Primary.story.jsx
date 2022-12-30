import * as React from 'react';
import Button from '../Button';

export const PrimaryButton = () => (
  <Button appearance="primary" size="regular" aria-label="Submit your response">
    Submit your response
  </Button>
);

export default {
  title: 'Components/Button/Primary Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Primary button',
        a11yProps: ` **aria-label:** Add \`aria-label='Submit your response'\` to describe the action of button `,
      },
    },
  },
};
