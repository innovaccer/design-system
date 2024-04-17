import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Text } from '@/index';

// CSF format story
export const primary = () => {
  const children = 'Login';

  return (
    <div className="d-flex w-50 justify-content-between">
      <div>
        <Button onClick={action('button-clicked')} appearance={'primary'} aria-label="Login">
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'primary'} disabled={true} aria-label="Login">
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'primary'} loading={true} aria-label="Loading">
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Button/State/Primary',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** Add \`aria-label='Login'\` to describe the action of button `,
      },
    },
  },
};
