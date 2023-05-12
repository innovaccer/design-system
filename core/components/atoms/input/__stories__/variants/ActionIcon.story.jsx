import * as React from 'react';
import { Input, Icon } from '@/index';
import { action } from '@/utils/action';

export const actionIcon = () => {
  const customIcon = <Icon name="events" onClick={action('Custom action icon')} />;

  return <Input name="input" defaultValue="Custom action icon" actionIcon={customIcon} />;
};

const customCode = `() => {
  const actionIcon = (
    <Icon name="events" onClick={() => console.log("Custom action icon")} />
  );

  return (
    <Input
      name="input"
      defaultValue="Custom action icon"
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
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
