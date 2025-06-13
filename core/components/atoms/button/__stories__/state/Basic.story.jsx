import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Text } from '@/index';

// CSF format story
export const basic = () => {
  const children = 'Open';

  return (
    <div className="d-flex w-75 justify-content-between">
      <div>
        <Button onClick={action('button-clicked')} appearance={'basic'} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'basic'} disabled={true} aria-label="Open">
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div>
        <Button onClick={action('button-clicked')} appearance={'basic'} loading={true} aria-label="Loading">
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div>
        <Button
          onClick={action('button-clicked')}
          appearance={'basic'}
          size={'regular'}
          selected={true}
          aria-label="Selected"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Selected</Text>
      </div>
      <div>
        <Button
          onClick={action('button-clicked')}
          appearance={'basic'}
          selected={true}
          icon="event"
          aria-label="Selected"
        />
        <br />
        <Text weight="strong">Selected Icon</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Button/State/Basic',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** Add \`aria-label='Open'\` to describe the action of button `,
      },
    },
  },
};
