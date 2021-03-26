import * as React from 'react';
import { Input, Icon } from '@/index';
import { action } from '@storybook/addon-actions';

export const actionIcon = () => {
  const customIcon = (
    <Icon name="events" onClick={action('custom action icon')} />
  );

  return (
    <Input
      name="input"
      actionIcon={customIcon}
    />
  );
};

const customCode = `() => {
  const actionIcon = (
    <Icon name="events" onClick={() => console.log("custom action icon")} />
  );

  return (
    <Input
      name="input"
      actionIcon={actionIcon}
    />
  );
}`;

export default {
  title: 'Components/Input/Variants/Action Icon',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          exclude: ['autocomplete']
        }
      }
    }
  }
};
