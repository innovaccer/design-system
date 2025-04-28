import * as React from 'react';
import { Input } from '@/index';
import { action } from '@/utils/action';
import ActionButton from '../../actionButton';

export const actionIcon = () => {
  const customIcon = <Input.ActionButton name="event" onClick={action('Custom action icon')} />;

  return <Input name="input" defaultValue="Custom action icon" actionIcon={customIcon} />;
};

const customCode = `() => {
  const actionIcon = (
    <Input.ActionButton name="event" onClick={() => console.log("Custom action icon")} />
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
  title: 'Components/Input/Input/Variants/Action Icon',
  component: Input,
  subcomponents: { ActionButton },
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
