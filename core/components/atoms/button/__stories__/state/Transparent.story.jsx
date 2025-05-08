import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Text } from '@/index';

// CSF format story
export const transparent = () => {
  const children = 'Open';

  return (
    <div className="d-flex w-75 justify-content-between">
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} disabled={true} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} loading={true} aria-label="loading">
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'transparent'} selected={true} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Selected</Text>
      </div>
      <div>
        <Button
          onClick={action('button-clicked')}
          appearance={'transparent'}
          selected={true}
          icon="event"
          aria-label="Events"
        />
        <br />
        <Text weight="strong">Selected Icon</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Button/State/Transparent',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** <br/>- Add \`aria-label='Open'\` to describe the action of button.<br/> - Add \`aria-label='Events'\` on button with *event* icon to define its purpose.`,
      },
    },
  },
};
