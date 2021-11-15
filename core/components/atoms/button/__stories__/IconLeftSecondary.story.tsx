import * as React from 'react';
import Button from '../Button';

export const iconLeftButton = () => (
  <Button icon="get_app" iconAlign="left" aria-label="Download">
    Download
  </Button>
);

export default {
  title: 'Components/Button/Icon Left Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Secondary button with left aligned icon.',
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Download'\` on button to indicate its purpose. 
         `,
      },
    },
  },
};
